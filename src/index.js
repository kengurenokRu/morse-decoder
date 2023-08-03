const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str = [];
    for (let i=0; i<expr.length; i+=10)
       str.push(expr.slice(i, i + 10));    
    for (let i=0; i<str.length; i++)
    {
        str[i] = str[i].replace(/10/g, ".");
        str[i] = str[i].replace(/11/g, "-");
        str[i] = str[i].replace(/0/g, "");
    }
    let result = MORSE_TABLE[str[0]];
    for (let i=1; i<str.length; i++)
    {
        if (MORSE_TABLE[str[i]] == undefined)
        result = result +" ";
        else 
        result = result +MORSE_TABLE[str[i]];        
    }    
    return result;
}

module.exports = {
    decode
}