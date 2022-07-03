import Observer from './Observer.js';
class UpdateObserver extends Observer {
    constructor() {
        super();

        this.ExtTemp = document.getElementById('dataExtDiv');
        this.IntTemp = document.getElementById('dataIntDiv');
        if(localStorage.getItem('Temp') != null) {
            this.getLocalData();
        }
    }

    saveDataLocal(ExtTemp, IntTemp) {
        const data = {
            ExtTemp: ExtTemp,
            IntTemp: IntTemp
            
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

        document.getElementById('dataExtDiv').innerText = data.ExtTemp;
        document.getElementById('dataIntDiv').innerText = data.IntTemp;

        this.saveDataLocal(data.ExtTemp, data.IntTemp);
    }
}

export default UpdateObserver;