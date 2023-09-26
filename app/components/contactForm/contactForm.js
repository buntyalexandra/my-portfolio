"use client";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { sendContactForm } from "../../../lib/api";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { values: initValues };

const ContactForm = () => {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const { values, isLoading } = state;

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
      isLoading: true,
    }));
    await sendContactForm(values);
    console.log("State:", state);
  };

  return (
    <>
      <FormControl isRequired isInvalid={touched.name && !values.name}>
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
      </Button>
    </>
  );
};

/*
My way of approaching this, but has some bugs and is likely too much local state

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isNameInvalid, setIsNameInvalid] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isSubjectInvalid, setIsSubjectInvalid] = useState(false);
  const [isMessageInvalid, setIsMessageInvalid] = useState(false);

  const validateName = () => {
    if (name.length == 0) {
      setIsNameInvalid(true);
    }
  };
  const validateEmail = () => {
    if (email.length == 0) {
      setIsEmailInvalid(true);
    }
  };
  const validateSubject = () => {
    if (subject.length == 0) {
      setIsSubjectInvalid(true);
    }
  };
  const validateMessage = () => {
    if (message.length == 0) {
      setIsMessageInvalid(true);
    }
  };

  const validateForm = () => {
    validateName();
    validateEmail();
    validateSubject();
    validateMessage();
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    validateForm();
    console.log("Data:", name, email, subject, message);
  };

  return (
    <>
      <FormControl isRequired isInvalid={isNameInvalid}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <FormErrorMessage>Name is Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={isEmailInvalid}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormErrorMessage>Email is Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={isSubjectInvalid}>
        <FormLabel>Subject</FormLabel>
        <Input
          type="text"
          name="subject"
          onChange={(e) => setSubject(e.target.value)}
        />
        <FormErrorMessage>Subject is Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={isMessageInvalid}>
        <FormLabel>Message</FormLabel>
        <Textarea
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
        />
        <FormErrorMessage>Message is Required</FormErrorMessage>
      </FormControl>

      <Button type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </>
  );
};
 */

export default ContactForm;
