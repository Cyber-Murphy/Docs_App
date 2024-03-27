import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref=useRef(null)
    const data=[
        {
          desc:"This is the note storage. You can store many",
          fileSize:".9mb",
          close:true,
          tag:{isOpen:true,tagTitle:"Download now" ,tagcolor:"green"},
        },
        {
          desc:"Today i will complete the react series",
          fileSize:".9mb",
          close:true,
          tag:{isOpen:true,tagTitle:"Download now" ,tagcolor:"blue"},
        },
        {
          desc:"I will go to the gym and watch movies today",
          fileSize:".9mb",
          close:true,
          tag:{isOpen:true,tagTitle:"Upload" ,tagcolor:"green"},
        },
      ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 p-5 flex-wrap  '>
        {
            data.map((item,index)=>(
                <Card data={item} reference={ref} />
            ))
        }
    </div>


  )
}

export default Foreground