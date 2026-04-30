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
    <div>
      <h3>Posts</h3>

      {/* Debug */}
      <pre>{JSON.stringify(posts)}</pre>
      {
        posts.length>0 ?  <div>
            <thead>
                <tr>
                <th>id</th>
                <th>title</th>
                <th>body</th>
                </tr>
 
            </thead>
            
                {posts.length > 0 ? <div>
                     <tbody>
                        {posts.map(()=>{
                            return (
                                <tr key=index>
                                <td>{posts.id}</td>
                    <td>{posts.title}</td>
                    <td>{posts.body}</td>
                

                                </tr>
                            )
                        })

                        }
                        <tr>
                     
                     </tbody>

                </div>}
                 
           
        </div>: <h3>No Data</h3>
      }

      <h1>hello</h1>
    </div>
  )
}

export default Fetchapi