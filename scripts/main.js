if ('serviceWorker' in navigator){
    navigator.serviceWorker
     .register('/serviceworker.js')
     .then(() => {console.log('Service Worker Registered'); 
    }).catch(err => {
        console.log('Service Worker Failed to Register', err);
    });
}

var socket = new WebSocket('wss://ws.hothothot.dog:9502');
socket.onopen = function(event) {
	console.log("Connexion établie");
	
	//On indique sur notre page web que la connexion est établie
	let label = document.getElementById("status");
    let anime = document.getElementById("anime");
    setTimeout(function(){if (socket.readyState == 1){
        socket.send("coucou !");
        label.innerHTML = "Connexion établie";
        anime.style.display ='block' ;
    }else{
        console.log("état socket.readyState");
        console.log(socket.readyState);
    };}, 5000)


	// au retour...
	socket.onmessage = function(event) {
		datas = document.getElementById("datas");
		datas.innerHTML = event.data; 
        console.log(event.data);
        var A_temperatures = [];
        var Name_temperatures = [];
        var T_temperatures = [];
        var object2 = JSON.parse(event.data);
        (function() {
            
            for (var [key, value] of Object.entries(object2)) {
                console.log(value);
                if(key == "capteurs"){
                    for (var [key2, value2] of Object.entries(value)) {
                        console.log(`${key2}: ${value2.Valeur}`);
                        value2.innerHTML = event.data;
                        A_temperatures.push(value2.Valeur);
                        Name_temperatures.push(value2.Nom);
                        T_temperatures.push(value2.type);
                    }
                }
            } //test
        
            console.log(A_temperatures);
            console.log(Name_temperatures);
            console.log(T_temperatures);
            

            var p_temperature = document.getElementById('p_temperature');
            var section = p_temperature.parentNode;
            var span_temperature =  document.getElementById('span_temperature');
            var i = 0;

            var interval = setInterval(function() {
                if(i < A_temperatures.length) {
                    if(document.getElementById('titre_message'))
                        document.getElementById('titre_message').remove();
                        
                    let I_temperature = A_temperatures[i];
                    let IT_temperature = T_temperatures[i];
                    let IName_temperature = Name_temperatures[i];

                    
                    let color = 'blue';
                    if( 0 < I_temperature && I_temperature <= 20 ) {
                        color = 'green';
                    }
                    else if( 20 < I_temperature && I_temperature <= 30 ) {
                        color = 'orange';
                    }
                    else if( 30 < I_temperature && I_temperature <= 40 ) {
                        color = 'red';
                    }
                    
                    ++i;
                    span_temperature.setAttribute("class", color);
                    span_temperature.innerText = I_temperature;
                    
                    let titre_message = document.createElement("h4")
                    titre_message.setAttribute('id', 'titre_message');
                    if( I_temperature < 0 ) {
                        titre_message.innerText = 'Il fait froid';
                    } 
                    else if ( 30 < I_temperature ) {
                        titre_message.innerText = 'Il fait chaud';
                    }

                    section.insertBefore(titre_message, p_temperature); 
    
                    let clone_historique_ligne = document.getElementById("ligne_modele").cloneNode(true);
                    clone_historique_ligne.setAttribute("id", "");	
                    clone_historique_ligne.querySelector(".td_date").innerText = Date().toString();
                    clone_historique_ligne.querySelector(".td_type").innerText = IT_temperature;
                    clone_historique_ligne.querySelector(".td_name").innerText = IName_temperature;
                    clone_historique_ligne.querySelector(".td_temperature").innerText = I_temperature;
                    clone_historique_ligne.style.visibility = "visible";
                    let table_tbody = document.querySelector("table tbody");

                    table_tbody.insertBefore(clone_historique_ligne, table_tbody.querySelector("#ligne_modele").nextSibling);
    
                } else {
                    clearInterval(interval);
                    interval = null;
                }
            }, 2000)
        }());
    
	}
}

/* Bouton d'installation de notre PWA*/

let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = "none";

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    addBtn.style.display = 'block';

    addBtn.addEventListener('click', (e) => {
        // hide our user interface that shows our A2HS button
        addBtn.style.display = 'none';
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
    });
});

/*
*Notifications
*Pour notre exemple on simule à interval régulier une analyse de valeur
*/
var button = document.getElementById("notifications");
button.addEventListener('click', function(e) {
    Notification.requestPermission().then(function(result) {
        if(result === 'granted') {
            label.innerHTML = "GG";
            randomNotification();
        }
    });
});


function randomNotification() {
    var randomNumber = getRandomInt(5);
    console.log(randomNumber);
    if(randomNumber >= 2) {

            var notifTitle = "Chaud, non ?";
            var notifBody = 'Température : ' + randomNumber + '.';
            var notifImg = '/assets/images/android-chrome-192x192.png';
            var options = {
                body: notifBody,
                icon: notifImg
            }
            var notif = new Notification(notifTitle, options);

    }
    setTimeout(randomNotification, 30000);
}

    //On génére un nombre aléatoire pour la démo
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    



