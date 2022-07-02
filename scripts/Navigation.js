import Observer from './Observer';

class NavigationObserver extends Observer {

    update() {
        document.querySelectorAll("#main section").forEach(section => 
            section.removeAttribute("class"));
        document.querySelector("#main #${data.state}")
            .setAttribute("class", "active");
        }
    }

export default NavigationObserver;