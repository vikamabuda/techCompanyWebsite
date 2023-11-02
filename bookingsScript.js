const form = document.getElementById('book');
const fname = document.getElementById('fullname');
const address = document.getElementById('address');
const select = document.getElementById('Service-type');
const successMessage = document.getElementById('success-message');
const Book_date = document.getElementById('check-in');
const Due_Date = document.getElementById('check-out');

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

const serviceSuccessMessages = {
    'Fullstack Development': 'You have selected Fullstack Development',
    'Cyber Security': 'You have selected Cyber Security',
    'End-device Installation': 'You have selected End-device Installation',
    'Networking': 'You have selected Networking',
};

const validateName = () => {
    const fnameValue = fname.value.trim();

    if (fnameValue === '') {
        setError(fname, 'Full name is required');
    } else {
        setSuccess(fname);
    }
};

const validateAddress = () => {
    const addressValue = address.value.trim();

    if (addressValue === '') {
        setError(address, 'Address is required');
    } else if (addressValue.length <= 5) {
        setError(address, 'Please enter a valid address');
    } else {
        setSuccess(address);
    }
};

const validateSelect = () => {
    const serviceValue = select.value;

    if (serviceValue === 'Select Services') {
        setError(select, 'Select a service');
    } else {
        setSuccess(select);
        displayServiceSuccessMessage(serviceValue);
    }
};

const validateDate = () => {
    const BookValue = Book_date.value;
    
    if(BookValue===''){
        
    }
};



const displayServiceSuccessMessage = (serviceValue) => {
    successMessage.textContent = serviceSuccessMessages[serviceValue];
};

form.addEventListener('submit', e => {
    e.preventDefault();

    validateName();
    validateAddress();
    validateSelect();

    if (!form.querySelector('.input-control.error')) {
        // Registration is successful, show an alert
        alert('You have booked successfully!');

        // Clear the form after successful submission
        clearForm();
    }
});

// Function to clear the form and styles
const clearForm = () => {
    // Clear all input fields
    fname.value = '';
    address.value = '';
    select.value = 'Select Services';

    // Clear success/error styles and messages
    setSuccess(fname);
    setSuccess(address);
    setSuccess(select);
    successMessage.textContent = '';
};

// Clear success message when the user changes their selection
select.addEventListener('change', () => {
    successMessage.textContent = '';
});
