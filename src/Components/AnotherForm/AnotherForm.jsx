import { useState } from "react";


const AnotherForm = () => {
const [email,setEmail] = useState(null)
const [password , setPassword] = useState(null)
const [mail , setMail] =useState(null)
const [error , setError] = useState('')


const handleSubmit =e =>{
    e.preventDefault()
    if (password.length < 6){
  setError("Password must be 6 character or longer")
    }
    else(
        setError(""),
        console.log(email , password, mail)
    )
   
  
}

const handleChangePassword = e =>{
    setPassword(e.target.value);
}





const handleChange = e =>{
    console.log(e.target.value);
    setEmail(e.target.value);

}
const handleEmail = e =>{
  setMail(e.target. value)
}


    return (
        <div>
            <div className="ml-96">
           <form onSubmit={handleSubmit}>
           <input type="text" placeholder="Name"  name="name" onChange={handleChange} className="input mt-40 input-bordered input-info w-full max-w-xs" />
            <br />
            <input type="password" placeholder="Password" onChange={handleChangePassword} required name="Password" className="input mt-3 input-bordered input-primary w-full max-w-xs" />
            <br />
            <input type="email" placeholder="Email" onChange={handleEmail} name="email" className=" input mt-3 input-bordered input-primary w-full max-w-xs" />
            <br />
            <button className="btn btn-outline mt-5 btn-primary">Primary</button>
           {
            error && <p className="rounded-[10px] bg-slate-400 font-Josefin text-black w-96 mt-5 p-4">{error}</p>
           }
           </form>
        </div>
        </div>
    );
};

export default AnotherForm;