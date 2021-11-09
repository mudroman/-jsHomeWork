const Marvel = {
      yearCereation: 1939,
      mainCharacter: 'Spider Man',
      mainTeam: 'Avengers',
    };

//     function extendObject (obj, field, value) {
//         const newObj = Object.assign({}, obj);
//         newObj[field] = value;

//     return newObj
//     }

// const NewMarvel = extendObject(Marvel, 'mainVillian', 'Venom');

    

//     console.log('Marvel object:', Marvel);
//     console.log('NewMarvel object', NewMarvel);

    function extendExistingObject (obj, field, value) {
        Marvel[field] = value;
    }


const NewMarvel = extendObject(Marvel, 'mainVillian', 'Venom');

    

    console.log('Marvel object:', Marvel);
    console.log('NewMarvel object', NewMarvel);