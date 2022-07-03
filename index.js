import SensorSubject from "./scripts/Sensor.js";
import NavBarSubject from "./scripts/NavBar.js";

import UpdateObserver from "./scripts/Update.js";
import NotificationObserver from "./scripts/Notifications.js";
import Historic from "./scripts/Historic.js";
import NavigationObserver from "./scripts/Navigation.js";


//Subjects 
const sensorSubjects = new SensorSubject();
const navBarSubjects = new NavBarSubject();

//Observers
const updateObservers = new UpdateObserver();
const notificationObservers = new NotificationObserver();
const historicObservers = new Historic();
const navigationObservers = new NavigationObserver();


//Binding
sensorSubjects.subscribe(updateObservers);
sensorSubjects.subscribe(notificationObservers);
sensorSubjects.subscribe(historicObservers);

navBarSubjects.subscribe(navigationObservers);

