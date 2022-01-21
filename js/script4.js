/* 
# SNACK 4
Abbiamo un elenco degli studenti di una facoltà, identificati da id, nome e somma totale dei loro voti di esame...
1. dobbiamo creare una lista contenente delle targhe (stringhe) con il loro nome in maiuscolo
ES (marco de iulio => Marco de iulio);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
BONUS  nei nomi sulle targhe l'iniziale di ogni parola deve essere maiuscola
ES.: (marco de iulio  => Marco De Iulio)
*/

const students = [
	{ id: 234, name: 'marco de iulio', grade: 94 },
	{ id: 296, name: 'chiara casadei', grade: 110 },
	{ id: 253, name: 'lorenzo caselli', grade: 110 },
	{ id: 119, name: 'capretto urlante', grade: 61 },
];

// #1
const names = students.map((student) => {
	return student.name.charAt(0).toUpperCase() + student.name.substring(1).toLowerCase();
})
console.log(names);

// #2
const bestStudents = students.filter((student, index) => {
	if (student.grade > 70) return student;
})

console.log('The best students are: ');
console.log(bestStudents);

// #3
const greaterStudents = students.filter((student) => {
	if (student.grade > 70 && student.id > 120) return student;
});
console.log('The students with grade > 70 and id > 120 are: ');
console.log(greaterStudents);