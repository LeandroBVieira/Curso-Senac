// login
if (document.getElementById( 'enviar' )) {
    var email = document.getElementById( 'email1' );
    var senha = document.getElementById( 'senha1');

    sessionStorage.setItem(
    'email', email,
    'senha', senha);
    
    if( email.length == 0 || senha.length == 0) {
        window.location.href = './index.html';
        window.prompt = 'Coloca certo, cabeçudo !';
    } 
    
    window.location.href = 'pagina-logada.html';
}

if (window.location.pathname.includes("pagina-logada.html")) {
    
    const email = sessionStorage.getItem('email');
    
    if (!email) {
        window.location.href = './index.html';
    }

    document.getElementById( 'campemail' ).innerText = email;
}