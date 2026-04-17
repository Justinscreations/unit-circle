# Unit Circle Interactive Website

This is an interactive website that displays a unit circle. Click on the radial lines to view information about the radius, quadrant, and angle for that point.

## Files

- `index.html`: The main HTML file
- `style.css`: Styles for the website
- `script.js`: JavaScript for drawing the circle and handling interactions

## How to Run

Open `index.html` in a web browser to view the unit circle. Click on any of the blue radial lines to see the details.

If you want to serve it locally with a server (recommended for better compatibility), you can use a simple HTTP server:

- With Python (if installed): `python -m http.server 8000` then open http://localhost:8000
- With Node.js (if installed): `npx http-server` then open the provided URL

## Features

- Dark theme with modern Roboto font for better readability
- Animated drawing of radial lines on page load
- Click to highlight: Clicking a radial line makes it thicker and displays details
- Color-coded radial lines by quadrant (Red: Q1, Teal: Q2, Blue: Q3, Orange: Q4)
- Labeled radial lines with radian measurements (e.g., π/6, π/4)
- Clickable radial lines at key angles (0°, 30°, 45°, 60°, 90°, 120°, 135°, 150°, 180°, 210°, 225°, 240°, 270°, 300°, 315°, 330°)
- Displays angle, exact coordinates (x, y) in fractional form, and signs of sin, cos, and tanos, and tan on click