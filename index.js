import SubjectSensor from "./scripts/sensor.js";
import UpdateObserver from "./scripts/Update.js";
import NotificationObserver from "./scripts/Notifications.js";
import Historic from "./scripts/historic.js";
<<<<<<< HEAD

=======
>>>>>>> 80e63d7a712f709da45fc487e707274656891793


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

