import webpush from "web-push";
const serviceWorkerHandler = () => {
  const vapidKeys = webpush.generateVAPIDKeys();
  function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  const convertedVapidKey = urlBase64ToUint8Array(vapidKeys.publicKey);

  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker
    .register(swUrl)
    .then((response) => {
      return response.pushManager.getSubscription().then((subscription) => {
        return response.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: convertedVapidKey,
        });
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

export default serviceWorkerHandler;
