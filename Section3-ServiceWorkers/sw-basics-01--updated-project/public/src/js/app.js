
if ('serviceWorker' in navigator){
    navigator.serviceWorker
        .register('/sw.js',)
        .then( () => {
            console.log("Service Worker registered!");
        })
}

// Listen for chrome trying to show install to home screen window

const deferredPrompt;

window.addEventListener('beforeinstsallprompt', (event) => {
    console.log("Before Install Prompt Fired");
    deferredPrompt = event;
    event.preventDefault();
    
});