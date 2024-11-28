import React from 'react'

export default function Search({holder, title, handle}) {
  return (
    <div className='border-2 border-blue-50 rounded-full w-3/4 my-4 m-auto'>
        <input type="text" name="search" id="search" className='outline-none w-3/4 p-4 bg-transparent' placeholder={holder} defaultValue={title} onChange={handle}/>
    </div>
  )
}
