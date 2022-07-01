import React, { useEffect } from 'react'
import { fetchData } from './Actions/Action'
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const myData = useSelector((state) => state)
  useEffect(() => {
    // alert("test")
    // console.log(myData)
    dispatch(fetchData());
  }, [])
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">username</th>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>
        {myData.map((item,index)=>{
          return <tr key={index}>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
          </tr>
        })}
          
        </tbody>
      </table>
    </>
  )
}

export default App
