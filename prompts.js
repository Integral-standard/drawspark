// Random elements for DrawSpark prompts

const ANIMALS = [
    'puppy', 'kitten', 'bunny', 'hamster', 'parrot',
    'hamster', 'goldfish', 'turtle', 'lizard', 'bird'
];

const COLORS = [
    'red', 'orange', 'yellow', 'green', 'blue', 'purple',
    'pink', 'brown', 'white', 'black'
];

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

module.exports = {
    getRandomElement,
    ANIMALS,
    COLORS
};
