// import React, { useRef } from "react";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import Navbar from "./Navbar";
// import { useLocation } from "react-router-dom";

// export default function Booked() {
//   const tokenRef = useRef();
//   const { state } = useLocation();
//   const { user, event } = state || {};

//   const handleDownload = () => {
//     html2canvas(tokenRef.current).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("p", "mm", "a4", true);
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = pdf.internal.pageSize.getHeight();
//       const imgWidth = canvas.width;
//       const imgHeight = canvas.height;
//       const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
//       const imgX = (pdfWidth - imgWidth * ratio) / 2;
//       const imgY = 30;
//       pdf.addImage(
//         imgData,
//         "PNG",
//         imgX,
//         imgY,
//         imgWidth * ratio,
//         imgHeight * ratio
//       ); // auto height
//       pdf.save("event-token.pdf");
//     });
//   };

//   return (
//     <>
//       <Navbar />
//       <div
//         ref={tokenRef}
//         className="flex justify-center items-center"
//         style={{ height: "400px" }} // use inline style to ensure height is respected
//       >
//         <div className="p-6 border flex flex-col gap-2 rounded bg-white text-black">
//           <div
//             ref={tokenRef}
//             className="p-4 rounded"
//             style={{ backgroundColor: "#ffffff", color: "#000000" }} // safe for html2canvas
//           >
//             <h2 className="text-xl font-bold mb-2">Event Confirmation Token</h2>
//             <p>
//               <strong>Event:</strong> {event.name}
//             </p>
//             <p>
//               <strong>Date:</strong>{" "}
//               {new Date(event.date).toLocaleDateString("en-IN")}
//             </p>
//             <p>
//               <strong>Location:</strong> {event.location}
//             </p>
//             <p>
//               <strong>Attendee:</strong> {user.fullName}
//             </p>
//             <p>
//               <strong>Email:</strong> {user.email}
//             </p>
//             <p>
//               <strong>Token ID:</strong> {user._id}
//             </p>
//           </div>

//           <button
//             onClick={handleDownload}
//             className="btn btn-success mt-2 w-full"
//           >
//             Download PDF
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useRef } from "react";
import html2canvas from "html2canvas-pro";

import jsPDF from "jspdf";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

export default function Booked() {
  const tokenRef = useRef();
  const { state } = useLocation();
  const { user, event } = state || {};

  const handleDownload = () => {
    html2canvas(tokenRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("event-token.pdf");
    });
  };

  if (!user || !event) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px", color: "red" }}>
        Invalid booking data. Please go back and try again.
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <div
          style={{
            padding: "24px",
            border: "1px solid #000",
            borderRadius: "8px",
            backgroundColor: "#ffffff",
            color: "#000000",
            width: "100%",
            maxWidth: "500px",
          }}
        >
          <div ref={tokenRef}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "12px",
                textAlign: "center",
              }}
            >
              Event Confirmation Token
            </h2>
            <p>
              <strong>Event:</strong> {event.name}
            </p>
            <p>
              <strong>Date:</strong>{" "}
              {new Date(event.date).toLocaleDateString("en-IN")}
            </p>
            <p>
              <strong>Location:</strong> {event.location}
            </p>
            <p>
              <strong>Attendee:</strong> {user.fullName}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Token ID:</strong> {user._id}
            </p>
          </div>

          <button
            onClick={handleDownload}
            style={{
              marginTop: "16px",
              width: "100%",
              padding: "10px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Download PDF
          </button>
        </div>
      </div>
    </>
  );
}
