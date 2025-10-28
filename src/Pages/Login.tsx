import { Mail, Lock, Eye, EyeOff, Chrome, Apple, X } from "lucide-react";
import { Navbar } from "../Components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { userApi } from "../Features/api/userAPI";
import { useDispatch } from "react-redux";
import { setCredentials } from "../Features/auth/authSlice";

type UserLoginFormValues = {
  email: string;
  password: string;
};

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm<UserLoginFormValues>();
  const [loginUser, { isLoading }] = userApi.useLoginUserMutation();

 
  
  const onSubmit = async (data: UserLoginFormValues) => {

  const loadingToastId = toast.loading("Logging in...");
  try {
    const res = await loginUser(data).unwrap();
    

    const { token, email, userName, userId, message } = res;

    dispatch(setCredentials({ 
      email, 
      userName, 
      userId, 
      token, 
      profileURL: undefined 
    }));

    toast.success(message || "Welcome back!", { id: loadingToastId });
    navigate("/dashboard/analytics");
  } catch (err: any) {
    const errorMessage = err?.data?.message || err?.data?.error || "Invalid email or password";
    toast.error(errorMessage, { id: loadingToastId });
  }
};



  return (
    <>
      <Toaster richColors position="top-right" />
      <Navbar />

      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 px-4 py-8 relative overflow-hidden">
        {/* Subtle animated background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-indigo-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tl from-pink-300/20 to-indigo-300/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        </div>

        <div className="relative w-full max-w-md bg-white/95 backdrop-blur-2xl shadow-2xl rounded-3xl p-6 sm:p-8 border border-white/30 z-10">
          {/* Header */}
          <div className="text-center mb-7">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-2xl mb-4 shadow-xl border border-white/20">
              <Mail className="w-7 h-7 text-white drop-shadow-sm" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-slate-600 text-sm">
              Login to access your dashboard
            </p>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              className="flex items-center justify-center gap-2.5 py-3 border-2 border-slate-200 rounded-xl bg-white hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 group shadow-sm hover:shadow-md active:shadow-sm"
              aria-label="Sign in with Google"
            >
              <Chrome className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-slate-700">Google</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2.5 py-3 border-2 border-slate-200 rounded-xl bg-black hover:bg-gray-900 transition-all duration-200 group shadow-sm hover:shadow-md active:shadow-sm"
              aria-label="Sign in with Apple"
            >
              <Apple className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-white">Apple</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center my-6 px-4">
            <hr className="flex-grow border-slate-300" />
            <span className="px-4 text-xs font-medium text-slate-500 uppercase tracking-wider bg-white">
              or continue with email
            </span>
            <hr className="flex-grow border-slate-300" />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="sr-only">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Please enter a valid email",
                    },
                  })}
                  placeholder="you@example.com"
                  className={`w-full pl-10 pr-3 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 text-sm font-medium placeholder-slate-400 ${
                    errors.email
                      ? "border-rose-400 bg-rose-50/50 shadow-sm shadow-rose-100"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-rose-600 text-xs flex items-center gap-1 font-medium">
                  <X className="w-3 h-3 flex-shrink-0" />
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  placeholder="••••••••"
                  className={`w-full pl-10 pr-10 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 text-sm font-medium placeholder-slate-400 ${
                    errors.password
                      ? "border-rose-400 bg-rose-50/50 shadow-sm shadow-rose-100"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-full hover:bg-slate-100"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-2 text-rose-600 text-xs flex items-center gap-1 font-medium">
                  <X className="w-3 h-3 flex-shrink-0" />
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-600 text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl active:shadow-md transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Logging in...
                </span>
              ) : (
                "Log in"
              )}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-slate-600 text-xs font-medium mt-6">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-600 hover:text-indigo-700 font-semibold transition-colors hover:underline"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </main>
    </>
  );
};