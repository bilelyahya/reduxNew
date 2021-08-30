import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtask } from '../Redux/Action/Action'

const AddTask = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    const add = ()=> {
      if (text) {
        dispatch(addtask({id:Math.random, name:text.trim(), isDone:false}))
        setText("")
          
      } else {
          alert("Empty")
      }

    }
    return (
        <div>
            <input onChange={(e)=>setText(e.target.value)} type="text" value={text}/>
            <button onClick={add} >Add task</button>
        </div>
    )
}

export default AddTask
