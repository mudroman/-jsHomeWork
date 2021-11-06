let country;
country = 'Germany';
country = 'Japan';
country = 'South Korea';
country = 'USA';
country = 'India';

switch(country) {
    case 'Germany':
        console.log('Audi, BMW, Mercedes, VW')
        break;
    case 'Japan': 
        console.log('Subaru, Toyota, Honda, Mitsubishi')
        break;
    case 'South Korea':
        console.log('Hyndai, KIA')
        break;
    case 'USA':
        console.log('Tesla, Ford, Chevrolet, Jeep')
        return;    
    default:
        console.log('No famous company')
};


