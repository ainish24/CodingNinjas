import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
function Employees({ employees, fetchEmployees }) {
  const headings = [
    "ID",
    "Name",
    "Email",
    "Department",
    "Designation",
    "Date of Joining",
  ];
  const deleteEmployee = async (id) => {
    try {
      await deleteDoc(doc(db, "employees", id));
      await fetchEmployees();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="text-start">
      <h2 className="display-6 mt-5">Employees List</h2>
      <Table responsive className="mt-5">
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              {Object.values(employee).map((field, index2) => (
                <td key={index2}>{field}</td>
              ))}
              <td>
                <Button
                  variant="danger"
                  className="btn-sm"
                  onClick={() => deleteEmployee(employee.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Employees;
