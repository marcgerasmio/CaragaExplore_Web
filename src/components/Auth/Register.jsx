import { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [province, setProvince] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
      } else {
        alert("Registration successful!");
      }
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 font-mono">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <img src="logo.png" alt="logo" className="w-48 h-48 mx-auto" />
        <form className="" onSubmit={handleSubmit}>
          <label className="flex flex-col">
            <input
              type="text"
              className="input input-bordered w-full mt-2"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              placeholder="Enter your province"
              required
            />
          </label>

          <label className="flex flex-col mt-2">
            <input
              type="text"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </label>

          <label className="flex flex-col">
            <input
              type={passwordType}
              className="input input-bordered w-full mt-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </label>

          <label className="flex flex-col">
            <input
              type={passwordType}
              className="input input-bordered w-full mt-2"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </label>

          <div className="flex items-center gap-2 mt-4">
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

          <button
            type="submit"
            className="w-full btn btn-primary font-bold text-white tracking-wider flex items-center justify-center gap-2 mt-6"
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
              "Register"
            )}
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-5">
          Already have an account?
          <NavLink to="/">
            <p className="text-blue-500 hover:underline">Login</p>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;