document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });    
    document.addEventListener('DOMContentLoaded', checkSession());//hace un check de session al cargar la pagina
    
    function checkSession() {
        const session = sessionStorage.getItem('userSession') 
        
        if (!session) {
            // Si no hay sesión, redirige al login
            window.location.href = 'login.html';
        }
    }
});