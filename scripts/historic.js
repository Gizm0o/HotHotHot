import Observer from "./Observer";

class Historic extends Observer {
    constructor() {
        super();
        this.historic = document.getElementById("historic");
        this.historic.innerHTML = "";

        if ( localStorage.getItem('historic') !== null ) {
            getLocalData();
        }
    }

    addRow(sensor) {
        //TODO
    }

    saveDataLocal(data) {
        if ( localStorage.getItem('historic') == null ) {
            localStorage.setItem('historic',[]);
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

    update(data) {
        data.state.forEach(sensor => {
            sensor.Date = new Date(sensor.Date);
            this.addRow(sensor);
        });

        this.saveDataLocal(data.state);
        }
    }


export default Historic;