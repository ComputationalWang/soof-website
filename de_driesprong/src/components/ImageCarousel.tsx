import { images } from '../constants';
import styles from '../style';
import { TECarousel, TECarouselItem } from "tw-elements-react";
import React from 'react';


function createCarouselItems(images: { src: string; title: string; caption: string; alt: string }[]) {
  return images.map((element, index) => (
    <TECarouselItem
      key={index}
      itemID={index + 1}
      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[2000ms] ease-in-out motion-reduce:transition-none"
    >
      <img
        src={element.src}
        className="block w-full  rounded-3xl"
        alt={element.alt}
      />
<div className={`xl:absolute md:h-[180px] bottom-5 py-5 w-[100%] text-center text-clear flex flex-col justify-between`}>
  <div>
    <h1 className="text-xl font-poppins font-bold">{element.title}</h1>
    <p className={`${styles.paragraph} text-white italic`}>{element.caption}</p>
  </div>
</div>
    </TECarouselItem>
  ))
}

export default function CarouselBasicExample(): React.JSX.Element {
  return (
    <>
      <TECarousel showControls ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          {createCarouselItems(images)}
        </div>
      </TECarousel>
    </>
  );
}