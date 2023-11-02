
   
const form = document.getElementById('contact');
const fname = document.getElementById('fullname');
const uname = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
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

// Function to validate full name
const validateFullName = () => {
    const nameValue = fname.value.trim();

    if (nameValue === '') {
        setError(fname, 'Full Name is required');
    } else {
        setSuccess(fname);
        }
};
const validateUsername = () => {
    const unameValue = uname.value.trim();

    if (unameValue === '') {
        setError(uname, 'Username is required');
    } else {
        setSuccess(uname);
        }
};
// Function to validate email
const validateEmail = () => {
            const emailValue = email.value.trim();
            const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.(com|co\.za|ac\.za|org\.za)$/i;

            if (emailValue === '') {
                setError(email, 'Email is required');
            } else if (!re.test(String(emailValue).toLowerCase())) {
                setError(email, 'Provide a valid email address');
            } else {
                setSuccess(email);
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

        // Function to validate confirm password
        const validateConfirmPassword = () => {
            const passwordValue = password.value.trim();
            const password2Value = password2.value.trim();

            if (password2Value === '') {
                setError(password2, 'Please confirm password');
            } else if (password2Value !== passwordValue) {
                setError(password2, "Passwords don't match");
            } else {
                setSuccess(password2);
            }
        };

          // Event listener for form submission
          form.addEventListener('submit', e => {
            e.preventDefault();

            validateFullName();
            validateUsername();
            validateEmail();
            validatePassword();
            validateConfirmPassword();

            // Check if all inputs are valid before submitting
            if (
                !form.querySelector('.input-control.error') &&
                validateInputs()
            ) {
                // Registration is successful, show an alert
                alert('Registration successful! Click OK to go to the sign-in page.');

                // Redirect to the sign-in page after clicking OK
                window.location.href = 'signin.html';
            }
        });
        // Event listeners for clearing error messages as the user types
        fname.addEventListener('input', () => {
            clearError(fname);
        });
        uname.addEventListener('input', () => {
            clearError(uname);
        })

        email.addEventListener('input', () => {
            clearError(email);
        });

        password.addEventListener('input', () => {
            clearError(password);
        });

        password2.addEventListener('input', () => {
            clearError(password2);
        });

        // Function to check if email is valid
        const isValidEmail = email => {
            const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.(com|co\.za|ac\.za|org\.za)$/i;
            return re.test(String(email).toLowerCase());
        };

        // Function to validate all inputs
        const validateInputs = () => {
            const nameValue = fname.value.trim();
            const unameValue = uname.value.trim();
            const emailValue = email.value.trim();
            const passwordValue = password.value.trim();
            const password2Value = password2.value.trim();

            return (
                nameValue !== '' &&
                unameValue!=='' &&
                isValidEmail(emailValue) &&
                passwordValue !== '' &&
                passwordValue.length >= 8 &&
                password2Value === passwordValue
            );
        };

        // Function to clear the form and styles
        const clearForm = () => {
            // Clear all input fields
            fname.value = '';
            uname.value = '';
            email.value = '';
            password.value = '';
            password2.value = '';

            // Clear success/error styles
            setSuccess(fname);
            setSuccess(uname);
            setSuccess(email);
            setSuccess(password);
            setSuccess(password2);
        };

        // Function to clear the error message
        const clearError = element => {
            const inputControl = element.parentElement;
            const errorDisplay = inputControl.querySelector('.error');

            errorDisplay.innerText = '';
            inputControl.classList.remove('error');
        }
           
