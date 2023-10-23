import React, { useState, useEffect } from "react";
import { Button, Modal, ListGroup, Jumbotron } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';
import { FaCheck } from 'react-icons/fa';
import Instructions from "./Instructions";

function TodoApp() {
  const [pending, setPending] = useState([
    "Take out Trash",
    "Walk Dog",
    "Buy Challenger",
    "White Wash Brick",
    "Renovate Lake Nona House",
  ]);
  const [completed, setCompleted] = useState(["Get website done", "Pay drywall statement"]);
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    // Update the local storage when the lists change
    localStorage.setItem("pending", JSON.stringify(pending));
    localStorage.setItem("completed", JSON.stringify(completed));
  }, [pending, completed]);

  const handleCheck = (task) => {
    if (pending.includes(task)) {
      setPending(pending.filter((item) => item !== task));
      setCompleted([...completed, task]);
    } else {
      setCompleted(completed.filter((item) => item !== task));
      setPending([...pending, task]);
    }
  };

  const handleAddTask = () => {
    setPending([...pending, newTask]);
    setNewTask("");
    setShowModal(false);
  };

  return (
    <>
      <div className="custom-header" style={{ marginBottom: '30px' }}>
        <h1>Morgan's To Do List</h1>
      </div>

      <Instructions />

      <Button
        variant="primary"
        onClick={() => setShowModal(true)}
        style={{ margin: "auto", padding: '7px 40px' }}
      >
        Add Task
      </Button>

      <div className="container">
        <div className="row" style={{ marginBottom: '30px' }}>
          <div className="col-md-6">
            <h2 className="headingstyle">Pending</h2>
            <ListGroup>
              {pending.map((task, index) => (
                <ListGroup.Item
                  key={index}
                  className="list-group-item list-group-item-warning"
                  onClick={() => handleCheck(task)}
                >
                  {task}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
          <div className="col-md-6">
            <h2 className="headingstyle">Completed</h2>
            <ListGroup>
              {completed.map((task, index) => (
                <ListGroup.Item
                  key={index}
                  className="list-group-item list-group-item-primary"
                  onClick={() => handleCheck(task)}
                >
                  <FaCheck /> {task} <FaCheck />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddTask}>
            Add Task
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TodoApp;
