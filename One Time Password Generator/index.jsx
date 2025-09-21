const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  // Generate a 6-digit OTP
  function generateOTP() {
    let otp = '';
    const digits = '0123456789';
    for (let i = 0; i < 6; i++) {
      otp += digits.charAt(Math.floor(Math.random() * 10));
    }
    return otp;
  }

  function handleClick() {
    setOtp(generateOTP());
    setTimer(5); // 5 second countdown
  }

  // Timer logic
  useEffect(() => {
    if (timer === 0) {
      // Clean up if timer reached zero
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    // Clean up interval on unmount or timer reset
    return () => clearInterval(intervalRef.current);
  }, [timer]);

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">
        {otp
          ? otp
          : "Click 'Generate OTP' to get a code"}
      </h2>
      <p
        id="otp-timer"
        aria-live="polite"
      >
        {
          timer > 0
           ? `Expires in: ${timer} seconds`
           : (otp ? "OTP expired. Click the button to generate a new OTP." : "")
        }
      </p>
      <button
        id="generate-otp-button"
        disabled={timer > 0}
        onClick={handleClick}
      >
        Generate OTP
      </button>
    </div>
  );
};
