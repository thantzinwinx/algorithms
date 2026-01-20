function pyramid(s) {
    const n = 5;

    for (let row = n; row >= 1; row--) {
        let line = [];
        for (let num = 1; num <= row; num++) {
            line.push(num);
        }
        console.log(line.join(' '));
    }

    
    
}

pyramid(3)
/*
'  #  '
' ### '
'#####'

    const n = 5;

    // Upper part (including middle)
    for (let row = 1; row <= n; row++) {
        let spaces = ' '.repeat((n - row) * 2);
        let numbers = [];
        for (let num = 1; num <= row; num++) {
            numbers.push('#');
        }
        console.log(spaces + numbers.join(' '));
    }
    
    // Lower part
    for (let row = n - 1; row >= 1; row--) {
        let spaces = ' '.repeat((n - row) * 2);
        let numbers = [];
        for (let num = 1; num <= row; num++) {
            numbers.push('#');
        }
        console.log(spaces + numbers.join(' '));
    }



const n = 5;

// Upper part (including middle)
for (let row = 1; row <= n; row++) {
    let symbols = [];
    for (let num = row; num >= 1; num--) {
        symbols.push('#');
    }
    console.log(symbols.join(' '));
}

// Lower part
for (let row = n - 1; row >= 1; row--) {
    let symbols = [];
    for (let num = row; num >= 1; num--) {
        symbols.push('#');
    }
    console.log(symbols.join(' '));
}


downward-center
const n = 5;

for (let row = n; row >= 1; row--) {
    let spaces = ' '.repeat((n - row) * 2);
    let line = [];
    for (let num = 1; num <= row; num++) {
        line.push(num);
    }
    console.log(spaces + line.join(' '));
}

left
const n = 5;

for (let row = n; row >= 1; row--) {
    let line = [];
    for (let num = 1; num <= row; num++) {
        line.push(num);
    }
    console.log(line.join(' '));
}

*/

