interface IRow{
    tags: string[]
    heading: string
    detail: string
    icon: string,
    actions: T
}

const renderRowTags = (tags) => {
    if (!tags.length) return ''
    return `
        <div class="card-2-group">
        ${
            tags
                .map((tag) => `<h6 class="card-2">${tag}</h6>`)
                .join('')
        }
        </div>
    `
}

// TODO: render row by model
const renderRows = (rows: IRow[]) => {
    if (!rows.length) return '' // TODO: empty table
    return `
    ${
        rows
            .map((row) => `
                <div class="t-row">
                    <div class="t-r-details">
                        <div class="card-1">
                            <!--
                            <picture class="c-1-icon">
                                <img src="/img/icon/${row.icon}" width="40" height="40">
                            </picture>
                            -->
                            <div class="c-1-detail">
                                ${renderRowTags(row.tags)}
                                <h6>${row.heading}</h6>
                                ${
                                    row.details
                                        .map((detail) => `
                                            <p>
                                                ${detail.icon ? 
                                                    `
                                                    <picture>
                                                        <img src="/img/icon/${detail.icon}" width="14" height="14">
                                                    </picture>
                                                    ` : ''
                                                }
                                                <span>${detail.description}</span>
                                            </p>
                                        `)
                                        .join('')
                                }
                            </div>
                        </div>
                    </div>
                    <div class="t-r-actions t-r-actions-desktop">
                        <div class="split-btn sp-secondary">
                            <span class="sp-label btn">${row.actions.administrate.title}</span>
                            <span class="sp-popup-trigger btn" tabindex="-1">
                                <picture>
                                    <img src="/img/icon/chevron-down-sm-light.svg" width="14" height="14">
                                </picture>
                                <ul class="sp-popup">
                                    ${
                                        row.actions.administrate.details
                                            .map((detail) => `
                                                <li>
                                                    <button class="btn">${detail}</button>
                                                </li>
                                            `)
                                            .join('')
                                    }
                                </ul>
                            </span>
                        </div>
                        <div class="split-btn sp-bordered">
                            <span class="sp-label btn">${row.actions.print.title}</span>
                            <span class="sp-popup-trigger btn" tabindex="-1">
                                <picture>
                                    <img src="/img/icon/chevron-down-sm.svg" width="14" height="14">
                                </picture>
                                <ul class="sp-popup">
                                    ${
                                        row.actions.print.details
                                            .map((detail) => `
                                                <li>
                                                    <button class="btn">${detail}</button>
                                                </li>
                                            `)
                                            .join('')
                                    }
                                </ul>
                            </span>
                        </div>
                    </div>
                    <div class="t-r-actions t-r-actions-mobile">
                        <div class="split-btn">
                            <span class="sp-popup-trigger btn" tabindex="-1">
                                <picture>
                                    <img src="/img/icon/more-vertical.svg" width="14" height="14">
                                </picture>
                                <ul class="sp-popup">
                                    <li>
                                        <button class="btn" data-show-table-extra_id="id-registered"
                                            data-show-table-extra_id-close="Ocultar pedido"
                                            data-show-table-extra_id-open="Ver pedido">Ver pedido</button>
                                    </li>  
                                    ${
                                        [...row.actions.administrate.details, ...row.actions.print.details]
                                            .map((detail) => `
                                                <li>
                                                    <button class="btn">${detail}</button>
                                                </li>
                                            `)
                                            .join('')
                                    } 
                                </ul>
                            </span>
                        </div>
                    </div>
                </div>
            `)
            .join('')
    }
    <div class="t-row t-r-last"></div>`
}

const render = (heading, rows, filters, sorters) => {
    // TODO: split-btn component render
    return `
        <section class="s-table">
            <header>
                <h1>${heading}</h1>
                <div class="s-t-h-actions">
                    <div class="split-btn">
                        <span class="sp-popup-trigger btn btn-underline" tabindex="-1">
                            <picture>
                                <img src="/img/icon/filter.svg" width="16" height="16">
                            </picture>
                            <span>Filtrar por</span>
                            <ul class="sp-popup">
                                ${
                                    filters
                                        .map((filter) => `
                                            <li>
                                                <button class="btn">${filter}</button>
                                            </li>
                                        `)
                                        .join('')
                                }
                            </ul>
                        </span>
                    </div>
                    <div class="split-btn">
                        <span class="sp-popup-trigger btn btn-underline" tabindex="-1">   
                            <picture>
                                <img src="/img/icon/sort.svg" width="16" height="16">
                            </picture>
                            <span>Ordenar por</span>
                            <ul class="sp-popup">
                                ${
                                    sorters
                                        .map((sorter) => `
                                            <li>
                                                <button class="btn">${sorter}</button>
                                            </li>
                                        `)
                                        .join('')
                                }
                            </ul>
                        </span>     
                    </div>
                </div>
            </header>
            <div class="s-t-body">
                ${renderRows(rows)}
            </div>
        </section>
    `
}

export default {
    render
}