var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var offset = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var interval = 300

function keyUp() {
    document.getElementById('key').value = "" + (parseInt(document.getElementById('key').value) + 1);
    populateAlphaOffset();
}
function keyDown() {
    document.getElementById('key').value = "" + (parseInt(document.getElementById('key').value) - 1);
    populateAlphaOffset();
}

function populateAlphaStandard() {
    var alphaStandard = document.getElementById('alphastandard');
    for (var i = 0; i < 26; i++) {
        var ch = alpha[i];
        var border = "cell-has-right-border"
        if(i == 25) {border = "";}
        alphaStandard.innerHTML += '<td id="alpha-' + ch + '" class="cell cell-has-bottom-border ' + border + '">' + ch + "</td>";
    }
}

function populateAlphaOffset() {
    var alphaOffset = document.getElementById('alphaoffset');
    alphaOffset.innerHTML = "";
    var key = parseInt(document.getElementById('key').value);

    offset = alpha.slice();

    if(key >= 0) {
        for(var i = 0; i < key%26; i++) {
            var letter = offset.shift();
            offset.push(letter);
        }
    }
    else {
        for(var i = 0; i < Math.abs(key%26); i++) {
            var letter = offset.pop();
            offset.unshift(letter);
        }
    }
    for (var i = 0; i < 26; i++) {
        var ch = offset[i];
        var border = "cell-has-right-border"
        if(i == 25) {border = "";}
        alphaOffset.innerHTML += '<td id="off-' + ch + '" class="cell ' + border + '">' + ch + "</td>";
    }
}

function encrypt() {
    var newString = "";
    for(var i = 0; i < document.getElementById('input').value.length; i++) {
        var char = document.getElementById('input').value.toUpperCase().charAt(i)
        if(alpha.indexOf(char) >= 0) {
            newString += offset[alpha.indexOf(char)];
        }
        else {
            newString += char
        }
    }
    return newString;
}

function decrypt() {
    var newString = "";
    for(var i = 0; i < document.getElementById('output').value.length; i++) {
        var char = document.getElementById('output').value.toUpperCase().charAt(i)
        if(offset.indexOf(char) >= 0) {
            newString += alpha[offset.indexOf(char)];
        }
        else {
            newString += char
        }
    }
    return newString;
}

function demoEncrypt() {
    document.getElementById('output').value = "";
    var cipher = encrypt();
    console.log(cipher)
    for(var i = 0; i < cipher.length; i++) {
        var call = "encryptTicker( '" + cipher.charAt(i) + "', '" + document.getElementById('input').value.toUpperCase().charAt(i) + "');"
        console.log(call)
        setTimeout(call, interval*i)
    }
}

function demoDecrypt() {
    document.getElementById('input').value = "";
    var plaintext = decrypt();
    console.log(plaintext)
    for(var i = 0; i < plaintext.length; i++) {
        var call = "decryptTicker( '" + document.getElementById('output').value.toUpperCase().charAt(i) + "', '" + plaintext.charAt(i) + "');"
        console.log(call)
        setTimeout(call, interval*i)
    }
}

function encryptTicker(currentCipherChar, currentPlaintextChar) {
    var output = document.getElementById('output')
    if(offset.indexOf(currentPlaintextChar) >= 0) {
        document.getElementById('off-' + currentCipherChar).classList.add('demo-encrypt-current')
        document.getElementById('alpha-' + currentPlaintextChar).classList.add('demo-encrypt-current')
    }

    output.value += currentCipherChar

    setTimeout("document.getElementById('off-" + currentCipherChar + "').classList.remove('demo-encrypt-current')", interval)
    setTimeout("document.getElementById('alpha-" + currentPlaintextChar + "').classList.remove('demo-encrypt-current')", interval)
}

function decryptTicker(currentCipherChar, currentPlaintextChar) {
    var input = document.getElementById('input')
    if(alpha.indexOf(currentPlaintextChar) >= 0) {
        document.getElementById('off-' + currentCipherChar).classList.add('demo-decrypt-current')
        document.getElementById('alpha-' + currentPlaintextChar).classList.add('demo-decrypt-current')
    }

    input.value += currentPlaintextChar

    setTimeout("document.getElementById('off-" + currentCipherChar + "').classList.remove('demo-decrypt-current')", interval)
    setTimeout("document.getElementById('alpha-" + currentPlaintextChar + "').classList.remove('demo-decrypt-current')", interval)
}

window.onload = function() {
    populateAlphaStandard();
    populateAlphaOffset();
};
