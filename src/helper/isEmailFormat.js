const isEmailFormat = (email) => {
  let message = "";
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const bool = emailRegex.test(email);
  if (!bool) message = "Please enter a valid email address";
  return { bool, message };
};

export default isEmailFormat;
