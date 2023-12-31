import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task');
      return;
    }

    onAdd({ text, day, reminder });

    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Add Task"
          value={text}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          onChange={(e) => setDay(e.target.value)}
          type="text"
          placeholder="Add Day & Time"
          value={day}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          onChange={(e) => setReminder(e.currentTarget.checked)}
          type="checkbox"
          checked={reminder}
        />
      </div>

      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  );
};

export default AddTask;
