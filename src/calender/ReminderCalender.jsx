import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import '../calender/ReminderCalendar.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const localizer = momentLocalizer(moment);

const ReminderCalendar = () => {
  const [events, setEvents] = useState([]);
  const [calorieGoal, setCalorieGoal] = useState(2000);
  const [mealInput, setMealInput] = useState('');
  const [calorieInput, setCalorieInput] = useState('');

  const handleAddMeal = () => {
    if (!mealInput || !calorieInput) {
      toast.error('Please fill in both meal and calorie fields.');
      return;
    }

    const newEvent = {
      title: `${mealInput} - ${calorieInput} kcal`,
      start: new Date(),
      end: new Date(),
      allDay: true,
    };

    setEvents([...events, newEvent]);
    setMealInput('');
    setCalorieInput('');
    toast.success('Meal added successfully!');
  };

  const totalCalories = events.reduce((sum, event) => {
    const calories = parseInt(event.title.split(' - ')[1]);
    return sum + (isNaN(calories) ? 0 : calories);
  }, 0);

  return (
    <div className="reminder-calendar">
      <h2>Daily Calorie Tracker</h2>
      <div className="calorie-goal">
        <label>Daily Calorie Goal:</label>
        <input
          type="number"
          value={calorieGoal}
          onChange={(e) => setCalorieGoal(e.target.value)}
        />
      </div>
      <div className="meal-input">
        <input
          type="text"
          placeholder="Enter meal"
          value={mealInput}
          onChange={(e) => setMealInput(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter calories"
          value={calorieInput}
          onChange={(e) => setCalorieInput(e.target.value)}
        />
        <button onClick={handleAddMeal}>Add Meal</button>
      </div>
      <div className="calendar-container">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
      <div className="calorie-summary">
        <h3>Total Calories Consumed: {totalCalories} kcal</h3>
        <h3>Remaining Calories: {calorieGoal - totalCalories} kcal</h3>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ReminderCalendar;