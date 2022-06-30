import SubjectSensor from "./scripts/sensor.js";
import UpdateObserver from "./scripts/Update.js";
import NotificationObserver from "./scripts/Notifications.js";
import Historic from "./scripts/historic.js";



//Subjects 
const SubjectSensors = new SubjectSensor();

//Observers
const UpdateObservers = new UpdateObserver();
const NotificationObservers = new NotificationObserver();
const HistoricObservers = new Historic();


//Binding
SubjectSensors.attach(UpdateObservers);
SubjectSensors.attach(NotificationObservers);
SubjectSensors.attach(HistoricObservers);

