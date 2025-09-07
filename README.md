# Handpicked Reports

A simple, modern HTML page for displaying handpicked reports with a beautiful UI and responsive design.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-friendly interface
- ⚡ Fast loading static site
- 🔒 Security headers included
- 🚀 Ready for Vercel deployment

## Quick Start

### Local Development

1. Clone this repository
2. Open `index.html` in your browser, or
3. Use Vercel CLI for local development:
   ```bash
   npm install
   npm run dev
   ```

### Deploy to Vercel

#### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to connect your project to Vercel

#### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect the static site and deploy it

### Custom Domain Setup

1. In your Vercel dashboard, go to your project
2. Click on "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions
5. Vercel will automatically provision SSL certificates

## Project Structure

```
handpickedreports/
├── index.html          # Main HTML page
├── vercel.json         # Vercel configuration
├── package.json        # Project dependencies
└── README.md          # This file
```

## Customization

- Edit `index.html` to modify the content and styling
- Update `vercel.json` for advanced Vercel configuration
- Modify `package.json` for additional dependencies

## License

MIT