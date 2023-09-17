function validateEmail(email) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
}

console.log(validateEmail("user@example.com")); 
console.log(validateEmail("invalid-email")); 
