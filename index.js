import SensorSubject from "./scripts/Sensor.js";
import NavBarSubject from "./scripts/NavBar.js";

import UpdateObserver from "./scripts/Update.js";
import NotificationObserver from "./scripts/Notifications.js";
import Historic from "./scripts/Historic.js";
import NavigationObserver from "./scripts/Navigation.js";


//Subjects 
const SensorSubjects = new SensorSubject();
const NavBarSubjects = new NavBarSubject();

//Observers
const UpdateObservers = new UpdateObserver();
const NotificationObservers = new NotificationObserver();
const HistoricObservers = new Historic();
const NavigationObserver = new NavigationObserver();


//Binding
SensorSubjects.subscribe(UpdateObservers);
SensorSubjects.subscribe(NotificationObservers);
SensorSubjects.subscribe(HistoricObservers);

NavBarSubjects.subscribe(NavigationObserver);

