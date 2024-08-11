
// import { json, redirect } from 'react-router-dom';

import EventForm from '../components/EventForm';

function NewEventPage() {
  return <EventForm  method="post"/>;
}

export default NewEventPage;



/**
 *  The action function :: handle form submissions  actions that require data manipulation (e.g., creating, updating, or deleting resources).
 * 
 * requset :: It contains information about the request, such as headers, method, and body
 * Request class from the Fetch API.
 * 
 * arams object contains any route parameters defined in the route's path
 * userId with the value from the URL.
 * 
 * 
 * return redirect('/events') ::: programmatically navigate to a different route after the action is complete
 */