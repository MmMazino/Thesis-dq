import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const AddUsertoXls = () => {
  const [User, setUser] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "User"));
    const unsubUser = onSnapshot(q, (querySnapshot) => {
      let userArray = [];
      querySnapshot.forEach((doc) => {
        userArray.push({ id: doc.id, ...doc.data() });
      });
      setUser(userArray);
    });
    return () => unsubUser();
  }, []);

  const UserName = User.map((e) => {
    return <tr><td>{e.Name}</td></tr>;
  });
  const UserGender = User.map((e) => {
    return e.Gender;
  });
  const UserGender2 = User.map((e) => {
    return e.gender;
  });
  console.log(UserGender2);
  console.log(UserGender);
  const UserAge = User.map((e) => {
    return <tr><td>{e.Age}</td></tr>;
  });
  const UserScore = User.map((e) => {
    return <tr><td>{e.Totalscore}</td></tr>;
  });

  return (
    <div>
      <table>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Totalscore</th>
        </tr>
        <td>1</td>
        <td>{UserName}</td>
        <td>{UserAge}</td>
        <td>male</td>
        <td>{UserScore}</td>
      </table>
    </div>
  );
};

export default AddUsertoXls;
