const args = require('minimist')(process.argv.slice(2))
console.log(args);

//create a variable and capture the password from the terminal (user input)
var password = args['pass']; // in the future it could be a <text input />
console.log(password);

//create a function to check for password validation (if satements to see if the password is valid)
function checkPasswordValid(){
    if(password === ''){
        //update the UI
        console.log("You can't use an empty password...")
    }else if(password.length < 5){  //if it's just if, then it'll show both you can't use empty passwork & longer than 5 characters
        //update the UI
        console.log("Your password must be longer than 5 characters")
    }

    //if it's over 15 characters -> too many characters
    else if(password.length >15){
        console.log("Your password contains too many characters")
    }
    //if it include '@' -> this is not for your email
    else if(password.includes('@')=== true){
        console.log("This is not for your email")
    }else {
        console.log("Valid Password!");
        checkPasswordMatch();
    }
    //else -> valid password!
};

//create a function to check for password matching (if the password matches a word of your choice)
function checkPasswordMatch(){
    if(password === 'birthday'){
        console.log("You are RIGHT!");
    } else if (checkPasswordValid() = true && password !== 'birthday'){
        console.log("Who are you")
    }
};
//run the function -> from the user inputs all the way to chekcing for a match


