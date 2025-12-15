"use client";
import { useEffect } from "react";
export default function CenterDiv() {


  return (
    <>
      <div
        style={{
          height: "300px",
          width: "300px",
          background: "red",
          position: "relative",
          // display:"flex",
          // alignItems:"center",
          // justifyContent:"center"
        }}
      >
        <div
          style={{
            height: "100px",
            width: "100px",
            background: "yellow",
            position: "absolute",
            top: "30%",
            left: "30%",
            color: "black",
            textAlign: "center",
          }}
        >
          inner
        </div>
      </div>


    </>
  );
}
