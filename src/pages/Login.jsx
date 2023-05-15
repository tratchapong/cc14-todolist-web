function Login() {
  return (
    <div className="w-full max-w-[800px] mx-auto my-6 p-5 border">
      <form>
        <h2 className="mb-5 text-xl">Login Form</h2>
        <div className="flex w-full mb-[15px]">
          <i className="fa fa-user text-white min-w-[50px] text-center p-2.5 bg-blue-500" />
          <input
            className="w-full p-2.5 border focus:bg-blue-100"
            type="text"
            placeholder="Username"
            name="usrnm"
          />
        </div>
        <div className="flex w-full mb-[15px]">
          <i className="fa fa-key  text-white min-w-[50px] text-center p-2.5 bg-blue-500" />
          <input
            className="w-full p-2.5 border focus:bg-blue-100"
            type="password"
            placeholder="Password"
            name="psw"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white cursor-pointer w-full opacity-90 px-5 py-4 my-5 border-none hover:opacity-100"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
