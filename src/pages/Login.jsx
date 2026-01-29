import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (!form.username || !form.password) return;
    login(form.username);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="w-[360px] px-8 py-10 border border-neutral-800 rounded-2xl">
        
        {/* Logo */}
        <div className="text-center text-3xl font-extrabold mb-6">𝕏</div>

        <h1 className="text-xl font-bold mb-5 text-center">
          Sign in to X
        </h1>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full bg-black border border-neutral-700 rounded-md px-3 py-2 text-sm outline-none focus:border-blue-500 mb-3"
        />

        {/* Username */}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full bg-black border border-neutral-700 rounded-md px-3 py-2 text-sm outline-none focus:border-blue-500 mb-3"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full bg-black border border-neutral-700 rounded-md px-3 py-2 text-sm outline-none focus:border-blue-500 mb-4"
        />

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-white text-black py-2.5 rounded-full font-semibold text-sm hover:bg-neutral-200 transition"
        >
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-neutral-800" />
          <span className="px-2 text-xs text-neutral-500">or</span>
          <div className="flex-1 h-px bg-neutral-800" />
        </div>

        {/* Create account */}
        <button className="w-full border border-neutral-700 py-2.5 rounded-full text-sm hover:bg-neutral-900 transition">
          Create account
        </button>

        {/* Footer */}
        <p className="text-xs text-neutral-500 mt-6 text-center">
          By signing in, you agree to our Terms & Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Login;

