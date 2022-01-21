/* 
# Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
|BONUS
Stampare in pagina oltre che in console! 
*/

//# Functions
const createElement = (domId, tag, text) => {
	const element = document.getElementById(domId);
	const tagElement = document.createElement(tag);
	tagElement.append(text);
	element.appendChild(tagElement);
}

//# Program
const bikes = [
	{ name: 'Alchemy Bikes', weight: 500 },
	{ name: 'Carrera Bicycles', weight: 550 },
	{ name: 'CIOCC', weight: 450 },
	{ name: 'Cipollini', weight: 680 },
	{ name: 'Rotwild', weight: 900 },
];

let lightestBike = 0;
bikes.forEach((bike) => {
	const { weight } = bike;
	if (lightestBike === 0) lightestBike = weight;
	else if (weight < lightestBike) lightestBike = weight
})
console.log(lightestBike);

let bikeName;
bikes.forEach((bike) => {
	if (bike.weight === lightestBike) bikeName = bike.name;
});
console.log(bikeName);

const bikeAnnounce = `The lightest bike is ${bikeName} and it weights ${lightestBike}g.`

createElement('bikes', 'h3', bikeAnnounce);