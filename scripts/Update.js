import Observer from './Observer.js';
class UpdateObserver extends Observer {
    constructor() {
        super();
        this.ExtMaxTemp = document.getElementById("ExtMaxTemp");
        this.ExtMinTemp = document.getElementById("ExtMinTemp");
        this.IntMaxTemp = document.getElementById("IntMaxTemp");
        this.IntMinTemp = document.getElementById("IntMinTemp");
        if ( localStorage.getItem('Temp') !== null ) {
            this.getLocalData();
        } 
    }



    saveDataLocal(ExtMaxTemp, ExtMinTemp, IntMaxTemp, IntMinTemp) {
        const data = {
            ExtMaxTemp: ExtMaxTemp,
            ExtMinTemp: ExtMinTemp,
            IntMaxTemp: IntMaxTemp,
            IntMinTemp: IntMinTemp
        }
        localStorage.setItem('Temp', JSON.stringify(data));
    }

    getLocalData() {
        const data = JSON.parse(localStorage.getItem('Temp'));
        this.ExtMaxTemp.innerHTML = data.ExtMaxTemp;
        this.ExtMinTemp.innerHTML = data.ExtMinTemp;
        this.IntMaxTemp.innerHTML = data.IntMaxTemp;
        this.IntMinTemp.innerHTML = data.IntMinTemp;
    }

    update(data) {
        var A_temperatures = [];
        var Name_temperatures = [];
        var T_temperatures = [];
        const ExtMaxTempText = this.ExtMaxTemp.innerText;
        const ExtMinTempText = this.ExtMinTemp.innerText;
        const IntMaxTempText = this.IntMaxTemp.innerText;
        const IntMinTempText = this.IntMinTemp.innerText;

        document.getElementById("ExtTemp").innerText = data.state[0].Valeur;
        document.getElementById("IntTemp").innerText = data.state[1].Valeur;


        if (ExtMaxTempText < data.state[0].Valeur) {
            this.ExtMaxTemp.innerText = data.state[0].Valeur;
            A_temperatures.push(ExtMaxTemp);
            Name_temperatures.push(ExtMaxTemp);
            T_temperatures.push(ExtMaxTemp);
        }
        else if (ExtMinTempText > data.state[0].Valeur) {
            this.ExtMinTemp.innerText = data.state[0].Valeur;
            A_temperatures.push(ExtMinTemp);
            Name_temperatures.push(ExtMinTemp);
            T_temperatures.push(ExtMinTemp);
        }

        if (IntMaxTempText < data.state[1].Valeur) {
            this.IntMaxTemp.innerText = data.state[1].Valeur;
            A_temperatures.push(IntMaxTemp);
            Name_temperatures.push(IntMaxTemp);
            T_temperatures.push(IntMaxTemp);
        }
        else if (IntMinTempText > data.state[1].Valeur) {
            this.IntMinTemp.innerText = data.state[1].Valeur;
            A_temperatures.push(IntMinTemp);
            Name_temperatures.push(IntMinTemp);
            T_temperatures.push(IntMinTemp);
        }
        const labels = Utils.months({count: 7});
        
          const dato = {
            labels: labels,
            datasets: [{
              label: 'My First Dataset',
              data: A_temperatures,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
              ],
              borderWidth: 1
            }]
          };
        
          const config = {
            type: 'bar',
            data: data,
            options: {
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
        

        var p_temperature = document.getElementById('p_temperature');
        var section = p_temperature.parentNode;
        var span_temperature =  document.getElementById('span_temperature');
        var i = 0;

        var interval = setInterval(function() {
            if(i < A_temperatures.length) {
                if(document.getElementById('titre_message'))
                    document.getElementById('titre_message').remove();
                    
                let I_temperature = A_temperatures[i];
                let IT_temperature = T_temperatures[i];
                let IName_temperature = Name_temperatures[i];

                
                let color = 'blue';
                if( 0 < I_temperature && I_temperature <= 20 ) {
                    color = 'green';
                }
                else if( 20 < I_temperature && I_temperature <= 30 ) {
                    color = 'orange';
                }
                else if( 30 < I_temperature && I_temperature <= 40 ) {
                    color = 'red';
                }
                
                ++i;
                span_temperature.setAttribute("class", color);
                span_temperature.innerText = I_temperature;
                
                let titre_message = document.createElement("h4")
                titre_message.setAttribute('id', 'titre_message');
                if( I_temperature < 0 ) {
                    titre_message.innerText = 'Il fait froid';
                } 
                else if ( 30 < I_temperature ) {
                    titre_message.innerText = 'Il fait chaud';
                }

                section.insertBefore(titre_message, p_temperature); 

                let clone_historique_ligne = document.getElementById("ligne_modele").cloneNode(true);
                clone_historique_ligne.setAttribute("id", "");	
                clone_historique_ligne.querySelector(".td_date").innerText = Date().toString();
                clone_historique_ligne.querySelector(".td_type").innerText = IT_temperature;
                clone_historique_ligne.querySelector(".td_name").innerText = IName_temperature;
                clone_historique_ligne.querySelector(".td_temperature").innerText = I_temperature;
                clone_historique_ligne.style.visibility = "visible";
                let table_tbody = document.querySelector("table tbody");

                table_tbody.insertBefore(clone_historique_ligne, table_tbody.querySelector("#ligne_modele").nextSibling);

            } else {
                clearInterval(interval);
                interval = null;
            }
        }, 2000)
    }
}

export default UpdateObserver;