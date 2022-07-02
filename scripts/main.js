if ('serviceWorker' in navigator){
    navigator.serviceWorker
     .register('../serviceworker.js')
     .then(() => {console.log('Service Worker Registered'); 
    }).catch(err => {
        console.log('Service Worker Failed to Register', err);
    });
}
