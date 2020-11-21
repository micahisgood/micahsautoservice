'use strict'

function askUserNameQuestion(){
    var userName = prompt('enter your name?');
    document.write(userName);
}

function askUserNameQuestion(){
    var questionAnswer = prompt('do you own domestic or international?')
    document.write(questionAnswer);
}

    if (userName === 'lord of the manner'){
    document.write(`Welcome Honored Guest + {userName}`)
    } else {
    document.write(`Welcome + {userName}`);
    
} 



var askUserNameQuestion2= confrim('how long have you owned it?');
if (confirmAnswer){
    alert('domestic or international');
} else {
    alert('we are experts in both!')
}

var userName1 = askUserNameQuestion();
console.log(userName1);

if (userName1=== 'international'){
    document.write('Welcome international'+ userName1)
} else {
    document.write('Welcome Domestic' + userName1);
}
