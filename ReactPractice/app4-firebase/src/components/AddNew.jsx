import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

function AddNew({ fetchEmployees }) {
  const defaultEmployee = {
    name: "",
    email: "",
    department: "",
    designation: "",
    dateOfJoining: "",
  };
  const [showAlert, setShowAlert] = useState(false);
  const [show, setShow] = useState(false);
  const [newEmployee, setNewEmployee] = useState(defaultEmployee);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = async () => {
    try {
      const employeesRef = collection(db, "employees");
      await addDoc(employeesRef, newEmployee);
      setShowAlert(true);
      fetchEmployees(); // Refresh the employee list after adding a new employee
    } catch (error) {
      console.error("Error adding employee:", error);
    }
    handleClose();
    setNewEmployee(defaultEmployee);
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="mt-4">
        Add New Employee
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="John Doe"
                value={newEmployee.name}
                onInput={(e) =>
                  setNewEmployee({ ...newEmployee, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="john.doe@gmail.com"
                value={newEmployee.email}
                onInput={(e) =>
                  setNewEmployee({ ...newEmployee, email: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                placeholder="Finance"
                value={newEmployee.department}
                onInput={(e) =>
                  setNewEmployee({ ...newEmployee, department: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Designation</Form.Label>
              <Form.Control
                type="text"
                placeholder="CA"
                value={newEmployee.designation}
                onInput={(e) =>
                  setNewEmployee({
                    ...newEmployee,
                    designation: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date of Joining</Form.Label>
              <Form.Control
                type="date"
                placeholder="01-01-2025"
                value={newEmployee.dateOfJoining}
                onInput={(e) =>
                  setNewEmployee({
                    ...newEmployee,
                    dateOfJoining: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={handleSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      {showAlert && (
        <Alert
          className="w-50" 
          variant="success"
          onClose={() => setShowAlert(false)}
          dismissible
          style={{ position: "fixed", top: "20px", left: "50%", transform: "translateX(-50%)" }}
        >
          <Alert.Heading>Success</Alert.Heading>
          <p>New employee added successfully ☑️</p>
        </Alert>
      )}
    </>
  );
}

export default AddNew;
