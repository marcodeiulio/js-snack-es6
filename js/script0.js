/* 
# SNACK 0
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/

const cs = (argument) => {
	return console.log(argument);
}

const zucchine = [
	{
		varieta: 'scura',
		peso: 50,
		lunghezza: 15,
	},
	{
		varieta: 'chiara',
		peso: 50,
		lunghezza: 15,
	},
	{
		varieta: 'lunga',
		peso: 80,
		lunghezza: 25,
	},
	{
		varieta: 'corta',
		peso: 25,
		lunghezza: 8,
	},
	{
		varieta: 'curva',
		peso: 40,
		lunghezza: 12,
	},
	{
		varieta: 'nera',
		peso: 90,
		lunghezza: 28,
	},
	{
		varieta: 'ogm',
		peso: 101,
		lunghezza: 32,
	},
	{
		varieta: 'non-ogm',
		peso: 50,
		lunghezza: 16,
	},
	{
		varieta: 'bella',
		peso: 150,
		lunghezza: 40,
	},
	{
		varieta: 'mini',
		peso: 18,
		lunghezza: 4,
	},
];

cs(zucchine);

let pesoTot = 0;
for (let i = 0; i < zucchine.length; i++) {
	const { peso } = zucchine[i];
	pesoTot += peso;
}

cs(pesoTot);