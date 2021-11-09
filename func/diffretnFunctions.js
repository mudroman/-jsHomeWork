const square = (a) =>a * a;

const square1 = (a) => {
    return a * a
};

function square2 (a) {
    return a * a;
};


const square3 = function (a) {
    return a * a;
};

const square4 = function(a, cb) {
 return cb(a);
};

// console.log('Fn experession 'square4(10));
// console.log('Fn with annonymus'square4(10, square1));
