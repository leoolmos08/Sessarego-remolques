import React from "react";
import poster from "../assets/banner-inicio-desktop.png";
import video from "../assets/banner-inicio-video.mp4";

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
      <img
        src={require("../assets/banner-inicio .png")}
        className="lg:hidden"
      />
    </div>
  );
}
