import React from 'react'
import { FaPlus } from "react-icons/fa";

const faqComponent = ({id, question, answer}) => {
  return (
    <>
      <div className='shadow-xl my-4 rounded-md'>
        <div className='flex items-center justify-between'>
          <p className='px-5 pt-3 m-2 font-medium'>Q.{id} {question}</p>
          <span className='mx-16'><FaPlus /></span>
        </div>
        <div>
          <p className='px-5 py-3 mx-9 pb-4'>{answer}</p>
        </div>
      </div>
    </>
  )
}

export default faqComponent