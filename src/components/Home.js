import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from './CarouselItem'


const Home = ({carouselItems}) => {
    return (
        <div>
            <Carousel>
                {carouselItems.map(item => <Carousel.Item><CarouselItem carouselItem = {item}/></Carousel.Item>)}
            </Carousel>
        </div>
    )
}

export default Home
