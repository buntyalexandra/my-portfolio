"use client";
import { useState } from "react";
import { sendContactForm } from "../../../lib/api";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { values: initValues, error: "", success: false };

const ContactForm = () => {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, error, success } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onBlur = ({ target }) =>
    setTouched((prev) => ({
      ...prev,
      [target.name]: true,
    }));

  const handleSubmit = async () => {
    setState((prev) => ({
      ...prev,
      success: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error.message,
      }));
    }
  };

  return (
    <>
      {error && <p>{error}</p>}
      {!error && success === true && <p>Message sent!</p>}

      <form className="flex flex-col gap-5 items-start">
        <label className="flex flex-col">
          Name:
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={onBlur}
            required
            className="w-72 border-b-2 border-black p-1 focus:outline-none"
          />
        </label>

        <label className="flex flex-col">
          Email:
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
            required
            className="w-72 border-b-2 border-black p-1 focus:outline-none"
          />
        </label>

        <label className="flex flex-col">
          Subject:
          <input
            type="text"
            name="subject"
            value={values.subject}
            onChange={handleChange}
            onBlur={onBlur}
            required
            className="w-72 border-b-2 border-black p-1 focus:outline-none"
          />
        </label>

        <label className="flex flex-col">
          Message:
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={onBlur}
            required
            className="w-72 h-36 border-b-2 border-black p-1 focus:outline-none"
          />
        </label>

        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-black text-white p-1 text-lg hover:text-pink-900 sm:text-xl sm:p-1"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
