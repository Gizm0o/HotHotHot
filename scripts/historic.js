import Observer from "./Observer.js";

class HistoricObserver extends Observer {
    _callback

    set callback(value) {
        this._callback = value;
    }

    constructor() {
        super();
        this.historicTableBody = document.querySelector('tbody');
        this.historicTableTemplate = document.querySelector('#historic-table-template');
        if ( localStorage.getItem('historic') !== null ) {
            this.getLocalData();
        }
    }

    addRow(sensor) {
        let clonedRow = this.historicTableTemplate.content.cloneNode(true);
        let cells = clonedRow.querySelectorAll('td');
        cells[0].innerText = sensor.Nom;
        cells[1].innerText = sensor.Valeur + '°C';
        cells[2].innerText = sensor.Type;
        cells[3].innerText = sensor.Date.toLocaleString();
        this.historicBody.appendChild(row);
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
                Date : element.Date
            })
        });
        localStorage.setItem('historic',JSON.stringify(historic));
    }

    getLocalData() {
        console.log(localStorage.getItem('historic'));
        console.log(data);
        let historic = JSON.parse(localStorage.getItem('historic'));
        historic.forEach(element => {
            this.addRow(element);
        });
    }

    update(data) {
        data.state.forEach(sensor => {
            sensor.Date = new Date().toLocaleString;
            this.addRow(sensor);
        });

        this.saveDataLocal(data.state);
        }
    }


export default HistoricObserver;