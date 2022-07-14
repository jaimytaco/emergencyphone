import { capitalizeString } from '@helpers/util.helper'

enum EOrderStatus{
    registered = 'registrado',
    reparing = 'en reparación',
    delivered = 'entregado'
}

enum EOrderSorters{
    byCode = 'Por código', 
    byStatus = 'Por estado', 
    byProduct = 'Por producto', 
    byClient = 'Por cliente'
}

enum EOrderActions{
    administrate = {
        title: 'Administrar',
        details: [
            'Editar orden', 
            'Eliminar orden'
        ]
    },
    print = {
        title: 'Imprimir',
        details: [
            'Imprimir sticker', 
            'Imprimir ticket', 
            'Imprimir presupuesto', 
            'Imprimir factura'
        ]
    }
}

interface IOrder{
    id: string,
    client: string,
    code: string,
    products: string[],
    status: string,
    technician: string
}

const toRow = (order: IOrder) => {
    return {
        tags: [order.code, capitalizeString(order.status)],
        heading: order.products.join(','),
        details: [
            {
                description: order.client
            },
            {
                icon: 'repair.svg',
                description: order.technician
            }
        ],
        icon: 'order.svg',
        actions: EOrderActions
    }
}

export default{
    collection: 'orders',
    toRow,
    EOrderStatus,
    EOrderSorters
}