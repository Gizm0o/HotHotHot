import Observer from './Observer.js';
class UpdateObserver extends Observer {
    constructor() {
        super();
        this.ExtMaxTemp = document.getElementById("ExtMaxTemp");
        this.ExtMinTemp = document.getElementById("ExtMinTemp");
        this.IntMaxTemp = document.getElementById("IntMaxTemp");
        this.IntMinTemp = document.getElementById("IntMinTemp"); 
    }
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
            } //test
        console.log(A_temperatures);
        console.log(Name_temperatures);
        console.log(T_temperatures);


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

                
                ++i;
                span_temperature.setAttribute("class", color);
                span_temperature.innerText = I_temperature;
                
                let titre_message = document.createElement("h4")
                titre_message.setAttribute('id', 'titre_message');

                section.insertBefore(titre_message, p_temperature); 

                let clone_real_ligne = document.getElementById("real").cloneNode(true);
                clone_real_ligne.setAttribute("id", "");
                clone_real_ligne.querySelector("#dataInt").innerText = I_temperature;
                clone_real_ligne.querySelector("#dataExt").innerText = I_temperature;
                clone_real_ligne.style.visibility = "visible";
                let div_real = document.querySelector("div");

                div_real.appendChild(clone_real_ligne);
                div_real.insertBefore(clone_real_ligne, div_real.querySelector("#real").nextSibling);

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