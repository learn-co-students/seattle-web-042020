const MALE_PET_NAMES = [
  "Rocket",
  "Strike",
  "Max",
  "Napoleon",
  "Boogie",
  "Yoshie",
  "Goofy",
  "Teddy",
  "Grim",
  "Sal",
  "Sequoia",
  "Twinkie",
  "Fisher",
  "Teasle",
  "Sprinkle",
  "Radar",
  "Hemingway",
  "Electron",
  "Sprout",
  "Mega",
  "Strike",
  "Spiral",
  "Olson",
  "Cupid",
  "Clue",
  "Austin",
  "Paws",
  "Cubby",
  "Trident",
  "Kennedy"
];

const FEMALE_PET_NAMES = [
  "Butter",
  "Gin",
  "Oatmeal",
  "Ivy",
  "Wisdom",
  "Esmeralda",
  "Joy",
  "Xena",
  "Cuddles",
  "Squirt",
  "Wrinkle",
  "Lola",
  "Shy",
  "Ham",
  "Feta",
  "Hennessy",
  "Flurry",
  "Babs",
  "Miles",
  "Silent",
  "Brook",
  "Maia",
  "Dori",
  "Vanilla",
  "Zelda",
  "Peekaboo",
  "Elsa",
  "Cherry",
  "Silent",
  "Mickey"
];

const ANIMAL_TYPES = [ 'cat', 'cat', 'cat', 'cat', 'dog', 'dog', 'dog', 'dog', 'micropig' ];

const uuid = require( 'node-uuid' );

function getRandomAge() {
  return Math.ceil( Math.random() * 10 );
}

function getRandomWeight() {
  return Math.ceil( Math.random() * 6 );
}

function getRandomFromArray( arr ) {
  return arr[ Math.floor( Math.random() * arr.length ) ];
}

const AMOUNT_OF_PETS = 35;

const result = [];

for ( let i = 0; i < AMOUNT_OF_PETS; i++ ) {
  const pet = {
    id: uuid.v4(),
    type: getRandomFromArray( ANIMAL_TYPES ),
    gender: getRandomFromArray( [ 'male', 'female' ] ),
    age: getRandomAge(),
    weight: getRandomWeight(),
  };

  pet.name = pet.gender === 'male' ? getRandomFromArray( MALE_PET_NAMES ) : getRandomFromArray( FEMALE_PET_NAMES );

  result.push( pet );
}

console.log( JSON.stringify( result, null, 2 ) );