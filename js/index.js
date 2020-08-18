document.addEventListener('DOMContentLoaded', function(e) {
    const h1 = document.getElementById('h1');
    const header = document.createTextNode('Hello');
    h1.appendChild(header);
    document.body.appendChild(h1);
})