# Contributing to TilTool

Thank you for your interest in contributing to TilTool! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful and constructive in all interactions. We're committed to providing a welcoming and inclusive environment.

## Getting Started

### Prerequisites
- Git
- Node.js (v14 or higher)
- npm (v6 or higher)
- A modern web browser

### Fork and Clone

```bash
# Fork the repository on GitHub
# Clone your fork
git clone https://github.com/YOUR_USERNAME/Tiltool-App-.git
cd Tiltool-App-
```

### Set Up Development Environment

```bash
# Install dependencies
npm install

# Run tests
npm test

# Start development server
npm start
```

## Development Workflow

### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
# or for bug fixes:
git checkout -b fix/bug-description
```

### 2. Make Your Changes

- Follow the existing code style
- Write clear, descriptive commit messages
- Keep commits atomic (one feature/fix per commit)
- Update documentation as needed

### 3. Test Your Changes

```bash
npm test
npm run lint
```

### 4. Commit and Push

```bash
git add .
git commit -m "Descriptive commit message"
git push origin feature/your-feature-name
```

### 5. Create a Pull Request

- Go to GitHub and create a pull request
- Provide a clear title and description
- Reference any related issues
- Wait for review feedback

## Coding Standards

### JavaScript
- Use 'use strict' mode
- Use meaningful variable names
- Comment complex logic
- Follow the TilTool namespace pattern
- Use JSDoc for functions

### HTML
- Use semantic HTML5 elements
- Include ARIA labels for accessibility
- Maintain proper indentation

### CSS
- Use CSS custom properties (variables)
- Follow mobile-first responsive design
- Keep specificity low
- Organize by component

### Error Codes
- Follow the ERR_XXX pattern
- Document new error codes
- Use consistent error handling

## Testing Guidelines

### Unit Tests
- Test input validation
- Test calculation accuracy
- Test error handling
- Aim for >80% coverage

### Integration Tests
- Test full calculation flow
- Test UI interactions
- Test export functionality

### Manual Testing
- Test on multiple browsers
- Test on mobile devices
- Test with edge cases

## Documentation

When adding features:
1. Update relevant documentation in `docs/`
2. Update README.md if appropriate
3. Add JSDoc comments to new functions
4. Include usage examples

## Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code refactoring without feature changes
- **test**: Adding or updating tests
- **perf**: Performance improvements

### Example
```
feat(calculation): add advanced pattern support

Added support for diagonal tile patterns with automatic grout calculation.
Incremented waste factor for complex layouts.

Closes #123
```

## Bug Reports

When reporting bugs:
1. Use a clear, descriptive title
2. Provide error code if applicable
3. Include steps to reproduce
4. Specify browser and OS
5. Include screenshots if relevant

## Feature Requests

When suggesting features:
1. Provide clear use case
2. Explain the benefit to users
3. Consider construction industry standards
4. Discuss implementation approach

## Pull Request Review Process

1. **Automated Checks**: Tests and linting must pass
2. **Code Review**: At least one maintainer review
3. **Testing**: Manual testing on multiple browsers
4. **Documentation**: Updated if needed
5. **Merge**: After approval

## Questions?

Feel free to:
- Open an issue for discussion
- Ask in the GitHub discussions
- Email: support@tiltool.app

## Recognition

Contributors will be recognized in:
- CONTRIBUTORS.md
- GitHub releases
- Project website

Thank you for contributing to TilTool!
