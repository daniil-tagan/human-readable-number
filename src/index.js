var baseNumbers = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var additionalNumbers = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

module.exports = function toReadable (number) {
    if (number === 0) return 'zero'
    n = ('000000000' + number).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) 
        ? (baseNumbers[Number(n[1])] || additionalNumbers[n[1][0]] + ' ' + baseNumbers[n[1][1]]) + 'crore ' 
        : '';
    str += (n[2] != 0) 
        ? (baseNumbers[Number(n[2])] || additionalNumbers[n[2][0]] + ' ' + baseNumbers[n[2][1]]) + 'lakh ' 
        : '';
    str += (n[3] != 0) 
        ? (baseNumbers[Number(n[3])] || additionalNumbers[n[3][0]] + ' ' + baseNumbers[n[3][1]]) + 'thousand ' 
        : '';
    str += (n[4] != 0) 
        ? (baseNumbers[Number(n[4])] || additionalNumbers[n[4][0]] + ' ' + baseNumbers[n[4][1]]) + 'hundred ' 
        : '';
    str += (n[5] != 0) 
        ? (baseNumbers[Number(n[5])] || additionalNumbers[n[5][0]] + ' ' + baseNumbers[n[5][1]]) 
        : '';
    return str.trim();
}
