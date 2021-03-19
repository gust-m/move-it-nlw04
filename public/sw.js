self.addEventListener("install", event => {
  console.log("Hello world from the Service Worker 🤙");
});

self.addEventListener('notificationclick', event => {
  event.notification.close();

  event.waitUntil(clients.matchAll({
    type: "window"
  }).then(clientList => {
    for (var i = 0; i < clientList.length; i++) {
      var client = clientList[i];
      console.log(client.url);
      if (client.url == 'https://moveitnextnlw-three.vercel.app/home' && 'focus' in client) {
        return client.focus();
      }
    }
    if (clients.openWindow) {
      return clients.openWindow('https://moveitnextnlw-three.vercel.app/home');
    }
  }));
});
