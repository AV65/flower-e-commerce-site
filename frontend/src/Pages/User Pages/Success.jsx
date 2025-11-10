import "./success.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the cart
    localStorage.removeItem("cart");

    // Redirect after 5 seconds
    const timer = setTimeout(() => {
      navigate("/home");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleDownloadReceipt = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Flower Delivery Receipt", 20, 20);
    doc.setFontSize(12);
    doc.text("Thank you for patronizing us!", 20, 35);
    doc.text(`Date: ${new Date().toLocaleString()}`, 20, 45);
    doc.text(`Transaction ID: TXN-${Date.now()}`, 20, 55);
    doc.text("Your payment was successful and is being processed.", 20, 70);
    doc.text("Expect your delivery soon.", 20, 80);

    doc.save("flower-receipt.pdf");
  };

  return (
    <div className="success-popup">
      <div className="popup-content">
        <h1>🌸 Thanks for Patronizing Us!</h1>
        <p>Your payment was successful.</p>
        <p>You’ll be redirected to the home page shortly...</p>
        <div className="btn-group">
          <button onClick={handleDownloadReceipt} className="success-btn">
            Download Receipt
          </button>
          <button onClick={() => navigate("/home")} className="success-btn">
            Return Home Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
