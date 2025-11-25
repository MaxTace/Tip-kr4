import { useState } from "react";

function EventForm({ onAddEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !date || !time) {
      alert("Введите название, дату и время события");
      return;
    }

    onAddEvent({
      title: title.trim(),
      date,
      time,
      description: description.trim(),
    });

    // очистка формы
    setTitle("");
    setDate("");
    setTime("");
    setDescription("");
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <h2>Новое событие</h2>

      <div className="form-row">
        <label>
          Название *
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Например: Сдать контрольную по JS"
          />
        </label>
      </div>

      <div className="form-row form-row-inline">
        <label>
          Дата *
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <label>
          Время *
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          Описание
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Кратко опиши событие"
            rows={3}
          />
        </label>
      </div>

      <button type="submit" className="btn-primary">
        Добавить
      </button>
    </form>
  );
}

export default EventForm;
