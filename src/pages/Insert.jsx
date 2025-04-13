import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import axios from "axios";

const Insert = () => {
  const [input, setInput] = useState({
    empno: '',
    name: '',
    designation: '',
    salary: ''
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    
    // Basic validation
    if (!input.empno || !input.name || !input.designation || !input.salary) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const api = "http://localhost:3000/Employee";
      const response = await axios.post(api, input);
      console.log(response);
      
      toast.success("Data saved successfully");
      
      // Clear form after successful submission
      setInput({
        empno: '',
        name: '',
        designation: '',
        salary: ''
      });
      
    } catch (error) {
      console.error("Error saving data:", error);
      toast.error("Failed to save data");
    }
  }

  return (
    <>
      <h1 className="text-center mt-4 mb-4 text-primary" style={{ fontWeight: "bolder" }}>
        Enter Employee's Details
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form onSubmit={handleSubmit} className="border p-4 rounded shadow bg-light">
              <div className="mb-3">
                <label htmlFor="empno" className="form-label">Enter empno:</label>
                <input
                  type="text"
                  name="empno"
                  className="form-control"
                  id="empno"
                  value={input.empno}
                  onChange={handleInput}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">Enter name:</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  value={input.name}
                  onChange={handleInput}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="designation" className="form-label">Enter designation:</label>
                <input
                  type="text"
                  name="designation"
                  className="form-control"
                  id="designation"
                  value={input.designation}
                  onChange={handleInput}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="salary" className="form-label">Enter salary:</label>
                <input
                  type="text"
                  name="salary"
                  className="form-control"
                  id="salary"
                  value={input.salary}
                  onChange={handleInput}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                Save
              </button>
            </form>

            <div className="mt-4">
              <h5 className="text-secondary">Preview:</h5>
              <pre className="bg-dark text-white p-3 rounded">
                {JSON.stringify(input, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Insert;