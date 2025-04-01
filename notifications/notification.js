class NotificationSystem {
    constructor() {
        this.notifications = [];
        this.container = null;
        this.currentPage = null;
        this.notificationData = null;
        this.repoName = 'algorithms'; // Make repoName a class property
        this.initialize();
    }

    initialize() {
        // Create notification container
        this.container = document.createElement('div');
        this.container.className = 'notification-container';
        document.body.appendChild(this.container);

        // Add styles
        const styles = document.createElement('style');
        styles.textContent = `
            .notification-container {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            .notification {
                background: var(--card-background, #1e1e1e);
                color: var(--primary-text,rgb(17, 11, 11));
                padding: 12px 20px;
                border-radius: var(--card-radius, 16px);
                box-shadow: var(--card-shadow, 0 10px 25px rgba(0, 0, 0, 0.25));
                display: flex;
                align-items: center;
                justify-content: space-between;
                min-width: 300px;
                max-width: 400px;
                animation: slideIn 0.5s ease-out;
                transition: all 0.3s ease-out;
                border-left: 4px solid var(--accent-color, #007bff);
            }

            .notification.hiding {
                animation: slideOut 0.5s ease-in forwards;
            }

            .notification-icon {
                font-size: 20px;
                margin-right: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .notification-content {
                flex-grow: 1;
                margin-right: 12px;
                font-size: 14px;
                line-height: 1.4;
            }

            .notification-close {
                background: none;
                border: none;
                color: var(--secondary-text, #a0a0a0);
                cursor: pointer;
                padding: 4px;
                font-size: 18px;
                opacity: 0.7;
                transition: opacity 0.2s;
            }

            .notification-close:hover {
                opacity: 1;
            }

            /* Notification types */
            .notification.welcome {
                border-left-color: #4caf50;
                background: linear-gradient(to right, rgba(76, 175, 80, 0.1), transparent);
            }

            .notification.tip {
                border-left-color: #2196f3;
                background: linear-gradient(to right, rgba(33, 150, 243, 0.1), transparent);
            }

            .notification.progress {
                border-left-color: #9c27b0;
                background: linear-gradient(to right, rgba(156, 39, 176, 0.1), transparent);
            }

            .notification.encouragement {
                border-left-color: #ff9800;
                background: linear-gradient(to right, rgba(255, 152, 0, 0.1), transparent);
            }

            .notification.update {
                border-left-color: #f44336;
                background: linear-gradient(to right, rgba(244, 67, 54, 0.1), transparent);
            }

            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }

            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }

            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(styles);

        // Load and show initial notification
        this.loadMessages();
    }

    async loadMessages() {
        try {
            // Build the path dynamically based on the current URL
            const currentPath = window.location.pathname;
            const pathSegments = currentPath.split('/');
            let basePath = '';
            
            // Handle various deployment scenarios by finding the base path
            const repoIndex = pathSegments.findIndex(segment => 
                segment.toLowerCase() === this.repoName.toLowerCase());
            
            if (repoIndex !== -1) {
                // Construct base path up to the repository name
                basePath = pathSegments.slice(0, repoIndex + 1).join('/');
            }
            
            // Use absolute path from base with leading slash if needed
            const messagesPath = `${basePath ? basePath : ''}/notifications/messages.json`;
            
            console.log(`Loading notifications from: ${messagesPath}`);
            const response = await fetch(messagesPath);
            
            if (!response.ok) {
                throw new Error(`Failed to load notifications: ${response.status} ${response.statusText}`);
            }
            
            const data = await response.json();
            this.notificationData = data;
            
            // Show welcome message on first visit
            if (!localStorage.getItem('welcomeShown')) {
                const welcomeMsg = data.promotional.find(msg => msg.type === 'welcome');
                if (welcomeMsg) {
                    this.show(welcomeMsg);
                    localStorage.setItem('welcomeShown', 'true');
                }
            }

            // Detect current page and show relevant notifications
            this.detectCurrentPage();
            this.showPageSpecificNotifications();

            // Show random motivational message with 50% probability to avoid too many notifications
            if (Math.random() > 0.5) {
                const randomMotivational = data.motivational[Math.floor(Math.random() * data.motivational.length)];
                this.show(randomMotivational);
            }

        } catch (error) {
            console.error('Error loading notifications:', error);
            // Still allow the application to function if notifications fail
        }
    }

    detectCurrentPage() {
        const path = window.location.pathname.toLowerCase();
        console.log('Detecting current page for path:', path);
        
        // More flexible pattern matching for week detection
        const weekRegex = /week(\d+)/i;
        const weekMatch = path.match(weekRegex);
        
        if (weekMatch) {
            const weekNum = weekMatch[1];
            this.currentPage = { week: `week${weekNum}` };
            
            // Detect lesson using flexible matching
            const lessonPatterns = {
                binary_search: /binary[_-]?search/i,
                big_o: /big[_-]?o/i,
                selection_sort: /selection[_-]?sort/i,
                recursion: /recursion/i,
                array_operations: /array[_-]?operations/i,
                linked_list: /linked[_-]?list/i,
                recursive_divide_conquer: /recursive[_-]?divide[_-]?conquer/i,
                memory_visualization: /memory[_-]?visualization/i,
                quicksort: /quicksort/i,
                hash_table: /hash[_-]?table/i,
                graph_representation: /graph[_-]?representation/i,
                graph_traversal: /graph[_-]?traversal/i,
                greedy_algorithms: /greedy[_-]?algorithms/i,
                dynamic_programming: /dynamic[_-]?programming/i,
                knapsack_problem: /knapsack[_-]?problem/i,
                knn_classifier: /knn[_-]?classifier/i
            };
            
            let lessonDetected = false;
            // Find matching lesson pattern
            for (const [lessonName, pattern] of Object.entries(lessonPatterns)) {
                if (pattern.test(path)) {
                    this.currentPage.lesson = lessonName;
                    lessonDetected = true;
                    break;
                }
            }
            
            // If no specific lesson pattern matched but we're in a week folder, default to intro
            if (!lessonDetected) {
                this.currentPage.lesson = 'intro';
                console.log(`No specific lesson detected, defaulting to intro for week ${weekNum}`);
            }
            
            console.log(`Detected page: Week ${weekNum}, Lesson: ${this.currentPage.lesson}`);
            return; // Return early after successful detection
        }
        
        // Check if we're on the homepage
        // Handle homepage - using more flexible detection
        const pathLastSegment = path.split('/').pop() || '';
        if (pathLastSegment === 'index.html' || 
            pathLastSegment === '' || 
            pathLastSegment === this.repoName.toLowerCase()) {
            this.currentPage = { isHomePage: true };
            console.log('Detected homepage');
        }
        else {
            console.log('Could not detect current page from path:', path);
            // Instead of setting to null, try to infer from URL structure
            const segments = path.split('/').filter(s => s);
            if (segments.length > 0) {
                // Try to detect if we're in a lesson file even if it doesn't match our patterns
                for (let i = 0; i < segments.length; i++) {
                    if (segments[i].toLowerCase().includes('week')) {
                        const weekMatch = segments[i].match(/week(\d+)/i);
                        if (weekMatch) {
                            const weekNum = weekMatch[1];
                            this.currentPage = { 
                                week: `week${weekNum}`,
                                lesson: segments[i+1] ? segments[i+1].toLowerCase().replace('.html', '') : 'intro'
                            };
                            console.log(`Inferred page from URL structure: Week ${weekNum}, Lesson: ${this.currentPage.lesson}`);
                            return;
                        }
                    }
                }
            }
            // If all detection fails, set to null
            this.currentPage = null;
        }
    }

    showPageSpecificNotifications() {
        if (!this.currentPage || !this.notificationData) {
            console.log('Cannot show page-specific notifications. Current page or notification data missing.');
            return;
        }
        
        try {
            // Handle homepage specifically
            if (this.currentPage.isHomePage) {
                // Show a random promotional message
                const promos = this.notificationData.promotional;
                if (promos && promos.length > 0) {
                    const randomPromo = promos[Math.floor(Math.random() * promos.length)];
                    this.show(randomPromo);
                    console.log('Showing homepage promotional notification:', randomPromo.id);
                }
                return;
            }
            
            const { week, lesson } = this.currentPage;
            console.log(`Showing notifications for: ${week}, lesson: ${lesson}`);
            
            // Ensure week data exists
            if (!this.notificationData.weeks || !this.notificationData.weeks[week]) {
                console.log(`No notifications found for ${week}`);
                return;
            }
            
            // Show lesson-specific notification if available
            if (lesson && this.notificationData.weeks[week][lesson]) {
                const lessonNotification = this.notificationData.weeks[week][lesson];
                console.log(`Found lesson-specific notification: ${lessonNotification.id}`);
                this.show(lessonNotification);
                
                // Show a random tip if available after a delay
                if (lessonNotification.tips && lessonNotification.tips.length > 0) {
                    setTimeout(() => {
                        const randomTip = lessonNotification.tips[Math.floor(Math.random() * lessonNotification.tips.length)];
                        this.show({
                            id: `tip_${lessonNotification.id}`,
                            message: `💡 Tip: ${randomTip}`,
                            type: 'tip',
                            duration: 6000
                        });
                    }, 10000); // Show tip after 10 seconds
                }
            }
            // If no lesson-specific notification or on intro page, show week intro
            else if (this.notificationData.weeks[week].intro) {
                console.log(`No lesson-specific notification found, showing week intro for ${week}`);
                this.show(this.notificationData.weeks[week].intro);
            }
            else {
                console.log(`No notifications found for ${week}.${lesson}`);
            }
        } catch (error) {
            console.error('Error showing page-specific notifications:', error, error.stack);
        }
    }

    show(notification) {
        const element = document.createElement('div');
        element.className = `notification ${notification.type || 'info'}`;
        
        // Add icon based on notification type
        let icon = '💡';
        if (notification.type === 'welcome') icon = '🎉';
        else if (notification.type === 'tip') icon = '💡';
        else if (notification.type === 'progress') icon = '🌟';
        else if (notification.type === 'encouragement') icon = '🎯';
        else if (notification.type === 'update') icon = '📚';
        
        element.innerHTML = `
            <div class="notification-icon">${icon}</div>
            <div class="notification-content">${notification.message}</div>
            <button class="notification-close">&times;</button>
        `;

        // Add close button functionality
        const closeBtn = element.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => this.hide(element));

        // Auto-hide after duration
        setTimeout(() => this.hide(element), notification.duration || 5000);

        this.container.appendChild(element);
        this.notifications.push(element);
        
        // Store notification ID to prevent duplicates
        if (notification.id) {
            const shownKey = `notification_${notification.id}_shown`;
            localStorage.setItem(shownKey, 'true');
        }
    }

    hide(element) {
        element.classList.add('hiding');
        setTimeout(() => {
            if (element.parentNode === this.container) {
                this.container.removeChild(element);
            }
            this.notifications = this.notifications.filter(n => n !== element);
        }, 500);
    }
}

// Initialize notification system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.notificationSystem = new NotificationSystem();
});

// Handle page navigation events
document.addEventListener('visibilitychange', () => {
    if (!document.hidden && window.notificationSystem) {
        window.notificationSystem.loadMessages();
    }
});

// Handle history changes (for SPA navigation)
window.addEventListener('popstate', () => {
    if (window.notificationSystem) {
        window.notificationSystem.loadMessages();
    }
});

// Listen for clicks on navigation links
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.href && !e.target.href.startsWith('#')) {
        // Store that we're navigating to show notifications on the next page
        sessionStorage.setItem('showNotifications', 'true');
    }
});

// Check if we should show notifications after page load
window.addEventListener('load', () => {
    if (sessionStorage.getItem('showNotifications') === 'true') {
        sessionStorage.removeItem('showNotifications');
        if (window.notificationSystem) {
            // Small delay to ensure page is fully loaded
            setTimeout(() => window.notificationSystem.loadMessages(), 500);
        }
    }
});