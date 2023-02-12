//cviceni realitka

const apartment = {
	type: 'rent',
	disposition: '3+1',
	area: {
		floorage: 100,
		balcony: 2,
		units: 'sqm',
	},
	city: 'Prague',
	district: 'Old Town',
	price: {
		rent: 28000,
		fees: {
			water: 1000,
			energy: 2500,
			services: 560,
		},
		currency: 'czk',
	},
	ownership: 'personal',
	condition: 'renovated',
	status: 'free',
	floor: 3,
}

let realitkaDispozice = document.querySelector ('.realitkaDispozice')
realitkaDispozice = disposition

let rent = 28000
let water = 1000
let energy = 2500
let services = 560


let cistyNajem = document.querySelector('cistyNajem')
cistyNajem.innerHTML = rent - water - energy - services
//Pomocí tečkové notace vypište do stránky dispozici bytu.
//Vypište do stránky čistý nájem bez poplatků.
//Vypište do stránky celý objekt představující výměru bytu.
//Pomocí destrukturování si do separátních proměnných uložte město a městskou část. Vypište je do stránky.
//Změnte stav inzerátu z 'free' na 'taken'.







//const kniha1 = {
    //name: 'Moje kniha',
    //author: 'Nějaký autor',
    //pages: 425,
    //vydavatel: 'nějaký vydavatel',
    //vydavatelAddress: 'nějaká adresa',
    //rokVydani: 2001,}

//cvičení očkování

//let vstupJmeno: prompt ('Jméno')
//let vstupVek: Number('Věk')

//const person = {
//name: vstupJmeno,
//vek: vstupVek,}

//let nadpis =document.querySelector ('h1')
//nadpis.innerText = person.name + ' ' + person.vek