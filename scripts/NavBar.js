import Subject from "./Subject";

class NavBarSubject extends Subject {
    constructor(){
        super();
        document.querySelectorAll("nav a").forEach(link => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                this.state = event.target.attributes.href.value.replace("#", "");
                this.notify();
            })
        });
    }
}

export default NavBarSubject;