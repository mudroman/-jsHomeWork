//===========================================================================
// string concat
///==============================================================================
// const user = {
//     firstName: 'Steven',
//     lastName: 'Spielberg',
//   };
  
//   const helloStr = 'Hello, ' + user.firstName + ' ' + user.lastName + '!';
  
//   console.log(helloStr);
//   // output: "Hello, Steven Spielberg!";

// const director = {
//     firstName: 'Steven',
//     lastName: 'Spielberg',
//     movies: 57,
//   };
  
//   const info = 'As a Director ' + director.firstName
//       + ' ' + director.lastName + ' created ' + 
//       + director.movies + ' movies';
  
//   console.log(info);
//===========================================================================
// Template string
///==============================================================================
//   // output: "As a Director, Steven Spielberg created 57 movies";

// const firstName = 'Roman';
// const age = 29;

// console.log(`Hello, my name is ${firstName} and I'm ${age} years old.`)

//===========================================================================
// split
///==============================================================================

// const myStr = 'My awesome string';



// console.log(myStr.split(' '))

///===========================================================================
// charAt
///==============================================================================
// const sentence = 'The quick brown fox jumps over the lazy dog.';

// // const index = 4;
// const char = sentence.charAt(0);

// console.log('The character at index 4 is ', char);
// // output: "The character at index 4 is q"
//===========================================================================
// includes 
///==============================================================================
// const sentence = 'The quick brown fox jumps over the lazy dog.';

// // const word = 'fox';
// // const hasWord = sentence.includes(word); // true

// // console.log(`The word "${word}"
// // 	${hasWord ? 'is' : 'is not'} in the sentence`);
// // // output: "The word "fox" is in the sentence"

// // const hasCatWord = sentence.includes('cat'); // false

// console.log(sentence.includes('tiger'))
// console.log(sentence.includes('dog'))
// console.log(sentence.includes('brown'))
// console.log(sentence.includes('lazY')) ///case sensitive
//===========================================================================
// indexOf
///==============================================================================
// const beasts = 'Beasts list: ant, bison, camel, duck, lion';

// console.log(beasts.indexOf('bison'));
// // output: 18

// console.log(beasts.indexOf('tiger'));
// console.log(beasts.indexOf('camel'));
// console.log(beasts.indexOf('list'));
// console.log(beasts.indexOf('Beasts'));
// // output: -1
//===========================================================================
// toLowerCase
///==============================================================================

// const str = 'HELLO EVRYONE'

// const changed = str.toLowerCase()

// console.log(changed)

//===========================================================================
// toUpperCase
///==============================================================================

// const myName = 'roman mud'

// const modifyed = myName.toUpperCase()



// console.log(modifyed)

//===========================================================================
// slice
///==============================================================================


// const str = 'The quick brown fox jumps over the lazy dog.';

// console.log(str.slice(31));
// // output: "the lazy dog."

// console.log(str.slice(4, 19));
// // output: "quick brown fox"

// console.log(str.slice(-4));
// // output: "dog."

// console.log(str.slice(-9, -5));
// // output: "lazy"

// console.log(str.slice(-9, -5));
// console.log(str.slice(-9, -5));
// console.log(str.slice(-9, -5));

//===========================================================================
// split
///==============================================================================


// const str = 'The quick brown fox jumps over the lazy dog.';
// console.log(str.split(''))
// console.log(str.split(' '))
// console.log(str.split(', '))

// const words = str.split(' ');
// console.log(words[3]);
// console.log(words);
// // output:
// // ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']
//===========================================================================
// match
///==============================================================================



// const paragraph = 'The qui2ck brown fox j3umps over the laz4y dog. It barked.';
// console.log(paragraph.match(/[a-z]/g));
// console.log(paragraph.match(/[0-9]/g));
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);

// console.log(found);
// // output: Array ["T", "I"]
//===========================================================================
// replace 
//==============================================================================

// const p = 'The quick brown fox jumps over the lazy dog';

// console.log(p.replace('dog', 'monkey'));
// console.log(p.replace('quick', 'fast'));
// console.log(p.replace('brown', 'red'));
// // expected output: "The quick brown fox jumps over the lazy monkey."


// const regex = /Dog/i;
// console.log(p.replace(regex, 'ferret'));
// // expected output: "The quick brown fox jumps over the lazy ferret."

//===========================================================================
// trim
//==============================================================================


// const greeting = '  ------- Hello world! ------    my world   ';

// console.log(greeting);
// // output: "   Hello world!   ";

// console.log(greeting.trim());
// console.log(greeting.trim());
// // output: "Hello world!";
