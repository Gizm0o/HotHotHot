import SensorSubject from "./scripts/Sensor.js";
import UpdateObserver from "./scripts/Update.js";
import NotificationObserver from "./scripts/Notifications.js";
import Historic from "./scripts/Historic.js";
import NavBarSubject from "./scripts/NavBar.js";
import SensorSubject from "./scripts/Sensor.js";


//Subjects 
const SensorSubject = new SensorSubject();
const NavBarSubject = new NavBarSubject();

//Observers
const UpdateObservers = new UpdateObserver();
const NotificationObservers = new NotificationObserver();
const HistoricObservers = new Historic();
const NavigationObserver = new NavigationObserver();


//Binding
SensorSubject.attach(UpdateObservers);
SensorSubject.attach(NotificationObservers);
SensorSubject.attach(HistoricObservers);

NavBarSubject.attach(NavigationObserver);

