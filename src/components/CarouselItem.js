import Carousel from 'react-bootstrap/Carousel'
import CarouselImage from './CarouselImage'

const CarouselItem = ({carouselItem}) => {
    return (
        <>
            <CarouselImage carouselItem = {carouselItem}/>
            <Carousel.Caption>
                <h3 className = 'text-dark'>{carouselItem.title}</h3>
                <p className = 'text-dark'>{carouselItem.description}</p>
            </Carousel.Caption>
        </>
    )
}

export default CarouselItem
