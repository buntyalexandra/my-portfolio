"use client";
// import {
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
//   Textarea,
//   FormErrorMessage,
//   Text,
//   useToast,
// } from "@chakra-ui/react";
import { useState } from "react";
import { sendContactForm } from "../../../lib/api";

const initValues = { name: "", email: "", subject: "", message: "" };

// const initState = { values: initValues, isLoading: false, error: "" };
const initState = { values: initValues };

const ContactForm = () => {
  // const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  // const { values, isLoading, error } = state;
  const { values } = state;

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

  // const handleSubmit = async () => {
  //   setState((prev) => ({
  //     ...prev,
  //     isLoading: true,
  //   }));
  //   try {
  //     await sendContactForm(values);
  //     setTouched({});
  //     setState(initState);
  //     toast({
  //       title: "Message sent.",
  //       status: "success",
  //       duration: 2000,
  //       position: "top",
  //     });
  //   } catch (error) {
  //     setState((prev) => ({
  //       ...prev,
  //       isLoading: false,
  //       error: error.message,
  //     }));
  //   }
  // };

  const handleSubmit = async () => {
    setState((prev) => ({
      ...prev,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
    } catch (error) {
      setState((prev) => ({
        ...prev,
      }));
    }
  };

  return (
    <>
      {/* {error && (
        <Text color="red.500" my={4} fontSize="xl">
          {error}
        </Text>
      )} */}

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

      {/* <FormControl isRequired isInvalid={touched.name && !values.name}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          errorBorderColor="red.500"
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Name is Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.email && !values.email}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          errorBorderColor="red.500"
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Email is Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.subject && !values.subject}>
        <FormLabel>Subject</FormLabel>
        <Input
          type="text"
          name="subject"
          errorBorderColor="red.500"
          value={values.subject}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Subject is Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.message && !values.message}>
        <FormLabel>Message</FormLabel>
        <Textarea
          name="message"
          value={values.message}
          errorBorderColor="red.500"
          onChange={handleChange}
          onBlur={onBlur}
          rows={4}
        />
        <FormErrorMessage>Message is Required</FormErrorMessage>
      </FormControl>

      <Button
        type="submit"
        onClick={handleSubmit}
        variant="outline"
        colorScheme="blue"
        disabled={
          !values.name || !values.email || !values.subject || !values.message
        }
        isLoading={isLoading}
      >
        Submit
      </Button> */}
    </>
  );
};

export default ContactForm;
