I've examined your current website structure and can help you create a simplified static version that maintains all the core functionality. Here's what I found:

Your main website is built with Next.js, with a modern design using Tailwind CSS
Your showcase section is built with Angular (as seen in the <app-root> tag)
You have a projects.json file containing detailed information about all your projects
You have custom JavaScript libraries (including badge.js) that need to be preserved
Based on this analysis, I'll help you create a simplified static site plan. Here's my recommendation for converting your portfolio website to a lightweight static implementation:

Project Structure for Your New Static Site

portfolio-static/
│
├── index.html # Homepage
├── about.html # About page
├── showcase/ # Project showcase section
│ ├── index.html # Main showcase page
│ └── project-template.html # Template for individual projects
├── testimonials.html # Testimonials page
├── photography.html # Photography page
│
├── css/
│ ├── main.css # Core styles
│ ├── normalize.css # CSS reset
│ └── components/ # Component-specific styles
│ ├── header.css
│ ├── footer.css
│ ├── showcase.css
│ └── ...
│
├── js/
│ ├── main.js # Core functionality
│ ├── badge.js # Preserved badge.js library
│ ├── showcase.js # Project showcase functionality
│ └── utils/ # Utility functions
│ ├── animation.js
│ └── ...
│
├── images/ # Image assets
│ ├── profile.jpeg
│ ├── logo.svg
│ └── projects/ # Project images
│
└── assets/
└── projects.json # Your existing project data

Implementation Approach

1. Homepage (index.html)
   The homepage will be a static HTML version of your current design, featuring:

A responsive header with navigation
Hero section with your profile image and introduction
Featured projects section
Testimonials section (abbreviated)
Contact form 2. Project Showcase
The showcase section will be converted from Angular to vanilla JavaScript:

Load project data from projects.json using the Fetch API
Use JavaScript to dynamically generate project cards/entries
Implement filtering and sorting functionality with plain JavaScript
Create a simple template system for consistent project display 3. Preserving Core Functionality
For your badge.js library and other JavaScript dependencies:

Keep the files in their original structure
Ensure all paths are correctly updated in the new implementation
Document any external sites that rely on these libraries 4. Styling Approach
I recommend using:

A small CSS reset/normalize library
Custom CSS variables for theming (instead of Tailwind's utility classes)
Flexbox and CSS Grid for layouts
Simple media queries for responsiveness
Optional: A minimal CSS framework like Skeleton or Pure.css if you prefer 5. Performance Optimization
Minify CSS and JavaScript files
Optimize images using modern formats (WebP with fallbacks)
Implement lazy loading for images
Use appropriate caching headers
Implementation Steps
Create the Base HTML Structure

Set up the core HTML files with semantic markup
Implement responsive navigation
Convert Styles

Create a core CSS file with your design system (colors, typography, etc.)
Implement component-specific styles
Convert the Project Showcase

Create a vanilla JS module to load and display projects
Implement filtering, sorting, and search functionality
Create project detail pages
Add Interactive Elements

Implement form handling
Add smooth scrolling and animations where needed
Add modal/lightbox functionality for images
Testing & Optimization

Test across browsers
Optimize for mobile devices
Validate HTML/CSS
Check accessibility
