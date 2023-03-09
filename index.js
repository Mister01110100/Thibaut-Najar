const tabchiffre = [1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i < tabchiffre.length; i++){
    console.log(tabchiffre[i])
 }

const tabsemaine = ['lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche']
console.log(tabsemaine[0])

const tabchiffrepair = [2,4,6,8,10]
let somme = tabchiffrepair[0]
console.log(somme)

for (let i = 1; i < tabchiffrepair.length; i++){
   somme = somme + tabchiffrepair[i]
}
console.log(somme)


const tabfruit = ['pomme','fraise','mangue','framboise','orange']
tabfruit.push('citron')
console.log(tabfruit)

const tabnote = [15,5,8,9,16]
let somme = tabnote
for (let i = 1; i < tabnote.length; i++){
   somme = somme + tabnote[i]
}
