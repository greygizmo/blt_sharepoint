# BLT Advanced Manufacturing Intranet

A modern, responsive intranet website for BLT Advanced Manufacturing, showcasing the company's metal 3D printing solutions, technology, and services.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices from mobile to desktop
- **Modern UI**: Built with Next.js, React, and TailwindCSS for a sleek, modern interface
- **Interactive Elements**: Animations, carousels, accordions, and tabs for engaging user experience
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA attributes
- **Performance Optimized**: Fast loading times with optimized images and code splitting

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **UI Library**: [React](https://reactjs.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts

## Project Structure

```
blt-intranet/
├── public/            # Static assets (images, icons)
├── src/
│   ├── app/           # Next.js app router
│   ├── components/    # React components
│   │   ├── sections/  # Page sections
│   │   └── ui/        # UI components
│   └── lib/           # Utility functions
├── tailwind.config.js # TailwindCSS configuration
└── package.json       # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-organization/blt-intranet.git
   cd blt-intranet
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

```bash
npm run build
# or
yarn build
```

Then, you can start the production server:

```bash
npm run start
# or
yarn start
```

## GitHub Pages Deployment

This project is configured to be deployed on GitHub Pages automatically when changes are pushed to the master branch. The deployment is handled by GitHub Actions.

### How it works

1. The Next.js configuration (`next.config.js`) is set up for static export with:
   ```javascript
   {
     output: 'export',
     basePath: '/blt_sharepoint',
     assetPrefix: '/blt_sharepoint/',
     images: {
       unoptimized: true
     }
   }
   ```

2. A GitHub Actions workflow (`.github/workflows/deploy.yml`) handles:
   - Building the application
   - Deploying to GitHub Pages

### Manual Deployment

If you need to trigger a deployment manually:

1. Go to the repository on GitHub
2. Navigate to the "Actions" tab
3. Select "Deploy to GitHub Pages" workflow
4. Click "Run workflow" and select the branch

### Viewing the Deployed Site

Once deployed, the site will be available at:
`https://yourusername.github.io/blt_sharepoint/`

## Customization

### Colors

The main brand colors are defined in `tailwind.config.js`:

- Primary Orange: `#EA5504`
- Dark Orange: `#D14A00`
- Blue: `#0A2463`
- Gray: `#4A4A4A`

### Images

Replace the placeholder images in the `public/images/` directory with your actual brand images.

### Content

Update the content in the section components located in `src/components/sections/` to match your company's information.

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

## Contact

For any questions or support, please contact your IT department or the development team. 