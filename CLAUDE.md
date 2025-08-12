# Nabati Theme - Project Instructions for Claude

## Project Overview
This is a Shopify theme for Nabati, a vegan Indonesian food brand. The theme is custom-built with Liquid templates, Tailwind CSS, and minimal JavaScript for a clean, performance-focused e-commerce experience.

## Tech Stack
- **Platform**: Shopify (Online Store 2.0)
- **Template Language**: Liquid
- **Styling**: Tailwind CSS v3.4.17
- **JavaScript**: Vanilla JS with Vue.js for specific components
- **Build Tool**: Tailwind CLI for CSS compilation
- **Theme Author**: Mindthecode
- **Version**: 0.0.1

## Project Structure

```
nabati-theme/
├── assets/           # Static assets (fonts, images, compiled CSS)
├── config/          # Theme configuration files
├── layout/          # Main theme layout wrapper
├── locales/         # Translation files
├── sections/        # Reusable theme sections
├── snippets/        # Small reusable Liquid components
├── templates/       # Page templates
├── style.css        # Source Tailwind CSS file
└── tailwind.config.js
```

## Development Commands

```bash
# Install dependencies
npm install

# Run Tailwind CSS in watch mode
npm run tw
```

## Design System

### Color Palette
- **nabati-pink**: #FD2B53 (Primary accent)
- **peanut-brown**: #470101 (Text and borders)
- **bamboo-beige**: #F1E3BC (Background)
- **coconut-white**: #FFFFFF (Base white)

### Typography
- **bannertype**: Display/header font
- **rubik**: Body text font
- **p22mackinac**: Special accent font

## Code Conventions

### Liquid Templates
- Use kebab-case for file names
- Sections should include schema definitions
- Keep logic minimal in templates
- Use `{% comment %}` for commenting out code blocks

### CSS/Tailwind
- Use Tailwind utility classes primarily
- Custom colors defined in tailwind.config.js
- Compiled CSS outputs to `assets/styles.css.liquid`
- Avoid inline styles unless dynamic values needed

### JavaScript
- Vanilla JS for cart functionality
- Vue.js only for specific interactive components
- Keep JS minimal and performance-focused
- Use data attributes for element selection

## Important Files

### Theme Entry Points
- `layout/theme.liquid` - Main theme wrapper
- `templates/index.json` - Homepage configuration
- `config/settings_data.json` - Theme settings storage

### Key Sections
- `sections/header.liquid` - Site header with navigation
- `sections/cart-drawer.liquid` - Sliding cart drawer
- `sections/products.liquid` - Product grid display
- `sections/hero_new.liquid` - Hero banner section

## Shopify-Specific Considerations

### Liquid Variables
- Access cart data via `{{ cart }}`
- Product data via `{{ product }}`
- Collection data via `{{ collections }}`
- Theme settings via `{{ section.settings }}`

### Asset URLs
- Use `{{ 'filename' | asset_url }}` for asset references
- Use `{{ image | img_url: 'size' }}` for responsive images

### Forms
- Cart forms must POST to `/cart/add`
- Include product variant ID in hidden input

## Development Guidelines

### When Making Changes
1. Always preserve Shopify Liquid functionality
2. Test cart operations thoroughly
3. Ensure responsive design works on all devices
4. Keep performance in mind - minimize JS/CSS
5. Follow existing code patterns and conventions

### Editing Sections
1. Check section schema for available settings
2. Test in Shopify theme editor after changes
3. Ensure backward compatibility with existing content

### Adding New Features
1. Check if Shopify has native support first
2. Keep additions modular and reusable
3. Document any new settings in schema
4. Test across different product types

## Common Tasks

### Update Product Display
- Edit `sections/products.liquid`
- Modify Vue.js price formatting if needed
- Test with various product configurations

### Modify Cart Behavior
- Edit `sections/cart-drawer.liquid`
- Update cart JS in theme.liquid
- Test add/remove/update quantity functions

### Style Changes
1. Edit `style.css` with Tailwind classes
2. Run `npm run tw` to compile
3. Check `assets/styles.css.liquid` is updated

## Testing Checklist
- [ ] Cart add/remove/update works
- [ ] Responsive design on mobile/tablet/desktop
- [ ] Images load properly with correct sizing
- [ ] Navigation and links function correctly
- [ ] Checkout process initiates properly
- [ ] Theme editor preview works

## Notes
- This is a custom theme, not based on Dawn or other Shopify themes
- Minimal dependencies for better performance
- Focus on Indonesian food brand aesthetics
- Mobile-first responsive design approach