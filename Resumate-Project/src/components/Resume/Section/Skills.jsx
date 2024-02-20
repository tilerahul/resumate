import React, {useContext, useState} from 'react'
import toast from "react-hot-toast";
import { IoAddCircleSharp } from "react-icons/io5";
import { AppContext } from '../../../Context/appContext';

const Skills = () => {
  const {setSection, setResumeData} = useContext(AppContext);

  const [skilsData, setSkillsData] = useState({
    skill : ''
  })
  const changeHandler = (e) =>{
    setSkillsData({
      ...skilsData,
      [e.target.name] : e.target.value,
    })
  }
  const submitHandler = (e) =>{
    e.preventDefault();
    setResumeData((prev)=>({
      ...prev, 
      Skills : [...prev.Skills,skilsData]
    }))
    toast.success("Data save Successfully");
    setSection('workExperience');
  }
  const addFields = () =>{
    setResumeData((prev)=>({
      ...prev, 
      Skills : [...prev.Skills,skilsData]
    }))
    setSkillsData({
      skill : ''
    })
  }
  const nextClick = (e) =>{
    e.preventDefault();
    setSection('workExperience');
  }
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h3 className="font-bold py-3 text-xl">Skills</h3>
        <IoAddCircleSharp onClick={addFields} size={25} className='mx-3 cursor-pointer' />
      </div>
      <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
        <div>
          <label
            htmlFor="skill"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Skill
          </label>
          <div className="flex items-center">
            <input
              type="text"
              name="skill"
              id="skill"
              value={skilsData.skill}
              onChange={changeHandler}
              placeholder="Enter Your Skills"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div className='flex gap-2'>
          <button
            type="submit"
            name='submit'
            onClick={submitHandler}
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Save
          </button>
          <button
            onClick={nextClick}
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Next
          </button>
        </div>
        </form>
    </div>
  )
}

export default Skills
