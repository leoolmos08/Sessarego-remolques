import React from "react";
import poster from "../assets/BannerIMG.png";
import video from "../assets/BannerVideo.mp4";

export default function Inicio() {
  return (
    <div>
      <video
        src={video}
        width={"100%"}
        preload
        autoPlay={true}
        poster={poster}
        className="max-[640px]:hidden"
      />
      <img src={require("../assets/inicio-mobile.png")} className="lg:hidden" />
    </div>
  );
}
