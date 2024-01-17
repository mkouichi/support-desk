const API_URL = '/api/tickets/';

// Get ticket notes
export const getNotes = async (ticketId, token) => {
  const url = `${API_URL}${ticketId}/notes`;
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
    console.error('Error during fetching notes:', error);
    throw error;
  }
};

// Create ticket note
export const createNote = async (noteText, ticketId, token) => {
  const url = `${API_URL}${ticketId}/notes`;
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, { text: noteText }, config);

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || 'Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during creating note:', error);
    throw error;
  }
};

const noteService = { getNotes, createNote };
export default noteService;
