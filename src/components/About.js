import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'

import {ReactComponent as GitHubLogo} from '../github.svg'
import {ReactComponent as LinkedInLogo} from '../linkedin.svg'
import { useLayoutEffect, useState, useRef } from 'react'

const About = () => {
    const aboutLinkRef = useRef(null)
    const [showLinks, changeShowLinks] = useState(false)
    const showLinksOffset = 30;

    useLayoutEffect(() => {
        const topPos = element => element.getBoundingClientRect().top
        const aboutLinkPos = topPos(aboutLinkRef.current) + showLinksOffset;

        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight
            if(aboutLinkPos < scrollPos){
                changeShowLinks(true)
                document.documentElement.style.setProperty('--aboutLinksTransform','1');
            }
        }
        window.addEventListener("scroll", onScroll)
        return () => {window.removeEventListener("scroll", onScroll); document.documentElement.style.setProperty('--aboutLinksTransform','0');
    }

    }, [])

    return (
            <Container fluid className = 'bg-secondary rounded py-2 text-center px-5 text-light my-2'>
                <h2 className = 'text-center text-light py-2'>About</h2>
                <p className = ''>My created webpage to quickly see the reference code and resources I need weather would it be Web development or doing custom charts</p>
                <p className = ''>Created using ReactJS and stylized using Bootstrap css library and components</p>
                <p className = 'pt-2'>Features include:</p>
                <ListGroup variant="flush" className = 'text-left about'>
                    <ListGroup.Item className = 'bg-secondary' animationoffset = "1.0">Easy integration with APIs</ListGroup.Item>
                    <ListGroup.Item className = 'bg-secondary' animationoffset = '1.0'>Automatic reference and section data rendering</ListGroup.Item>
                    <ListGroup.Item className = 'bg-secondary' animationoffset = '1.0'>Responsive design for all device sizes</ListGroup.Item>
                    <ListGroup.Item className = 'bg-secondary' animationoffset = '1.0'>Carousel design in Home page</ListGroup.Item>
                    <ListGroup.Item className = 'bg-secondary' animationoffset = '1.0'>Different CSS powered animations initiated by hover and scroll events</ListGroup.Item>
                    <ListGroup.Item className = 'bg-secondary' animationoffset = '1.0'>SVG format animations</ListGroup.Item>
                </ListGroup>
                <h2 className = 'text-center py-2'>Created by:</h2>
                <h4 className = 'about-name'>Simonas Riauka</h4>
                <a ref = {aboutLinkRef} className = 'about-links' href = 'https://github.com/simonuks221' animate = '20%'><GitHubLogo/></a>
                <a className = 'about-links' href = 'https://linkedin.com/in/simonas-riauka-851a7017b'><LinkedInLogo/></a>
            </Container>
    )
}

export default About
