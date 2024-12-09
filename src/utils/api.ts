const API_URL = 'https://messages.jackstoller.com';

export const sendEmail = async (email: string, message: string) => {
  const url = `${API_URL}?email=${encodeURIComponent(
    email
  )}&content=${encodeURIComponent(message)}`;
  const res = await fetch(url);

  res.text();
};
