import "./App.css";
import  { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig.js";
function App() {
  const [newUSer, setNewUser] = useState({
    name: "",
    email: "",
    age: "",
  });
  const addUser = async () => {
    try {
      const collectionRef = collection(db, "users");
      const userData = {
        name: newUSer.name,
        email: newUSer.email,
        age: newUSer.age,
      };
      const docRef = await addDoc(collectionRef, userData);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log("Error adding document: ", error);
      return;
    }
  };
  return (
    <>
      <h1>Firebase</h1>
      <div className="inputTags">
      <input
        type="text"
        placeholder="Enter your name"
        value={newUSer.name}
        onInput={(e) => setNewUser({ ...newUSer, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Enter your email"
        value={newUSer.email}
        onInput={(e) => setNewUser({ ...newUSer, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter your age"
        value={newUSer.age}
        onInput={(e) => setNewUser({ ...newUSer, age: Number(e.target.value) })}
      />
      </div>
      <button onClick={addUser}>Add User</button>
    </>
  );
}

export default App;
