import React, {useState, useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'

const UpdateTask = () => {
    const {id} = useParams()
    const [TaskName, setTaskName] = useState()
    const [TaskDescription, setTaskDescription] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://seequenze-assignment-backend.onrender.com/getUser/' + id )
        .then(result => {
            setTaskName(result.data.TaskName)
            setTaskDescription(result.data.TaskDescription)
        })
        .catch(err => console.log(err))
    }, [])

    const Update = (e) => {
        e.preventDefault();
        axios.put("https://seequenze-assignment-backend.onrender.com/updateUser/" + id, {TaskName, TaskDescription})
        .then(result => {
          console.log(result)
          navigate('/')
      })
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Update}>
                    <h2>Update Task</h2>

                    <div className="mb-2">
                       <label htmlFor="">TaskName</label>
                       <input type="text" placeholder="Enter TaskName" className="form-control" 
                       value={TaskName} onChange={(e) => setTaskName(e.target.value)}/>
                    </div>

                    <div className="mb-2">
                       <label htmlFor="">TaskDescription</label>
                       <input type="text" placeholder="Enter TaskDescription" className="form-control"
                       value={TaskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
                    </div>

                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateTask
