import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../calender/ReminderCalender.css'; // Create this CSS file for styling

const localizer = momentLocalizer(moment);

const ReminderCalendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [fruitCount, setFruitCount] = useState(0);
  const [vegetableCount, setVegetableCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Handle date selection
  const handleSelectDate = (date) => {
    setSelectedDate(date);
    setShowModal(true);
  };

  // Save fruit and vegetable consumption
  const handleSave = () => {
    if (fruitCount < 0 || vegetableCount < 0) {
      toast.error('Please enter valid numbers.');
      return;
    }

    const newEvent = {
      title: `Fruits: ${fruitCount}, Vegetables: ${vegetableCount}`,
      start: selectedDate,
      end: selectedDate,
      allDay: true,
      fruitCount,
      vegetableCount,
    };

    // Update events
    const updatedEvents = events.filter((event) => !moment(event.start).isSame(selectedDate, 'day'));
    setEvents([...updatedEvents, newEvent]);

    // Reset form
    setFruitCount(0);
    setVegetableCount(0);
    setShowModal(false);
    toast.success('Record saved successfully!');
  };

  // Color coding for dates
  const eventStyleGetter = (event) => {
    const total = event.fruitCount + event.vegetableCount;
    let backgroundColor = '#f0f0f0'; // Default color

    if (total >= 5) {
      backgroundColor = '#4caf50'; // Green for high consumption
    } else if (total >= 3) {
      backgroundColor = '#ffeb3b'; // Yellow for moderate consumption
    } else if (total > 0) {
      backgroundColor = '#ff9800'; // Orange for low consumption
    }

    return {
      style: {
        backgroundColor,
        borderRadius: '5px',
        color: '#000',
        border: 'none',
      },
    };
  };

  return (
    <div className="reminder-calendar">
      <h2>Fruit and Vegetable Tracker</h2>
      <div className="calendar-container">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          onSelectSlot={handleSelectDate}
          selectable
          eventPropGetter={eventStyleGetter}
        />
      </div>

      {/* Modal for input */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Add Consumption for {moment(selectedDate).format('MMMM Do YYYY')}</h3>
            <div className="form-group">
              <label>Number of Fruits:</label>
              <input
                type="number"
                value={fruitCount}
                onChange={(e) => setFruitCount(parseInt(e.target.value))}
                min="0"
              />
            </div>
            <div className="form-group">
              <label>Number of Vegetables:</label>
              <input
                type="number"
                value={vegetableCount}
                onChange={(e) => setVegetableCount(parseInt(e.target.value))}
                min="0"
              />
            </div>
            <div className="modal-buttons">
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default ReminderCalendar;