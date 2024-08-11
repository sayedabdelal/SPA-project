import { useRouteLoaderData, json, redirect } from 'react-router-dom';

import EventItem from '../components/EventItem';

function EventDetailPage() {
    const data = useRouteLoaderData('event-detail');

    return <>
        <EventItem event={data.event} />;
        {/* <EventsList events={}/> */}
      </>
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;

  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}

export async function action({ request, params }) { 
  const eventId = params.eventId ;
  const response = await fetch("http://localhost:8080/events/" + eventId , {
    method: request.method
  });

  if (!response.ok) {
    throw json(
      { message: 'Could not Delete Event.' },
      {
        status: 500,
      }
    );
  } else {
    return redirect('/events');
  }
}