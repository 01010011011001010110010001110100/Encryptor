// ----- Variables 

// Elements
let userInput = document.querySelector('#userInput');
let infoResult = document.querySelector('.info-result');
let resultContent = document.querySelector('.result-content');
let resultText = document.querySelector('#result-text');




// ----- Functions 

function Encrypt() {
    if (!isEntryValid()) return;
    
    const rules = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    let resultToShow = userInput.value.split('').map(char => rules[char] || char).join('');
    resultText.innerHTML = resultToShow;

    GeneralConfigs();
}


function Decrypt() {
    if (!isEntryValid()) return;
    
    const rules = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    let resultToShow = userInput.value;
    for (const [key, value] of Object.entries(rules)) {
        resultToShow = resultToShow.split(key).join(value);
    }
    resultText.innerHTML = resultToShow;
    
    GeneralConfigs();
}


function GeneralConfigs() {
    infoResult.remove();
    resultContent.removeAttribute('hidden');
    ClearForm();
}


function isEntryValid() {
    const hasSpecialCharacters =  /[+\-*/!@#$%^&()_={}\[\]|\\:;"'<>,.?/~`]/;
    const hasCapitalLetters = /[A-Z]/;

    if (hasSpecialCharacters.test(userInput.value)){
        alert('El texto ingresado no puede contener caracteres especiales...');
        return false;
    }

    if (hasCapitalLetters.test(userInput.value)){
        alert('El texto ingresado no puede contener letras mayusculas...');
        return false;
    }

    return true;
}


function CopyResult() {
    alert('Se copio el texto');
    navigator.clipboard.writeText(resultText.innerHTML);
}


function ClearForm() {
    userInput.value = '';
}
