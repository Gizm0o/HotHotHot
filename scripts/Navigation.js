import Observer from './Observer.js';

class NavigationObserver extends Observer {

    update() {
        console.log('NavigationObserver');
        document.querySelectorAll("#main section").forEach(section => 
            section.setAttribute("style", "display: none;"));
        document.querySelector("#main #${data.state}")
            .setAttribute("style", "display: block");
        }
    }

export default NavigationObserver;