import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Employees from "./components/Employees";
import AddNew from "./components/AddNew";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

function App() {
  const [employees, setEmployees] = useState([]);
  const fetchEmployees = async () => {
    try {
      const employeesSnapshot = await getDocs(collection(db, "employees"));
      const mappedData = employeesSnapshot.docs.map((employee) => ({
        id: employee.id,
        name: employee.data().name,
        email: employee.data().email,
        department: employee.data().department,
        designation: employee.data().designation,
        dateOfJoining: employee.data().dateOfJoining,
      }));
      setEmployees(mappedData);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  return (
    <>
      <Container className="mt-2 text-center">
        <h1 className="display-3">HR Management System</h1>
        <Employees
          employees={employees}
          fetchEmployees={fetchEmployees} />
        <AddNew 
        fetchEmployees={fetchEmployees} />
      </Container>
    </>
  );
}

export default App;
