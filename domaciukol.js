const title = "Harry Potter a kámen mudrců"

console.log(title)
console.log(title.length)
console.log(title.toUpperCase('Harry Potter a kámen mudrců'))
console.log(title.slice(0,5))
console.log(title.slice(22,27))


const email = prompt ("Jaký je Tvůj email?");

const atIndex = email.indexOf('@');

const rozdelenyEmail = {
	userName: email.slice(0, atIndex),
	domain: email.slice (atIndex + 1),
}

document.body.innerHTML = '<p>Jméno uživatele: ' + rozdelenyEmail.userName + '</p>';
document.body.innerHTML += '<p>Doména uživatele: ' + rozdelenyEmail.domain + '</p>';
