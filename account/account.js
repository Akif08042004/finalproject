document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    const fullName = localStorage.getItem('userFullName');
    const surname = localStorage.getItem('userSurname');
    const email = localStorage.getItem('userEmail');
    const role = localStorage.getItem('userRole');

    const userDetailsContainer = document.getElementById('userDetails');

    if (userDetailsContainer && username) {
        userDetailsContainer.innerHTML = `
            <h2>User Details</h2>
            <p><strong>Name:</strong> ${fullName || 'Akif'}</p>
            <p><strong>Surname:</strong> ${surname || 'Zeynalli'}</p>
            <p><strong>Email:</strong> ${email || 'theakif101@gmail.com'}</p>
            <p><strong>Username:</strong> ${username}</p>
            <p><strong>Role:</strong> ${role || 'User'}</p>
        `;
    } else if (userDetailsContainer) {
        userDetailsContainer.innerHTML = `
            <h2>User Details</h2>
            <p class="text-warning">No user data found. Please log in.</p>
        `;
    }
});