import React, { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'


function App() {
    const [person, setperson] = useState([])
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/users')
                setperson(res.data)
            }
            catch (error) {
                console.log(error.response.data)
            }
            
        }
        getData()
        
    }, [])
    return (
        <div>
            <h2>User List</h2>
        <div className="App">
           

            {person.map((user, i) => {
                return (

                    <div key={user.id} className="person">
                        <ul className="list">
                        <li><span>Name:</span> {user.name}</li>
                        <li><span>Username:</span> {user.username}</li>
                        <li><span>Email:</span> {user.email}</li>
                            <li><span>Phone:</span>{user.phone}</li>
                        </ul>    
                    </div>
                )
            })}
            </div>
            </div>
    )
}

export default App

