import React from 'react'

function Background() {
  return (
    <>
    <div className='w-full h-screen fixed z-[2]'>

    <div className='absolute top-[5] w-full py-10 font-semibold text-zinc-600 text-xl flex justify-center'>Documents</div>
      <h1 className='absolute  top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900'>Notes</h1>

    </div>
    </>
  )
}

export default Background