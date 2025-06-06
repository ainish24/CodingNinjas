import "./App.css";
import { useState, useEffect } from "react";
import { collection, doc, addDoc, getDocs, updateDoc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig.js";
function App() {
  const [newUSer, setNewUser] = useState({
    name: "",
    email: "",
    age: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch users from Firestore
  // This function retrieves all users from the "users" collection in Firestore.
  // It uses the `getDocs` function to fetch the documents and maps them to an array of user objects.
  // The fetched users are logged to the console.
  const fetchUsers = async () => {
    try {
      const collectionRef = collection(db, "users");
      const querySnapshot = await getDocs(collectionRef);
      const user = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Users fetched successfully:", user);
      // querySnapshot.forEach((doc) => {
      //   console.log(doc.id, " => ", doc.data());
      // });
    } catch (error) {
      console.log("Error fetching documents: ", error);
      return;
    }
  };

  // Add a new user to Firestore
  // This function adds a new user to the "users" collection in Firestore.
  // It uses the `addDoc` function to create a new document with the user's name, email, and age.
  // If the document is added successfully, it logs the document ID to the console.
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


  // Update an existing user in Firestore
  // This function updates an existing user in the "users" collection in Firestore.
  // It takes the user's ID as a parameter and updates the user's name, email, and age.
  // It uses the `updateDoc` function to modify the document with the specified ID.
  const updateUser = async (id) => {
    try {
      const docRef = doc(db, "users", id);
      await updateDoc(docRef, {
        name: newUSer.name,
        email: newUSer.email,
        age: newUSer.age,
      });
      console.log("Document updated with ID: ", id);
    } catch (error) {
      console.log("Error updating document: ", error);
      return;
    }
  };


  // Delete a user from Firestore
  // This function deletes a user from the "users" collection in Firestore.
  // It takes the user's ID as a parameter and uses the `deleteDoc` function to remove the document with the specified ID.
  // If the document is deleted successfully, it logs the document ID to the console.
  const deleteUser = async (id) => {
    try {
      const docRef = doc(db, "users", id);
      await deleteDoc(docRef);
      console.log("Document deleted with ID: ", id);
    } catch (error) {
      console.log("Error deleting document: ", error);
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
          onInput={(e) =>
            setNewUser({ ...newUSer, age: Number(e.target.value) })
          }
        />
      </div>
      <button onClick={addUser}>Add User</button>
    </>
  );
}

export default App;

// # CRUD operations in Firebase Firestore
// 1. Create a new document in a collection - addDoc()
//    - This is demonstrated in the `addUser` function above.
//    - You can add a new user by filling out the form and clicking the "Add User" button.
//    - The `addDoc` function is used to add a new document to the "users" collection in Firestore.
//    -Syntax: `addDoc(collectionRef, data)`
//            collectionRef is the reference to the collection where you want to add the document, and data is the object containing the document's fields.
//            collectionRef is created using `collection(db, "collectionName")` where db is the Firestore database instance.
// 2. Read documents from a collection
//    - You can read documents from a collection using `getDocs()` or `onSnapshot()`.
//    - `getDocs()` retrieves all documents in a collection at once, while `onSnapshot()` listens for real-time updates.
//    - Example: `const querySnapshot = await getDocs(collectionRef);`
//    - You can loop through the `querySnapshot` to access each document's data.
//    - Syntax: `querySnapshot.forEach((doc) => { console.log(doc.id, " => ", doc.data()); });`
//    - This will log each document's ID and data to the console.
//    - You can also use `doc.data()` to get the data of a specific document.
// 3. Update a document in a collection
//    - You can update a document using the `updateDoc()` function.
//    - This function takes a document reference and an object containing the fields to update.
//    - We need not pass the entire document data; we can update specific fields.
//    - Example: `await updateDoc(docRef, { field: "newValue" });`
//    - You can get the document reference using `doc(db, "collectionName", "documentId")`.
//    - Syntax: `updateDoc(docRef, data)`
//            docRef is the reference to the document you want to update, and data is the object containing the fields to update.
//    - We can also use getDoc(docRef) to get the document data before updating it, if needed.
// 4. Delete a document from a collection
//    - You can delete a document using the `deleteDoc()` function.
//    - This function takes a document reference and deletes the document from the collection.
//    - Example: `await deleteDoc(docRef);`
//    - You can get the document reference using `doc(db, "collectionName", "documentId")`.
//    - Syntax: `deleteDoc(docRef)`
//            docRef is the reference to the document you want to delete.
//    - After deleting, you can check if the document still exists using `getDoc(docRef)`.
