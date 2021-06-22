import Carousel from 'react-bootstrap/Carousel'
import CarouselImage from './CarouselImage'


const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <CarouselImage imageRef = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' clickPath = '/about'/>
                    <Carousel.Caption>
                        <h3 className = 'text-dark'>React reference</h3>
                        <p className = 'text-dark'>A Javascript framework for reactive webpages</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <CarouselImage imageRef = 'https://uxuideveloper.com/wp-content/uploads/2021/02/bootstrap-illustration.png' clickPath = '/react-reference'/>
                    <Carousel.Caption>
                        <h3>Bootstrap reference</h3>
                        <p>The most famouse CSS JS library</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home
