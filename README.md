# Firebase Service

A simple Firebase project for web development.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase CLI

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd firebase-service
```

2. Install dependencies:
```bash
npm install
```

3. Install Firebase CLI globally:
```bash
npm install -g firebase-tools
```

## Setup

1. Login to Firebase:
```bash
firebase login
```

2. Initialize Firebase project:
```bash
firebase init
```

3. Configure your Firebase project settings in `firebase.json`

## Development

Start the local development server:
```bash
npm start
```

Run Firebase emulators:
```bash
firebase emulators:start
```

## Deployment

Deploy to Firebase Hosting:
```bash
firebase deploy
```

Deploy specific services:
```bash
firebase deploy --only hosting
firebase deploy --only functions
```

## Commands Reference

- `firebase serve` - Serve your app locally
- `firebase deploy` - Deploy to Firebase
- `firebase use <project-id>` - Switch Firebase projects
- `firebase projects:list` - List available projects

## Project Structure

```
firebase-service/
├── public/
├── src/
├── firebase.json
└── package.json
```