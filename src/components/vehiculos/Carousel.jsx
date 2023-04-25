import React from 'react'
import { Carousel } from 'react-carousel-minimal';

export default function CarouselComponent() {
    const data = [
        {
          image: "https://i0.wp.com/www.camionesybuses.com.ar/wp-content/uploads/2020/04/iveco-cruso-9-y-11.jpg?resize=1200%2C718",
          caption: "Iveco Cursor"
        },
        {
          image: "https://http2.mlstatic.com/D_NQ_NP_772001-MLA45196300753_032021-O.webp",
          caption: "Iveco Cursor"
        },
        {
          image: "https://http2.mlstatic.com/D_NQ_NP_931496-MLA45196295991_032021-O.webp",
          caption: "Iveco Cursor"
        },
        {
          image: "https://http2.mlstatic.com/D_NQ_NP_976022-MLA45196326143_032021-O.webp",
          caption: "Iveco Cursor"
        }
      ];
    
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold'
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
      return (
        <div className="App">
          <div>
            <div className='mt-20 pb-30' style={{
              padding: "0 20px"
            }}>
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
                  margin: "40px auto",
                }}
              />
            </div>
          </div>
        </div>
      );
    }

