import { useState } from "react";
import { NavLink } from "react-router-dom";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState('Local');
  const [passwordType, setPasswordType] = useState("password");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const { data } = await supabase
    .from(role)
    .select('*')
    .eq('email', email)
    .single();

    if (data && data.password === password && data.email === email) {
      const id = data.id;
      sessionStorage.setItem('id', id);
      const name = data.name;
      sessionStorage.setItem('name', name);
      

      if (role === 'Admin') {
        navigate("/dashboard"); 
      } else {
        navigate("/ltdashboard"); 
      }
    }
    
    else {
      alert('Wrong Credentials');
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 font-mono">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <img src="logo.png" alt="logo" className="w-48 h-48 mx-auto" />
        <form onSubmit={handleSubmit}>
          <label className="flex flex-col">
            <div className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </label>

          <label className="flex flex-col mt-2">
            <div className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type={passwordType}
                className="grow"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>

            <select className="select select-bordered w-full mt-2"
                value={role}
                onChange={(e) => setRole(e.target.value)}>
              <option value="Local">Local Tourism</option>
              <option value="Admin">DOT</option>
            </select>

            <div className="flex items-center gap-2 mt-3 mb-4">
              <input
                type="checkbox"
                id="showPassword"
                onChange={togglePasswordVisibility}
                className="h-4 w-4"
              />
              <label
                htmlFor="showPassword"
                className="text-sm text-gray-600 cursor-pointer"
              >
                Show password
              </label>
            </div>
          </label>

          <button
            type="submit"
            className="w-full btn btn-primary font-bold text-white tracking-wider flex items-center justify-center gap-2 mt-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-75"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            ) : (
              "Login"
            )}
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-5">
          Don't have an account?
          <NavLink to="/register">
            <p className="text-blue-500 hover:underline">Sign Up</p>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
