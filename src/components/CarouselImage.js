import {useHistory} from "react-router-dom";
import { ReferenceContext } from "../App";
import { useContext } from "react";

const CarouselImage = ({carouselItem}) => {
    const context = useContext(ReferenceContext)
    const history = useHistory();

    const ImagePressed = (e) => {
        history.push(carouselItem.clickPath) 
        context.changeCurrentReference(carouselItem.referenceId)
        context.changeCurrentSection(carouselItem.sectionId)
    }

    return (
        <img
                style = {{height: '25rem'}}
                className="d-block w-100"
                src= {carouselItem.imagePath}
                alt="Slide"
                onClick = {ImagePressed}
                    
        />
    )
}

export default CarouselImage
