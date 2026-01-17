"use client";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      console.log("Password reset email sent to:", email);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Forgot Password
              </h1>
              <p className="text-gray-600 text-sm">
                Enter your email, we will send a verification code to your
                email.
              </p>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                  required
                />
              </div>

              {/* Continue Button */}
              <button
                onClick={handleSubmit}
                disabled={isLoading || !email}
                className="w-full bg-blue-600 text-white py-2.5 rounded-md font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Continue"
                )}
              </button>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 text-center">
              <p className="text-xs text-gray-500">
                © 2025 Comic Book. All rights reserved.{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Terms & Conditions
                </a>
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Success Message */}
            <div>
              {/* Success Icon */}
              <div className="mb-6 flex items-center justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              <h2 className="text-2xl text-center font-bold text-gray-900 mb-2">
                Check Your Email
              </h2>
              <p className="text-gray-600 text-center text-sm mb-6">
                We've sent a verification code to
                <br />
                <span className="font-semibold text-gray-900">{email}</span>
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => (window.location.href = "/verifyotp")}
                  className="w-full bg-blue-600 text-white py-2.5 rounded-md font-medium hover:bg-blue-700 transition-colors text-sm"
                >
                  Verify OTP
                </button>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full text-gray-600 hover:text-gray-800 py-2 text-sm font-medium transition-colors"
                >
                  Didn't receive the email? Resend
                </button>

                <div className="pt-2 text-center">
                  <a
                    href="/login"
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Back to Login
                  </a>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 text-center">
              <p className="text-xs text-gray-500">
                © 2025 Comic Book. All rights reserved.{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Terms & Conditions
                </a>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
