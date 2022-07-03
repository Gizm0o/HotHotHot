import Observer from "./Observer.js";

class HistoricObserver extends Observer {
    _callback

    set callback(value) {
        this._callback = value;
    }

    constructor() {
        super();
        this.historicTableBody = document.querySelector('tbody');
        this.historicTableTemplate = document.querySelector('#historicTableTemplate');
        if ( localStorage.getItem('historic') !== null ) {
            this.getLocalData();
        }
    }

    addRow(sensor) {
        let clonedRow = document.importNode(this.historicTableTemplate.content, true);
        let cells = clonedRow.querySelectorAll('td');
        cells[0].innerText = sensor.Nom;
        cells[1].innerText = sensor.Valeur + '°C';
        this.historicTableBody.appendChild(clonedRow);
        if (this._callback) {
            this._callback.notify();
        }
    }

    saveDataLocal(data) {
        console.log(localStorage.getItem('historic'));
        console.log(data);
        if ( localStorage.getItem('historic') == null ) {
            localStorage.setItem('historic','[]');
        }
        let historic = JSON.parse(localStorage.getItem('historic'));
        data.forEach(element => {
            historic.push({
                Name : element.Name,
                Value : element.Value,
                Type : element.Type,
                Date : Date().toString(),
            })
        });
        localStorage.setItem('historic',JSON.stringify(historic));
    }

    getLocalData() {
        console.log(localStorage.getItem('historic'));
        let historic = JSON.parse(localStorage.getItem('historic'));
        historic.forEach(element => {
            this.addRow(element);
        });
    }

    update(data) {


        this.saveDataLocal(data.state);
        }
    }


export default HistoricObserver;
