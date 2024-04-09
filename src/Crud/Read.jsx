import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Crud/Read.scss";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Read() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`${import.meta.env.VITE_API_DUPLICATE_URL}/database`)
      .then((res) => setUsers(res.data))
      .catch((err) => {
        setError(err.message);
      });
  };

  const onDelete = (userId) => {
    axios
      .delete(`${import.meta.env.VITE_API_DUPLICATE_URL}/database/${userId}`)
      .then(() => {
        // Remove the deleted user from the state
        setUsers(users.filter(user => user.id !== userId));
      })
      .catch((error) => {
        setError("Error deleting user: " + error.message);
        console.error("Error deleting user: ", error);
      });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <p className="mt-4 fs-1 fw-bold">DETAILS</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <Link to={`/Create?id=${user.id}`}>
                  <button>Edit</button>
                </Link>
                <button className="btn btn-primary" onClick={() => onDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Read;
