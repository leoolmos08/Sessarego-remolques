import React, { useState } from "react";

import { API_URL } from "../../utils/constants";
import { Carousel } from "react-carousel-minimal";
import LoadingCarousel from "./LoadingCarousel";

export default function CarouselComponent({ vehicle }) {
  const { images, imagesUrl } = vehicle;
  let data = [];

  if (images.length > 0) {
    for (let index = 0; index < images.length; index++) {
      const element = {
        image: `${API_URL}${images[index].url}`,
        caption: "",
      };
      data.push(element);
    }
  } else {
    for (let index = 0; index < imagesUrl.length; index++) {
      const element = {
        image: imagesUrl[index],
        caption: "",
      };
      data.push(element);
    }
  }

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div>
      <div>
        <div
          className="mt-20 pb-30"
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            time={100000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={false}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "20px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}
