import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { retrieveTicket, updateTicket } from '../api/ticketAPI';
import { TicketData } from '../interfaces/TicketData';

const EditTicket = () => {
  const [ticket, setTicket] = useState<TicketData | null>(null);
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (state?.id) {
      const fetchTicket = async () => {
        try {
          const data = await retrieveTicket(state.id);
          setTicket(data);
        } catch (err) {
          console.error('Failed to retrieve ticket:', err);
        }
      };
      fetchTicket();
    }
  }, [state]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (ticket?.id) {
      try {
        await updateTicket(ticket.id, ticket);
        navigate('/');
      } catch (error) {
        console.error('Failed to update ticket:', error);
      }
    } else {
      console.error('Ticket data is undefined.');
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTicket((prev) => (prev ? { ...prev, [name]: value } : prev));
  };

  return (
    <div className="container">
      {ticket ? (
        <form className="form" onSubmit={handleSubmit}>
          <h1>Edit Ticket</h1>
          <label htmlFor="tName">Ticket Name</label>
          <textarea
            id="tName"
            name="name"
            value={ticket.name || ''}
            onChange={handleInputChange}
          />
          <label htmlFor="tStatus">Ticket Status</label>
          <select
            name="status"
            id="tStatus"
            value={ticket.status || ''}
            onChange={handleInputChange}
          >
            <option value="Todo">Todo</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <label htmlFor="tDescription">Ticket Description</label>
          <textarea
            id="tDescription"
            name="description"
            value={ticket.description || ''}
            onChange={handleInputChange}
          />
          <button type="submit">Submit Form</button>
        </form>
      ) : (
        <div>Issues fetching ticket</div>
      )}
    </div>
  );
};

export default EditTicket;