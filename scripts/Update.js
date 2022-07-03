import Observer from './Observer.js';
class UpdateObserver extends Observer {
    constructor() {
        super();

        if(localStorage.getItem('Temp') != null) {
            this.getLocalData();
        }
    }

    saveDataLocal(data) {
        const values = {
            ExtTemp: data.state[1].Valeur,
            IntTemp: data.state[0].Valeur
            
        }
        localStorage.setItem('Temp', JSON.stringify(data));
    }

    getLocalData() {
        let data = JSON.parse(localStorage.getItem('Temp'));
        this.ExtTemp.innerText = data.ExtTemp;
        this.IntTemp.innerText = data.IntTemp;
    }

    update(data) {
        console.log(data);

        document.getElementById('dataExtDiv').innerText = data.state[1].Valeur;
        document.getElementById('dataIntDiv').innerText = data.state[0].Valeur;

        this.saveDataLocal(data);
    }
}

export default UpdateObserver;