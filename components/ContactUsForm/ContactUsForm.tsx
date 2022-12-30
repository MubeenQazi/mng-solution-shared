/** @format */

import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { NotifyApi } from "../Api/NotifyApi";
import AlertMessage from "../AlertMessage/AlertMessage";

const defaultValue = {
  email: "",
  phone: "",
  subject: "",
  message: "",
  contact: "Email",
};

// Todo: refactor
const ContactUsForm = ({ page }: { page: string }) => {
  const [formValues, setFormValues] = useState(defaultValue);

  const [message, setMessage] = useState<string>("");
  const [alert, setAlert] = useState<boolean>(false);

  const [disabled, setDisabled] = useState(false);

  const handleInputChange = (e: any) => {
    const { name, value }: any = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setDisabled(true);

    const requestBody = {
      source: "portal",
      page: page,
      data: {
        Email: `${formValues.email}`,
        "Phone Number": `${formValues.phone}`,
        Subject: `${formValues.subject}`,
        Message: `${formValues.message}`,
        "How would you like us to contact you?": `${formValues.contact}`,
      },
    };

    if (NotifyApi(requestBody)) {
      setMessage("success");
      setDisabled(false);
      setAlert(true);
      setFormValues(defaultValue);
    } else {
      setMessage("fail");
      setAlert(true);
      setDisabled(false);
    }
  };

  useEffect(() => {
    // when the component is mounted, the alert is displayed for 5 seconds
    setTimeout(() => {
      setAlert(false);
    }, 5000);
  }, []);

  return (
    <Container>
      {message === "success"
        ? AlertMessage(alert, "Message Send Succefully", "success")
        : message === "fail" &&
          AlertMessage(alert, "Message Send Failed", "error")}
      <h2 className="primary-heading">Send Us a Message</h2>

      <form onSubmit={handleSubmit}>
        <FormControl className="input-row">
          <TextField
            fullWidth
            required
            type="email"
            name="email"
            label="Your email address"
            variant="outlined"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl className="input-row">
          <TextField
            fullWidth
            required
            type="tel"
            name="phone"
            label="Your phone number"
            variant="outlined"
            value={formValues.phone}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl className="input-row">
          <TextField
            fullWidth
            required
            type="text"
            label="Subject"
            variant="outlined"
            name="subject"
            value={formValues.subject}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl className="input-row">
          <TextField
            fullWidth
            required
            label="Message"
            multiline
            rows={5}
            onChange={handleInputChange}
            name="message"
            value={formValues.message}
          />
        </FormControl>

        <div className="home-contact-option d-md-flex justify-content-between mt-30">
          <FormControl className="contact-radio-button">
            <FormLabel>How would you like us to contact you?</FormLabel>
            <RadioGroup
              row
              value={formValues.contact}
              name="contact"
              onChange={handleInputChange}
            >
              <FormControlLabel
                value="Email"
                control={<Radio />}
                label="Email"
              />
              <FormControlLabel
                value="Phone"
                control={<Radio />}
                label="Phone"
              />
            </RadioGroup>
          </FormControl>
          <Button
            type="submit"
            className="btn-rounded btn-mid"
            variant="contained"
            disabled={disabled}
          >
            Send Message
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default ContactUsForm;
