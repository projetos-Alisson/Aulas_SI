function encryptMensagem() {
    let mensagem = document.getElementById('mensagem');
    let encrypt = document.getElementById('encrypted');

    console.log(mensagem.value)

    mensagem = mensagem.value.toUpperCase().replace(/\s/g,'');

    for(let a = 0; a < mensagem.length; a++) {
        let letterCode;
        let offset;

        letterCode = mensagem.charCodeAt(a) - 65;
        offset = (letterCode + 3) % 26;
       
        offset += 65;

        encrypt.value += String.fromCharCode(offset)
         }

    }


    function decryptMensagem() {
        let mensagemEncrypted = document.getElementById('mensagemCriptografada');
        let decrypted = document.getElementsByName('decrypted');
    
        
    
       console.log(decrypted)
    
    
         mensagemEncrypted = mensagemEncrypted.value.toUpperCase().replace(/\s/g,'');
    
        for(let a = 0; a < mensagemEncrypted.length; a++) {
            let letterCode;
           let offset;
    
         
    
            letterCode = mensagemEncrypted.charCodeAt(a) - 65;
             
            offset = (letterCode - 3) % 26;
    
            offset += 65;
    
            decrypted.value += String.fromCharCode(offset);
        }
    }

    