import { useState, useEffect } from "react"
import React from 'react'
import Axios from 'axios'

const One = () => {

    let [user, setuser] = useState([])

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((res) => { setuser(res.data) })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container mt-4">
            <h1 className="text-center text-success mb-3">Comments</h1>

            {user.length > 0 ? (
                <div className="table-responsive shadow-sm rounded">
                    <table className="table table-bordered table-striped table-hover align-middle mb-0">
                        <thead className="table-success">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((user, index) => (
                                <tr key={index}>
                                    <td className="text-muted fw-bold">{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="loading-text">Loading...</p>
            )}
        </div>
    )
}

export default One
