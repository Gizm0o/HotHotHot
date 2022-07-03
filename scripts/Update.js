import Observer from './Observer.js';
class UpdateObserver extends Observer {
    constructor() {
        super();

        if(localStorage.getItem('Temp') != null) {
            this.getLocalData();
        }
    }

    // saveDataLocal(data) {
    //     const values = {
    //         ExtTemp: data.state[1].Valeur,
    //         IntTemp: data.state[0].Valeur
            
    //     }
    //     localStorage.setItem('Temp', JSON.stringify(data));
    // }

    // getLocalData() {
    //     let data = JSON.parse(localStorage.getItem('Temp'));
    //     this.ExtTemp.innerText = data.ExtTemp;
    //     this.IntTemp.innerText = data.IntTemp;
    // }

    update(data) {
        console.log(data);

        var A_temperatures = [];
        var Name_temperatures = [];
        var T_temperatures = [];

        var object2 = data;

        for (var [key, value] of Object.entries(object2)) {
                console.log(value);
                if(key == "state"){
                    for (var [key2, value2] of Object.entries(value)) {
                        console.log(`${key2}: ${value2.Valeur}`);
                        A_temperatures.push(value2.Valeur);
                        Name_temperatures.push(value2.Nom);
                        T_temperatures.push(value2.type);
                    }
                }
            } 

        console.log(A_temperatures);
        console.log(Name_temperatures);
        console.log(T_temperatures);
        var i = 0;

        const labels = ['Intérieur',
        'Extérieur'];

        const dato = {
        labels: labels,
        datasets: [{
          label: 'Température',
          data: A_temperatures,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)'
          ],
          borderWidth: 1
        }]
      };

      const config = {
        type: 'bar',
        data: dato,
        options: {
            indexAxis:'y',
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
      };

      const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );

        var interval = setInterval(function() {
            if(i < A_temperatures.length) {
                if(document.getElementById('titre_message'))
                    document.getElementById('titre_message').remove();

                let I_temperature = A_temperatures[i]; 
                let IName_temperature = Name_temperatures[i];               
                ++i;

                if (IName_temperature == 'interieur') {
                    var temp = document.getElementById('dataIntDiv').innerText = I_temperature;
                }else {
                    var temp = document.getElementById('dataExtDiv').innerText = I_temperature;
                }
                console.log(temp);

                let clone_historique_ligne = document.getElementById("historic-table-row-title").cloneNode(true);
                clone_historique_ligne.setAttribute("id", "");	
                clone_historique_ligne.querySelector(".historic-table-cell-title").innerText = Date().toString();
                clone_historique_ligne.querySelector(".historic-table-cell-title").innerText = IT_temperature;
                clone_historique_ligne.querySelector(".historic-table-cell-title").innerText = IName_temperature;
                clone_historique_ligne.querySelector(".historic-table-cell-title").innerText = I_temperature;
                clone_historique_ligne.style.visibility = "visible";
                let table_tbody = document.querySelector("table tbody");

                table_tbody.insertBefore(clone_historique_ligne, table_tbody.querySelector("#historic-table-row-title").nextSibling);

            } 
            else {
                clearInterval(interval);
                interval = null;
            }
        }, 2000)

        // document.getElementById('dataExtDiv').innerText = data.state[1].Valeur;
        // document.getElementById('dataIntDiv').innerText = data.state[0].Valeur;

        // this.saveDataLocal(data);
    }
}

export default UpdateObserver;