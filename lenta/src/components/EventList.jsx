import EventItem from "./EventItem.jsx";

function EventList({ events, onToggleDone, onDeleteEvent }) {
  if (!events.length) {
    return (
      <section className="event-list empty">
        <p>Событий пока нет. Добавь первое!</p>
      </section>
    );
  }

  return (
    <section className="event-list">
      <h2>Список событий</h2>
      <ul>
        {events.map((event) => (
          <EventItem
            key={event.id}
            event={event}
            onToggleDone={onToggleDone}
            onDeleteEvent={onDeleteEvent}
          />
        ))}
      </ul>
    </section>
  );
}

export default EventList;
