
const myStack = new StackDataStructure

let addButton = document.getElementById('addBtn')
let takeButton = document.getElementById('takeBtn')
let inputCamp = document.getElementById('input')
let arrP = document.getElementsByTagName('p')
console.log(arrP) //hagon esto y veo que está cogida
addButton.onclick = () => {
myStack.push(inputCamp.value)
console.log(myStack.stackControl) // Va ok
// let reverse = myStack.stackControl.reverse()
// console.log(reverse)
let insertMe = myStack.stackControl.indexOf(inputCamp.value)
console.log(insertMe) // ok entra
arrP[7-insertMe].innerHTML = inputCamp.value
arrP[7-insertMe].className = 'blueCamp'

}