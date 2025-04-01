// Floating Users Counter Component

// Initialize counter container
function createUserCounter() {
    const counterContainer = document.createElement('div');
    counterContainer.className = 'floating-counter';
    counterContainer.innerHTML = `
        <div class="counter-content">
            <div class="counter-icon">👥</div>
            <div class="counter-numbers">
                <span id="visitorCount">0</span>
                <span class="counter-label">Students Learning</span>
            </div>
        </div>
    `;
    document.body.appendChild(counterContainer);

    // Add styles
    const styles = document.createElement('style');
    styles.textContent = `
        .floating-counter {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: var(--card-background);
            border-radius: var(--card-radius);
            padding: 15px;
            box-shadow: var(--card-shadow);
            z-index: 1000;
            transform: translateY(0);
            transition: all 0.3s ease;
            animation: float 3s ease-in-out infinite;
        }

        .floating-counter:hover {
            transform: translateY(-5px);
            box-shadow: var(--card-shadow-hover);
        }

        .counter-content {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .counter-icon {
            font-size: 24px;
            animation: pulse 2s ease-in-out infinite;
        }

        .counter-numbers {
            display: flex;
            flex-direction: column;
        }

        #visitorCount {
            font-size: 24px;
            font-weight: bold;
            color: var(--accent-color);
            transition: var(--theme-transition);
        }

        .counter-label {
            font-size: 14px;
            color: var(--primary-text);
            opacity: 0.8;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
    `;
    document.head.appendChild(styles);
}

// Initialize visitor count
function initializeVisitorCount() {
    let count = 2345;
    const isNewVisitor = !localStorage.getItem('hasVisited');

    if (isNewVisitor) {
        localStorage.setItem('hasVisited', 'true');
        localStorage.setItem('visitorCount', count);
    }

    // Set up random interval increment
    const randomInterval = Math.floor(Math.random() * 2000) + 1000; // 1-3 seconds
    setInterval(() => {
        count++;
        localStorage.setItem('visitorCount', count);
        animateCounter(count);
    }, randomInterval);

    return count;
}

// Animate counter
function animateCounter(targetCount) {
    const counter = document.getElementById('visitorCount');
    let currentCount = 2345;
    const duration = 2000; // 2 seconds
    const steps = 1;
    const increment = targetCount / steps;
    const stepDuration = duration / steps;

    const animation = setInterval(() => {
        currentCount += increment;
        if (currentCount >= targetCount) {
            counter.textContent = targetCount;
            clearInterval(animation);
        } else {
            counter.textContent = Math.floor(currentCount);
        }
    }, stepDuration);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createUserCounter();
    const visitorCount = initializeVisitorCount();
    animateCounter(visitorCount);
});