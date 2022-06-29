import SubjectSensor from "./scripts/sensor";
import UpdateObserver from "./scripts/Update";
import NotificationObserver from "./scripts/Notifications";


//Subjects 
const SubjectSensors = new SubjectSensor();

//Observers
const UpdateObservers = new UpdateObserver();
const NotificationObservers = new NotificationObserver();


//Binding
SubjectSensors.addObserver(UpdateObservers);
SubjectSensors.addObserver(NotificationObservers);
