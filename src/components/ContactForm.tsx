import React from 'react'

const ContactForm = () => {
  return (
    <form className="space-y-10">
    <label htmlFor="uname">Name:</label>
    <br></br>
    <input
      className="input"
      type="text"
      name="fname"
      placeholder="Enter your name here."
    ></input>
    <br />
    <label htmlFor="address">Address:</label>
    <br></br>
    <input
      className="input"
      type="text"
      name="address"
      placeholder="Your address here."
    ></input>
    <br />
    <label htmlFor="email">Email:</label>
    <br></br>
    <input
      className="input"
      type="email"
      name="email"
      placeholder="Your email here."
    ></input>
    <br />
    <label>choose your profession:</label> <br />
    <div className="space-x-2">
      <input type="checkbox" name="profes1" value={"farmer"}></input>
      <label htmlFor="profes1">Farmer</label>
      <input type="checkbox" name="profes2" value={"consumer"}></input>
      <label htmlFor="profes2">Consumer</label>
      <input
        type="checkbox"
        name="profes3"
        value={"enterpurner"}
      ></input>
      <label htmlFor="profes3">Enterpurner</label>
      <input type="checkbox" name="profes4" value={"grocessor"}></input>

      <label htmlFor="profes4">Grocessor</label>
      <input type="checkbox" name="profes5" value={"other"}></input>
      <label htmlFor="profes5">Other</label>
    </div>
    <br />
    <label className="mr-5"> Gender:</label>
    <label className="radio" htmlFor="gender">Male</label>
    <input type="radio" name="gender" value="male" />
    <label className="radio" htmlFor="gender">female</label>
    <input  type="radio" name="gender" value="female" />
    <br />
    <label>Your Qualification:</label>
    <select  name="qualification" className=" radio-select ml-2 border-2 rounded-xl ">
      <option value="SLC">SLC</option>
      <option value="+2">+2 passed</option>
      <option value="Bachelor">bachelor</option>
      <option value="EQ- Bachlore">Eq-Bachelor</option>
      <option value="SEE">SEE</option>
      <option value="Uneducated">illeterate</option>
    </select>
    <br />
    <label>Description</label>
    <br />
    <textarea
      className="border-1 border-blac mt-2 w-full"
      placeholder="here your brief"
    ></textarea>
    <center>
      {" "}
      <input
        className="border-1 w-20 p-2 rounded-2xl text-white bg-blue-400"
        type="submit"
      ></input>
    </center>
  </form>
  )
}

export default ContactForm