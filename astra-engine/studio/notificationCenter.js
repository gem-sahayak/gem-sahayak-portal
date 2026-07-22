'use strict';

/**
 * Studio Notification Center.
 * Handles engine completion, warnings, errors, and recommendations.
 */
class NotificationCenter {
  constructor() {
    this.notifications = [];
  }

  notify(title, message, type = 'INFO') {
    const notification = {
      id: `notif-${Math.random().toString(36).substring(2, 8)}`,
      title,
      message,
      type,
      timestamp: new Date().toISOString()
    };
    this.notifications.unshift(notification);
    return notification;
  }

  getNotifications() {
    return this.notifications;
  }

  clearAll() {
    this.notifications = [];
  }
}

module.exports = new NotificationCenter();
