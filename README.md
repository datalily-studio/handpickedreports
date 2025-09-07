# Industry Reports Design Inspiration

A curated collection of the best industry report designs on the web, inspired by modern SaaS design patterns. This project provides a clean, dark-themed interface for browsing and discovering industry report design inspiration.

## Features

- **Dark Theme Design**: Modern dark interface with green accent colors
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Filters**: Filter reports by type, industry, style, format, and year
- **Random Discovery**: Random button to discover new reports
- **Email Subscription**: Weekly newsletter signup
- **Modal Views**: Detailed report information in popup modals
- **Manual Input**: Easy-to-use functions for adding new reports

## Getting Started

1. Open `index.html` in your web browser
2. Browse the sample reports
3. Use filters to find specific types of reports
4. Click the "Random" button to discover new designs
5. Subscribe to the weekly newsletter

## Adding New Reports

You can manually add new reports using the JavaScript console or by modifying the `reportsData` array in `script.js`.

### Using the Console

```javascript
// Add a new report
addReport({
    title: "Your Report Title",
    industry: "Technology",
    type: "Annual Report",
    format: "PDF",
    year: 2024,
    style: "Modern",
    description: "Description of your report",
    url: "https://your-report-url.com"
});
```

### Direct Array Modification

Edit the `reportsData` array in `script.js`:

```javascript
const reportsData = [
    // ... existing reports
    {
        id: 7,
        title: "Your New Report",
        industry: "Healthcare",
        type: "Research Report",
        format: "Interactive",
        year: 2024,
        style: "Professional",
        description: "Your report description",
        image: "https://your-image-url.com/image.jpg",
        url: "https://your-report-url.com"
    }
];
```

## Report Data Structure

Each report should have the following properties:

- `id`: Unique identifier (number)
- `title`: Report title (string)
- `industry`: Industry category (string)
- `type`: Report type (string)
- `format`: Report format (string)
- `year`: Publication year (number)
- `style`: Design style (string)
- `description`: Report description (string)
- `image`: Image URL (string, optional)
- `url`: Report URL (string)

## Available Filter Options

### Report Types
- Annual Report
- Market Research
- White Paper
- Research Report
- Industry Analysis
- Case Study

### Industries
- Technology
- Healthcare
- Finance
- Energy
- Retail
- Manufacturing
- Education
- Automotive

### Styles
- Modern
- Professional
- Corporate
- Creative
- Technical
- Minimalist

### Formats
- PDF
- Interactive
- Web
- Print
- Video

## Customization

### Colors
The main color scheme can be customized in `styles.css`:
- Background: `#121212`
- Accent: `#00ff80`
- Text: `#ffffff`

### Adding New Filter Options
Edit the `filterOptions` object in `script.js` to add new filter categories or options.

### Styling
All styles are contained in `styles.css` with clear section comments for easy customization.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.
