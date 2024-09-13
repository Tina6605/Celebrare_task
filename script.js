document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Show loading animation
    const button = event.target.querySelector('button');
    button.innerHTML = "Logging in...";
    button.style.backgroundColor = '#ccc';
    button.style.cursor = 'not-allowed';

    // Simulate loading process
    setTimeout(() => {
        button.innerHTML = "Login";
        button.style.backgroundColor = '#0b6b51';
        button.style.cursor = 'pointer';

        // Redirect after loading simulation
        alert('Login successful!');
    }, 2000); // 2 second delay for the animation
});
