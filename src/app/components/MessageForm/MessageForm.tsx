import React from "react";
import { Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import './MessageForm.scss';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const defaultValue = {
  email: "",
  phone: "",
  subject: "",
  message: "",
  contact: "email",
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MessageForm = ({ page }: { page: string }) => {
  const [formValues, setFormValues] = React.useState(defaultValue);
  const [open, setOpen] = React.useState(false);

  const handleInputChange = (e: any) => {
    const { name, value }: any = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const emailMessage = `<h1>${formValues.subject}</h1> 
    <p>${formValues.email}</p>
    <p>${formValues.phone}</p>
    <p>${formValues.message}</p>
    `;  

    const requestBody = {
        "source": "portal",
        "page": page,
        "message": emailMessage
    }

    console.log(requestBody);


    axios.post("https://api.msolcsptest.com/notify/v1/portalmessage", requestBody , {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        })
        .then(function (response) {
            setOpen(true);
            setFormValues(defaultValue);
        })
        .catch(function (error) {
            setOpen(false);
        });       
    
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
  };
  
  return (
    <Container>
     
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={"success"} sx={{ width: '100%' }}>
              Message Send Successfully
            </Alert>
        </Snackbar>
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
          value={formValues.message} />
        </FormControl>

        <div className="home-contact-option d-flex justify-content-between mt-30">
          <FormControl className="contact-radio-button">
            <FormLabel>How would you like us to contact you?</FormLabel>
            <RadioGroup row value={formValues.contact} name="contact" onChange={handleInputChange}>
              <FormControlLabel
                value="email"
                control={<Radio />}
                label="Email"
              />
              <FormControlLabel
                value="phone"
                control={<Radio />}
                label="Phone"
              />
            </RadioGroup>
          </FormControl>
          <Button type="submit" className="btn-rounded btn-mid" variant="contained">
            Send Message
          </Button>
        </div>
      </form>
    </Container>
  )
}
export default MessageForm;