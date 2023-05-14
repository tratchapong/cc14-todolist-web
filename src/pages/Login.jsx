function Login() {
  return (
    <div className="the-form w-full max-w-[800px] mx-auto my-6 p-5 border">
      <form>
        <h2 className="mb-5 text-xl">Login Form</h2>
        <div className="input-container">
          <i className="fa fa-user icon" />
          <input className="input-field" type="text" placeholder="Username" name="usrnm" />
        </div>
        <div className="input-container">
          <i className="fa fa-key icon" />
          <input className="input-field" type="password" placeholder="Password" name="psw" />
        </div>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
