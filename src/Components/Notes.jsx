import React from 'react'
import { useState } from 'react'

function Notes() {

    const [notes, setNotes ] = useState([])
    const [inputValue,setInputValue] = useState('')

    const handleNotes = (e)=>{
        setInputValue(e.target.value)
    }

    let handleSave = ()=>{
        if(inputValue.trim()){
            setNotes ([...notes,inputValue.trim()]);
            setInputValue('')
        }
    }

    let handleDelete = (index )=> {
        setNotes(notes.filter((_, i) => i !== index));
    }

    // let handleEdit = (index , inputValue)=> {
    //     setNotes((prevTodos)=>
    //     prevTodos.map((todo)=>
    //     todo.id == id ? {...todo, text: newText}: todo
    // )
    // }
  return (
    <>
    <h1 className='text-red-600 text-4xl my-4 font-sans '>Note App</h1>
    <div>
        <input 
        type = "text"
        value  = {inputValue}
        onChange={handleNotes}
        placeholder='Enter your notes here'
        className='border-4 w-full bg-gray-600 h-40 text-white text-2xl text-start rounded-lg'
        />
    </div>
    <div>
        <button 
        className='border-2 bg-blue-600 m-5 w-20 text-center rounded-full text-black '
        onClick={handleSave}
        >
            Save
        </button>
    </div>
    <div>
    <ul>
        <h2 className = "text-red-500 text-3xl text-left">Your Notes : </h2>

        {notes.map((notes, index)=> (
            <li key={index} className='text-black border-gray-100 bg-gray-400 rounded-full m-2 p-1'>
                {notes} 
                <button className='bg-red-500 text-black m-2 w-20 text-center rounded-full' onClick={()=> handleEdit(index)}>Edit</button>
            <button className='bg-red-500 text-black m-5 w-20 text-center rounded-full' onClick={()=> handleDelete(index)}>Delete</button>
            </li>
        ))}
     </ul>

    </div>
    
    </>
  )
}

export default Notes
