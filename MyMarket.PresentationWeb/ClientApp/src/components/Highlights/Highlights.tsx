import * as React from 'react';
import './Highlights.scss';
import { Carousel, CarouselIndicators, CarouselControl, CarouselItem, CarouselCaption } from "reactstrap";
import { FC } from 'react';

export interface HighlightsProps {
    items: {
      imageUrl: string,
      caption: string,
      altText: string,
      href: string,
    }[];
    texts: {
        previous?: string;
        next?: string;
    }
}

export const Highlights: FC<HighlightsProps> = (props) => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);

    const { 
        items, 
        texts: {
            previous = 'Previous',
            next = 'Next',
        }
    } = props; 

    if(!items || !items.length) {
      return (<></>);
    }
  
    const onNext = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const onPrevious = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex: number) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.imageUrl}
        >
          <a href={item.href}>
            <img className="itemImage" src={item.imageUrl} alt={item.altText} />
          </a>
          <CarouselCaption captionText={item.altText} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
  
    return (
      <Carousel
        className="carousel"
        activeIndex={activeIndex}
        next={onNext}
        previous={onPrevious}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText={previous} onClickHandler={onPrevious} />
        <CarouselControl direction="next" directionText={next} onClickHandler={onNext} />
      </Carousel>
    );
}