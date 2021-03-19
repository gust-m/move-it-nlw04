self.addEventListener("install", event => {
  console.log("Hello world from the Service Worker 🤙");
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  clients.openWindow("https://moveitnextnlw-three.vercel.app/home");
});
