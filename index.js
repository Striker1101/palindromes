
/* 
Declare a function that accepts one argument, a string.
 Save the string length to a variable. Check if there are more
  letters left, if so, proceed and otherwise, you have a palindrome.
   Now, if the first and last letters are the same,
    invoke the function again,
 passing the string with the first and last letters sliced.
 */
let input = document.querySelector('#input')
let submit = document.querySelector('#submit')
let result = document.querySelector('#result')
function palindromes(string) {
    // a sentences, sequence that reads the same backwords and forward
    splitString = string.split("")
    console.log(splitString)
    reverseString = splitString.reverse()
    console.log(reverseString)
    joinstring = reverseString.join("");
    console.log(joinstring)
    if (string == joinstring) {
        return "yes here we got a match =  " + joinstring
    } else {
        return "yikes no match = " + joinstring
    }
}
submit.addEventListener('click', (e) => {
    e.preventDefault();

    result.textContent = palindromes(input.value);
    console.log(result.textContent)

    submit.addEventListener('keydown'), (e) => {
        const keyName = e.key;
        if (keyName === 'Enter') {
            console.log('ddddd ')
        }
        if (e.ctrlKey) {
            // Even though event.key is not 'Control' (e.g., 'a' is pressed),
            // event.ctrlKey may be true if Ctrl key is pressed at the same time.
            console.log(`Combination of ctrlKey + ${keyName}`);
        } else {
            console.log(`Key pressed ${keyName}`);
        }
    }

    submit.addEventListener('keyup', (event) => {
    const keyName = event.key;

    // As the user releases the Ctrl key, the key is no longer active,
    // so event.ctrlKey is false.
    if (keyName === 'Control') {
        console.log('Control key was released');
    }
    }, false);
})
        

