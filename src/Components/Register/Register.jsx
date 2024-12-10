
const Register = () => {

    const handleSubmit = e => {
        e.preventDefault()
        console.log('form sbmittes')
    }

    return (
        <div className="flex flex-col justify-center items-center pt-40">
            <h2 className="text-5xl py-8 font-bold">Please Register</h2>
            <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-10">
            <input className="w-[500px] h-14 rounded-sm p-3 text-gray-50" type="email" name="email" placeholder="Type your Email"  />
            <input className="w-[500px] h-14 rounded-sm p-3 text-gray-50" type="password" name="password" placeholder="Type your Password"  />
            </div>
            <button type="submit" value="register" className="btn btn-warning w-[500px] my-10">Register</button>
            </form>
        </div>
    );
};

export default Register;