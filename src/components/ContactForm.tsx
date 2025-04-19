import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    qualification: "",
    gender: "",
    roles:"",
    opinion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Or handle submission as needed
    alert("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="w-200 p-4 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">User Information Form</h2>

      {/* Name */}
      <div className="mb-4">
        <label className="block mb-1">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block mb-1">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      {/* Contact */}
      <div className="mb-4">
        <label className="block mb-1">Contact:</label>
        <input
          type="tel"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      {/* Qualification */}
      <div className="mb-4">
        <label className="block mb-1">Qualification:</label>
        <select
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        >
          <option value="">-- Select Qualification --</option>
          <option value="Bachelor">Bachelor</option>
          <option value="+2">+2</option>
          <option value="SLC">SLC</option>
          <option value="+2 Equivalent">+2 Equivalent</option>
        </select>
      </div>

      {/* Gender */}
      <div className="mb-4">
        <label className="block mb-1">Gender:</label>
        <div className="flex gap-4">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
              required
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
              required
            />{" "}
            Female
          </label>
        </div>
      </div>

      {/* Opinion */}
      <div className="mb-4">
        <label className="block mb-1">Your Opinion:</label>
        <textarea
          name="opinion"
          value={formData.opinion}
          onChange={handleChange}
          rows={4}
          className="w-full border px-3 py-2 rounded"
          required
        ></textarea>
      </div>
      {/* preofession */}
      <div className="mb-4">
  <label className="block mb-1">You are (check all that apply):</label>
  <div className="checkbox-inline inline-flex">
    <label><input type="checkbox" name="roles" value="Farmer" onChange={handleChange} /> Farmer</label>
    <label><input type="checkbox" name="roles" value="Entrepreneur" onChange={handleChange} /> Entrepreneur</label>
    <label><input type="checkbox" name="roles" value="Home Gardener" onChange={handleChange} /> Home Gardener</label>
    <label><input type="checkbox" name="roles" value="Processor" onChange={handleChange} /> Consumer</label>
  </div>
</div>


      {/* Submit Button */}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
