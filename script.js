const validUsers = [
    { username: '9989634265', password: '9989634265' },
    { username: '9182854705', password: '9182854705' }
];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');

    const user = validUsers.find(user => user.username === username && user.password === password);

    if (user) {
        document.querySelector('.login-container').style.display = 'none';
        document.getElementById('file-store').style.display = 'block';
    } else {
        errorMsg.textContent = 'Invalid username or password';
    }
}

document.getElementById('search').addEventListener('input', function() {
    const filter = this.value.toUpperCase();
    const fileItems = document.querySelectorAll('.file-item');

    fileItems.forEach(function(item) {
        const text = item.querySelector('span').textContent;
        item.style.display = text.toUpperCase().includes(filter) ? '' : 'none';
    });
});
