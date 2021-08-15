function getSimpleVal(number) {
//    console.log(number);
    let str = '';
    switch (number) {
        case 1 :
            str = 'one';
            break;
        case 2 :
            str = 'two';
            break;
        case 3 :
            str = 'three';
            break;
        case 4 :
            str = 'four';
            break;
        case 5 :
            str = 'five';
            break;
        case 6 :
            str = 'six';
            break;
        case 7 :
            str = 'seven';
            break;
        case 8 :
            str = 'eight';
            break;
        case 9 :
            str = 'nine';
            break;
        case 10 :
            str = 'ten';
            break;            
        case 11 :
            str = 'eleven';
            break;            
        case 12 :
            str = 'twelve';
            break;            
        case 13 :
            str = 'thirteen';
            break;            
        case 14 :
            str = 'fourteen';
            break;            
        case 15 :
            str = 'fifteen';
            break;            
        case 16 :
            str = 'sixteen';
            break;            
        case 17 :
            str = 'seventeen';
            break;            
        case 18 :
            str = 'eighteen';
            break;            
        case 19 :
            str = 'nineteen';
            break;            
        case 20 :
            str = 'twenty';
            break;            
        case 30 :
            str = 'thirty';
            break;            
        case 40 :
            str = 'forty';
            break;            
        case 50 :
            str = 'fifty';
            break;            
        case 60 :
            str = 'sixty';
            break;            
        case 70 :
            str = 'seventy';
            break;            
        case 80 :
            str = 'eighty';
            break;            
        case 90 :
            str = 'ninety';
            break;          
    }
    return str;   
}

module.exports = function toReadable (number) {
    let str = '';
    let finalStr = '';
    str = getSimpleVal(Math.floor(number/100));
    if (str !== '') {
        finalStr = str + ' hundred';
    }

    str = '';
    if (number%100 >= 20 || number%100 < 10) {
        str = getSimpleVal(Math.floor(((number%100) / 10))*10);
        if (str !== '') {
            finalStr += (finalStr === '')?str:` ${str}`; 
        }
        str = getSimpleVal(number%10);
        if (str !== '') {
            finalStr += (finalStr === '')?str:` ${str}`;
        }
    } else {
        str = getSimpleVal(number%100);
        if (str !== '') {
            finalStr += (finalStr === '')?str:` ${str}`;
        }
    }             
    if (finalStr === '') {
        finalStr = 'zero';
    }
    return finalStr;
}
