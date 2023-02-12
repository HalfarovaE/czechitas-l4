// tady je místo pro náš program
//const address = 'Pod Kaštany 31, 123 11 Horní Dlouhonosy'

const address = {
    
    streetName: 'Pod Kaštany',
    number: 31,
    city: 'Horní Dlouhonosy',
    postalCode: '123 11',   
}

//let vstupUzivatel = prompt ('Zadej správné číslo domu:')
//address.number = Number(vstupUzivatel);

const user1 = {
    fullName: 'Lubomír Mrkvička',
    login: 'lubos',
    address: {
        streetName: 'Pod Kaštany',
        number: 31,
        city: 'Horní Dlouhonosy',
        postalCode: '123 11',   
    },
    cartItems: 1,
}

// destrukturování
const product = {
    nazev: 'Mlýnek na kávu',
    cena: 520,
    currency: 'Kč',
}

const { name, price, currency } = product

//const name = product.name
//const price = product.price
//const currency = product.currency

//let newName = product.name - možnost jak přejmenovat konstantu
//let { name, price, currency } = product

