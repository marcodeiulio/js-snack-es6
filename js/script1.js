/* 
# Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
|BONUS
Stampare in pagina oltre che in console! 
*/

const cs = (argument) => {
	return console.log(argument);
}
const ct = (argument) => {
	return console.table(argument);
}

const bikes = [
	{ nome: 'Alchemy Bikes', peso: 500 },
	{ nome: 'Carrera Bicycles', peso: 550 },
	{ nome: 'CIOCC', peso: 450 },
	{ nome: 'Cipollini', peso: 680 },
	{ nome: 'Rotwild', peso: 900 },
];

const pesi = [];
for (let i = 0; i < bikes.length; i++) {
	const { peso } = bikes[i];
	pesi.push(peso);
}
ct(pesi);

const min = Math.min(...pesi);
cs(min);

for (let i = 0; i < bikes.length; i++) {
	if (bikes[i].peso === min) console.log(`La marca che costruisce la bici di minor peso è ${bikes[i].nome}, con un peso pari a ${min}g.`);
}