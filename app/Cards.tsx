"use client";
import Image from "next/image";
// import styles from "./cards.module.css";

export default function Cards() {
  return (
    <div>
      <main className="main">
        <div className="card">
          <Image
            src="https://ik.imagekit.io/hpapi/hermione.jpeg"
            alt="Character Card"
            className="cardimg"
            width={0}
            height={0}
            style={{
              width: "100%",
              height: "100%",
              position: 'absolute', objectFit: 'cover', 
              top: 0, left: 0, opacity: 0.9,
              transition: 'opacity 0.2s ease-out'
            }}
          />
          <div className="cardcontent">
            <h2 className="cardheader">Card Heading</h2>
            <p className="chardob">
              Date Of Birth
            </p>
            <a href="#" className="button">
              Find out more
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
