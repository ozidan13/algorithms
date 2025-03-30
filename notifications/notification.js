class NotificationSystem {
    constructor() {
        this.notifications = [];
        this.container = null;
        this.currentPage = null;
        this.notificationData = null;
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
            // Use a relative path that works both locally and when deployed
            const response = await fetch('./notifications/messages.json');
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

            // Show random motivational message
            const randomMotivational = data.motivational[Math.floor(Math.random() * data.motivational.length)];
            this.show(randomMotivational);

        } catch (error) {
            console.error('Error loading notifications:', error);
        }
    }

    detectCurrentPage() {
        const path = window.location.pathname;
        
        // Extract week and lesson from path
        if (path.includes('Week1/')) {
            this.currentPage = { week: 'week1' };
            if (path.includes('binary_search')) this.currentPage.lesson = 'binary_search';
            else if (path.includes('big_o')) this.currentPage.lesson = 'big_o';
            else if (path.includes('selection_sort')) this.currentPage.lesson = 'selection_sort';
            else if (path.includes('recursion')) this.currentPage.lesson = 'recursion';
            else this.currentPage.lesson = 'intro';
        } 
        else if (path.includes('Week2/')) {
            this.currentPage = { week: 'week2' };
            if (path.includes('array_operations')) this.currentPage.lesson = 'array_operations';
            else if (path.includes('linked_list')) this.currentPage.lesson = 'linked_list';
            else if (path.includes('recursive_divide_conquer')) this.currentPage.lesson = 'recursive_divide_conquer';
            else if (path.includes('memory_visualization')) this.currentPage.lesson = 'memory_visualization';
            else this.currentPage.lesson = 'intro';
        }
        else if (path.includes('Week3/')) {
            this.currentPage = { week: 'week3' };
            if (path.includes('quicksort')) this.currentPage.lesson = 'quicksort';
            else if (path.includes('hash_table')) this.currentPage.lesson = 'hash_table';
            else if (path.includes('graph_representation')) this.currentPage.lesson = 'graph_representation';
            else if (path.includes('graph_traversal')) this.currentPage.lesson = 'graph_traversal';
            else this.currentPage.lesson = 'intro';
        }
        else if (path.includes('Week4/')) {
            this.currentPage = { week: 'week4' };
            if (path.includes('greedy_algorithms')) this.currentPage.lesson = 'greedy_algorithms';
            else if (path.includes('dynamic_programming')) this.currentPage.lesson = 'dynamic_programming';
            else if (path.includes('knapsack_problem')) this.currentPage.lesson = 'knapsack_problem';
            else if (path.includes('knn_classifier')) this.currentPage.lesson = 'knn_classifier';
            else this.currentPage.lesson = 'intro';
        }
        else {
            this.currentPage = null;
        }
    }

    showPageSpecificNotifications() {
        if (!this.currentPage || !this.notificationData) return;
        
        const { week, lesson } = this.currentPage;
        
        // Show week-specific notification
        if (this.notificationData.weeks && this.notificationData.weeks[week]) {
            // Show lesson-specific notification if available
            if (lesson && this.notificationData.weeks[week][lesson]) {
                const lessonNotification = this.notificationData.weeks[week][lesson];
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
                this.show(this.notificationData.weeks[week].intro);
            }
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