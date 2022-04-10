import React from "react";
import { useForm } from "react-hook-form";
import style from "./Form.module.css";

export default function ConsumerForm() {
  const Organization = ["Sakha", "Infosys", "HCL", "TCS"];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleConsumerSubmit = (data) => console.log(data);
  return (
    <form
      className={`card border-0 shadow p-4 w-80 mx-auto ${style.formdiv}`}
      action="DAO"
      onSubmit={handleSubmit(handleConsumerSubmit)}
    >
      {/* Employeeid
        name
        organization type already present orginasiation
        photo
        tell us about yourself */}
      <div className="form-group">
        <label htmlFor="fullname">Full Name</label>
        <input
          type="text"
          className="form-control mt-1"
          placeholder="Enter EmployeeId"
          {...register("employeeid", { required: true })}
          autoComplete="off"
        />
        {errors.employeeid && <span>This field is required</span>}
      </div>

      <div className="form-group mt-3">
        <label htmlFor="Image">Image</label>
        <input
          type="file"
          className="form-control mt-1"
          placeholder="Enter Company Description"
          {...register("description")}
          autoComplete="off"
        />
        {errors.description && <span>This field is required</span>}
      </div>

      <div className="form-group mt-3">
        <label htmlFor="Tell us about yourself">Tell us about yourself</label>
        <input
          type="text"
          className="form-control mt-1"
          placeholder="Tell us about yourself..."
          {...register("intro", { required: true })}
          autoComplete="off"
        />
        {errors.intro && <span>This field is required</span>}
      </div>

      <div className="form-group mt-3">
        <label htmlFor="Organization">Organization</label>
        <select
          placeholder="Enter your Organization"
          className="form-control mt-1"
          {...register("organization", { required: true })}
        >
          <option>Select your Organization</option>
          {Organization.map((org) => (
            <option key={org} value={org}>
              {org}
            </option>
          ))}
        </select>
        {errors.organization && <p>This field is required.</p>}
      </div>

      <input className={style.submitButton} type="submit" />
    </form>
  );
}
