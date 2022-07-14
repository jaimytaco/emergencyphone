export const capitalizeString = ([first, ...rest]) => `${first.toUpperCase()}${rest.join('')}`

export const getBodyPage = () => document.body.getAttribute('data-page')

export const getDOMElement = (parent, query, mode: 'all' | undefined) => { 
    const el = parent[`querySelector${mode ? 'All' : ''}`](query)
    if (!el) throw `'${query}' query not found in '${parent.id || parent.className}' parent element` 
    return el
}

export const configCreateOrderDialog = async (dialogId) => {
    const dialog = getDOMElement(document, `#${dialogId}`)
    const createOrderBtns = getDOMElement(document, '[data-create-order-dialog_btn]', 'all')
    const searchCustomerBtn = getDOMElement(dialog, '[data-search-customer]')
    const step1Form = getDOMElement(dialog, '#create-order-step-1_form')
    const selectCustomerStep2Form = getDOMElement(dialog, '#create-order-select-customer-step-2_form')
    const step3Form = getDOMElement(dialog, '#create-order-device-detail-step-3_form')
    const step4Form = getDOMElement(dialog, '#create-order-device-failure-step-4_form')
    const step5Form = getDOMElement(dialog, '#create-order-confirmation-step-5_form')

    const { default: CDialog } = await import('@components/dialog.component')

    createOrderBtns?.forEach((createOrderBtn) => createOrderBtn.onclick = () => {
        CDialog.handle('create-order_dialog', 'add')
        step1Form.classList.add('active')
    })

    if (searchCustomerBtn) searchCustomerBtn.onclick = () => {
        step1Form.classList.remove('active')
        selectCustomerStep2Form.classList.add('active')
    }

    if (selectCustomerStep2Form) selectCustomerStep2Form.onsubmit = (e) => {
        e.preventDefault()

        // TODO: select-customer for create-order logic

        selectCustomerStep2Form.classList.remove('active')
        step3Form.classList.add('active')
    }

    if (step3Form) step3Form.onsubmit = (e) => {
        e.preventDefault()

        // TODO: device-detail for create-order logic

        step3Form.classList.remove('active')
        step4Form.classList.add('active')
    }

    if (step4Form) step4Form.onsubmit = (e) => {
        e.preventDefault()

        // TODO: device-failure for create-order logic

        step4Form.classList.remove('active')
        step5Form.classList.add('active')
    }

    if (step5Form) step5Form.onsubmit = (e) => {
        e.preventDefault()

        // TODO: confirmation for create-order logic

        step1Form.classList.remove('active')
        selectCustomerStep2Form.classList.remove('active')
        step3Form.classList.remove('active')
        step4Form.classList.remove('active')
        step5Form.classList.remove('active')

        step1Form.reset()
        selectCustomerStep2Form.reset()
        step3Form.reset()
        step4Form.reset()
        step5Form.reset() 

        CDialog.handle('create-order_dialog', 'remove')
    }
}