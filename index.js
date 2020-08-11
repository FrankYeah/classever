function scrollEvent(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
}

var app = document.getElementById('app')
var google = document.getElementById('google')
var float = document.getElementById('float')

app.addEventListener('mouseover', function() {
    float.style.display = 'block';
})

google.addEventListener('mouseover', function() {
    float.style.display = 'block';
})

app.addEventListener('mouseleave', function() {
    float.style.display = 'none';
})

google.addEventListener('mouseleave', function() {
    float.style.display = 'none';
})