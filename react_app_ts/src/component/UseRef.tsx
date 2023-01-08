import React, { useRef } from "react";
import logo from "../image/logo.svg";

export default function UseRef() {
  const aRef = useRef<HTMLAnchorElement>(null);
  console.log(aRef.current?.href);

  return (
    <div>
      <a ref={aRef} href="#/123"></a>
      <img src={logo}></img>
      <button
        onClick={() => {
          console.log(aRef.current?.href);
        }}
      >
        clickme
      </button>
    </div>
  );
}
