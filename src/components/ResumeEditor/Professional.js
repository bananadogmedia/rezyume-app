import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";

function Professional() {
  const { content, updateProfessionalData, removeTestData } = useContext(
    ResumeContext
  );
  const [btnText, setBtnText] = useState("Add");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    removeTestData();
    updateProfessionalData(data);
    setBtnText("Update");
  };
  return (
    <div className="">
      <h2>Professional Experience</h2>
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h4>Work History</h4>
        <TextField
          id="outlined-basic"
          label="Employer"
          variant="outlined"
          defaultValue={content.professional.company1}
          {...register("company1")}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="City, State, Country"
          variant="outlined"
          defaultValue={content.professional.local1}
          {...register("local1")}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Position"
          variant="outlined"
          defaultValue={content.professional.position1}
          {...register("position1")}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Start MM/YYYY"
          variant="outlined"
          defaultValue={content.professional.start1}
          {...register("start1")}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="End MM/YYYY"
          variant="outlined"
          defaultValue={content.professional.end1}
          {...register("end1")}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Job Description"
          variant="outlined"
          defaultValue={content.professional.desc1[0]}
          {...register("desc1[0]")}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id="outlined-basic"
          label="Job Description"
          variant="outlined"
          defaultValue={content.professional.desc1[1]}
          {...register("desc1[1]")}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id="outlined-basic"
          label="Job Description"
          variant="outlined"
          defaultValue={content.professional.desc1[2]}
          {...register("desc1[2]")}
          style={{
            marginTop: 12,
            marginLeft: 8,
            marginRight: 8,
            marginBottom: 15,
          }}
        />

        <hr />

        <h4>Work History</h4>

        <TextField
          id="outlined-basic"
          label="Employer"
          variant="outlined"
          defaultValue={content.professional.company2}
          {...register("company2")}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="City, State, Country"
          variant="outlined"
          defaultValue={content.professional.local2}
          {...register("local2")}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Position"
          variant="outlined"
          defaultValue={content.professional.position2}
          {...register("position2")}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Start MM/YYYY"
          variant="outlined"
          defaultValue={content.professional.start2}
          {...register("start2")}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="End MM/YYYY"
          variant="outlined"
          defaultValue={content.professional.end2}
          {...register("end2")}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Job Description"
          variant="outlined"
          defaultValue={content.professional.desc2[0]}
          {...register("desc2[0]")}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id="outlined-basic"
          label="Job Description"
          variant="outlined"
          defaultValue={content.professional.desc2[1]}
          {...register("desc2[1]")}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id="outlined-basic"
          label="Job Description"
          variant="outlined"
          defaultValue={content.professional.desc2[2]}
          {...register("desc2[2]")}
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

export default Professional;
