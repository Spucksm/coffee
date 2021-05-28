//let userName = 'Spenser'
//userName = 'Tom'
//console.log(userName)
    let userName = prompt('Please Enter Your Name: ');
function UserName(){
    
    console.log(userName);
        document.write('<h2>' + userName+ '</h2>');
}


function likecoffee(){
    let userAnswer = prompt('Do you like Coffee?');
    console.log(userAnswer);

    if (userAnswer == 'yes') {
        document.write('<h3>Welcome ' + userName + '</h3>');
    } else {
        document.write('<h3>' + userName +' please leave!</h3>');
    }
}

function againstcoffee(){
    let areyouagainstcoffee = prompt('Are you against coffee')

    if (areyouagainstcoffee == 'no'){
        document.write('<h3> It is so good</h3>');
        document.write('<img src="https://image.freepik.com/free-vector/yum-text-with-emoticon_110464-498.jpg" alt="yum face">')
    } else {
        document.write('<h3> I think you should drink coffee</h3>');
    }
}


function numbercoffee() {
    correctAnswer = Math.floor(Math.random() * 10) + 1;
    console.log(correctAnswer)
    userAttempts = 6;
    for(let i = 0; i < userAttempts; i++){
        let userGuess = prompt('Please Enter a Number 1 - 10');
        while(userGuess < 1 || userGuess > 10){
            userGuess = prompt('Wrong Range.  Please Enter a Number 1 - 10');
        }
        if (userGuess == correctAnswer){
            alert('You got it right!');
            break;
        } else if(userGuess < correctAnswer){
            alert('To Low.  Try Again.')
        }  else if (userGuess > correctAnswer) {
            alert('To High.  Try Again.')
        } else {
            alert('Something Else Went Wrong.');
        }
        console.log(i);
        if (i == userAttempts - 1){
            alert('You did not win.  Correct Anser is: ' + correctAnswer);
        }
    }
}