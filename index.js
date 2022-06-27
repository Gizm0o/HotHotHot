import SubjectSensor from "./scripts/sensor";
import UpdateObserver from "./scripts/Update";
import NotificationObserver from "./scripts/Notifications";


//Subjects 
const SubjectSensor = new SubjectSensor();

//Observers
const UpdateObserver = new UpdateObserver();
const NotificationObserver = new NotificationObserver();


//Binding
SubjectSensor.addObserver(UpdateObserver);
SubjectSensor.addObserver(NotificationObserver);
