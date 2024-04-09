import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Crud/Create.scss";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Create() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [posts, setPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.location.href.split("=")[1]) {
      editPost(form);
    } else {
      addPost(form);
    }
  };
  useEffect(() => {
    if (window.location.href.split("=")[1]) {
      axios
        .get(
          `${import.meta.env.VITE_API_DUPLICATE_URL}database/${
            window.location.href.split("=")[1]
          }`
        )
        .then((response) => {
          setForm({
            name: response.data.name,
            email: response.data.email,
            password: response.data.password,
          });
        })
        .catch((error) => {
          console.error("Error adding post:", error);
        });
    }
  }, [window.location.href.split("=")[1]]);

  

  // Edit action
  const editPost = (formData) => {
    axios
      .put(
        `${import.meta.env.VITE_API_DUPLICATE_URL}database/${
          window.location.href.split("=")[1]
        }`,
        formData
      )
      .then((response) => {
        setForm({
          name: "",
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        console.error("Error adding post:", error);
      });
  };

  // add action
  const addPost = (formData) => {
    axios
      .post(`${import.meta.env.VITE_API_DUPLICATE_URL}/database`, formData)
      .then((response) => {
        setPosts([response.data, ...posts]);
        setForm({
          name: "",
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        console.error("Error adding post:", error);
      });
  };

  const handleChange = (e, field) => {
    setForm({ ...form, [field]: e.target.value });
  };

  return (
    <>
      <p className="mt-4 fs-1 fw-bold">INPUT DETAILS</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Name"
            value={form.name}
            onChange={(e) => handleChange(e, "name")}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter your E-mail"
            value={form.email}
            onChange={(e) => handleChange(e, "email")}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter Your Password"
            value={form.password}
            onChange={(e) => handleChange(e, "password")}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Create;
