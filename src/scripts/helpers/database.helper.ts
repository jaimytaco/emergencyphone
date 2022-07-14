export const ordersLoader = async (wf) => {
    const { data: orders, err } = await wf.database.getAll(wf.mode.Network, 'orders')
    if (err) throw 'error in orders fetch'
    return orders
}