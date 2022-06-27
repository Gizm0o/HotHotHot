class Observer {
    constructor(observer) {
        this.observer = observer;
    }
    update(data) {
        this.observer.update(data);
    }
}