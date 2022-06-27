class UpdateObserver extends Observer {
    constructor(observer) {
        super(observer);
    }
    update(data) {
        this.observer.update(data);
    }
}