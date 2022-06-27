class UpdateObserver extends Observer {
    constructor() {
        super();
        this.ExtMaxTemp = document.getElementById("ExtMaxTemp");
        this.ExtMinTemp = document.getElementById("ExtMinTemp");
        this.IntMaxTemp = document.getElementById("IntMaxTemp");
        this.IntMinTemp = document.getElementById("IntMinTemp"); 
    }
    update(data) {
        const ExtMaxTempText = this.ExtMaxTemp.innerText;
        const ExtMinTempText = this.ExtMinTemp.innerText;
        const IntMaxTempText = this.IntMaxTemp.innerText;
        const IntMinTempText = this.IntMinTemp.innerText;

        document.getElementById("ExtTemp").innerText = data.state[0].Valeur;
        document.getElementById("IntTemp").innerText = data.state[1].Valeur;

        if (ExtMaxTempText < data.state[0].Valeur) {
            this.ExtMaxTemp.innerText = data.state[0].Valeur;
        }
        else if (ExtMinTempText > data.state[0].Valeur) {
            this.ExtMinTemp.innerText = data.state[0].Valeur;
        }

        if (IntMaxTempText < data.state[1].Valeur) {
            this.IntMaxTemp.innerText = data.state[1].Valeur;
        }
        else if (IntMinTempText > data.state[1].Valeur) {
            this.IntMinTemp.innerText = data.state[1].Valeur;
        }
    }
}

export default UpdateObserver;