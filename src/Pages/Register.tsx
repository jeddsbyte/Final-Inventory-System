import { useState, useMemo } from "react";
import { Mail, Lock, User, Eye, EyeOff, Apple, Chrome, Check, X } from "lucide-react";
import { Navbar } from "../Components/Navbar";
import { useForm } from "react-hook-form";
import { userApi } from "../Features/api/userAPI";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";

type UserRegisterFormValues = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const Register = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<UserRegisterFormValues>();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  
  const [registerUser, { isLoading }] = userApi.useRegisterUserMutation();
  const navigate = useNavigate();

  const form = watch();

  // Password strength requirements
  const passwordRequirements = useMemo(() => {
    const pwd = form.password || "";
    return {
      minLength: pwd.length >= 8,
      hasUpperCase: /[A-Z]/.test(pwd),
      hasLowerCase: /[a-z]/.test(pwd),
      hasNumber: /\d/.test(pwd),
      hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
    };
  }, [form.password]);

  const passwordStrength = Object.values(passwordRequirements).filter(Boolean).length;

  const handleBlur = (fieldName: string) => {
    setTouched({ ...touched, [fieldName]: true });
  };

  const onSubmit = async (data: UserRegisterFormValues) => {
    const loadingToastId = toast.loading("Creating your account...");
    const { confirmPassword, ...payload } = data;

    try {
      console.log("Payload sent to backend:", payload);
      const res = await registerUser(payload).unwrap();
      toast.success(res?.message || "Registration successful", { id: loadingToastId });
      navigate("/login", {
        state: { email: data.email, password: data.password },
        replace: true,
      });
    } catch (err: any) {
      toast.error("Failed to Register: " + (err.data?.error || err.error || err), {
        id: loadingToastId,
      });
    }
  };

  const RequirementItem = ({ met, text }: { met: boolean; text: string }) => (
    <div className="flex items-center gap-2 text-sm transition-all duration-300 ease-in-out">
      <div
        className={`flex items-center justify-center w-4 h-4 rounded-full transition-all duration-300 ease-in-out shadow-sm ${
          met ? "bg-emerald-500 shadow-emerald-200" : "bg-rose-500 shadow-rose-200"
        }`}
      >
        {met ? (
          <Check className="w-3 h-3 text-white" />
        ) : (
          <X className="w-3 h-3 text-white" />
        )}
      </div>
      <span
        className={`transition-colors duration-300 ease-in-out font-medium ${
          met ? "text-emerald-700" : "text-slate-600"
        }`}
      >
        {text}
      </span>
    </div>
  );

  return (
    <>  
      <Toaster richColors position="top-right" />
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 px-4 py-8 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,#e0e7ff_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,#f3e8ff_0%,transparent_50%)]" />
        </div>
        
        <div className="relative bg-white/95 backdrop-blur-2xl shadow-2xl rounded-3xl p-6 sm:p-8 w-full max-w-md border border-white/30 z-10">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-2xl mb-4 shadow-xl border border-white/20">
              <User className="w-7 h-7 text-white drop-shadow-sm" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 leading-tight">
              Create Account
            </h1>
            <p className="text-slate-600 text-sm">
              Join us and start your journey today
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-4">
              {/* Username */}
              <div>
                <label htmlFor="userName" className="block text-sm font-semibold text-slate-700 mb-2 sr-only">
                  User Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
                  <input
                    id="userName"
                    type="text"
                    {...register('userName', { required: "User name is required" })}
                    onBlur={() => handleBlur("userName")}
                    placeholder="Enter your username"
                    className={`w-full pl-10 pr-3 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 ease-in-out text-sm font-medium placeholder-slate-400 ${
                      touched.userName && errors.userName
                        ? "border-rose-400 bg-rose-50/50 shadow-sm shadow-rose-100"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  />
                </div>
                {touched.userName && errors.userName && (
                  <p className="text-rose-600 text-xs mt-2 flex items-center gap-1 font-medium">
                    <X className="w-3 h-3 flex-shrink-0" />
                    {errors.userName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2 sr-only">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
                  <input
                    id="email"
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    onBlur={() => handleBlur("email")}
                    placeholder="you@example.com"
                    className={`w-full pl-10 pr-3 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 ease-in-out text-sm font-medium placeholder-slate-400 ${
                      touched.email && errors.email
                        ? "border-rose-400 bg-rose-50/50 shadow-sm shadow-rose-100"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  />
                </div>
                {touched.email && errors.email && (
                  <p className="text-rose-600 text-xs mt-2 flex items-center gap-1 font-medium">
                    <X className="w-3 h-3 flex-shrink-0" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-2 sr-only">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password", { required: "Password is required" })}
                    onBlur={() => handleBlur("password")}
                    placeholder="Enter your password"
                    className={`w-full pl-10 pr-10 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 ease-in-out text-sm font-medium placeholder-slate-400 ${
                      touched.password && errors.password
                        ? "border-rose-400 bg-rose-50/50 shadow-sm shadow-rose-100"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors duration-200 ease-in-out p-1 rounded-full hover:bg-slate-100"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Password Strength Indicator */}
                {form.password && (
                  <div className="mt-3 p-4 bg-slate-50/80 rounded-xl border border-slate-200/50 shadow-inner">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                        Password Strength
                      </span>
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-full transition-colors duration-200 ${
                          passwordStrength <= 2
                            ? "text-rose-700 bg-rose-100"
                            : passwordStrength <= 3
                            ? "text-amber-700 bg-amber-100"
                            : "text-emerald-700 bg-emerald-100"
                        }`}
                      >
                        {passwordStrength <= 2
                          ? "Weak"
                          : passwordStrength <= 3
                          ? "Fair"
                          : "Strong"}
                      </span>
                    </div>
                    <div className="flex gap-1 mb-4 h-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`flex-1 rounded-full transition-all duration-300 ease-in-out ${
                            i <= passwordStrength
                              ? passwordStrength <= 2
                                ? "bg-rose-500"
                                : passwordStrength <= 3
                                ? "bg-amber-500"
                                : "bg-emerald-500"
                              : "bg-slate-200"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="space-y-2 text-xs">
                      {Object.entries(passwordRequirements).map(([key, met]) => (
                        <RequirementItem
                          key={key}
                          met={met}
                          text={
                            key === "minLength"
                              ? "At least 8 characters"
                              : key === "hasUpperCase"
                              ? "One uppercase letter"
                              : key === "hasLowerCase"
                              ? "One lowercase letter"
                              : key === "hasNumber"
                              ? "One number"
                              : "One special character"
                          }
                        />
                      ))}
                    </div>
                  </div>
                )}
                {touched.password && errors.password && (
                  <p className="text-rose-600 text-xs mt-2 flex items-center gap-1 font-medium">
                    <X className="w-3 h-3 flex-shrink-0" />
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-slate-700 mb-2 sr-only">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
                  <input
                    id="confirmPassword"
                    type={showConfirm ? "text" : "password"}
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) => value === form.password || "Passwords do not match"
                    })}
                    onBlur={() => handleBlur("confirmPassword")}
                    placeholder="Confirm your password"
                    className={`w-full pl-10 pr-10 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 ease-in-out text-sm font-medium placeholder-slate-400 ${
                      touched.confirmPassword && errors.confirmPassword
                        ? "border-rose-400 bg-rose-50/50 shadow-sm shadow-rose-100"
                        : form.confirmPassword && form.password === form.confirmPassword
                        ? "border-emerald-400 bg-emerald-50/50 shadow-sm shadow-emerald-100"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors duration-200 ease-in-out p-1 rounded-full hover:bg-slate-100"
                    aria-label={showConfirm ? "Hide password" : "Show password"}
                  >
                    {showConfirm ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {touched.confirmPassword && errors.confirmPassword && (
                  <p className="text-rose-600 text-xs mt-2 flex items-center gap-1 font-medium">
                    <X className="w-3 h-3 flex-shrink-0" />
                    {errors.confirmPassword.message}
                  </p>
                )}
                {form.confirmPassword && form.password === form.confirmPassword && touched.confirmPassword && (
                  <p className="text-emerald-600 text-xs mt-2 flex items-center gap-1 font-medium">
                    <Check className="w-3 h-3 flex-shrink-0" />
                    Passwords match
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || !!errors.userName || !!errors.email || !!errors.password || !!errors.confirmPassword}
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 hover:from-indigo-500 hover:via-purple-700 hover:to-pink-600 text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl active:shadow-md transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:from-slate-400 disabled:via-slate-400 disabled:to-slate-400"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Creating Account...
                  </span>
                ) : (
                  "Create Account"
                )}
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6 px-4">
            <hr className="flex-grow border-slate-300" />
            <span className="px-4 text-slate-500 text-xs font-medium uppercase tracking-wide bg-white">
              or continue with
            </span>
            <hr className="flex-grow border-slate-300" />
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button 
              type="button"
              className="flex items-center justify-center gap-2.5 border-2 border-slate-200 rounded-xl py-3 text-sm font-semibold transition-all duration-200 ease-in-out hover:bg-slate-50 hover:border-slate-300 hover:shadow-md active:shadow-sm group"
              aria-label="Sign up with Google"
            >
              <Chrome className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-slate-700">Google</span>
            </button>
            <button 
              type="button"
              className="flex items-center justify-center gap-2.5 border-2 border-slate-200 rounded-xl py-3 text-sm font-semibold transition-all duration-200 ease-in-out hover:bg-slate-50 hover:border-slate-300 hover:shadow-md active:shadow-sm group"
              aria-label="Sign up with Apple"
            >
              <Apple className="w-4 h-4 text-slate-900 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-slate-700">Apple</span>
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-slate-600 text-xs font-medium mt-2">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-indigo-600 hover:text-indigo-700 font-semibold transition-colors duration-200 hover:underline"
            >
              Sign in here
            </a>
          </p>
        </div>
      </main>
    </>
  );
};