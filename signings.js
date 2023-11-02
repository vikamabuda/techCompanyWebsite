const form = document.getElementById('signin');
const uname = document.getElementById('username');
const password = document.getElementById('password');
// Function to set an error message
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

// Function to set a success message
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const validateUsername = () => {
    const unameValue = uname.value.trim();

    if (unameValue === '') {
        setError(uname, 'Username is required');
    } else {
        setSuccess(uname);
        }
};
// Function to validate password
const validatePassword = () => {
    const passwordValue = password.value.trim();
    const re = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[\w!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/;


    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if(!re.test(String(passwordValue).toLowerCase())) {
        setError(password, 'Password must contain letters,numbers and special characters');

    }else if (passwordValue.length < 8) {
        setError(password, 'Password should be at least 8 characters long');
    } else {
        setSuccess(password);
    }
};
form.addEventListener('submit', e => {
    e.preventDefault();

    validateUsername();
    validatePassword();

    if (!form.querySelector('.input-control.error')) {
        // Retrieve stored username and password from local storage
        const storedUsername = localStorage.getItem('registeredUsername');
        const storedPassword = localStorage.getItem('registeredPassword');

        // Compare entered credentials with stored values
        const enteredUsername = uname.value.trim();
        const enteredPassword = password.value.trim();

        if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
            // Sign-in successful, show an alert
            alert('Signin successful! Click OK to go to the Booking page.');

            // Redirect to the booking page after clicking OK
            window.location.href = 'bookings.html';
        } else {
            // Sign-in failed, display an error message
            setError(uname, 'Invalid credentials. Enter valid username.');
            setError(password, 'Invalid credentials. Enter valid password.');
        }
    }
});
uname.addEventListener('input', () => {
    clearError(uname);
});
password.addEventListener('input', () => {
    clearError(password);
});

const validateInputs = () => {
    
    const unameValue = uname.value.trim();
    const passwordValue = password.value.trim();

    return (
        unameValue!=='' &&
        passwordValue !== '' &&
        passwordValue.length >= 8 
    );
};
// Function to clear the form and styles
const clearForm = () => {
    // Clear all input fields
    
    uname.value = '';
    
    password.value = '';
    

    // Clear success/error styles
    
    setSuccess(uname);
    
    setSuccess(password);
    
};
// Function to clear the error message
const clearError = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.remove('error');
}