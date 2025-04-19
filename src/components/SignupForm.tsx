import React, { useRef } from 'react'
import Button from './Button'
import { IoClose } from 'react-icons/io5';
import { CiUser } from 'react-icons/ci';


// const SignupForm = () => {
//   return (
//     <div>SignupForm</div>
//   )
// }


const SignupForm = ({ onclose }) => {
    const modal = useRef<HTMLDivElement>(null);
    
    const close = (e: React.MouseEvent<HTMLDivElement>) => {
        if (modal.current === e.target) {
            onclose();
        }
    };
    
    return (
        <div
        ref={modal}
        onClick={(e) => close(e)}
        className="fixed inset-0 bg-opacity-50 backdrop-blur-2xl flex justify-center items-center z-50"
        >
      <div className="relative">
      

        <form className="relative w-[350px] p-6 rounded-lg shadow-lg bg-gray-100 bg-opacity-50 flex flex-col gap-4">
        <button
          onClick={(e) => {
              e.stopPropagation(); // don't bubble up to modal
              onclose();
            }}
            className="absolute top-25  z-10 right-0 text-xl border-2 rounded-full cursor-pointer"
            >
          <IoClose />
        </button>
          <h1 className="text-8xl font-bold text-center"><CiUser /></h1>

          <div>
            <label htmlFor="name" className="block font-medium ml-2 text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="border-b-2 bg-gray-200 outline-none w-full p-2"
              />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium ml-2 text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="border-b-2 bg-gray-200 outline-none w-full p-2"
              />
          </div>

          <div>
            <label htmlFor="password" className="block font-medium ml-2 text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create password"
              className="border-b-2 bg-gray-200 outline-none w-full p-2"
              />
          </div>

          <div>
            <label htmlFor="confirm" className="block font-medium ml-2 text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirm"
              placeholder="Confirm password"
              className="border-b-2 bg-gray-200 outline-none w-full p-2"
              />
          </div>

          <Button>register</Button>
        </form>
      </div>
    </div>
  );
};



export default SignupForm