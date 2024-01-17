const API_URL = '/api/tickets/';

// Create new ticket
export const createTicket = async (ticketData, token) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(ticketData),
  };

  try {
    const response = await fetch(API_URL, config);

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || 'Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during creating ticket:', error);
    throw error;
  }
};

// Get user tickets
export const getTickets = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(API_URL, config);

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || 'Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during fetching user tickets:', error);
    throw error;
  }
};

// Get single ticket
export const getTicket = async (ticketId, token) => {
  const url = `${API_URL}${ticketId}`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || 'Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during fetching single ticket:', error);
    throw error;
  }
};

// Close ticket
export const closeTicket = async (ticketId, token) => {
  const url = `${API_URL}${ticketId}`;
  const config = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status: 'closed' }),
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || 'Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during closing ticket:', error);
    throw error;
  }
};

const ticketService = { createTicket, getTickets, getTicket, closeTicket };

export default ticketService;
