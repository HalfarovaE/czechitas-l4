const title = "Harry Potter a kámen mudrců"

console.log(title)
console.log(title.length)
console.log(title.toUpperCase('Harry Potter a kámen mudrců'))
console.log(title.slice(0,5))
console.log(title.slice(-5))


const title1 = "Sedmero krkavců"

console.log(title1)
console.log(title1.length)
console.log(title1.toUpperCase('Sedmero krkavců'))
console.log(title1.slice(0,5))
console.log(title1.slice(-5))

const title2 = "Popelka"

console.log(title2)
console.log(title2.length)
console.log(title2.toUpperCase('Popelka'))
console.log(title2.slice(0,5))
console.log(title2.slice(-5))


const title3 = "Sedm"

console.log(title3)
console.log(title3.length)
console.log(title3.toUpperCase('Popelka'))
console.log(title3.slice(0,5))
console.log(title3.slice(-5))


const email = prompt ("Jaký je Tvůj email?");

const atIndex = email.indexOf('@');

const rozdelenyEmail = {
	userName: email.slice(0, atIndex),
	domain: email.slice (atIndex + 1),
}

document.body.innerHTML = '<p>Jméno uživatele: ' + rozdelenyEmail.userName + '</p>';
document.body.innerHTML += '<p>Doména uživatele: ' + rozdelenyEmail.domain + '</p>';
