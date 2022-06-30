import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";

function AdditionalSkills() {
  const { content, updateAdditionalData, removeTestData } = useContext(
    ResumeContext
  );
  const [btnText, setBtnText] = useState("Add");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    removeTestData();
    updateAdditionalData(data);
    setBtnText("Update");
  };

  return (
    <div className="">
      <h2>Additional Skills</h2>
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          placeholder="e.g. Front End Development"
          defaultValue={content.additional[0]}
          {...register("skill1")}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          placeholder="e.g. Back End Development"
          defaultValue={content.additional[1]}
          {...register("skill2")}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          placeholder="e.g. Awards"
          defaultValue={content.additional[2]}
          {...register("skill3")}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          placeholder="e.g. Certificates"
          defaultValue={content.additional[3]}
          {...register("skill4")}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          placeholder="e.g. Spoken Languages"
          defaultValue={content.additional[4]}
          {...register("skill5")}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        >
          {btnText}
        </Button>
      </form>
    </div>
  );
}

export default AdditionalSkills;
