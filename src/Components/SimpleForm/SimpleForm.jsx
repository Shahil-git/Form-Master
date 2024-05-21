

const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.number.value);
        console.log(e.target.email.value);
 console.log("Remember the name ");
    }



    return (
        <div className="ml-96">
           <form onSubmit={handleSubmit}>
           <input type="text" placeholder="Name"  name="name" className="input mt-40 input-bordered input-info w-full max-w-xs" />
            <br />
            <input type="number" placeholder="Number" name="number" className="input mt-3 input-bordered input-primary w-full max-w-xs" />
            <br />
            <input type="email" placeholder="Email" name="email" className=" input mt-3 input-bordered input-primary w-full max-w-xs" />
            <br />
            <button className="btn btn-outline mt-5 btn-primary">Primary</button>
           </form>
        </div>
    );
};

export default SimpleForm;