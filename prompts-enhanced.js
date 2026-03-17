// Enhanced prompts system for DrawSpark
// Age-appropriate drawing prompts for kids (ages 4-14)

const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

// ===== DRAWING CATEGORIES =====

const CATEGORIES = {
    animals: {
        name: "Animals 🐾",
        easy: [
            "Draw a cute {animal} sleeping",
            "Draw a {animal} playing with a ball",
            "Draw a {animal} eating food",
            "Draw a {animal} in a garden",
            "Draw a {animal} with a friend"
        ],
        medium: [
            "Draw a {animal} having a birthday party",
            "Draw a {animal} at the beach",
            "Draw a {animal} playing sports",
            "Draw a {animal} in outer space",
            "Draw a {animal} going to school"
        ],
        hard: [
            "Draw a {animal} exploring an ancient temple",
            "Draw a {animal} racing against other animals",
            "Draw a {animal} in a magical forest",
            "Draw a {animal} discovering a hidden treasure",
            "Draw a {animal} flying on the back of a dragon"
        ]
    },
    fantasy: {
        name: "Fantasy ✨",
        easy: [
            "Draw a fairy sitting on a flower",
            "Draw a friendly dragon",
            "Draw a magical unicorn",
            "Draw a wizard's hat",
            "Draw a sparkling magic wand"
        ],
        medium: [
            "Draw a fairy tale castle",
            "Draw a mermaid in an underwater palace",
            "Draw a wizard casting a spell",
            "Draw a phoenix rising from ashes",
            "Draw a goblin's treasure cave"
        ],
        hard: [
            "Draw an enchanted forest with magical creatures",
            "Draw a battle between good and evil wizards",
            "Draw a kingdom in the clouds",
            "Draw a portal to another dimension",
            "Draw an ancient dragon protecting its treasure"
        ]
    },
    nature: {
        name: "Nature 🌳",
        easy: [
            "Draw a tall tree with birds",
            "Draw a flower garden",
            "Draw a mountain with snow on top",
            "Draw a river flowing through a forest",
            "Draw the sun and clouds in the sky"
        ],
        medium: [
            "Draw a waterfall in a jungle",
            "Draw a desert oasis",
            "Draw a volcanic island",
            "Draw a coral reef underwater",
            "Draw an autumn forest with falling leaves"
        ],
        hard: [
            "Draw a complex ecosystem with multiple habitats",
            "Draw a dramatic thunderstorm over mountains",
            "Draw an ancient tree with elves living in it",
            "Draw a magical valley with bioluminescent plants",
            "Draw a frozen tundra landscape with aurora borealis"
        ]
    },
    space: {
        name: "Space 🚀",
        easy: [
            "Draw a rocket ship flying",
            "Draw an astronaut on the moon",
            "Draw a colorful planet",
            "Draw stars in the night sky",
            "Draw an alien with three eyes"
        ],
        medium: [
            "Draw a space station orbiting Earth",
            "Draw astronauts exploring Mars",
            "Draw a galaxy with spiral arms",
            "Draw a black hole consuming a star",
            "Draw a space battle between ships"
        ],
        hard: [
            "Draw a complex alien civilization on a distant planet",
            "Draw a wormhole portal to another galaxy",
            "Draw a space city on Mars colony",
            "Draw an ancient alien ruin on a moon",
            "Draw a fleet of spaceships attacking a space station"
        ]
    },
    sports: {
        name: "Sports ⚽",
        easy: [
            "Draw a soccer ball",
            "Draw a basketball player",
            "Draw a tennis racket",
            "Draw a swimming pool",
            "Draw a bicycle"
        ],
        medium: [
            "Draw a soccer player scoring a goal",
            "Draw a basketball game in progress",
            "Draw a tennis match",
            "Draw a swimming race",
            "Draw a bicycle race"
        ],
        hard: [
            "Draw an Olympic stadium with multiple events",
            "Draw a complex gymnastics routine",
            "Draw an extreme sports competition",
            "Draw a winter Olympics scene with skiing and skating",
            "Draw a futuristic sports arena with hover athletes"
        ]
    },
    robots: {
        name: "Robots 🤖",
        easy: [
            "Draw a friendly robot",
            "Draw a robot arm",
            "Draw a robot face",
            "Draw a small helper robot",
            "Draw a toy robot"
        ],
        medium: [
            "Draw a robot building a house",
            "Draw a robot playing with kids",
            "Draw a robot cooking dinner",
            "Draw a robot exploring a planet",
            "Draw a robot dog walking"
        ],
        hard: [
            "Draw a robot army defending a city",
            "Draw a complex robot factory",
            "Draw robots having a sports competition",
            "Draw a robot civilization on another planet",
            "Draw a battle between good and evil robots"
        ]
    },
    dinosaurs: {
        name: "Dinosaurs 🦕",
        easy: [
            "Draw a baby T-Rex",
            "Draw a long-necked dinosaur",
            "Draw a flying dinosaur",
            "Draw dinosaur eggs in a nest",
            "Draw a dinosaur footprint"
        ],
        medium: [
            "Draw dinosaurs in a prehistoric jungle",
            "Draw a dinosaur eating leaves",
            "Draw dinosaur parents with babies",
            "Draw a dinosaur hunt scene",
            "Draw dinosaurs near a volcano"
        ],
        hard: [
            "Draw a dinosaur battle between T-Rex and Triceratops",
            "Draw a complex prehistoric ecosystem",
            "Draw dinosaurs migrating across continents",
            "Draw dinosaur eggs hatching",
            "Draw a dinosaur fossil discovery scene"
        ]
    },
    ocean: {
        name: "Ocean 🌊",
        easy: [
            "Draw a fish swimming",
            "Draw a crab on the beach",
            "Draw a seashell",
            "Draw a dolphin jumping",
            "Draw an octopus"
        ],
        medium: [
            "Draw whales swimming together",
            "Draw sharks hunting",
            "Draw coral reef with many fish",
            "Draw a treasure chest on the ocean floor",
            "Draw a submarine exploring"
        ],
        hard: [
            "Draw an underwater city with mermaids",
            "Draw a sea monster attacking ships",
            "Draw a complex ecosystem with deep sea creatures",
            "Draw ancient underwater ruins",
            "Draw a battle between sea creatures"
        ]
    },
    food: {
        name: "Food 🍕",
        easy: [
            "Draw a pizza",
            "Draw an ice cream cone",
            "Draw an apple",
            "Draw a sandwich",
            "Draw a birthday cake"
        ],
        medium: [
            "Draw a dinner table with many dishes",
            "Draw a kitchen with a chef cooking",
            "Draw a picnic in the park",
            "Draw a restaurant with customers eating",
            "Draw a fruit basket with many types"
        ],
        hard: [
            "Draw a complex feast for a king",
            "Draw a magical food forest with edible trees",
            "Draw a futuristic food court",
            "Draw a cooking competition scene",
            "Draw an ancient marketplace with exotic foods"
        ]
    },
    vehicles: {
        name: "Vehicles 🚗",
        easy: [
            "Draw a car",
            "Draw a bicycle",
            "Draw a train",
            "Draw an airplane",
            "Draw a boat"
        ],
        medium: [
            "Draw a busy city street with traffic",
            "Draw an airport with planes taking off",
            "Draw a train station",
            "Draw a harbor with many ships",
            "Draw a race track with cars racing"
        ],
        hard: [
            "Draw a futuristic city with flying cars",
            "Draw an aircraft carrier with planes",
            "Draw a complex highway system",
            "Draw a spaceport with rocket ships",
            "Draw an ancient caravan traveling through desert"
        ]
    },
    school: {
        name: "School 🏫",
        easy: [
            "Draw a school building",
            "Draw a teacher in a classroom",
            "Draw a student at a desk",
            "Draw a school bus",
            "Draw books and pencils"
        ],
        medium: [
            "Draw a classroom with students learning",
            "Draw a school playground during recess",
            "Draw a library with kids reading",
            "Draw a science lab experiment",
            "Draw a school cafeteria"
        ],
        hard: [
            "Draw an entire school campus with multiple buildings",
            "Draw a complex science fair with many projects",
            "Draw a school theater performance",
            "Draw a sports day with multiple events",
            "Draw a magical school with flying students"
        ]
    },
    family: {
        name: "Family 👨",
        easy: [
            "Draw your family",
            "Draw a mom and dad",
            "Draw brothers and sisters playing",
            "Draw a family dinner",
            "Draw a family vacation"
        ],
        medium: [
            "Draw a family at the beach",
            "Draw a family celebrating a holiday",
            "Draw grandparents telling stories to grandchildren",
            "Draw a family game night",
            "Draw a family moving to a new house"
        ],
        hard: [
            "Draw a family reunion with many relatives",
            "Draw a family celebrating a milestone birthday",
            "Draw a family photo album with many memories",
            "Draw a family working together on a project",
            "Draw a magical family adventure"
        ]
    },
    holidays: {
        name: "Holidays 🎉",
        easy: [
            "Draw a Christmas tree",
            "Draw a birthday present",
            "Draw a Halloween pumpkin",
            "Draw an Easter egg",
            "Draw a New Year's celebration"
        ],
        medium: [
            "Draw a Christmas scene with Santa",
            "Draw a birthday party with friends",
            "Draw a haunted house for Halloween",
            "Draw an Easter egg hunt",
            "Draw fireworks for New Year's"
        ],
        hard: [
            "Draw a complex holiday festival parade",
            "Draw a magical Christmas village",
            "Draw a spooky Halloween carnival",
            "Draw an elaborate Easter celebration",
            "Draw a global New Year's celebration"
        ]
    },
    weather: {
        name: "Weather 🌤",
        easy: [
            "Draw a sunny day",
            "Draw a rainy day with umbrellas",
            "Draw a snowy day",
            "Draw a windy day with flying leaves",
            "Draw a rainbow after rain"
        ],
        medium: [
            "Draw a storm with lightning",
            "Draw people playing in snow",
            "Draw a rainbow landscape",
            "Draw foggy morning scene",
            "Draw different seasons in one picture"
        ],
        hard: [
            "Draw an extreme weather disaster",
            "Draw a complex weather map",
            "Draw magical weather effects",
            "Draw climate change impact",
            "Draw weather through different time periods"
        ]
    },
    pets: {
        name: "Pets 🐕",
        easy: [
            "Draw a dog",
            "Draw a cat",
            "Draw a bird in a cage",
            "Draw a fish in a bowl",
            "Draw a hamster on a wheel"
        ],
        medium: [
            "Draw a dog playing fetch",
            "Draw a cat sleeping in the sun",
            "Draw pets having a party",
            "Draw a pet going to the vet",
            "Draw a family walking their dog"
        ],
        hard: [
            "Draw an animal shelter with many pets",
            "Draw a pet competition show",
            "Draw a magical pet shop",
            "Draw pets helping their human friends",
            "Draw a futuristic pet park"
        ]
    }
};

// ===== RANDOM ELEMENTS =====

const ANIMALS = [
    'puppy', 'kitten', 'bunny', 'hamster', 'parrot',
    'goldfish', 'turtle', 'lizard', 'bird', 'horse',
    'sheep', 'cow', 'pig', 'duck', 'goat', 'chicken',
    'elephant', 'lion', 'tiger', 'bear', 'wolf', 'fox',
    'deer', 'giraffe', 'zebra', 'hippo', 'rhino', 'monkey',
    'panda', 'koala', 'kangaroo', 'penguin', 'owl', 'eagle'
];

const COLORS = [
    'red', 'orange', 'yellow', 'green', 'blue', 'purple',
    'pink', 'brown', 'white', 'black', 'gray',
    'golden', 'silver', 'rainbow', 'sparkling', 'glowing'
];

const SETTINGS = [
    'in a magical forest', 'under the stars', 'in a cozy house',
    'on a mountain top', 'under the sea', 'in outer space',
    'in a sunny garden', 'in a secret cave', 'on a floating island',
    'in a crystal palace', 'in an ancient temple'
];

// ===== TIPS =====

const TIPS_BY_DIFFICULTY = {
    easy: [
        "Start with simple shapes like circles and squares",
        "Use bright, happy colors",
        "Don't worry about making it perfect",
        "Have fun and be creative!",
        "Try different colors and see what you like best"
    ],
    medium: [
        "Think about the story behind your drawing",
        "Add small details to make it more interesting",
        "Use different colors for different parts",
        "Take your time and enjoy the process",
        "Look at real pictures for inspiration"
    ],
    hard: [
        "Plan your drawing before starting",
        "Think about light and shadow",
        "Add texture and patterns",
        "Consider the composition of your drawing",
        "Tell a story through your art"
    ]
};

// ===== FUNCTIONS =====

function generatePrompt(category, age, difficulty) {
    const categoryData = CATEGORIES[category];

    if (!categoryData) {
        throw new Error(`Invalid category: ${category}`);
    }

    const prompts = categoryData[difficulty] || categoryData.easy;
    let prompt = getRandomElement(prompts);

    // Replace placeholders
    prompt = prompt.replace(/{animal}/g, getRandomElement(ANIMALS));

    return {
        category: category,
        categoryName: categoryData.name,
        prompt: prompt,
        age: age,
        difficulty: difficulty,
        tips: getRandomElement(TIPS_BY_DIFFICULTY[difficulty] || TIPS_BY_DIFFICULTY.easy)
    };
}

function getCategories() {
    return Object.keys(CATEGORIES).map(key => ({
        key: key,
        name: CATEGORIES[key].name
    }));
}

module.exports = {
    generatePrompt,
    getCategories,
    getRandomElement,
    ANIMALS,
    COLORS,
    CATEGORIES,
    TIPS_BY_DIFFICULTY
};
