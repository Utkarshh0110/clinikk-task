importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');
if ('serviceWorker' in navigator) {
    let swUrl = `${process.env.PUBLIC_URL}/firebase-messaging-sw.js`;
    navigator.serviceWorker.register(swUrl)
      .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
      });
    }

firebase.initializeApp({
    messagingSenderId: "763428268390"
  })

const initMessaging = firebase.messaging()