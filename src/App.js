import './App.css';
import Button from '@mui/material/Button';
import { AddShoppingCart } from '@mui/icons-material';

function sayHello() {
  alert('You clicked me!');
}

function App() {
     return (
<div className='flex'>
   <div className='bg-gray-bg relative h-[200vh] w-48'>
        <div className='font-serif text-regal-red font-semibold p-6'>Dev
          <span className='text-dark-blue'>challenges.io</span> 
        </div>
          <div className='flex flex-col space-y-6 p-10 cursor-pointer '>
            <p className='text-gray-500 font-sans hover:underline flex items-center gap-2 transition transform duration-300 ease-out hover:scale-105'>
            <span class="material-icons text-sm ">&#xE3B7;</span>Colors</p>
            <p className='text-gray-500 font-sans hover:underline flex items-center gap-2 transition transform duration-300 ease-out hover:scale-105'>
            <span class="material-icons text-sm ">&#xE262;</span>Typography</p>
            <p className='text-gray-500 font-sans hover:underline flex items-center gap-2 transition transform duration-300 ease-out hover:scale-105'>
            <span class="material-icons text-sm ">&#xE2DB;</span>Spaces</p>
            <p className='text-gray-500 font-sans hover:underline flex items-center gap-2 transition transform duration-300 ease-out hover:scale-105'>
            <span class="material-icons text-sm ">&#xE837;</span>Buttons</p>
            <p className='text-black font-bold font-sans hover:underline flex items-center gap-2 transition transform duration-300 ease-out hover:scale-105'>
            <span class="material-icons text-sm ">&#xE3C9;</span>Inputs</p>
            <p className='text-gray-500 font-sans hover:underline flex items-center gap-2 transition transform duration-300 ease-out hover:scale-105'>
            <span class="material-icons text-sm ">&#xE9B0;</span>Grid</p>
          </div>
    </div>
              <div>
                <h2 className='text-gray-700 p-8 text-2xl'>Buttons</h2>
              <div > 
                {/* Normal Button */}
                  <div className="line1 space-x-16"> 
                    <div className=' flex-row pb-6'>
                      <span className='ml-14 '> Normal Button</span> 
                      <span className='ml-10 text-gray-500'> Hover and Focus</span>
                    </div>
                    <button onClick={sayHello} className="bg-gray-300 rounded-lg p-3 text-black font-semibold shadow-sm ml-8">Default</button>
                    <button onClick={sayHello}  className='bg-gray-300 rounded-lg p-3 text-black font-semibold shadow-sm ml-8 hover:bg-gray-500 focus:bg-gray-500'>Default</button>
                  </div>
                {/* Outline Button */}
                  <div className="line1 space-x-16 pt-3">
             <div className=' flex-row pb-6'>
              <span className='ml-14 '> Outline Button</span> 
              <span className='ml-10 text-gray-500'> Hover and Focus</span>
             </div>
              <button onClick={sayHello}  className='text-blue-600 rounded-lg p-3 outline outline-1 outline-blue-600 font-semibold shadow-sm ml-8'>Default</button>
              <button  onClick={sayHello}  className=' outline outline-1 outline-blue-600 rounded-lg p-3 text-blue-600  font-semibold shadow-sm ml-8 hover:bg-blue-200 focus:bg-blue-200'>Default</button>
            </div>
            {/* text button */}
            <div className="line1 space-x-16 pt-3">
             <div className=' flex-row pb-6'>
              <span className='ml-14 '> Text Button</span> 
              <span className='ml-10 text-gray-500'> Hover and Focus</span>
             </div>
              <button onClick={sayHello}  className='text-blue-600 rounded-lg p-3  font-semibold shadow-sm ml-8'>Default</button>
              <button onClick={sayHello}  className=' rounded-lg p-3 text-blue-600  font-semibold shadow-sm ml-8 hover:bg-blue-200 focus:bg-blue-200'>Default</button>
            </div>
            {/* disable button shadow */}
            <div className="line1 space-x-16 pt-3">
             <div className=' flex-row pb-6'>
              <span className='ml-14 '> Disable Shadow</span> 
             </div>
              <button className='bg-blue-900 rounded-lg p-3 text-white font-semibold shadow-lg shadow-gray-500 ml-8 focus:shadow-none' >Default</button>
            </div>
            {/* Disabled button */}
            <div className="line1 space-x-16 pt-3">
             <div className=' flex-row pb-6'>
              <span className='ml-14 '> Disable Buttom</span> 
             </div>
             <button onClick={sayHello}  className='bg-gray-300 rounded-lg p-3 text-gray-500  ml-8 cursor-not-allowed' disabled>Disabled</button>
            </div>
             {/* Text Disabled button */}
              <div className="line1 space-x-16 pt-3">
              <div className=' flex-row pb-1'>
                <span className='ml-14'> Disable text button</span> 
              </div>
              <button onClick={sayHello}  className=' rounded-lg p-3 text-gray-500  ml-8 cursor-not-allowed' disabled>Disabled</button>
            </div>
             {/* Icon Button */}
            <div className="line1 space-x-16"> 
             <div className=' flex-row pb-6'>
              <span className='ml-14'> Start Icon</span> 
              <span className='ml-28 text-gray-500'> End Icon</span>
             </div>
             <Button onClick={sayHello}  variant="contained" startIcon={<AddShoppingCart />} >Default</Button>
             <Button onClick={sayHello}  variant="contained" endIcon={<AddShoppingCart />}>Default</Button>
            </div>
               {/* Different Size Button */}
               <div className="line1 space-x-16"> 
             <div className=' flex-row p-6'>
              <span className='ml-14'> Small</span> 
              <span className='ml-28 text-gray-500'> Medium</span>
              <span className='ml-24 text-gray-500'> Large</span>
             </div>
              <Button onClick={sayHello}  variant="contained" size="small">Default</Button>
              <Button onClick={sayHello}  variant="contained" size="medium">Default</Button>
              <Button onClick={sayHello}  variant="contained" size="large">Default</Button>
            </div>
             {/* Color Button */}
             <div className="line1 space-x-16"> 
             <div className=' flex-row p-6'>
              <span className='ml-14'> Default</span> 
              <span className='ml-28 text-gray-500'> Primary</span>
              <span className='ml-24 text-gray-500'> Secondary</span>
              <span className='ml-24 text-gray-500'> Danger</span>
             </div>
             <Button onClick={sayHello}  variant="contained" color="inherit">Default</Button>
             <Button onClick={sayHello}  variant="contained" color="primary">Default</Button>
             <Button onClick={sayHello}  variant="contained" color="secondary">Default</Button>
             <Button onClick={sayHello}  variant="contained" color="warning">Default</Button>
            </div>
          </div>   
          <h3 className='text-gray-500 font-serif  ml-3 p-10 text-xl cursor-pointer'> created by <span className='hover:text-black hover:font-semibold'>
           Kinal Chauhan </span>  -  
          <span className='font-serif text-regal-red font-semibold p-6'>Dev<span className='text-dark-blue'>challenges.io</span> </span>   </h3>  
       </div>
       </div>
  );
}

export default App;
