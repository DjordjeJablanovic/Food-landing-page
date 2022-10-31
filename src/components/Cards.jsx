import React from 'react'

const Cards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* card */}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's OUT</p>
                <p className='px-2 '>Throught 11/11</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order now</button>
            </div>
            <img src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?cs=srgb&dl=pexels-valeria-boltneva-1639557.jpg&fm=jpg"
                 alt="bogo-burger"
                 className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' />
        </div>
        {/* card */}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Double Deck</p>
                <p className='px-2 '>Throught 11/11</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order now</button>
            </div>
            <img src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"
                 alt="double-deck-burger"
                 className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' />
        </div>
        {/* card */}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Poni Pepperoni</p>
                <p className='px-2 '>Throught 23/3</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order now</button>
            </div>
            <img src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
                 alt="pepperoni-burger"
                 className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' />
        </div>
    </div>
  )
}

export default Cards