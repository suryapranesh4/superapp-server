module.exports.validateRegisterInput = (
    username,
    email,
    password,
    confirmPassword
) => {
    const errors = {};
    if (username.trim() === '') {
        errors.username = 'Username must not be empty';
    }
    if (email.trim() === '') {
        errors.email = 'Email must not be empty';
    } 
    // else {
    //     const isEmailValid = mail => /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+$/.test(mail);
    //     console.log(isEmailValid(email));
    //     if (!(isEmailValid(email))) {
    //         errors.email = 'Email must be a valid email address';
    //     }
    // }
    if (password === '') {
        errors.password = 'Password must not empty';
    } 
    else if (password !== confirmPassword) {
        errors.confirmPassword = 'Passwords must match';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
}

module.exports.validateLoginInput = (username, password) => {
    const errors = {};
    if (username.trim() === '') {
      errors.username = 'Username must not be empty';
    }
    if (password.trim() === '') {
      errors.password = 'Password must not be empty';
    }
  
    return {
      errors,
      valid: Object.keys(errors).length < 1
    };
};