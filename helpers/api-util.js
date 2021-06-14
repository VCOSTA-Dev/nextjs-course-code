export async function getAllEvents() {
  const response = await fetch(
    'https://nextjs-c0299-default-rtdb.firebaseio.com/events.json'
  );
  const object = await response.json();

  const events = [];

  for (const key in object) {
    events.push({
      id: key,
      ...object[key],
    });
  }

  return events;
}
export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}
