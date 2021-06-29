import {useHistory} from "react-router-dom";
import { ReferenceContext } from "../App";
import { useContext } from "react";
import { ResponsiveEmbed } from "react-bootstrap";

const CarouselImage = ({carouselItem}) => {
    const context = useContext(ReferenceContext)
    const history = useHistory();

    const ImagePressed = (e) => {
        history.push(carouselItem.clickPath) 
        context.changeCurrentReference(carouselItem.referenceId)
        context.changeCurrentSection(carouselItem.sectionId)
    }

    /*
    return (
        <div className = 'ratio ratio-16x9'>
            <img
                    style = {{height: '25rem'}}
                    className="d-block w-100"
                    src= {carouselItem.imagePath}
                    alt="Slide"
                    onClick = {ImagePressed}
                        
            />
        </div>
    )
    */

    return (
        <div style={{ width: '90%', height: 'auto'}} className = 'mx-auto'>
            <ResponsiveEmbed aspectRatio="21by9">
                <embed type="image/svg+xml" alt = 'Slide' onClick = {ImagePressed} src={carouselItem.imagePath} />
            </ResponsiveEmbed>
        </div>
    )
}

export default CarouselImage
