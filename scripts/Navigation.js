import Observer from './Observer';

class NavigationObserver extends Observer {

    update() {
        document.querySelectorAll("#main section").forEach(section => 
            section.setAttribute("style", "display: none;"));
        document.querySelector("#main #${data.state}")
            .setAttribute("style", "display: block");
        }
    }

export default NavigationObserver;