import { useRouteLoaderData } from 'react-router-dom';

import EventForm from '../components/EventForm';

function EditEventPage() {
  const data = useRouteLoaderData('event-detail');

  return <EventForm event={data.event}  method="patch"/>;
}

export default EditEventPage;
/**
 * useRouteLoaderData: Accesses data for a specific route.  ... id ==>
useLoaderData: Accesses data for the nearest parent route.

 */