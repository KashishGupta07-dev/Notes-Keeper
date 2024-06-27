import React from 'react'
import { MdDelete } from "react-icons/md";
export const Card = ({title,note,setNotes}) => {
  return (
    <div className='rounded-lg flex flex-col bg-[#fff] min-w-[240px] px-4 py-5 gap-y-6 ml-5 my-6' style={{
        boxShadow : "0 2px 5px #ccc"
    }}>
    <div className='text-lg'>
        {
            title && <div className='font-bold leading-none'>{title}</div>
        }
        <div>{note}</div>
        </div>
        <button className='text-yellow-50 px-2 py-2 bg-pure-greys-25 w-fit rounded-lg self-end' onClick={()=>{
            setNotes(prevNote => prevNote.filter((notes)=>(notes.title !== title && notes.note !== note)))
        }}>
            <MdDelete size={"30px"}/>
        </button>
    </div>
  )
}
