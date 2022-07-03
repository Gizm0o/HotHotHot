import Subject from './Subject.js';

class SensorSubject extends Subject {

    constructor() {
        super();
        this.socket = null 
        this.fetchData(this)
        let interval =  setInterval(this.fetchData,6000, ...[this])
    }

    

    fetchData(object) {
        fetch("https://hothothot.dog/api/capteurs").then(data => {
            data.json().then(json => {
                if (!json.capteurs[0].Valeur.toString().includes("SQL")) {
                    object.state = json.capteurs;
                    object.notify();
                }
            })
        })
    };

    socket() {
        this.socket = new WebSocket("wss://ws.hothothot.dog:9502");
        this.socket.onopen = () => {
            console.log("Connexion établie");
            this.socket.send('hello world');
        };
        this.socket.onmessage = function(event) {
            let json = JSON.parse(event.data);
            this.state = json.capteurs;
            this.notify();
        };
    }
}

export default SensorSubject;
