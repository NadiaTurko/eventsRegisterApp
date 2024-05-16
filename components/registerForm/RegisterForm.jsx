import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { saveRegistrationData } from "../../server/server";
import "./registerForm.css";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    referral: "Social media",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const registrationData = { eventId, ...formData };

    saveRegistrationData(registrationData);

    console.log("Registration data saved to localStorage:", registrationData);
    alert("You are successfully registrated!");

    navigate("/");
  };
  return (
    <div className="registration-form">
      <h2>Event Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:{" "}
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          E-mail:{" "}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Date of birth :{" "}
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </label>
        <fieldset>
          <legend>Where did you hear about this event?</legend>
          <label>
            {" "}
            <input
              type="radio"
              name="referral"
              value="Social media"
              checked={formData.referral === "Social media"}
              onChange={handleChange}
            />
            Social media
          </label>
          <label>
            <input
              type="radio"
              name="referral"
              value="Friends"
              checked={formData.referral === "Friends"}
              onChange={handleChange}
            />
            Friends
          </label>
          <label>
            <input
              type="radio"
              name="referral"
              value="Found myself"
              checked={formData.referral === "Found myself"}
              onChange={handleChange}
            />
            Found myself
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterForm;
