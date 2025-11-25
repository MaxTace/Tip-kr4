// src/App.jsx
import { useEffect, useState } from "react";
import EventForm from "./components/EventForm.jsx";
import EventList from "./components/EventList.jsx";

function App() {
  // состояние ленты событий + загрузка из localStorage
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem("events");
    return saved ? JSON.parse(saved) : [];
  });

  // сохранение в localStorage при каждом изменении
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  // добавление события
  const handleAddEvent = (eventData) => {
    const newEvent = {
      id: Date.now(), // простой уникальный id
      done: false,
      ...eventData, // title, date, time, description
    };
    setEvents((prev) => [...prev, newEvent]);
  };

  // переключение "выполнено / не выполнено"
  const handleToggleDone = (id) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === id ? { ...event, done: !event.done } : event
      )
    );
  };

  // удаление события
  const handleDeleteEvent = (id) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };

  // сортировка по дате и времени
  const sortedEvents = [...events].sort((a, b) => {
    const aDate = new Date(`${a.date}T${a.time}`);
    const bDate = new Date(`${b.date}T${b.time}`);
    return aDate - bDate;
  });

  return (
    <div className="app">
      <header className="app-header">
        <h1>Лента событий</h1>
        <p>Добавляй важные события с датой и временем</p>
      </header>

      <main className="app-main">
        <EventForm onAddEvent={handleAddEvent} />
        <EventList
          events={sortedEvents}
          onToggleDone={handleToggleDone}
          onDeleteEvent={handleDeleteEvent}
        />
      </main>
    </div>
  );
}

export default App;
