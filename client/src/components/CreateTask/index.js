import React, { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const CreateTask = () => {
    const [TaskName, setTaskName] = useState()
    const [TaskDescription, setTaskDescription] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
          e.preventDefault();
          axios.post("http://localhost:3002/createUser", {TaskName, TaskDescription})
          .then(result => {
            console.log(result)
            navigate('/')
        })
          .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Submit}>
                    <h2>Add Task</h2>

                    <div className="mb-2">
                       <label htmlFor="">TaskName</label>
                       <input type="text" placeholder="Enter TaskName" className="form-control"
                              onChange={(e) => setTaskName(e.target.value)} />
                    </div>

                    <div className="mb-2">
                       <label htmlFor="">TaskDescription</label>
                       <input type="text" placeholder="Enter TaskDescription" className="form-control"
                           onChange={(e) => setTaskDescription(e.target.value)} />
                    </div>

                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateTask
