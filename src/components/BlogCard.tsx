import React from "react";

const BlogCard = () => {
  return (
    <>
    <div className=" w-100 rounded overflow-hidden shadow  bg-gray-100 flex flex-col items-center justify-center">
      <div className=" w- full h-50 px overflow-hidden">
        <img src="../images/images (2).png" alt="" />
      </div>
      <div className="p-5 mb-5 space-y-2">
        <h1 className="font-bold text-2xl">Name here</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda reprehenderit, nemo rem rerum repudiandae vel fuga voluptas, dolorem magni ipsa repellendus mollitia nulla perspiciatis aliquam ipsum earum exercitationem velit nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, enim?</p>
       <p className="text-blue-400 underline cursor-pointer">view</p>
      </div>
    </div>


    </>
  );
};

export default BlogCard;
