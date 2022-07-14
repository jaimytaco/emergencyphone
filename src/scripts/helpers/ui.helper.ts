import { app } from '@helpers/app.helper'
import paths from '@data/admin/path.data.json' // TODO: Check if this is necessary
import { capitalizeString } from '@helpers/util.helper'
import { createOrder_dialog } from '@data/admin/dialog.data'


import CTable from '@components/table.component'

import orders from '@data/admin/order.data.json'
import MOrders from '@models/orders.model'

import sales from '@data/admin/sale.data.json'
import MSales from '@models/sales.model'


const adminDialogs = (page) => {
    switch (page){
        case 'admin-orders':
            return `${createOrder_dialog}`
        case 'admin-sales':
            return `${createOrder_dialog}`
        default:
            return ''
    }
}

const adminHeader = (actions, currentPage, currentNamePlural) => {
    return `
    <header>
        <nav class="n-top-1">
            <button class="btn btn-logo">
                <picture>
                    <img src="/img/icon/logotype.svg" height="40">
                </picture>
            </button>
            <form>
                <fieldset class="fs-search">
                    <picture>
                        <img src="/img/icon/search.svg" width="16" height="16">
                    </picture>
                    <input type="text" placeholder="Buscar ${currentNamePlural}">
                </fieldset>
            </form>
            <div class="n-t-1-end">
                <div class="split-btn">
                    <span class="sp-popup-trigger btn btn-cart" tabindex="-1">
                        <picture>
                            <img src="/img/icon/cart.svg" width="20" height="20">
                        </picture>
                        <ul class="sp-popup">     
                            <li>
                                <button class="btn" data-create-order-dialog_btn>Registrar orden</button>
                            </li>  
                            <li>
                                <button class="btn">Registrar venta</button>
                            </li>             
                        </ul>
                    </span>
                </div>
                <!--
                <button id="cart_btn" class="btn btn-cart">
                    <picture>
                        <img src="/img/icon/cart.svg" width="20" height="20">
                    </picture>
                </button>
                -->
                <div class="split-btn">
                    <span class="sp-popup-trigger btn btn-auth" tabindex="-1">
                        <span>FD</span>
                        <!--
                        <picture>
                            <img src="/img/icon/user.svg" width="20" height="20">
                        </picture>
                        -->
                        <!-- <span>
                            Fabián Delgado
                            <br>
                            <small>Técnico</small>
                        </span> -->
                        <ul class="sp-popup">
                            <li>
                                <button class="btn">
                                    Cerrar sesión
                                </button>
                            </li>
                        </ul>
                    </span>
                </div>
            </div>
        </nav>
        <nav class="n-top-2">
            <menu class="m-nav">
                ${
                    paths
                        .map((path) => `
                            <a href="/admin/${path.page}" class="btn btn-nav${path.page === currentPage ? ' active' : ''}">
                                <picture>
                                    <img src="/img/icon/${path.icon}.svg" width="20" height="20">
                                </picture>
                                <span>${path.namePlural}</span>
                            </a>
                        `)
                        .join('')
                }
            </menu>
            ${actions}
        </nav>
    </header>
    `
}

export const adminOrders = async (wf) => {
    // const { data: orders, err } = await wf.database.getAll(wf.mode.Offline, 'orders')
    // if (err) throw 'error in orders fetch'

    // TODO: get content from DB
    // const { default: orders } = await import('@data/admin/order.data.json')

    // const { default: { toRow, EOrderStatus, EOrderSorters } } = await import('@models/orders.model')
    // const rows = orders.map(toRow)
    const rows = orders.map(MOrders.toRow)

    // const { default: { render } } = await import('@components/table.component')
    
    // const allStatus = Object.values(EOrderStatus).map((status) => capitalizeString(status)) 
    const allStatus = Object.values(MOrders.EOrderStatus).map((status) => capitalizeString(status)) 
    const filters = [...allStatus]

    // const allSorters = Object.values(EOrderSorters)
    const allSorters = Object.values(MOrders.EOrderSorters)
    const sorters = [...allSorters]

    // const tableHTML = render('Órdenes', rows, filters, sorters)
    const tableHTML = CTable.render('Órdenes', rows, filters, sorters)

    const title = `${app.name} | Órdenes`
    const meta = `
        <meta name="description" content="DESCRIPTION">
        <meta property="og:url" content="OG_URL">
        <meta property="og:type" content="OG_TYPE">
    `
    const body = `
        ${adminHeader(`
            <div class="n-t-actions-2">
                <button class="btn btn-secondary btn-sm" data-create-order-dialog_btn>
                    <picture>
                        <img src="/img/icon/plus-light.svg" width="14" height="14">
                    </picture>
                    <span>Crear orden</span>
                </button>
            </div>
        `, 'orders', 'órdenes')}
        <main>
            ${tableHTML}
        </main>
        ${adminDialogs('admin-orders')}
    `

    return {
        head: { title, meta },
        body
    }
}

export const adminSales = async (wf) => {
    // const { data: sales, err } = await wf.database.getAll(wf.mode.Offline, 'sales')
    // if (err) throw 'error in orders fetch'

    // TODO: get content from DB
    // const { default: sales } = await import('@data/admin/sale.data.json')

    // const { default: { toRow, ESaleStatus, ESaleSorters } } = await import('@models/sales.model')
    // const rows = sales.map(toRow)
    const rows = sales.map(MSales.toRow)

    // const { default: { render } } = await import('@components/table.component')
    
    const allStatus = Object.values(MSales.ESaleStatus).map((status) => capitalizeString(status)) 
    const filters = [...allStatus]

    const allSorters = Object.values(MSales.ESaleSorters)
    const sorters = [...allSorters]

    // const tableHTML = render('Ventas', rows, filters, sorters)
    const tableHTML = CTable.render('Ventas', rows, filters, sorters)

    const title = `${app.name} | Ventas`
    const meta = `
        <meta name="description" content="DESCRIPTION">
        <meta property="og:url" content="OG_URL">
        <meta property="og:type" content="OG_TYPE">
    `
    const body = `
        ${adminHeader(`
            <div class="n-t-actions-2">
                <button id="create-order_btn" class="btn btn-secondary btn-sm">
                    <picture>
                        <img src="/img/icon/plus-light.svg" width="14" height="14">
                    </picture>
                    <span>Crear venta</span>
                </button>
            </div>
        `, 'sales', 'ventas')}
        <main>
            ${tableHTML}
        </main>
        ${adminDialogs('admin-sales')}
    `

    return {
        head: { title, meta },
        body
    }
}