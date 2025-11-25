function formatDateTime(date, time) {
  const dateObj = new Date(`${date}T${time}`);
  return dateObj.toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function EventItem({ event, onToggleDone, onDeleteEvent }) {
  const { id, title, date, time, description, done } = event;

  return (
    <li className={`event-item ${done ? "event-item--done" : ""}`}>
      <div className="event-main">
        <h3>{title}</h3>
        <p className="event-datetime">{formatDateTime(date, time)}</p>
        {description && <p className="event-description">{description}</p>}
      </div>

      <div className="event-actions">
        <button
          type="button"
          onClick={() => onToggleDone(id)}
          className="btn-secondary"
        >
          {done ? "Вернуть" : "Выполнено"}
        </button>

        <button
          type="button"
          onClick={() => onDeleteEvent(id)}
          className="btn-danger"
        >
          Удалить
        </button>
      </div>
    </li>
  );
}

export default EventItem;
