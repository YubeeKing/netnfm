import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    number: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("form-name", "contact");
    Object.keys(formData).forEach((key) => form.append(key, formData[key]));

    fetch("/", {
      method: "POST",
      body: form
    }).then(() => toast.success("Received, We will contact you shortly", {position: "top-center"})).catch((error) => toast.error(`Submission failed: ${error}`))
  }

  return (
    <>

      <h1 className='font-[600] text-3xl text-center pt-12'>Vite + React</h1>
      <form action="" name="contact" className='w-full md:w-1/2 mx-auto flex flex-col gap-1.5' method="POST" data-netlify="true" onSubmit={handleSubmit}>
        <div className='flex flex-col gap-1'>
          <label className='font-[500]'>Full Name</label>
          <input type="text" name="fullname" id="" className='rounded border border-gray-800 outline-none py-1 px-2 shadow' onChange={handleChange} />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='font-[500]'>Email Address</label>
          <input type="text" name="email" id="" className='rounded border border-gray-800 outline-none py-1 px-2 shadow'  onChange={handleChange} />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='font-[500]'>Phone Number</label>
          <input type="text" name="number" id="" className='rounded border border-gray-800 outline-none py-1 px-2 shadow' onChange={handleChange}/>
        </div>
        <div className='flex flex-col gap-1'>
          <label className='font-[500]'>Message</label>
          <textarea name="message" id="" className='rounded border border-gray-800 outline-none py-1.5 px-2.5 h-[250px]' onChange={handleChange}></textarea>
        </div>
        <div>
         <button className='bg-gray-800 cursor-pointer font-[500] rounded text-white px-4 py-1'>Submit</button> 
        </div>
        
      </form>
    </>
  )
}

export default App
