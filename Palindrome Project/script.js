const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const displayResult = document.getElementById('result');

function checkPalindrome() {
    const textValue = textInput.value.trim(); // .trim(): removes any whitespace when text is typed in input
    if (textValue === '') {
        alert('Please input a value');
        return;
    } 
    const cleanedText = textValue.toLowerCase().replace(/[^a-z0-9]/g, ''); // [/.../] = slash means from start to end [^] = ^ means NOT from [a-z] = check from a-z [0-9] = from 0-9 g = global flag, means find all matches in the string, not just the first one. [,''] = means replace those matched characters with nothing (remove them).
    const reversedText = cleanedText.split('').reverse().join('');

    if (cleanedText === reversedText) {
        displayResult.innerText = `${textValue} is a palindrome.`
        displayResult.style.display = 'block';
    } else {
        displayResult.innerText = `${textValue} is not a palindrome.`
        displayResult.style.display = 'block'
    }
    textInput.value = '';
}


textInput.addEventListener('keydown', function(ent) {
    if (ent.key === 'Enter') {
        checkPalindrome();
    }
})

checkBtn.addEventListener('click', checkPalindrome);
