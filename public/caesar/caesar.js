var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var offset = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

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
        alphaStandard.innerHTML += '<td id="off-' + ch + '" class="cell cell-has-bottom-border ' + border + '">' + ch + "</td>";
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
        newString += offset[alpha.indexOf(document.getElementById('input').value.toUpperCase().charAt(i))];
    }
    return newString;
}

function decrypt() {
    var newString = "";
    for(var i = 0; i < document.getElementById('output').value.length; i++) {
        newString += alpha[offset.indexOf(document.getElementById('output').value.toUpperCase().charAt(i))];
    }
    return newString;
}

function demoEncrypt() {
    document.getElementById('output').value = "";
    var cipher = encrypt();
    console.log(cipher)
    for(var i = 0; i < cipher.length; i++) {
        document.getElementById('output').value += cipher.charAt(i);

    }
}

window.onload = function() {
    populateAlphaStandard();
    populateAlphaOffset();
};
