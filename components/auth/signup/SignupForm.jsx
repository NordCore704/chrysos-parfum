"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsStars } from "react-icons/bs";
import { signIn } from "next-auth/react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const placeholders = [
    { name: "email", placeholder: "Email" },
    { name: "password", placeholder: "Password" },
    { name: "confirmPassword", placeholder: "Confirm Password" },
  ];

  const validateInput = (name, value) => {
    let error = "";
    switch (name) {
      case "firstName":
      case "secondName":
        if (value.length < 2)
          error = `${capitalize(name)} must be at least 2 characters long.`;
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Please enter a valid email.";
        break;
      case "password":
        if (value.length < 8)
          error = "Password must be at least 8 characters long.";
        break;
      case "confirmPassword": // Match key in formData
        if (value !== formData.password) error = "Passwords do not match.";
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateInput(name, value),
    }));
    console.log(errors);
  };

  const isFormValid =
    Object.values(formData).every(Boolean) &&
    Object.values(errors).every((error) => !error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;
   

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          secondName: formData.secondName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Signup successful! Please login.");
        setFormData({
          firstName: "",
          secondName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        alert(result.error || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="md:w-[60%] sm:w-[65%] p-5 sm:p-3 md:p-5 lg:p-8 flex flex-col gap-5 bg-white rounded sm:self-center"
    >
      <div className="flex flex-col gap-3 ">
        <BsStars className="self-center" size={30} />
        <h4 className="self-center text-xl sm:text-2xl font-semibold">
          Shop With Us!
        </h4>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 w-full">
        {/* First Name Field */}
        <div className="flex flex-col flex-1">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className={`px-1.5 py-2 lg:p-2 border rounded-xl outline-none focus:border-scheme-lightGold ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}
        </div>

        {/* Last Name Field */}
        <div className="flex flex-col flex-1">
          <input
            type="text"
            name="secondName"
            placeholder="Last Name"
            value={formData.secondName}
            onChange={handleChange}
            className={`px-1.5 py-2 lg:p-2 border rounded-xl outline-none focus:border-scheme-lightGold ${
              errors.secondName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.secondName && (
            <p className="text-red-500 text-sm">{errors.secondName}</p>
          )}
        </div>
      </div>

      {/* Email, Password, and Confirm Password Fields */}
      {placeholders.map(({ name, placeholder }) => (
        <div key={name} className="flex flex-col">
          <input
            type={placeholder.includes("Password") ? "password" : "text"}
            name={name}
            placeholder={placeholder} // Display-friendly placeholder
            value={formData[name]} // Match formData key
            onChange={handleChange}
            className={`p-2 border rounded-xl outline-none transition-colors duration-200 focus:border-scheme-lightGold ${
              errors[name] ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors[name] && (
            <p className="text-red-500 text-sm">{errors[name]}</p>
          )}
        </div>
      ))}

      <div className="flex gap-1 items-center">
        <p className="text-xs sm:text-sm">Already have an account?</p>
        <Link
          href={"/auth/login"}
          className="text-xs sm:text-sm text-scheme-gold hover:text-scheme-goldThree transition-colors duration-300"
        >
          Login
        </Link>
      </div>

      <button
        type="submit"
        disabled={!isFormValid}
        className={`p-2 rounded-xl ${
          isFormValid
            ? "hover:bg-scheme-lightGold bg-scheme-gold transition-colors duration-300 text-white"
            : "bg-scheme-goldThree bg-opacity-50 text-gray-500 cursor-not-allowed"
        }`}
      >
        Sign Up
      </button>
    </form>
  );
};

const capitalize = (word) =>
  word
    .replace(/([A-Z])/g, " $1") // Add space before capital letters
    .replace(/^./, (str) => str.toUpperCase()); // Capitalize first letter

export default SignupForm;
