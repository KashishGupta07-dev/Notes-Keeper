import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { IoIosAddCircle } from "react-icons/io";
import { Card } from './Card';
import toast from 'react-hot-toast';
export const Notes = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState:{errors}
    } = useForm();
    const [showFull,setShowFull] = useState(false);
    const [notes,setNotes] = useState([]);
    function submitHandler(data){
        if(notes?.some((note)=>(note.title === data.title && note.note === data.note))){
            toast.error("Note Already Exist");
        }
        else{
            setNotes([...notes,{
                title : data.title,
                note : data.note,
            }]);
        }
            reset({
                "note" : "",
                "title" : ""
            })
    }
  return (
    <div className='w-full'>
        {
         <form className='mx-auto w-fit rounded-lg mt-10' style={{
            boxShadow : "0 2px 5px #ccc"
         }} onSubmit={handleSubmit(submitHandler)}>
              { showFull? <div className='flex flex-col relative'>
                <input type='text' placeholder='Title' name='title' className='outline-none w-[500px] bg-[#fff] px-4 pt-3 rounded-t-lg placeholder:font-light text-lg placeholder:text-opacity-70'
                    {
                        ...register("title")
                    }
                />
                <textarea rows={3} placeholder='Take a note...' name='note' className='outline-none w-[500px] bg-[#fff] px-4 pb-3 rounded-b-lg placeholder:font-light text-lg placeholder:text-opacity-70' style={{resize:"none"}}
                    {
                        ...register("note",{
                            required:{value:true,message:"Please Enter Notes"}
                        })
                    }
                />
                <button type='submit' className='absolute right-10 bottom-[-23px]' style={{
                    zIndex:"10"
                }}>
                    <IoIosAddCircle size={"45px"} className='text-yellow-50 hover:text-richblack-5'/>
                </button>
                </div> : <input type='text' placeholder='Take a note...' readOnly={true} onClick={()=>setShowFull(true)} className='bg-[#fff] outline-none placeholder:font-light text-lg px-4 py-3 placeholder:text-opacity-70 w-[500px] rounded-lg'/>
              }
            </form> 
        }
        {
                errors.note && 
                <span className='text-yellow-50 text-sm my-1 flex justify-center'>{errors.note.message}</span>
        }
        <div className='flex flex-row flex-wrap mt-10'>
        {
            notes?.map((note,index)=>(
                    <Card title={note.title} note={note.note} setNotes = {setNotes} key={index}/>
            ))
        }
        </div>
    </div>
  )
}
