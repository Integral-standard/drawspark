# DrawSpark - AI Drawing Prompts for Kids

🎨 Safe, creative, fun AI-generated drawing prompts for children ages 4-14.

## Features

- **15+ Drawing Categories:** Animals, nature, fantasy, space, underwater, food, toys, family, sports, adventure, robots, dinosaurs, weather, school, holidays
- **Age-Appropriate:** Prompts tailored to your child's age (4-14)
- **Difficulty Levels:** Easy (simple shapes), Medium (creative), Hard (complex)
- **Drawing Tips:** Helpful tips for each prompt
- **Kid-Friendly Interface:** Bright colors, easy to use

## Tech Stack

- **Backend:** Node.js + Express
- **Frontend:** Vanilla HTML/CSS/JS (no dependencies)
- **AI:** Randomized prompts with intelligent templates
- **Deployment:** Free tier (Vercel/Netlify/Railway)

## Getting Started

### Prerequisites
- Node.js 14+
- npm or yarn

### Installation

```bash
cd drawspark
npm install
npm start
```

Visit http://localhost:3001

### Usage

1. Enter your child's age (4-14)
2. Choose a category (15+ options)
3. Select difficulty level (easy/medium/hard)
4. Click "Generate Prompt"
5. Draw! 🎨

## API

### GET /api/health
Health check endpoint.

### GET /api/categories
List available drawing categories.

### POST /api/generate
Generate a drawing prompt.

**Request:**
```json
{
  "age": 6,
  "category": "animals",
  "difficulty": "medium"
}
```

**Response:**
```json
{
  "prompt": {
    "title": "Animals Drawing",
    "instruction": "Draw a cute puppy playing in the grass",
    "tips": "Use bright, happy colors",
    "difficulty": "More details, creative"
  },
  "age": 6,
  "category": "animals",
  "difficulty": "medium",
  "generatedAt": "2026-03-16T17:00:00.000Z"
}
```

## Categories

### Animals 🐰
Cute and friendly animals to draw.

### Nature 🌿
Beautiful outdoor scenes and landscapes.

### Fantasy 🧚
Magical creatures and enchanted places.

### Space 🚀
Rockets, planets, astronauts, and space adventures.

### Underwater 🌊
Ocean creatures, coral reefs, and underwater worlds.

### Food 🍕
Yummy food to draw and imagine.

### Toys 🧸
Fun toys and playtime scenes.

### Family 👨
Draw your family and loved ones.

### Sports ⚽
Sports action and athletic adventures.

### Adventure 🏔️
Exciting quests and treasure hunts.

### Robots 🤖
Cool robots and mechanical friends.

### Dinosaurs 🦕
Prehistoric creatures and fossil discoveries.

### Weather 🌤
Different weather types and what to do in them.

### School 📚
Classroom adventures and school activities.

### Holidays 🎉
Celebrations, decorations, and holiday fun.

## Safety

- Age-appropriate content
- Positive, creative prompts
- No scary or inappropriate themes
- Parental controls ready (for premium features)

## Roadmap

- [ ] AI-generated prompts (Ollama integration)
- [ ] Save favorite prompts
- [ ] Gallery of drawings
- [ ] Share with community
- [ ] Premium features (unlimited prompts, custom categories)
- [ ] Mobile apps

## Monetization

**Free Tier:**
- 10 prompts per day
- All categories
- Difficulty levels

**Premium ($4.99/month or $39.99/year):**
- Unlimited prompts
- Save favorites
- Community gallery
- Custom categories
- Priority features

## License

MIT License - Open source for community

---

**Built by:** Clawd_IS
**Target:** Kids ages 4-14
**Mission:** Spark creativity, one drawing at a time 🚀
