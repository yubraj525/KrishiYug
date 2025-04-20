import React from "react";
import Herosection from "../components/Herosection";
import ContactForm from "../components/ContactForm";
// import LoginPage from "../components/LoginPage";
// import bgvideo from ';

const ContactUs = () => {
  return (
    <>
      <div className="space-y-  bg-gray-100 flex flex-col items-center justify-center ">
        <Herosection
          small="Feel free to reach us!! "
          header={"Contact For KrishiYug"}
          par={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure dolores quasi, officiis doloremque sequi numquam ullam. Beatae, excepturi! Aliquam totam blanditiis labore veniam"
          }
        />
        <div className=" flex w-full h-auto bg-white items-center justify-center p-2 m-5 gap-5">
          <div className="w-1/2 h-100  overflow-hidden ">
            <video autoPlay loop muted className="background-video w-full flex items-center">
              <source src="src\assets\videos\office.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="  w-1/2 space-y-8   bg-gray-100 p-15">
            <h1 className="text-3xl font-bold text-center "> Our Offices</h1>
            <div className=" w-full  grid grid-flow-row grid-cols-2 gap-5  place-items-center">
              <div className=" border-l-2 p-2 space-y-2">
                <h1 className="font-bold text-2xl"> Itahari</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, est.
                </p>
              </div>
              <div className=" border-l-2 p-2 space-y-2">
                <h1 className="font-bold text-2xl">Biratnagar</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Modi, velit?
                </p>
              </div>
              <div className=" border-l-2 p-2 space-y-2">
                <h1 className="font-bold text-2xl">Jhapa</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                  deleniti.
                </p>
              </div>
              <div className=" border-l-2 p-2 space-y-2">
                <h1 className="font-bold text-2xl">Dharan</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, consequuntur.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="  flex items-center justify-center p-5 gap-15 ">
          <div className="w-1/2  flex flex-col items-center justify-evenly">
            <div className="flex flex-col items-center p-5">
              <h1 className="font-bold text-5xl capitalize p-2">
                Fill up the form
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                repudiandae!
              </p>
            </div>

            <iframe
              className="border-0 w-200 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57043.28995826194!2d87.22400001999522!3d26.673905458108486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6c66e80fbfa9%3A0x38094d1a7c974283!2sItahari!5e0!3m2!1sen!2snp!4v1744635494179!5m2!1sen!2snp"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
    <div className="w-1 h-155 bg-black
    "></div>
          <div className="w-1/2">
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
