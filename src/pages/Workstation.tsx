import React, { useEffect, useRef, useState } from 'react'
import { IoClose } from 'react-icons/io5';
import Button from '../components/Button';
import axios from 'axios';
import GalleryCard from '../components/GalleryCard';


const Workstation = () => {
  const [veggies, setVeggies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
    // Fetch all vegetables
    useEffect(() => {
      axios.get('http://localhost:3001/vegetables')
        .then(response => {
          setVeggies(response.data);  // Store the vegetable data
          setLoading(false);  // Set loading to false once the data is fetched
        })
        .catch(error => {
          console.error("There was an error fetching vegetables:", error);
          setLoading(false);
        });
    }, []);  // Empty array means this runs only once when the component mounts
  
    // Fetch all categories
    useEffect(() => {
      axios.get('http://localhost:3001/categories')
        .then(response => {
          setCategories(response.data); 
          console.log(response.data) // Store the category data
        })
        .catch(error => {
          console.error("There was an error fetching categories:", error);
        });
    }, []); 

  // craousel essential;s
  const images = [
    "https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/128402/pexels-photo-128402.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const [current, setCurrent] = useState(0);
  const length = images.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [current]);



  // signup hooks 
  const modal = useRef(null);
  
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log('Sign up data:', formData);
      alert(`Account created for: ${formData.username}`);
    };
  

  

  return (
   <>
 
 
    <div className=" relative w-full max-w-2xl mx-auto mt-10 overflow-hidden rounded-2xl shadow-lg">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-full object-cover transition-normal duration-1000 ease-linear"
      />

      {/* Navigation Buttons */}
   
     

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </div>

{/* abou company */}

<div className='w-full h-100  flex gap-5 items-center justify-center p-5'>
      <div className='w-1/2 h-full overflow-hidden ' >
      <img className="size-full object-contain" src="src\assets\videos\aboutpic-1.jpeg"></img>
      </div>
      <div className='w-1/2 h-full space-y-2 flex flex-col justify-center p-10 items-center '>
      <h1 className='text-5xl font-bold'>Absolute performance</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in quo suscipit voluptatum tempore similique architecto fuga distinctio? Accusamus, delectus.</p></div>
    </div>

    
    <div className='w-full h-100   flex flex-row-reverse
     gap-5 items-center justify-center   p-5'>
      <div className='w-1/2 h-full overflow-hidden' >
      <img className="size-full object-contain" src="src\assets\videos\aboutpic-2.jpeg"></img>
      </div>
      <div className='w-1/2 h-full space-y-2 flex flex-col justify-center p-10 items-center '>
      <h1 className='text-5xl font-bold'>Absolute performance</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in quo suscipit voluptatum tempore similique architecto fuga distinctio? Accusamus, delectus.</p></div>
    </div>



    <div className='w-full h-100   flex gap-5 items-center justify-center   p-5'>
      <div className='w-1/2 h-full overflow-hidden' >
      <img className="size-full object-contain" src="src\assets\videos\aboutpic-3.jpeg"></img>
      </div>
      <div className='w-1/2 h-full space-y-2 flex flex-col justify-center p-10 items-center '>
      <h1 className='text-5xl font-bold'>Absolute performance</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in quo suscipit voluptatum tempore similique architecto fuga distinctio? Accusamus, delectus.</p></div>
    </div>




{/* image card for gallery */}
<GalleryCard image='src\assets\videos\aboutpic-3.jpeg' ></GalleryCard>
<GalleryCard image='src\assets\choosingpic.jpeg' ></GalleryCard>

   </>
  )
}

export default Workstation