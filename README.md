# HMS Marketing Website

A modern, responsive marketing website built with React, Tailwind CSS, and Vite.

## Features

- Responsive design with mobile-first approach
- Modern UI with animations using Framer Motion and GSAP
- Light/Dark mode support
- Contact form with EmailJS integration
- SEO optimized
- Performance optimized with lazy loading and code splitting

## Technology Stack

- React 18
- React Router v7
- Tailwind CSS
- Framer Motion
- GSAP
- EmailJS
- Vite

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/hms-marketing.git
cd hms-marketing
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Create a `.env` file in the root directory based on `.env.example` and fill in your own values:
```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_TO_EMAIL=your_email@example.com
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Build for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

Preview the production build:

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
/
├── public/              # Static files
├── src/
│   ├── assets/          # Images, fonts, etc.
│   │   ├── Forms/       # Form components
│   │   ├── Sections/    # Section components
│   │   └── UI/          # UI components
│   ├── context/         # React context
│   ├── hooks/           # Custom hooks
│   ├── layouts/         # Layout components
│   ├── pages/           # Page components
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main App component
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── .env                 # Environment variables (not committed)
├── .env.example         # Example environment variables
├── .eslintrc.js         # ESLint configuration
├── .gitignore           # Git ignore file
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

## Best Practices

- Keep components small and focused on a single responsibility
- Use lazy loading for components that are not needed on initial render
- Optimize images and use responsive images where possible
- Use constants for values that are reused throughout the application
- Implement proper error handling and loading states

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries, please contact [your-email@example.com](mailto:your-email@example.com). 