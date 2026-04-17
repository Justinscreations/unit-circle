document.addEventListener('DOMContentLoaded', function() {
    const svg = document.getElementById('unit-circle');
    const info = document.getElementById('info');
    const centerX = 200;
    const centerY = 200;
    const radius = 150;

    // Draw the unit circle
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', centerX);
    circle.setAttribute('cy', centerY);
    circle.setAttribute('r', radius);
    circle.setAttribute('stroke', '#ffffff');
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke-width', '2');
    svg.appendChild(circle);

    // Colors for quadrants
    const colors = {
        1: '#FF6B6B', // Red for Q1
        2: '#4ECDC4', // Teal for Q2
        3: '#45B7D1', // Blue for Q3
        4: '#FFA07A'  // Orange for Q4
    };

    // Angles in degrees
    const angles = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330];

    let highlightedLine = null;

    angles.forEach((angle, index) => {
        const theta = angle * Math.PI / 180;
        const x = centerX + radius * Math.cos(theta);
        const y = centerY + radius * Math.sin(theta);
        const quadrant = Math.floor(angle / 90) + 1;

        // Draw radial line
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', centerX);
        line.setAttribute('y1', centerY);
        line.setAttribute('x2', x);
        line.setAttribute('y2', y);
        line.setAttribute('stroke', colors[quadrant]);
        line.setAttribute('stroke-width', '3');
        line.classList.add('radial-line');
        line.style.cursor = 'pointer';

        // Stagger animation delay
        line.style.animationDelay = `${index * 0.1}s`;

        // Add click event
        line.addEventListener('click', function() {
            // Reset previous highlight
            if (highlightedLine) {
                highlightedLine.setAttribute('stroke-width', '3');
            }
            // Highlight current
            line.setAttribute('stroke-width', '6');
            highlightedLine = line;

            // Show info
            const signs = getTrigSigns(angle);
            const exactCoords = getExactCoordinates(angle);
            info.innerHTML = `Angle: ${angle}°<br>Coordinates: ${exactCoords}<br>Sin: ${signs.sin}<br>Cos: ${signs.cos}<br>Tan: ${signs.tan}`;
        });

        svg.appendChild(line);

        // Add label
        const labelRadius = radius + 25;
        const labelX = centerX + labelRadius * Math.cos(theta);
        const labelY = centerY + labelRadius * Math.sin(theta);
        const radianLabel = getRadianLabel(angle);

        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', labelX);
        text.setAttribute('y', labelY);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('dominant-baseline', 'middle');
        text.setAttribute('font-size', '14');
        text.setAttribute('fill', colors[quadrant]);
        text.textContent = radianLabel;
        text.classList.add('label');
        text.style.animationDelay = `${index * 0.1 + 1.5}s`; // Appear after line animation

        svg.appendChild(text);
    });

    function getQuadrantName(angle) {
        if (angle >= 0 && angle < 90) return 'I';
        if (angle >= 90 && angle < 180) return 'II';
        if (angle >= 180 && angle < 270) return 'III';
        if (angle >= 270 && angle < 360) return 'IV';
        return 'Unknown';
    }

    function getRadianLabel(angle) {
        switch (angle) {
            case 0: return '0';
            case 30: return 'π/6';
            case 45: return 'π/4';
            case 60: return 'π/3';
            case 90: return 'π/2';
            case 120: return '2π/3';
            case 135: return '3π/4';
            case 150: return '5π/6';
            case 180: return 'π';
            case 210: return '7π/6';
            case 225: return '5π/4';
            case 240: return '4π/3';
            case 270: return '3π/2';
            case 300: return '5π/3';
            case 315: return '7π/4';
            case 330: return '11π/6';
            default: return '';
        }
    }

    function getExactCoordinates(angle) {
        switch (angle) {
            case 0: return '(1, 0)';
            case 30: return '(√3/2, 1/2)';
            case 45: return '(√2/2, √2/2)';
            case 60: return '(1/2, √3/2)';
            case 90: return '(0, 1)';
            case 120: return '(-1/2, √3/2)';
            case 135: return '(-√2/2, √2/2)';
            case 150: return '(-√3/2, 1/2)';
            case 180: return '(-1, 0)';
            case 210: return '(-√3/2, -1/2)';
            case 225: return '(-√2/2, -√2/2)';
            case 240: return '(-1/2, -√3/2)';
            case 270: return '(0, -1)';
            case 300: return '(1/2, -√3/2)';
            case 315: return '(√2/2, -√2/2)';
            case 330: return '(√3/2, -1/2)';
            default: return '(0, 0)';
        }
    }

    function getTrigSigns(angle) {
        const quadrant = Math.floor(angle / 90) + 1;
        let sin, cos, tan;
        if (quadrant === 1) {
            sin = '+'; cos = '+'; tan = '+';
        } else if (quadrant === 2) {
            sin = '+'; cos = '-'; tan = '-';
        } else if (quadrant === 3) {
            sin = '-'; cos = '-'; tan = '+';
        } else if (quadrant === 4) {
            sin = '-'; cos = '+'; tan = '-';
        }
        return { sin, cos, tan };
    }
});