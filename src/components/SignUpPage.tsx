import React, { useRef, useState } from 'react';
import Button from './Button';
import { IoClose } from 'react-icons/io5';

const SignUpPage = ({ onclose }) => {
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
          className="absolute top-20 z-10 right-0 text-xl border-2 rounded-full cursor-pointer"
        >
          <IoClose />
        </button>

        <form
          onSubmit={handleSubmit}
          className="relative w-100 h-150 p-6 rounded-lg shadow-lg mx-auto mt-20 flex flex-col justify-evenly bg-gray-100 bg-opacity-50"
        >
          <div className="self-center">
            <h1 className="font-bold text-3xl">Sign Up</h1>
          </div>

          <div>
            <label className="block font-medium text-gray-700 ml-2">Username:</label>
            <input
              type="text"
              name="username"
              placeholder="Username here"
              value={formData.username}
              onChange={handleChange}
              className="border-b-2 bg-gray-200 outline-none w-full p-2"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 ml-2">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email here"
              value={formData.email}
              onChange={handleChange}
              className="border-b-2 bg-gray-200 outline-none w-full p-2"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 ml-2">Password:</label>
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

          <div>
            <label className="block font-medium text-gray-700 ml-2">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="border-b-2 bg-gray-200 outline-none w-full p-2"
              required
            />
          </div>

          <Button  > register </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
