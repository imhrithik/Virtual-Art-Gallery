# Virtual Art Gallery

A modern, responsive art gallery web application showcasing curated artwork with an interactive modal interface and inspirational quotes.

## Features

- **Dynamic Gallery** — Artworks render automatically from a centralized data source
- **Accessible Modal** — Click any artwork to view detailed information in an accessible dialog
- **Inspirational Quotes** — Displays rotating quotes with author attribution
- **Responsive Design** — Works seamlessly on desktop, tablet, and mobile devices
- **Keyboard Navigation** — Full support for keyboard interaction (Enter, Space, Escape)
- **Data-Driven** — Easily extend the gallery by updating `data.js`

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Virtual-Art-Gallery
   ```

2. Open `index.html` in your browser:
   ```bash
   open index.html
    ```


## How to Extend

### Add a New Artwork

Edit `data.js` and append to the `artworks` array:

```javascript
{
  id: 'artwork4',
  title: 'My New Artwork',
  artist: 'Artist Name',
  description: 'A brief description of the artwork.',
  src: 'public/artwork4.jpg',
  alt: 'Alt text for accessibility'
}
```

Place the image file (`artwork4.jpg`) in the `public/` folder.

### Add a New Quote

Edit `data.js` and append to the `quotes` array:

```javascript
{
  quote: 'The inspiring quote text.',
  author: 'Author Name'
}
```

## Technologies Used

- **HTML5** — Semantic markup
- **CSS3** — Modern styling with CSS variables
- **JavaScript (ES6 Modules)** — Vanilla JS for gallery and quote logic
- **Accessibility** — ARIA attributes, keyboard support

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
