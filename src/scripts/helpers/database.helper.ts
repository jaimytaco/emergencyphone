export const DB_CREDENTIALS = {
    apiKey: "AIzaSyBgHfhl4LDM82e6J1Fq76HAsArGK7nTdms",
    authDomain: "emergencyphone-11968.firebaseapp.com",
    projectId: "emergencyphone-11968",
    storageBucket: "emergencyphone-11968.appspot.com",
    messagingSenderId: "103394936209",
    appId: "1:103394936209:web:12208f21d4386a7d7a0630"
}

export const ordersLoader = async (wf) => {
    const { data: orders, err } = await wf.database.getAll(wf.mode.Network, 'orders')
    if (err) throw 'error in orders fetch'
    return orders
}