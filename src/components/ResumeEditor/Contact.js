import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";

function Contact() {
  const { content, updateContactData, removeTestData } = useContext(
    ResumeContext
  );

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    removeTestData();
    updateContactData(data);
  };

  return (
    <div className="">
      <h2>Contact Information</h2>
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onChange={handleSubmit(onSubmit)}
      >
        <TextField
          id="outlined-basic"
          label="Full Name"
          name="name"
          variant="outlined"
          defaultValue={content.contact.name}
          {...register("name")}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Address"
          name="address"
          variant="outlined"
          defaultValue={content.contact.address}
          {...register("address")}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="City"
          name="city"
          variant="outlined"
          defaultValue={content.contact.city}
          {...register("city")}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="State"
          name="state"
          variant="outlined"
          defaultValue={content.contact.state}
          {...register("state")}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Zip Code"
          name="zip"
          variant="outlined"
          defaultValue={content.contact.zip}
          {...register("zip")}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Phone"
          name="phone"
          variant="outlined"
          defaultValue={content.contact.phone}
          {...register("phone")}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="E-mail"
          name="email"
          variant="outlined"
          defaultValue={content.contact.email}
          {...register("email")}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-multiline-static"
          label="Summary"
          name="summary"
          multiline
          rows={7}
          variant="outlined"
          defaultValue={content.contact.summary}
          {...register("summary")}
          style={{
            marginTop: 20,
            marginBottom: 15,
            marginLeft: 8,
            marginRight: 8,
          }}
        /> 
      </form>
    </div>
  );
}

export default Contact;
