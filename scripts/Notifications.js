import Observer from "./Observer.js";

class NotificationObserver extends Observer {
    constructor() {
        super();
    }

    notificationHandler(tile, message) {
        if (!"Notification" in window) {
            console.log("Ce navigateur ne supporte pas les notifications");
        }
        else if (Notification.permission === "granted") {
            const notification = new Notification(tile, {
                body: message,
                //TODO: add icon
                //icon: ''
            });
        }
        else if (Notification.permission !== 'denied' || Notification.permission === "default") {
            Notification.requestPermission().then(function(permission) {
                if (permission === "granted") {
                    const notification = new Notification(tile, {
                        body: message,
                        //TODO: add icon
                        //icon: ''
                    });
                }
            });
        }
    }

    alertExt(data) {
        if (data < 0) {
            this.notificationHandler('Alerte Intérieur : ' + val + '°C', 'Canalisation gelées, appelez SOS pompier et mettez un bonnet !');
        } 
        else if (val < 12) {
            this.notificationHandler('Alerte Intérieur : ' + val + '°C', 'Montez le chauffage ou mettez un gros pull !');
        } 
        else if (val > 22) {
            this.notificationHandler('Alerte Intérieur : ' + val + '°C', 'Baissez le chauffage !');
        } 
        else if (val > 50) {
            this.notificationHandler('Alerte Intérieur : ' + val + '°C', 'Appelez les pompiers ou arrêtez votre barbecue !');
        }
    }

    alertInt(data) {
        if (data < 0) {
            this.notificationHandler('Alerte Extérieur : ' + val + '°C', 'Banquise en vue !');
        }
        else if (val > 35) {
            this.notificationHandler('Alerte Extérieur : ' + val + '°C', 'Hot Hot Hot !');
        }
    } 

    update(data) {
        let ExtTemp = data.state[0].Valeur;
        let IntTemp = data.state[1].Valeur;
        this.alertExt(ExtTemp);
        this.alertInt(IntTemp);
    }
}

export default NotificationObserver;