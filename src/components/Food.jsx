import React, {useState} from 'react'
import {data} from '../data'

const Food = () => {

    const [foods, setFoods] = useState(data)

    //Filter type
    const filterType=(category)=>{
        setFoods(
            data.filter((item)=>{
                return item.category === category;
            })
        )
    }
    //Filter price
    const filterPrice=(price)=>{
        setFoods(
            data.filter((item) => {
               return item.price === price; 
            })
        )
    }

  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

        {/* filter row */}
        <div className='flex flex-row lg:flex-row justify-between'>
            {/* filter type */}
            <div>
                <p className='font-bold text-gray-700 my-2'>Filter Type</p>
                <div className='flex justify-between flex-wrap flex-col md:flex-row items-start'>
                    <button onClick={()=> setFoods(data)} className='m-1 bg-black  text-white  hover:text-orange-600 font-bold'>All</button>
                    <button onClick={() => filterType('burger')} className='m-1 bg-black  text-white  hover:text-orange-600 font-bold'>Burgers</button>
                    <button onClick={() => filterType('pizza')} className='m-1 bg-black  text-white  hover:text-orange-600 font-bold'>Pizza</button>
                    <button onClick={() => filterType('salad')}className='m-1 bg-black  text-white  hover:text-orange-600 font-bold'>Salads</button>
                    <button onClick={() => filterType('chicken')}className='m-1 bg-black  text-white  hover:text-orange-600 font-bold'>Chicken</button>
                </div>
            </div>
            {/* filter price */}
            <div className='text-end'>
                <p className='font-bold text-gray-700 my-2'>Filter Price</p>
                <div className='flex justify-between w-full flex-col md:flex-row items-end'>
                    <button onClick={()=> filterPrice('<100')} className='m-1 bg-black  text-white  hover:text-orange-600 font-bold'>{`<$100`}</button>
                    <button onClick={()=> filterPrice('100-200')}className='m-1 bg-black  text-white  hover:text-orange-600 font-bold'>$100-$200</button>
                    <button onClick={()=> filterPrice('200-300')}className='m-1 bg-black  text-white  hover:text-orange-600 font-bold'>$200-$300</button>
                    <button onClick={()=> filterPrice('>300')}className='m-1 bg-black  text-white  hover:text-orange-600 font-bold'>{`>$300`}</button>
                </div>
            </div>
        </div>

{/* display food images */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
           {foods.map((item,index) =>(
            <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-t-lg'>
                <img src={item.image} alt={item.name}
                    className='w-full h-[200px] object-cover rounded-t-lg' />
                <div  className='flex justify-between px-2 py-4'>
                    <p className='font-bold'>{item.name}</p>
                    <p>
                        <span className='bg-orange-500 text-white p-2 rounded-md'>{item.iconPrice}</span>
                    </p>
                </div>
            </div>
           ))} 
        </div>
    </div>
  )
}

export default Food