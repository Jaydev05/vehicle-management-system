function logout() {
    localStorage.removeItem('user');
    window.location.href = 'index.html'; // Redirect to the index page after logout
}
