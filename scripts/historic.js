import Observer from "./Observer.js";

class Historic extends Observer {
    constructor() {
        super();
        this.historic = document.getElementById("historic");

        if ( localStorage.getItem('historic') !== null ) {
            this.getLocalData();
        }
    }

    addRow(sensor) {
        
    }

    saveDataLocal(data) {
        console.log(localStorage.getItem('historic'));
        console.log(data);
        if ( localStorage.getItem('historic') == null ) {
            localStorage.setItem('historic',[]);
        }
        // let historic = JSON.parse(localStorage.getItem('Historic'));
        let historic = [];
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
        // let historic = JSON.parse(localStorage.getItem('historic'));
        let historic = [];
        historic.forEach(element => {
            this.addRow(element);
        }
        );
    }

    update(data) {
        data.state.forEach(sensor => {
            sensor.Date = new Date(sensor.Date);
            this.addRow(sensor);
        });

        this.saveDataLocal(data.state);
        }
    }


export default Historic;