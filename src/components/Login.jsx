//import logo from "../utilities/logo.jpeg"
import { IoIosSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import {  useRef, useState } from "react"

const Login = () => {
  const name = useRef(null)
  const address = useRef(null)

  const [isDark,setIsDark] = useState(true)

  const handleOnclick = async () =>{

  const data ={
    name : name.current.value,
    address:address.current.value

  }

  let options = {
  method:"POST",
  headers:{
      Accept:"application/json",
      "Content-type":"application/json"
  },
    body:JSON.stringify(data)
  }

  try{
    const response = await fetch("https://smoketree-backend-gl3b.onrender.com/register/",options);
  const result = await response.json()
  if(result){
    alert(result.message)
  }else{
    alert("Error submitting form")
  }
  }catch(error){
    alert(error,"Error submitting form!")
  }


  name.current.value = ""
  address.current.value = ""
}

const handleToggle = () =>{
  setIsDark(!isDark)
}

  return (
    <div className={`${isDark && "dark"} sm:bg-blue-200 sm:w-screen sm:h-screen sm:p-5 sm:flex justify-center items-center`}>
        <form className="sm:bg-white bg-yellow-50 dark:bg-black px-4 pt-3 flex flex-col    w-screen h-screen sm:flex  sm:flex-col 
          sm:w-[420px] sm:h-[500px]  sm:p-10 sm:shadow-lg rounded-sm" onSubmit={(e) => e.preventDefault()}>
            <button className="self-end font-bold text-[10px]" onClick={handleToggle}>{isDark ? <IoIosSunny className="text-[35px] text-white"/>:<IoMdMoon className="text-[35px]"/>}</button>
          <h1 className="text-3xl font-bold mb-5 dark:text-white">Smoke Trees</h1>
            <label htmlFor="name" className=" font-sans font-semibold dark:text-white">Name:</label>
            <input id="name" type="text" className="px-4 py-2 outline-none w-full my-2 rounded-sm border border-gray-600" 
            placeholder="Enter your name" ref={name}/>
            <label htmlFor="address" className="font-sans font-semibold dark:text-white">Address:</label>
            <textarea rows={4} cols={14} className="outline-none p-3 w-full my-2 rounded-sm border border-gray-600" 
            placeholder="Enter your address" ref={address}></textarea>
            <button className="w-full bg-black py-2 text-white font-semibold my-2 dark:text-white dark:bg-blue-400
            rounded-sm" onClick={handleOnclick}>Submit</button>
        </form>
    </div>
  )
}

export default Login
