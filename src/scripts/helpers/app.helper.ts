import {
    adminOrders,
    adminSales
} from '@helpers/ui.helper'

import {
    ordersLoader
} from '@helpers/database.helper'

import {
    fonts,
    images,
    scripts,
    styles,
    routes,
} from '@helpers/sw.helper'

export const app = {
    name: 'Emergency Phone',
    code: 'emergencyphone',
    ui: {
        'admin-orders': {
            pathname: '/admin/orders',
            builder: adminOrders,
            pattern: '/admin/orders{/}?'
        },
        'admin-sales': {
            pathname: '/admin/sales',
            builder: adminSales,
            patter: '/admin/sales{/}?'
        }
    },
    loaders: {
        'orders': ordersLoader
    },
    sw: {
        cache: {
            version: 1,
        },
        static: [
            ...fonts,
            ...images,
            ...scripts,
            ...styles,
            ...routes,
        ]
    }
}

export const initApp = async () => {
    const { SW_VERSION } = await import('@wf/workers/sw.worker')
    const { getBodyPage } = await import('@helpers/util.helper')
    const { default: CDialog } = await import('@components/dialog.component')
    const { configCreateOrderDialog } = await import('@helpers/util.helper')

    const { registerSW } = await import('@wf/actors/pwa.actor')

    registerSW()

    const { 
        registerNetworkDB,
        registerOfflineDB,
        updateOfflineDB,
        wf
    } = await import('@wf/lib.worker')

    const { default: networkDB } = await import('@wf/services/firebase.service')
    const { default: offlineDB } = await import('@wf/services/indexedDb.service')

    await registerNetworkDB(networkDB)
    await registerOfflineDB(offlineDB, app.code, app.loaders)
    
    const { isServiceWorkerRunning } = await import('@wf/helpers/browser.helper')
    if (!isServiceWorkerRunning()) await updateOfflineDB(app.loaders)

    const { data: ordersNetwork } = await wf.database.getAll(wf.mode.Network, 'orders')
    console.log('ordersNetwork =', ordersNetwork)

    const { data: ordersOffline } = await wf.database.getAll(wf.mode.Offline, 'orders')
    console.log('ordersOffline =', ordersOffline)
    

    switch (getBodyPage()) {
        case 'admin-orders':
            CDialog.init('create-order_dialog')
            configCreateOrderDialog('create-order_dialog')
            break
    }
}