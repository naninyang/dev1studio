export const getAuth = async () => {
  try {
    const response = await fetch(
      `${process.env.USER_API}/auth?userid=${process.env.USER_IDX}&password=${process.env.USER_PWD}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

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
