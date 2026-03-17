# Contributing to DrawSpark

Thank you for your interest in contributing to DrawSpark! We welcome contributions from the community to make DrawSpark even better for kids and parents.

---

## How to Contribute

### Reporting Bugs
- Check existing issues first
- Use the bug report template
- Include steps to reproduce
- Provide screenshots if possible
- Include your environment (OS, browser, etc.)

### Suggesting Features
- Check existing feature requests
- Use the feature request template
- Describe the feature clearly
- Explain why it would be valuable
- Consider the target audience (kids 4-14)

### Submitting Code
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write tests (if applicable)
5. Commit your changes
6. Push to your fork
7. Submit a pull request

### Improving Documentation
- Fix typos or grammar
- Add examples
- Improve clarity
- Update outdated information
- Translate to other languages

---

## Code of Conduct

### Our Pledge
We pledge to make participation in our community a harassment-free experience for everyone.

### Our Standards
- Use welcoming and inclusive language
- Be respectful of differing viewpoints
- Gracefully accept constructive criticism
- Focus on what is best for the community

### Unacceptable Behavior
- Harassment or trolling
- Derogatory comments
- Personal or political attacks
- Public or private harassment
- Publishing others' private information

---

## Development Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation
```bash
git clone https://github.com/Integral-standard/drawspark.git
cd drawspark
npm install
```

### Running Locally
```bash
npm start
```
Visit http://localhost:3000

### Running Tests
```bash
npm test
```

---

## Project Structure

```
drawspark/
├── server.js           # Main Express server
├── prompts.js          # Drawing prompts and categories
├── package.json        # Dependencies and scripts
├── public/             # Frontend files
│   └── index.html     # Main web interface
├── .railway/          # Railway deployment config
├── DEPLOYMENT.md      # Deployment guide
├── MARKETING.md       # Marketing strategy
├── USER_GUIDE.md      # User documentation
└── CONTRIBUTING.md    # This file
```

---

## Coding Guidelines

### JavaScript/Node.js
- Use ES6+ features
- Follow Airbnb Style Guide
- Use meaningful variable names
- Write clear comments
- Keep functions small and focused
- Handle errors properly

### Frontend
- Keep it simple (vanilla JS for MVP)
- Make it mobile-responsive
- Ensure accessibility (ARIA labels, keyboard nav)
- Test on multiple browsers

---

## Testing

### What to Test
- All API endpoints
- Prompt generation for all categories
- Age validation
- Difficulty levels
- Error handling

### Testing Checklist
- [ ] Code runs locally without errors
- [ ] All existing tests pass
- [ ] New tests added (if applicable)
- [ ] Documentation updated
- [ ] Changes work on mobile and desktop

---

## Pull Request Process

### Before Submitting
- Run tests: `npm test`
- Check for linting errors
- Update documentation
- Add meaningful commit messages

### PR Template
Use the PR template in GitHub when submitting your pull request.

### Review Process
- Maintainers will review your PR
- They may request changes
- Be patient - we're volunteers!
- Respond to feedback promptly

---

## Feature Requests

### Before Requesting
- Check existing issues
- Consider if it fits the target audience
- Think about implementation complexity

### Great Features Include
- More drawing categories
- Better age-appropriate prompts
- Improved mobile experience
- Enhanced accessibility

### Lower Priority
- Complex AI integration (keep it simple for now)
- User accounts (future feature)
- Payment integration (future feature)

---

## Prompt Content Guidelines

### Safety First
- All prompts must be age-appropriate (4-14)
- No violence, scary content, or inappropriate themes
- Encourage creativity without being overwhelming

### Quality Standards
- Prompts should be clear and specific
- Include 1-4 elements depending on difficulty
- Use age-appropriate vocabulary
- Encourage imagination and storytelling

### Categories
We welcome new drawing categories! When adding a category:
- Keep it kid-friendly
- Include at least 10 prompts
- Cover different difficulty levels
- Use the existing structure in prompts.js

---

## Documentation

### Types of Documentation
- Code comments (inline)
- API documentation
- User guides
- Developer guides
- Deployment guides

### Writing Guidelines
- Keep it clear and concise
- Use examples
- Update for changes
- Consider the audience (users vs developers)

---

## Questions?

- Open an issue on GitHub
- Email: support@drawspark.ai
- Twitter: @DrawSparkApp

---

**Thank you for contributing! 🎨✨**

_Last Updated: 2026-03-17_
