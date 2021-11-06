let mounthNum =  Math.ceil(Math.random() * 12);

console.log(mounthNum);

if (mounthNum === 1 || mounthNum === 2 || mounthNum === 12) {
    console.log( 'Winter is here!');
} else if (mounthNum === 3 || mounthNum === 4 || mounthNum === 5 ) {
    console.log( 'Spring is here!');
} else if (mounthNum === 6 || mounthNum === 7 || mounthNum === 8) {
    console.log( 'Summer is here!');
} else if (mounthNum === 9 || mounthNum === 10 || mounthNum === 11 ) {
    console.log( 'Autumn is here!');
}


let i = Math.ceil(Math.random() * 100);

if (i%2==0){
    console.log('We can divide this number');
}else {
    console.log('We can not divide this number');
};

console.log(i);
