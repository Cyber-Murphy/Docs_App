import React from 'react'
import { FaRegFilePdf } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"



function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className='flex-shrink-0 relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden'>
        <FaRegFilePdf/>
<p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}
</p>
    <div className='footer  absolute bottom-0 left-0 w-full   '>
        <div className=' flex items-center justify-between py-3 px-8 mb-3'> 
    <h5>{data.fileSize}</h5>
    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center mb-5  '>
        {data.close ? <IoMdClose/> :    <FaDownload size=".7em" color='#000' />
 }
    </span >
        </div>
        {
            data.tag.isOpen && (<div className={`tag w-full py-4 ${data.tag.tagcolor=== "blue"?"bg-blue-400":"bg-green-400"} flex items-center justify-center`}>
            <h3 className='text-sm font-semibold '>{data.tag.tagTitle}</h3>
        </div>)
        }
        
    </div>

    </motion.div>
    )
}

export default Card