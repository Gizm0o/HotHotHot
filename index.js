import SubjectSensor from "./scripts/sensor.js";
import UpdateObserver from "./scripts/Update.js";
import NotificationObserver from "./scripts/Notifications.js";


//Subjects 
const SubjectSensors = new SubjectSensor();

//Observers
const UpdateObservers = new UpdateObserver();
const NotificationObservers = new NotificationObserver();


//Binding
SubjectSensors.attach(UpdateObservers);
SubjectSensors.attach(NotificationObservers);
