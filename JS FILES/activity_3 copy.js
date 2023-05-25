let students = ['Elen','Sam','Piolo','Dingdong', 'Pia', 'Barbie', 'Jessie', 'Luis', 'Robbie', 'Marian'];

for(let x=0;x<students.length;x++) {
    console.log(students[x]);
}
const stud = students.splice(students.indexOf('Robbie'),1);
console.log(students, '\n');

console.log('Pia is located at index: ' + students.indexOf('Pia \n'));

students.push('Allen');
console.log(students,'\n');

let gals = students.filter(function(bName){
    return bName !== 'Piolo' && bName !== 'Dingdong' && bName !== 'Luis' && bName !== 'Allen'
});
console.log('These are the names of the girls in the class:\n ' + gals);
