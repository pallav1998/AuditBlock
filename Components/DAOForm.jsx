import React from "react";
import { useForm } from "react-hook-form";
import style from "./Form.module.css";

export default function DAOForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleDAOSubmit = (data) => console.log(data);
  return (
    <form
      className={`card border-0 shadow p-4 w-80 mx-auto ${style.formdiv}`}
      action="DAO"
      onSubmit={handleSubmit(handleDAOSubmit)}
    >
      <div className="form-group">
        <label htmlFor="Organization Name">Organization Name</label>
        <input
          type="text"
          className="form-control mt-1"
          placeholder="Enter Organization Name"
          {...register("firstName", { required: true })}
          autoComplete="off"
        />
        {errors.firstName && <span>This field is required</span>}
      </div>

      <div className="form-group mt-3">
        <label htmlFor="Organization Type">Organization Type</label>
        <select
          className="form-control mt-1"
          placeholder="Enter Organization Type"
          {...register("type", { required: true })}
        >
          <option>Enter Organization Type</option>
          <option value="Technology">Technology</option>
          <option value="Finance">Finance</option>
          <option value="Managment">Managment</option>
        </select>
        {errors.type && <p>This field is required.</p>}
      </div>

      <div className="form-group mt-3">
        <label htmlFor="Description">Description</label>
        <input
          type="text"
          className="form-control mt-1"
          placeholder="Enter Company Description"
          {...register("description", { required: true })}
          autoComplete="off"
        />
        {errors.description && <span>This field is required</span>}
      </div>

      <div className="form-group mt-3">
        <label htmlFor="Wallet Address">Wallet Address</label>
        <input
          type="text"
          className="form-control mt-1"
          placeholder="Enter Wallet Address"
          {...register("address", { required: true })}
          autoComplete="off"
        />
        {errors.address && <span>This field is required</span>}
      </div>

      <div className="form-group mt-3">
        <label htmlFor="Contributers Address">Contributers Address</label>
        <input
          type="text"
          className="form-control mt-1"
          placeholder="Enter Contributers Address"
          {...register("contributers", { required: true })}
          autoComplete="off"
        />
        {errors.contributers && <span>This field is required</span>}
      </div>
      <input className={style.submitButton} type="submit" />
    </form>
  );
}

// name
// type
//   technology
//   finance
//   management
// description
// owner wallet address
// contributers address (array)
