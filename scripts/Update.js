import Observer from './Observer.js';
class UpdateObserver extends Observer {
    constructor() {
        super();
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
            } 

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
                let IName_temperature = Name_temperatures[i];

                
                ++i;
                // span_temperature.setAttribute("class", color);
                span_temperature.innerText = I_temperature;
                
                let titre_message = document.createElement("h4")
                titre_message.setAttribute('id', 'titre_message');

                section.insertBefore(titre_message, p_temperature); 

                if (IName_temperature == 'interieur') {
                    var temp = document.getElementById('dataInt').innerText = I_temperature;
                }else {
                    var temp = document.getElementById('dataExt').innerText = I_temperature;
                }
                console.log(temp);

            } 
            else {
                clearInterval(interval);
                interval = null;
            }
        }, 2000)
    }
}

export default UpdateObserver;