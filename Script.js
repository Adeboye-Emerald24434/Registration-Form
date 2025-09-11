document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const nameField = form.querySelector('input[placeholder="Enter Your Name"]');
  const usernameField = form.querySelector('input[placeholder="Enter Your username"]');
  const emailField = form.querySelector('input[placeholder="Enter Your email"]');
  const phoneField = form.querySelector('input[placeholder="Enter Your number"]');
  const passwordField = form.querySelector('input[placeholder="Enter Your password"]');
  const confirmPasswordField = form.querySelector('input[placeholder="confirm password"]');

  function showError(input, message) {
    let error = input.nextElementSibling;
    if (!error || !error.classList.contains('error')) {
      error = document.createElement('div');
      error.className = 'error';
      input.insertAdjacentElement('afterend', error);
    }
    error.textContent = message;
    error.style.color = 'red';
    input.style.borderColor = 'red';
  }

  function clearError(input) {
    const error = input.nextElementSibling;
    if (error && error.classList.contains('error')) {
      error.textContent = '';
    }
    input.style.borderColor = '#ccc';
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    // Full Name
    if (nameField.value.trim() === '') {
      showError(nameField, 'Full Name is required');
      valid = false;
    } else {
      clearError(nameField);
    }

    // Username
    if (usernameField.value.trim() === '') {
      showError(usernameField, 'Username is required');
      valid = false;
    } else {
      clearError(usernameField);
    }

    // Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailField.value.trim())) {
      showError(emailField, 'Enter a valid email address');
      valid = false;
    } else {
      clearError(emailField);
    }

    // Phone
    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(phoneField.value.trim())) {
      showError(phoneField, 'Enter a valid phone number (10-15 digits)');
      valid = false;
    } else {
      clearError(phoneField);
    }

    // Password
    if (passwordField.value.trim().length < 6) {
      showError(passwordField, 'Password must be at least 6 characters');
      valid = false;
    } else {
      clearError(passwordField);
    }

    // Confirm Password
    if (confirmPasswordField.value.trim() !== passwordField.value.trim()) {
      showError(confirmPasswordField, 'Passwords do not match');
      valid = false;
    } else {
      clearError(confirmPasswordField);
    }

    if (valid) {
      alert('Form submitted successfully!');
      form.reset();
    }
  });
});
