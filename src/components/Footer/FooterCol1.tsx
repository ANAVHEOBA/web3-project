import Image from "next/image";
import React from "react";

function FooterCol1() {
  return (
    <div className="space-y-2">
      <div className="relative h-24 w-36">
        <Image src={"/logo_white.png"} alt={"DeDoctor"} fill />
      </div>
      <p className="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias error
        adipisci debitis cum laborum voluptatibus sapiente quidem est mollitia
        iusto?
      </p>
    </div>
  );
}

export default FooterCol1;
