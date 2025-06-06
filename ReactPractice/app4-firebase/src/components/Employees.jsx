import Table from "react-bootstrap/Table";
import { useState } from "react";
function Employees() {
  const headings = [
    "ID",
    "Name",
    "Email",
    "Department",
    "Designation",
    "Date of Joining",
  ];
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@gmail.com",
      department: "Finance",
      designation: "CA",
      dateOfJoining: "2025-01-01",
    },
  ]);
  return (
    <div className="text-start">
      <h2 className="display-6 mt-5">Employees List</h2>
      <Table responsive className="mt-5">
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              {Object.values(employee).map((field, index2) => (
                <td key={index2}>{field}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Employees;
