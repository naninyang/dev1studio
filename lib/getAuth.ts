export const getAuth = async () => {
  try {
    const response = await fetch(`${process.env.RESUME_AUTH_API}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error('Response Error:', response);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch Error:', error);
    return null;
  }
};
