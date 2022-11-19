import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const AddUser = () => {
  const [user, setUser] = useState("");

  //setvalues
  const [multiFormValues, setmultiFormValues] = useState({
    Name: "",
    Age: "",
    Gender: "",
  });

  const handleChange = (input) => (e) => {
    setmultiFormValues({ ...multiFormValues, [input]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "User"), {
      user,
      createdAt: new Date(),
      completed: false,
    });
    setUser("");
  };
  return (
    <form values={multiFormValues} onSubmit={handleSubmit}>
      <h3>Add Task</h3>
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter User"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button>Add</button>
      </div>
    </form>
  );
};

export default AddUser;
