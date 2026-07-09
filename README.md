# Assignment 10 – Product Listing Using React

A dynamic product listing application built with React, demonstrating components, props, state management, event handling, search/filter/sort, and a shopping cart.

## Live Demo

> Deploy the app and add your live link here (GitHub Pages / Netlify / Vercel).

## Features

- **Product Grid** — Responsive layout (1 col mobile, 2 tablet, 3 desktop)
- **Search** — Real-time, case-insensitive search by product name
- **Filter** — Filter products by category (Electronics, Clothing, Home & Garden, Books)
- **Sort** — Sort by price (asc/desc) or name (A–Z / Z–A)
- **Cart** — Add items, view cart with total price, remove items
- **Reset** — One-click reset for all filters

## Tech Stack

- React 19
- Vite
- CSS (custom stylesheet)

## Project Structure

```
src/
├── components/
│   ├── ProductList.js
│   ├── ProductCard.js
│   ├── SearchBar.js
│   ├── FilterSort.js
│   ├── Cart.js
│   └── Navbar.js
├── data/
│   └── products.js
├── styles/
│   └── App.css
├── App.js
└── index.js
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
git clone <your-repo-url>
cd product-listing
npm install
```

### Run Locally

```bash
npm start
# or
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Deployment

### Netlify / Vercel

1. Push the repository to GitHub
2. Connect the repo on [Netlify](https://netlify.com) or [Vercel](https://vercel.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### GitHub Pages

Add to `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
})
```

Then deploy with GitHub Actions or `npm run build` and push the `dist` folder.

## React Concepts Used

| Concept | Implementation |
|---------|----------------|
| Functional Components | Navbar, SearchBar, FilterSort, ProductList, ProductCard, Cart |
| useState | products, cart, searchTerm, selectedCategory, sortOrder |
| useEffect | Load product data on mount |
| Props | Product data and callbacks passed to child components |
| Event Handling | onClick, onChange |
| Array Methods | map(), filter(), sort(), reduce() |
| Conditional Rendering | Empty cart, empty product list, cart badge |

## Author

Full Stack Development V8 — Assignment 10

## License

MIT
