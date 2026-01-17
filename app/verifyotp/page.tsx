"use client";
import { useState, useRef, useEffect } from "react";

export default function VerifyOTPPage() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(59);
  const [isResending, setIsResending] = useState(false);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index: number, value: any) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next input
    if (value !== "" && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: any, e: any) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 4).split("");
    const newOtp = [...otp];

    pastedData.forEach((char:any, index: any) => {
      if (index < 4 && !isNaN(char)) {
        newOtp[index] = char;
      }
    });

    setOtp(newOtp);

    // Focus last filled input or next empty
    const lastFilledIndex = newOtp.findIndex((val) => val === "");
    if (lastFilledIndex !== -1) {
      inputRefs[lastFilledIndex].current?.focus();
    } else {
      inputRefs[3].current?.focus();
    }
  };

  const handleResend = () => {
    setIsResending(true);
    setTimer(59);

    setTimeout(() => {
      setIsResending(false);
      console.log("OTP resent");
    }, 1000);
  };

  const handleContinue = () => {
    const otpCode = otp.join("");
    console.log("Verifying OTP:", otpCode);
    window.location.href = "/resetpassword";
  };

  const formatTime = (seconds: any) => {
    return `00:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Verification Code
          </h1>
          <p className="text-gray-600 text-sm">
            Enter the verification code that we have sent to your email
          </p>
        </div>

        {/* OTP Input Boxes */}
        <div className="flex gap-4 justify-center mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : undefined}
              className="w-full h-14 text-center text-2xl text-black font-semibold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          ))}
        </div>

        {/* Resend Code Section */}
        <div className="text-center mb-6">
          <p className="text-sm text-gray-600 mb-1">
            Didn't receive the code?{" "}
            {timer > 0 ? (
              <span className="text-red-500 font-medium cursor-not-allowed">
                Resend code
              </span>
            ) : (
              <button
                onClick={handleResend}
                disabled={isResending}
                className="text-red-500 font-medium hover:text-red-600 transition-colors"
              >
                {isResending ? "Sending..." : "Resend code"}
              </button>
            )}
          </p>
          {timer > 0 && (
            <p className="text-sm text-gray-500">
              Resend code at{" "}
              <span className="text-red-500 font-medium">
                {formatTime(timer)}
              </span>
            </p>
          )}
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          disabled={otp.some((digit) => digit === "")}
          className="w-full bg-blue-600 text-white py-2.5 rounded-md font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
        >
          Continue
        </button>

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
      </div>
    </div>
  );
}
