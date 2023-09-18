// Challenge: Write a function that takes a password as input and returns true if it meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one number and one special character.

function validatePassword(password) {
    // Define a regular expression pattern to check the password.
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
 
    // Use the test method of the regular expression to check if the password matches the pattern.
    return pattern.test(password);
 }

 console.log(validatePassword("P@ssw0rd")); 
 console.log(validatePassword("abc123"));   
 console.log(validatePassword("Password1"));
 