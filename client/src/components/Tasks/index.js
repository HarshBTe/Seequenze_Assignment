
import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import axios from "axios"

const Tasks = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        axios.get("https://seequenze-assignment-backend.onrender.com")
        .then(result => setTasks(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('https://seequenze-assignment-backend.onrender.com/deleteUser/' + id)
        .then(res => {console.log(res)
            window.location.reload()
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to="/create" className="btn btn-success">Add +</Link>
                <table className="table">
                      <thead>
                        <tr>
                            <th>TaskName</th>
                            <th>TaskDescription</th>
                            <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                         {
                            tasks.map((task) => {
                             return   <tr>
                                    <td>{task.TaskName}</td>
                                    <td>{task.TaskDescription}</td>
                                    <td>
                                    <Link to={`/update/${task._id}`} className="btn btn-success">Update</Link>
                                    <button className="btn btn-danger" onClick={(e) => handleDelete(task._id)}>Delete</button>
                                    </td>
                                </tr>
                            })
                         }
                      </tbody>
                </table>
               
            </div>
        
        </div>
    )
}

export default Tasks
