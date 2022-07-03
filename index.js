import sensorSubject from "./scripts/Sensor.js";
import navBarSubject from "./scripts/NavBar.js";

import updateObserver from "./scripts/Update.js";
import notificationObserver from "./scripts/Notifications.js";
import historic from "./scripts/Historic.js";
import navigationObserver from "./scripts/Navigation.js";


//Subjects 
const sensorSubjects = new sensorSubject();
const navBarSubjects = new navBarSubject();

//Observers
const updateObservers = new updateObserver();
const notificationObservers = new notificationObserver();
const historicObservers = new historic();
const navigationObservers = new navigationObserver();


//Binding
sensorSubjects.subscribe(updateObservers);
sensorSubjects.subscribe(notificationObservers);
sensorSubjects.subscribe(historicObservers);

navBarSubjects.subscribe(navigationObservers);

