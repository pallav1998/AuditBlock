/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import DAOForm from "../../Components/DAOForm";
import ConsumerForm from "../../Components/ConsumerForm";
import styles from "./form.module.css";

export default function form() {
  const [isDao, setIsDao] = useState(true);

  return (
    <div className={styles.formdiv}>
      <button onClick={() => setIsDao(true)}>DAO</button>
      <button onClick={() => setIsDao(false)}>Contributer</button>

      {isDao ? <DAOForm /> : <ConsumerForm />}
    </div>
  );
}
