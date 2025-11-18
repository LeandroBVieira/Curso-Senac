// Função Enviar E-mail //

var send = document.getElementById( 'send' );

var name = document.getElementById( 'name' ).value;
var email = document.getElementById( 'email' ).value;
var subject = document.getElementById( 'subject' ).value;
var content = document.getElementById( 'content' ).value;
var body = 'name: ' + name + '<br> e-mail: ' + email + ' <br> subject: ' + subject + ' <br> mensagem: ' + content;