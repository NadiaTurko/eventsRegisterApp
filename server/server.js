export const saveRegistrationData = (data) => {
  const registrations = JSON.parse(localStorage.getItem("registrations")) || [];
  registrations.push(data);
  localStorage.setItem("registrations", JSON.stringify(registrations));
};

export const getAllRegistrations = () => {
  return JSON.parse(localStorage.getItem("registrations")) || [];
};
