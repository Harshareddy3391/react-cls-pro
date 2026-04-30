import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Fetchapi = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary mb-2">Hello</h1>
      <h2 className="mb-3 fw-semibold">Table Data</h2>

      {posts.length > 0 ? (
        <div className="table-responsive shadow-sm rounded">
          <table className="table table-bordered table-striped table-hover align-middle mb-0">
            <thead className="table-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Body</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr key={index}>
                  <td className="text-muted fw-bold">{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="alert alert-warning text-center fs-5" role="alert">
          NO DATA
        </div>
      )}
    </div>
  )
}

export default Fetchapi
