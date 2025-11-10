# City Guide - Tilburg & Eindhoven

A modern Progressive Web App (PWA) providing comprehensive guides to two vibrant Dutch cities: Tilburg and Eindhoven. Built with the latest web technologies to deliver a fast, installable, and offline-capable experience.

## Features

- **Progressive Web App** - Install on your device for a native app experience
- **Lightning Fast** - Optimized performance with Next.js 16
- **Offline Support** - Access content without an internet connection
- **Modern Design** - Clean, responsive UI with Tailwind CSS v4
- **Comprehensive Content** - Attractions, events, food, transportation, and local insights

## Cities Covered

### Tilburg

The creative heart of Noord-Brabant featuring:

- Doloris' Meta Maze - Surrealist art installation
- De Pont Museum - Contemporary art
- LocHal Library - Award-winning architecture
- Tilburgse Kermis - Largest funfair in the Benelux

### Eindhoven

The design capital of the Netherlands showcasing:

- Philips Museum - Innovation history
- Van Abbemuseum - Modern art collection
- Strijp-S Design District - Creative hub
- Stratumseind - Longest pub street in Benelux

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **PWA:** Service Worker for offline functionality
- **Deployment Ready:** Optimized for Vercel/Netlify

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/city-guide.git

# Navigate to project directory
cd city-guide

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
app/
├── components/
│   └── Navigation.tsx      # Main navigation component
├── tilburg/
│   └── page.tsx           # Tilburg city page
├── eindhoven/
│   └── page.tsx           # Eindhoven city page
├── page.tsx               # Homepage
├── layout.tsx             # Root layout with metadata
├── globals.css            # Global styles and theme
└── manifest.ts            # PWA manifest configuration

public/
├── icons/                 # App icons for PWA
├── screenshots/           # App screenshots
└── apple-touch-icon.png   # iOS icon
```

## Color Palette

The design uses a warm, inviting color scheme inspired by Dutch culture:

- **Sky** (#B4D2D9) - Primary accent
- **Peach** (#F2CCB6) - Secondary accent
- **Rose** (#BF8B7E) - Tertiary accent
- **Brown** (#59261B) - Dark accent
- **Coral** (#BF4A3F) - Action color

## PWA Features

- **Installable:** Add to home screen on mobile and desktop
- **Offline Mode:** Full content access without internet
- **App-like Experience:** Standalone display mode
- **Optimized Performance:** Instant loading and smooth interactions

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## License

This project is open source and available under the MIT License.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## Author

Created as a showcase of modern web development with Next.js and Tailwind CSS.

---

**Made with love for Brabant**
