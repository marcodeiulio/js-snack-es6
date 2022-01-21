/* 
# Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine, usando la destrutturazione, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
| BONUS
Stampare in pagina oltre che in console!
*/

//# Functions
const cs = (argument) => {
	return console.log(argument);
}
const ct = (argument) => {
	return console.table(argument);
}

const randNum = (min, max) => {
	return Math.floor(Math.random() * max - min + 1) + min;
}

const createElement = (domId, tag, text) => {
	const element = document.getElementById(domId);
	const tagElement = document.createElement(tag);
	tagElement.append(text);
	element.appendChild(tagElement);
}

//# Program
const teams = [
	{ name: 'Bayern Monaco', pts: 0, foulsDrawn: 0 },
	{ name: 'AFC Richmond', pts: 0, foulsDrawn: 0 },
	{ name: 'Sassuolo', pts: 0, foulsDrawn: 0 },
	{ name: 'Atalanta', pts: 0, foulsDrawn: 0 },
];

for (let i = 0; i < teams.length; i++) {
	teams[i].pts = randNum(0, 25);
	teams[i].foulsDrawn = randNum(0, 10);
}
ct(teams);

createElement('teams', 'h1', 'Teams Fouls Drawn');


const teamsFouls = [];
for (let i = 0; i < teams.length; i++) {
	const { name, foulsDrawn } = teams[i];
	teamsFouls.push({ name, foulsDrawn });
	createElement('teams-list', 'li', `${teamsFouls[i].name}: ${teamsFouls[i].foulsDrawn}`);
}

ct(teamsFouls);