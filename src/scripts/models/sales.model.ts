import { capitalizeString } from '@helpers/util.helper'

enum ESaleStatus{
    registered = 'registrado',
}

enum ESaleSorters{
    byCode = 'Por código', 
    byPaymentType = 'Por forma de pago',
    byClient = 'Por cliente',
    byTotal = 'Por monto de venta',
    byCreationDate = 'Por fecha de registro',
    bySaler = 'Por comprador',
}

enum ESaleActions{
    administrate = {
        title: 'Administrar',
        details: [
            'Editar venta', 
            'Eliminar venta'
        ]
    },
    print = {
        title: 'Imprimir',
        details: [
            'Imprimir factura'
        ]
    }
}

interface ICoin{
    symbol: string,
    name: string
}

interface IPayment{
    type: string
    subtotal: number,
    tax: number,
    discount: number,
    total: number,
    coin: ICoin
}

interface ISale{
    id: string,
    client: string,
    code: string,
    payment: IPayment,
    products: string[],
    saler: string,
    createdAt: string,
}

const toRow = (sale: ISale) => {
    return {
        tags: [sale.code, capitalizeString(sale.payment.type)],
        heading: sale.client,
        details: [
            {
                // icon: 'money.svg',
                description: `Venta de ${sale.payment.coin.symbol} ${sale.payment.total}`
            },
            {
                icon: 'calendar.svg',
                description: `Registrado el ${sale.createdAt}`
            },
            {
                icon: 'user.svg',
                description: `Vendido por ${sale.saler}`
            }
        ],
        icon: 'sale.svg',
        actions: ESaleActions
    }
}

export default{
    collection: 'sales',
    toRow,
    ESaleStatus,
    ESaleSorters
}