import React from 'react';
import 'react-notifications/lib/notifications.css';
import PropTypes from 'prop-types';
import { NotificationManager } from 'react-notifications';

export const notify = (props) => {
  const { type, message, timeOut, title, callback, priority } = props;

  if (typeof message !== 'string' && Object.keys(message.data).includes('errors')) {
    let keys = Object.keys(message.data.errors);
    let newMessage = message.data.errors[keys[0]][0];

    switch (type) {
      case 'info':
        NotificationManager.info(newMessage, title, timeOut, callback, priority);
        break;
      case 'success':
        NotificationManager.success(newMessage, title, timeOut, callback, priority);
        break;
      case 'warning':
        NotificationManager.warning(newMessage, title, timeOut, callback, priority);
        break;
      case 'error':
        NotificationManager.error(newMessage, title, timeOut, callback, priority);
        break;
      // no default
    }
  } else if (typeof message === 'string') {
    switch (type) {
      case 'info':
        NotificationManager.info(message, title, timeOut, callback, priority);
        break;
      case 'success':
        NotificationManager.success(message, title, timeOut, callback, priority);
        break;
      case 'warning':
        NotificationManager.warning(message, title, timeOut, callback, priority);
        break;
      case 'error':
        NotificationManager.error(message, title, timeOut, callback, priority);
        break;
      // no default
    }
  } else {
    let newMessage = message.data.message;
    switch (type) {
      case 'info':
        NotificationManager.info(newMessage, title, timeOut, callback, priority);
        break;
      case 'success':
        NotificationManager.success(newMessage, title, timeOut, callback, priority);
        break;
      case 'warning':
        NotificationManager.warning(newMessage, title, timeOut, callback, priority);
        break;
      case 'error':
        NotificationManager.error(newMessage, title, timeOut, callback, priority);
        break;
      // no default
    }
  }
};

notify.PropPtypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.object || PropTypes.string,
  timeOut: PropTypes.string.number,
  title: PropTypes.string.isRequired,
  callback: PropTypes.func,
  priority: PropTypes.bool,
  validateType: PropTypes.string,
};
