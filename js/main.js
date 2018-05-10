
// this is a variable contains prompt which asks the user's first name
var firstName = prompt ('First Name?');

// this is a variable contains prompt which asks the user's last name
var lastName = prompt ('Last Name?');

// this is a variable contains prompt which asks the user's age
var userAge = prompt ('What is your age?')

// creates an alert message after entering the prompts.
alert ('Hello,' + ' ' + firstName + ' ' + lastName + '!')

// tried this for loops but it did not work!!?? 
// for ( var userAge=0; userAge<120; userAge=userAge+1){

// 	console.log([userAge*12]); 
// }

// after the alert message the web page reads below sentence which contains a simple multiplication to calculate the user's age in months and days.
document.write ('You ' + 'are ' + [userAge*12] + ' months,' + ' or ' + [userAge*365] + ' days ' + 'old!');