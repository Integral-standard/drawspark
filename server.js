// DrawSpark - AI Drawing Prompts for Kids
// Safe, creative, fun drawing ideas for children

const express = require('express');
const cors = require('cors');
const path = require('path');
const { getRandomElement } = require('./prompts');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Safe categories for kids
const SAFE_CATEGORIES = [
    'animals', 'nature', 'fantasy', 'space', 'underwater',
    'food', 'toys', 'family', 'sports', 'adventure',
    'robots', 'dinosaurs', 'weather', 'school', 'holidays'
];

const AGE_GROUPS = {
    'young': { min: 4, max: 7 },
    'older': { min: 8, max: 14 }
};

const DIFFICULTY_LEVELS = {
    'easy': 'Simple shapes, few details',
    'medium': 'More details, creative',
    'hard': 'Complex, detailed artwork'
};

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'DrawSpark is running' });
});

app.get('/api/categories', (req, res) => {
    res.json({ categories: SAFE_CATEGORIES });
});

app.post('/api/generate', (req, res) => {
    try {
        const { age, category, difficulty = 'medium' } = req.body;

        // Validation
        if (!age || !category) {
            return res.status(400).json({ error: 'Age and category are required' });
        }

        if (age < 4 || age > 14) {
            return res.status(400).json({ error: 'Age must be between 4 and 14' });
        }

        if (!SAFE_CATEGORIES.includes(category.toLowerCase())) {
            return res.status(400).json({ error: 'Invalid category' });
        }

        if (!DIFFICULTY_LEVELS[difficulty]) {
            return res.status(400).json({ error: 'Invalid difficulty level' });
        }

        // Generate prompt
        const prompt = generatePrompt(age, category, difficulty);

        res.json({
            prompt: prompt,
            age: age,
            category: category,
            difficulty: difficulty,
            generatedAt: new Date().toISOString()
        });

    } catch (error) {
        console.error('Error generating prompt:', error);
        res.status(500).json({ error: 'Failed to generate prompt' });
    }
});

function generatePrompt(age, category, difficulty) {
    const ageGroup = age < 8 ? 'young' : 'older';
    const difficultyInfo = DIFFICULTY_LEVELS[difficulty];

    const prompts = {
        animals: {
            title: `${category.charAt(0).toUpperCase() + category.slice(1)} Drawing`,
            instruction: getRandomElement([
                `Draw a cute ${getRandomElement(['puppy', 'kitten', 'bunny', 'hamster', 'puppy'])} playing in the grass`,
                `Draw a ${getRandomElement(['happy', 'sleepy', 'hungry', 'excited'])} ${getRandomElement(['lion', 'elephant', 'monkey', 'giraffe'])}`,
                `Draw a family of ${getRandomElement(['ducks', 'birds', 'fish', 'rabbits'])}`,
                `Draw your favorite animal with big, friendly eyes`,
                `Draw an animal wearing a funny hat`
            ]),
            tips: getRandomElement([
                'Use bright, happy colors',
                'Make the animal look friendly and cute',
                'Add flowers or grass for the background',
                'Give the animal a big smile'
            ])
        },

        nature: {
            title: 'Nature Adventure',
            instruction: getRandomElement([
                `Draw a beautiful ${getRandomElement(['sunset', 'sunrise', 'rainbow', 'starry sky'])}`,
                `Draw a ${getRandomElement(['mountain', 'ocean', 'forest', 'meadow'])} scene`,
                `Draw a ${getRandomElement(['treehouse', 'campfire', 'garden', 'pond'])} in nature`,
                `Draw a ${getRandomElement(['butterfly', 'bird', 'bee', 'dragonfly'])} on a flower`,
                `Draw a path through a magical forest`
            ]),
            tips: getRandomElement([
                'Use greens, blues, and yellows',
                'Add different types of plants',
                'Include clouds, sun, or stars in the sky',
                'Make the scene peaceful and calm'
            ])
        },

        fantasy: {
            title: 'Fantasy World',
            instruction: getRandomElement([
                `Draw a ${getRandomElement(['dragon', 'unicorn', 'fairy', 'wizard'])} castle`,
                `Draw a magical ${getRandomElement(['creature', 'monster', 'being', 'friend'])}`,
                `Draw yourself with ${getRandomElement(['magic powers', 'wings', 'a wand', 'a cape'])}`,
                `Draw a ${getRandomElement(['flying', 'floating', 'dancing', 'singing'])} island`,
                `Draw a magical forest with glowing plants`
            ]),
            tips: getRandomElement([
                'Use sparkles and magic effects',
                'Make colors bright and magical',
                'Include stars, moons, or sparkles',
                'Let your imagination run wild!'
            ])
        },

        space: {
            title: 'Space Explorer',
            instruction: getRandomElement([
                `Draw a ${getRandomElement(['rocket', 'spaceship', 'astronaut', 'alien'])} flying through space`,
                `Draw yourself visiting a ${getRandomElement(['planet', 'moon', 'star', 'space station'])}`,
                `Draw a ${getRandomElement(['robot', 'alien friend', 'space pet', 'moon creature'])}`,
                `Draw a ${getRandomElement(['galaxy', 'nebula', 'constellation', 'black hole'])}`,
                `Draw Earth from far away in space`
            ]),
            tips: getRandomElement([
                'Use dark blues and purples for space',
                'Add stars and planets in the background',
                'Make the astronaut or alien friendly',
                'Include a glowing moon or sun'
            ])
        },

        underwater: {
            title: 'Ocean Adventure',
            instruction: getRandomElement([
                `Draw a ${getRandomElement(['fish', 'dolphin', 'whale', 'sea turtle'])} swimming`,
                `Draw a ${getRandomElement(['mermaid', 'sea monster', 'octopus', 'crab'])}`,
                `Draw a ${getRandomElement(['underwater castle', 'coral reef', 'sunken ship', 'treasure'])}`,
                `Draw yourself as a ${getRandomElement(['diver', 'sea explorer', 'merperson'])}`,
                `Draw colorful fish and seaweed`
            ]),
            tips: getRandomElement([
                'Use blues, teals, and greens',
                'Add bubbles and seaweed',
                'Make creatures look friendly and fun',
                'Include sunlight coming from above'
            ])
        },

        food: {
            title: 'Yummy Drawing',
            instruction: getRandomElement([
                `Draw your favorite ${getRandomElement(['ice cream', 'pizza', 'cake', 'burger'])}`,
                `Draw a ${getRandomElement(['fruit bowl', 'vegetable garden', 'sandwich', 'smoothie'])}`,
                `Draw a ${getRandomElement(['chef', 'baker', 'ice cream seller'])} making food`,
                `Draw a ${getRandomElement(['birthday cake', 'picnic', 'food festival', 'kitchen'])}`,
                `Draw healthy food that looks delicious`
            ]),
            tips: getRandomElement([
                'Use appetizing colors',
                'Make food look warm and happy',
                'Add sprinkles, decorations, or garnishes',
                'Make the chef or baker look friendly'
            ])
        },

        toys: {
            title: 'Toy Time',
            instruction: getRandomElement([
                `Draw your dream ${getRandomElement(['toy chest', 'playroom', 'toy store'])}`,
                `Draw a ${getRandomElement(['teddy bear', 'doll', 'action figure', 'toy car'])}`,
                `Draw a ${getRandomElement(['robot toy', 'building blocks', 'puzzle', 'board game'])}`,
                `Draw yourself playing with your favorite toys`,
                `Draw a toy that you wish existed`
            ]),
            tips: getRandomElement([
                'Make toys look fun and colorful',
                'Add playful details and decorations',
                'Use bright, happy colors',
                'Make the toy look like it would be fun to play with'
            ])
        },

        family: {
            title: 'My Family',
            instruction: getRandomElement([
                `Draw your ${getRandomElement(['family', 'mom and dad', 'parents', 'grandparents'])}`,
                `Draw a ${getRandomElement(['family dinner', 'family trip', 'birthday party', 'holiday'])}`,
                `Draw yourself with your ${getRandomElement(['sibling', 'pet', 'grandparent'])}`,
                `Draw your family doing something fun together`,
                `Draw a family portrait with everyone happy`
            ]),
            tips: getRandomElement([
                'Make everyone look happy and loving',
                'Use colors that represent your family',
                'Include details that show what your family likes to do',
                'Add a warm, cozy background'
            ])
        },

        sports: {
            title: 'Sports Star',
            instruction: getRandomElement([
                `Draw yourself playing ${getRandomElement(['soccer', 'basketball', 'swimming', 'gymnastics'])}`,
                `Draw a ${getRandomElement(['team', 'player', 'coach', 'referee'])}`,
                `Draw a ${getRandomElement(['trophy', 'medal', 'championship game', 'sports event'])}`,
                `Draw your favorite sports equipment`,
                `Draw a superhero who plays sports`
            ]),
            tips: getRandomElement([
                'Show movement and action',
                'Use bright team colors',
                'Make the player look determined and happy',
                'Add details like equipment or team logos'
            ])
        },

        adventure: {
            title: 'Adventure Time',
            instruction: getRandomElement([
                `Draw yourself on a ${getRandomElement(['treasure hunt', 'expedition', 'quest', 'journey'])}`,
                `Draw a ${getRandomElement(['jungle', 'desert', 'mountain', 'island'])} adventure`,
                `Draw finding ${getRandomElement(['treasure', 'secret cave', 'hidden temple', 'magical place'])}`,
                `Draw a ${getRandomElement(['hero', 'explorer', 'adventurer', 'treasure hunter'])}`,
                `Draw a map to an exciting place`
            ]),
            tips: getRandomElement([
                'Add excitement and discovery to the scene',
                'Use adventurous colors (greens, browns, golds)',
                'Make the hero look brave and curious',
                'Include hidden details or surprises'
            ])
        },

        robots: {
            title: 'Robot World',
            instruction: getRandomElement([
                `Draw a ${getRandomElement(['friendly', 'helpful', 'cool', 'fun'])} robot`,
                `Draw a ${getRandomElement(['robot pet', 'robot friend', 'robot helper', 'robot toy'])}`,
                `Draw a ${getRandomElement(['robot factory', 'robot city', 'robot school', 'robot playground'])}`,
                `Draw yourself with a robot friend`,
                `Draw a robot that you would want to invent`
            ]),
            tips: getRandomElement([
                'Use silvers, blues, and metallic colors',
                'Make the robot look friendly and helpful',
                'Add glowing lights or screens',
                'Include robotic details like gears or circuits'
            ])
        },

        dinosaurs: {
            title: 'Dinosaur Discovery',
            instruction: getRandomElement([
                `Draw a ${getRandomElement(['T-Rex', 'Stegosaurus', 'Brachiosaurus', 'Triceratops'])}`,
                `Draw a ${getRandomElement(['dinosaur family', 'baby dinosaur', 'dinosaur park', 'prehistoric scene'])}`,
                `Draw yourself with a ${getRandomElement(['dinosaur friend', 'pet dinosaur', 'dinosaur adventure'])}`,
                `Draw a ${getRandomElement(['dinosaur egg', 'dinosaur nest', 'fossil', 'volcanic eruption'])}`,
                `Draw what you think dinosaurs looked like`
            ]),
            tips: getRandomElement([
                'Use earthy colors (greens, browns, grays)',
                'Make the dinosaur look cool but friendly',
                'Add plants and trees from prehistoric times',
                'Include rocks, volcanoes, or prehistoric landscapes'
            ])
        },

        weather: {
            title: 'Weather Watcher',
            instruction: getRandomElement([
                `Draw a ${getRandomElement(['sunny', 'rainy', 'stormy', 'snowy'])} day`,
                `Draw yourself in ${getRandomElement(['rain', 'snow', 'sunshine', 'wind'])}`,
                `Draw a ${getRandomElement(['rainbow', 'lightning', 'snowman', 'umbrella'])}`,
                `Draw different types of weather in one picture`,
                `Draw your favorite weather and what you do in it`
            ]),
            tips: getRandomElement([
                'Use colors that match the weather',
                'Add details like raindrops or snowflakes',
                'Make the scene feel like that type of weather',
                'Include things you like to do in that weather'
            ])
        },

        school: {
            title: 'School Adventures',
            instruction: getRandomElement([
                `Draw your ${getRandomElement(['classroom', 'teacher', 'school friends'])}`,
                `Draw yourself at ${getRandomElement(['recess', 'lunch', 'art class', 'library'])}`,
                `Draw a ${getRandomElement(['school bus', 'playground', 'school project', 'school event'])}`,
                `Draw your favorite subject at school`,
                `Draw your dream school`
            ]),
            tips: getRandomElement([
                'Use bright, learning colors',
                'Make the school look friendly and fun',
                'Include details like books, pencils, or art supplies',
                'Show learning and friendship'
            ])
        },

        holidays: {
            title: 'Holiday Fun',
            instruction: getRandomElement([
                `Draw a ${getRandomElement(['Christmas', 'Halloween', 'Easter', 'birthday'])} celebration`,
                `Draw yourself during your favorite holiday`,
                `Draw a ${getRandomElement(['holiday decoration', 'gift', 'tradition', 'party'])}`,
                `Draw a holiday with your family`,
                `Draw a magical holiday creature (Santa, Easter bunny, etc.)`
            ]),
            tips: getRandomElement([
                'Use festive, holiday colors',
                'Include holiday symbols and decorations',
                'Make the scene warm and joyful',
                'Show celebration and happiness'
            ])
        }
    };

    const categoryData = prompts[category] || prompts.animals;

    return {
        title: categoryData.title,
        instruction: categoryData.instruction,
        tips: categoryData.tips,
        difficulty: difficultyInfo
    };
}

// Start server
app.listen(PORT, () => {
    console.log(`DrawSpark server running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to use the app`);
});

module.exports = app;
