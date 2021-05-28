//let userName = 'Spenser'
//userName = 'Tom'
//console.log(userName)

let userName = prompt('Please Enter Your Name: ');
console.log(userName);
document.write('<h2>' + userName+ '</h2>');

let userAnswer = prompt('Do you like Coffee?');
console.log(userAnswer);

if (userAnswer == 'yes') {
    document.write('<h3>Welcome ' + userName + '</h3>');
} else {
    document.write('<h3>' + userName +' please leave!</h3>');
}