import { transporter, mailOptions } from "../../config/nodemailer";

const contactEmailFields = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

const generateEmailContent = (data) => {
  // Object.entries() method takes the each key-value pair from the object and turns it into an array for each key-value pair like this -> Array [Array ['key1', 'value1'], Array ['key2', 'value2'] ]
  const stringData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `${contactEmailFields[key]}: \n${val} \n \n`);
  }, "");

  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<h1>${contactEmailFields[key]}</h1><p>${val}</p>`);
  });

  return {
    text: stringData,
    html: htmlData,
  };
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).json({ message: "badrequest" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: data.subject,
      });
      return res.status(200).json({ message: "successful send" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }

  return res.status(400).json({ message: "badrequest" });
};

export default handler;
