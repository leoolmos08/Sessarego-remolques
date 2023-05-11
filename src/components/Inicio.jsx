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
      />
    </div>
  );
}
