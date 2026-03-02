# Plaimanas Web Developer - Practical Test

This project is a web development technical test for the Web Developer position at **Plaimanas**. The goal is to demonstrate core front-end skills including HTML, CSS and JavaScript without the use of heavy frameworks.


## 🔗 Demo
- **Live Demo:** [https://savant777.github.io/plaimanas-web-developer-test/](https://savant777.github.io/plaimanas-web-developer-test/)


## 🛠 Tech Stack & Implementation
- **HTML5**: Semantic structure for SEO and accessibility.
- **CSS3 (Modern Features)**: 
    - **CSS Nesting**: Organized and maintainable styling structure.
    - **Animation Timeline**: Scroll-driven animations for the logo shrink effect.
    - **Relative Color Syntax**: Dynamic color management using `rgb(from ...)`.
    - **Flexbox & CSS Grid**: Responsive layout management.
- **Vanilla JavaScript**: 
    - Custom Dropdown Select with state management.
    - Floating Label interactions.
    - Mobile Navigation with accordion logic.
    - Form handling with `FormData`.


## 🌟 Key Features
- **Responsive Design**: Fully supports Desktop and Mobile views based on the provided Figma design.
- **Interactive Forms**: Floating labels that react to user input and a custom-built subject selector.
- **Smooth Animations**: Scroll-driven logo scaling and infinite text marquee in the footer section.


## ⏱ Time Spent
Total time spent: Approximately **24 hours**.
- **Day 1 (6 hrs):** Navigation System (HTML, CSS, JS with Smooth Accordion/Dropdown)
- **Day 2 (6 hrs):** Core Sections (Logo Shrink Animation, Hero, News Product, Best Seller, Collection Grid)
- **Day 3 (8 hrs):** Functional Sections (Infinite Scroll, Work Section, FAQ with Custom Accordion)
- **Day 4 (4 hrs):** Final Sections & Polishing (Contact Section with Custom Select, Newsletter, CSS Refactoring)


## 💡 Challenges & Solutions
- **Custom Dropdown Select**: Challenge was to make the custom select behave like a native one while maintaining the "Floating Label" effect. I solved this by using a `hidden input` to store values and toggling CSS classes (`.is-selected`, `.has-value`) via JavaScript to trigger label animations.
- **Scroll-driven Animation**: To make the logo shrink naturally on scroll, I utilized `@supports (animation-timeline: scroll())` to ensure a modern experience for supporting browsers while maintaining a clean fallback for others.
- **Event Bubbling in Navigation**: Fixed a double-toggle issue on mobile by using `e.stopPropagation()` and narrowing down event listeners to specific link elements instead of the entire dropdown container.
- **Smooth Accordion Animation**: Traditionally, animating the `<details>` element's height transition is difficult because the content's height is unknown until opened. I implemented the modern **`::details-content`** pseudo-element along with `interpolate-size: allow-keywords` to achieve a smooth height transition from `0` to `auto` without relying on JavaScript height calculations. This demonstrates a forward-thinking approach to CSS performance and native element styling.


## 🚀 How to Run
1. Clone the repository or download the ZIP file.
2. Open `index.html` directly in any modern web browser.
*No build commands or local servers are required.*
