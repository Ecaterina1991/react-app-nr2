import React from "react";
import "./CreateTaskForm.css";

const CreateTaskForm = () => {
  return (
    <div>
      <form>
        <div className="form-row">
          <label>Task Name</label>
          <input className="case" type="text" />
        </div>

        <div className="form-row">
          <label>Due Date</label>
          <input className="case" type="date" />
        </div>

        <div className="form-row">
          <label>Task Details</label>
          <textarea
            className="textarea"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <button className="button" type="submit">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
