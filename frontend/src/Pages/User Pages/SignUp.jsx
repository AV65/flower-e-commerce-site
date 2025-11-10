import "./SignUp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogo from "../../assets/Google.svg";
import AppleLogo from "../../assets/Apple.svg";

const SignUp = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [popup, setPopup] = useState({ show: false, message: "", type: "" });

  const navigate = useNavigate();

  const showPopup = (message, type) => {
    setPopup({ show: true, message, type });

    setTimeout(() => {
      setPopup({ show: false, message: "", type: "" });
    }, 3000);
  };

  const handleSignup = async () => {
    try {
      const res = await fetch(
        "https://flower-website-backend-two.onrender.com/api/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ Email, Password }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        showPopup("Signup successful!", "success");

        setTimeout(() => {
          const redirectPath = localStorage.getItem("redirectAfterLogin");
          if (redirectPath) {
            localStorage.removeItem("redirectAfterLogin");
            navigate(redirectPath);
          } else {
            navigate("/home");
          }
        }, 2000);
      } else {
        showPopup(data.error || "Signup failed", "error");
      }
    } catch (err) {
      console.error(err);
      showPopup("An error occurred", "error");
    }
  };

  return (
    <div className="signup-container">
      {popup.show && (
        <div className={`popup-message ${popup.type}`}>{popup.message}</div>
      )}

      <div className="signup-box">
        <h2 className="signup-title">Sign up</h2>
        <h6>
          Become a member and enjoy personalized gift recommendations, fast
          checkout, and more.
        </h6>

        <input
          type="email"
          className="signup-input"
          placeholder="Enter your email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="signup-input"
          placeholder="Enter password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSignup} className="signup-continue">
          CONTINUE
        </button>

        <h6>Instantly login or sign up via Google</h6>

        <button className="social-button">
          <img src={GoogleLogo} alt="Google" className="icon" />
          CONTINUE WITH GOOGLE
        </button>

        <button className="social-button">
          <img src={AppleLogo} alt="Apple" className="icon" />
          CONTINUE WITH APPLE
        </button>

        <div className="privacy-terms-links">
          <a href="/privacy">Privacy Policy</a>
          <br />
          <a href="/terms">Terms and Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
