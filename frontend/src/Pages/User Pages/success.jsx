import "./success.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";

const Success = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    localStorage.removeItem("cart");

    const timer = setTimeout(() => {
      navigate("/home");
    }, 20000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleDownloadReceipt = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Flower Delivery Receipt", 20, 20);

    doc.setFontSize(12);
    doc.text(`Thank you for your purchase!`, 20, 35);
    doc.text(`Date: ${new Date().toLocaleString()}`, 20, 45);
    doc.text(`Transaction ID: TXN-${Date.now()}`, 20, 55);

    doc.text("This is a confirmation that your payment was successful.", 20, 70);
    doc.text("You’ll receive your flowers shortly.", 20, 80);

    doc.save("flower-receipt.pdf");
  };

  return (
    <>
      {showPopup && (
        <div className="success-popup">
          <div className="popup-content">
            <h1>🎉 Thank You for Your Purchase!</h1>
            <p>Your order has been placed and is being processed.</p>
            <p>You’ll be redirected to the homepage shortly.</p>
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
      )}
    </>
  );
};

export default Success;