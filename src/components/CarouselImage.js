import {useHistory} from "react-router-dom";

const CarouselImage = ({imageRef, clickPath}) => {
    const history = useHistory();

    return (
        <img
                style = {{height: '25rem'}}
                className="d-block w-100"
                src= {imageRef}
                alt="Slide"
                onClick = {e => { history.push(clickPath)}}
                    
        />
    )
}

export default CarouselImage
