function encryptMensagem() {
    var mensagem = document.getElementById('mensagem');
    var encrypt = document.getElementById('encrypted');

    mensagem = mensagem.value.toUpperCase().replace(/\s/g,'');

    for(var a = 0; a < mensagem.length; a++) {
        var letterCode;
        var offset;

        letterCode = mensagem.charCodeAt(a) - 65;
        offset = (letterCode + 3) % 26;
       
        offset += 65;

        encrypt.value += String.fromCharCode(offset)}
    }




    