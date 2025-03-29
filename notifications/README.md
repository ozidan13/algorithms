# Enhanced Notification System

This notification system provides context-aware notifications for the Algorithms & Data Structures course. It displays customized messages based on the current lesson being viewed, offering relevant tips, information, and encouragement to enhance the learning experience.

## Features

- **Context-Aware Notifications**: Automatically detects the current lesson and displays relevant information
- **Customized Tips**: Shows specific tips for each algorithm and data structure
- **Progressive Learning**: Provides helpful hints at the right moment in your learning journey
- **Motivational Messages**: Keeps you engaged with encouraging notifications
- **Smooth Animations**: Elegant slide-in and slide-out transitions
- **Visual Differentiation**: Different notification types have distinct visual styles

## Notification Types

The system supports several types of notifications:

- **Welcome**: Shown on first visit to introduce the course
- **Tips**: Specific advice related to the current algorithm or data structure
- **Progress**: Encouraging messages about your learning journey
- **Updates**: Information about new content or features
- **Info**: General information about algorithms and concepts

## Structure

The notification system consists of two main files:

- **notification.js**: The core functionality that handles displaying and managing notifications
- **messages.json**: Contains all notification content organized by weeks and lessons

## How It Works

1. The system detects which page you're currently viewing
2. It loads the appropriate notifications for that specific lesson
3. Notifications appear with smooth animations and auto-hide after a set duration
4. Tips specific to the current lesson are shown after a short delay

## Integration

The notification system is automatically loaded on all pages of the Algorithms & Data Structures course. It's initialized when the DOM is loaded and responds to page navigation events.

## Customization

You can customize the notifications by editing the `messages.json` file. Each notification can have:

- **id**: Unique identifier
- **message**: The text content to display
- **type**: The notification type (welcome, tip, progress, etc.)
- **duration**: How long the notification should display (in milliseconds)
- **tips**: An array of additional tips for lesson-specific notifications

## Example

```json
{
  "id": "w1_binary",
  "message": "🔍 Binary Search: Did you know this algorithm can find an item in a sorted list of a million items in just 20 steps?",
  "type": "tip",
  "duration": 5000,
  "tips": [
    "Try different array sizes to see how binary search scales logarithmically",
    "Notice how the search space is halved with each step",
    "Binary search only works on sorted arrays!"
  ]
}
```

This notification will appear when viewing the Binary Search lesson, and one of the tips will be shown as a follow-up notification after a short delay.