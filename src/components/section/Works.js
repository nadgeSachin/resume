import React, { useState }  from 'react'
import { projects, miscellaneous, section3Title, section4Title } from '../../profile'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Works.css";

const Works = () => {
const [currentIndex, setCurrentIndex] = useState(1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentIndex(current + 1),
    customPaging: i => (
      <div className="navigation-dot"></div>
    ),
    prevArrow: <button className="previous">❮</button>,
    nextArrow: <button className="next">❯</button>
  };
  
    return (
        <>
            <div data-aos="zoom-in-up" data-aos-once="true" className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{section3Title}</h1>
                    </div>
                </>
                <div className="row">
                {projects && projects.map((x) => 
                <div key={x.id} id={x.id} className='carousel-container'>
                    <Slider {...settings}>
    {x.images && x.images.map((img, index) => {
        return (
            <div key={index}>
                <img 
                    src={img.default} 
                    alt={`${x.name}-${index}`} 
                    className="project-image"
                />
            </div>
        );
    })}
</Slider>


                   <div className='sub_project'>
                        <h4><b>{x.name} :</b> <i>{x.skills}</i></h4>
                        <p>{x.about}</p>
                        <button className="learn-more-button">
                        Learn More
                        </button>

                    </div>
                    {/* <Project key={x.id} id={x.id} name={x.name} skills={x.skills} /> */}
                    </div>
                )}
                </div>
            </div>
        </>
    )
}

export default Works
