function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++){
        line += '#';
    }
    return line;
}

//console.log(makeLine(5));

// function makeSquare(size) {
//     let square = '';
//     for (let i = 0; i < size; i++) {
//         square += (makeLine(size) + '\n');
//     }
//     return square.slice(0, -1);
// }

function makeSquare(size) {
    let square = makeRectangle(size, size);
    return square;
}

// console.log(makeSquare(6));

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
}

// console.log(makeRectangle(7, 10));

function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
        stairs += (makeLine(i + 1) + '\n');
    }
    return stairs.slice(0, -1);
}

// console.log(makeDownwardStairs(9));

function makeSpaceLine(numSpaces, numChars) {
    let space = '';
    let line = makeLine(numChars);
    for (let i = 0; i < numSpaces; i++) {
        space += ' ';
    }
    return space + line + space;
}

// console.log(makeSpaceLine(8, 6));

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
    }

// console.log(makeIsoscelesTriangle(9));

function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}

function makeDiamond(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2 * i + 1) + '\n');
    }
    let halfDiamond = triangle.slice(0, -1);
    let diamond = halfDiamond + '\n' + reverse(halfDiamond);
    return diamond;
}

console.log(makeDiamond(5));


