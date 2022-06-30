import SubjectSensor from "./scripts/sensor.js";
import UpdateObserver from "./scripts/Update.js";
import NotificationObserver from "./scripts/Notifications.js";
import Historic from "./scripts/historic.js";
import chart from "./scripts/chart.js";


//Subjects 
const SubjectSensors = new SubjectSensor();

//Observers
const UpdateObservers = new UpdateObserver();
const NotificationObservers = new NotificationObserver();
const HistoricObservers = new Historic();


//Binding
SubjectSensors.attach(UpdateObservers);
SubjectSensors.attach(NotificationObservers);
SubjectSensor.attach(HistoricObservers);


chart();