import React, {useState} from 'react'
import SaveButton from '../Button/SaveButton';
import NextButton from '../Button/NextButton';
import toast from "react-hot-toast";
import { IoAddCircleSharp } from "react-icons/io5";

const Languages = ({setResumeData}) => {
  const [languages, setLanguages] = useState({
    language : ''
  })
  const changeHandler = (e) =>{
    setLanguages({
      ...languages,
      [e.target.name] : e.target.value,
    })
  }
  const submitHandler = (e) =>{
    e.preventDefault();
    setResumeData((prev)=>({
      ...prev, 
      Languages : [...prev.Languages,languages]
    }))
    toast.success("Data save Successfully");
  }

  const addFields = () =>{
    
  }

  return (
    <div>
      <div className='flex items-center justify-between'>
        <h3 className="font-bold py-3 text-xl">Languages</h3>
        <IoAddCircleSharp onClick={addFields} size={25} className='mx-3 cursor-pointer' />
      </div>
      <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
        <div>
          <label
            htmlFor="language"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Languages
          </label>
          <div className="flex items-center">
            <input
              type="text"
              name="language"
              id="language"
              value={languages.language}
              onChange={changeHandler}
              placeholder="Enter Your languages"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div className='flex gap-2 w-full justify-end'>
          <SaveButton/>
          <NextButton/>
        </div>
        </form>
    </div>
  )
}

export default Languages
