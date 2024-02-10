import React from 'react';
import FAQComponent from './FAQComponent'
import QueAns from './QueAns';

const Faq = () => {
  return (
    <div className='w-full flex justify-center  pt-24'>
      <div className='w-11/12 flex gap-4'>
        <div className='w-1/6 mt-4'>
          <p className='font-medium'>Frequenty Asked Questions</p>
        </div>
        <div className='w-4/5'>
          {
            QueAns.map((data, id) => (
              <FAQComponent key={id} id={data.id} question={data.question} answer={data.answer}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Faq