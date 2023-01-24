const textMessage = document.querySelector("#text-out");
        
function showMuneco (){
    document.getElementById("muneco").style.display = "block";
}

function hiddeMuneco (){
    document.getElementById("muneco").style.display = "none";
}

function showDiamond (){
    document.getElementById("diamond").style.display = "block";
}

function hiddeDiamond (){
    document.getElementById("diamond").style.display = "none";
}

function encrypt (){
    var text = document.querySelector("#text-in").value;
    var textEncrypt = text.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")
        .replace(/é/g, "éntér").replace(/í/g, "ímés").replace(/á/g, "áí").replace(/ó/g, "óbér").replace(/ú/g, "úfát")
        .replace(/E/g, "EntEr").replace(/I/g, "ImEs").replace(/A/g, "AI").replace(/O/g, "ObEr").replace(/U/g, "UfAt");
    textMessage.value = textEncrypt;
}

function decrypt (){
    var text = document.querySelector("#text-in").value;
    var textEncrypt = text.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u")
    .replace(/éntér/g, "é").replace(/ímés/g, "í").replace(/áí/g, "á").replace(/óbér/g, "ó").replace(/úfát/g, "ú")
    .replace(/EntEr/g, "E").replace(/ImEs/g, "I").replace(/AI/g, "A").replace(/ObEr/g, "O").replace(/UfAt/g, "U");
    textMessage.value = textEncrypt;
}

function cleanInput (){
    document.querySelector("#text-in").value = "";
    document.querySelector("#text-out").value = "";
}

function encryptBtn (){
    encrypt ();
    hiddeMuneco();
    showDiamond();
    document.getElementById("text-out").style.height = "320px";
    document.getElementById("btn-copy").style.display = "block";
}

function decryptBtn (){
    decrypt ();
    hiddeMuneco();
    showDiamond();
    document.getElementById("text-out").style.height = "320px";
    document.getElementById("btn-copy").style.display = "block";
}

function cleanBtn (){
    cleanInput ();
    showMuneco();
    hiddeDiamond();
    document.getElementById("text-out").style.height = "auto";
    document.getElementById("btn-copy").style.display = "none";
}

//display tablet

function encryptBtn2 (){
    encrypt ();
    hiddeMuneco ();
    hiddeDiamond();
    document.getElementById("text-out").style.height = "150px";
    document.getElementById("btn-copy").style.display = "block";
}

function decryptBtn2 (){
    decrypt ();
    hiddeMuneco ();
    hiddeDiamond();
    document.getElementById("text-out").style.height = "150px";
    document.getElementById("btn-copy").style.display = "block";
}

function cleanBtn2 (){
    cleanInput ();
    hiddeMuneco ();
    showDiamond();
    document.getElementById("text-out").style.height = "auto";
    document.getElementById("btn-copy").style.display = "none";
}


//boton para copiar texto
function copyOnClipBoard (){
    textMessage.select();
    navigator.clipboard.writeText(textMessage.value)
    alert("Texto copiado")
}

//dark mode
const btn_darkMode = document.getElementById('id-btn-mode');
btn_darkMode.addEventListener('click', function (){
    document.body.classList.toggle('darkmode_body');
    document.getElementById('id-btn-mode').classList.toggle('btn-border')
    document.getElementById('id-btn-mode').classList.toggle('btn-color')
    document.getElementById('btn-encrypt').classList.toggle('btn-border')
    document.getElementById('btn-encrypt').classList.toggle('btn-color')
    document.getElementById('btn-decrypt').classList.toggle('btn-border')
    document.getElementById('btn-decrypt').classList.toggle('btn-color')
    document.getElementById('btn-clean').classList.toggle('btn-border')
    document.getElementById('btn-encrypt2').classList.toggle('btn-border')
    document.getElementById('btn-encrypt2').classList.toggle('btn-color')
    document.getElementById('btn-decrypt2').classList.toggle('btn-border')
    document.getElementById('btn-decrypt2').classList.toggle('btn-color')
    document.getElementById('btn-clean2').classList.toggle('btn-border')
    document.getElementById('id-sun').classList.toggle('sun-display')
    document.getElementById('id-moon').classList.toggle('moon-display')
    document.getElementById('btn-copy').classList.toggle('btn-border')
    document.getElementById('text-in').classList.toggle('in-darkmode')
    document.getElementById('container-out').classList.toggle('out-darkmode')
    document.getElementById('text-out').classList.toggle('out-darkmode')
    document.getElementById('footer').classList.toggle('footer-darkmode')
})


