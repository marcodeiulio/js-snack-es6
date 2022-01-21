/* 
# SNACK 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array visti oggi in classe.
*/

const names = ['Diego Bianchi', 'Andrea Pennacchi', 'Geralt di Rivia', 'Yennefer di Vengerberg', 'Francesco Costa', 'Alessandro Masala'];

// # Soluzione con forEach
/* const selector = (array, min, max) => {
	selectedArray = [];
	array.forEach((item, index) => {
		if (index >= min && index <= max) selectedArray.push(item);
	});
	return selectedArray;
} */

// # Soluzione con .filter()
const selector = (array, min, max) => {
	const selectedArray = array.filter((item, index) => (index >= min && index <= max));
	return selectedArray;
}

console.log(selector(names, 2, 5));