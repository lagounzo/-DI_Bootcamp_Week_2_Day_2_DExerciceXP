// Exercice 1 : Instruction If/Else Simple

// Créez 2 variables, x et y. Chacun d'eux doit avoir une valeur numérique différente.
// Écrivez une instruction if/else qui vérifie quel nombre est le plus grand.

let x = 5
let y = 2

if (x > y){
    console.log("x is biggest number")

} else{

    console.log("y is smoller")
}


////////////////////////////////////////////////

// Exercice 2 : Chihuahua


// Create a variable called newDog where it’s value is “Chihuahua”.

let newDog = "Chihuahua"

// Check and display how many letters are in newDog.

console.log(newDog.length)
// Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).

console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())

// Check if the variable newDog is equal to “Chihuahua”
// if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// else, console.log ‘I dont care, I prefer cats’

if ( newDog === "Chihuahua"){
    console.log("J'adore les chihuahuas, c'est ma race de chien préférée")
} else {
    console.log("je m'en fous, je préfère les chats" )
}


/////////////////////////////////////////////////////////////

// Exercise 3: Even Or Odd


// Instructions
// Prompt the user for a number and save it to a variable.
let userNumber = prompt("please enter a number")


// Check whether the variable is even or odd.

if (Number(userNumber) % 2 === 0 ){
    console.log(userNumber + " is an even number ")

}else {
    console.log(userNumber + " is an odd number ")
}



// If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.




/////////////////////////////////////////////////////////////////////////

// Exercise 4: Group Chat

// Instructions
// Below is an array of users that are online in a group chat.

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

// Using the array above, console.log the number of users that are connected to the group chat based on the following rules:
// If there is no users (the users array is empty), console.log “no one is online”.

if (users.length == 0) {
    console.log(" no one is online ")
} else

// If there is 1 user, console.log “<name_user> is online”.

if (users.length == 1) {
    console.log(users[0] + " is online ")
} else

// If there are 2 users, console.log “<name_user1> and <name_user2> are online”.

if (users.length == 2) {
    console.log(users[0] + "and" + users[1] + " is online " )
} else 

// If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
// For example, if there are 5 users, it should display

if (users.length > 2) {

    let usersOther = users.slice(2)
    console.log(users[0] + "," +  users[1] + "," + usersOther.length + " and  all online") 
}