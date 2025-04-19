import React, { useRef, useState } from 'react';
import Button from './Button';
import { IoClose } from 'react-icons/io5';
import { CiUser } from 'react-icons/ci';

const LoginPage = ({ onclose }) => {
  const modal = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted:', formData);
    alert(`Logged in as: ${formData.name}`);
  };

  const close = (e) => {
    if (modal.current === e.target) onclose();
  };

  return (
    <div
      ref={modal}
      onClick={close}
      className="fixed inset-0 bg-opacity-50 backdrop-blur-2xl flex flex-col justify-center items-center z-50"
    >
      <div className="relative">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onclose();
          }}
          className="absolute top-23 z-10 right-2 text-xl border-2 rounded-full cursor-pointer"
        >
          <IoClose />
        </button>
          {/* login form box */}
        <form
          onSubmit={handleSubmit}
          className="relative w-100 h-150 p-6 rounded-lg shadow-lg mx-auto mt-20 flex flex-col justify-evenly bg-gray-100 bg-opacity-50"
        >
          <div className="self-center">
 
            <h1 className='text-5xl font bold'><CiUser /></h1>
          </div>

          <div>
            <label htmlFor="name" className="block font-medium text-gray-700 ml-2">
              Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name here"
              value={formData.name}
              onChange={handleChange}
              className="border-b-2 bg-gray-200 outline-none w-full p-2"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-medium text-gray-700 ml-2">
              Password:
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password here"
              value={formData.password}
              onChange={handleChange}
              className="border-b-2 bg-gray-200 outline-none w-full p-2"
              required
            />
          </div>

          <Button>submit</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
