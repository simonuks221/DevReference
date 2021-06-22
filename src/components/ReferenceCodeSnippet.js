import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {useState} from 'react'


export const ReferenceCodeSnippet = ({code}) => {
    
    const [show, setShow] = useState('invisible')

    return (
        <div className = 'bg-dark rounded pt-3 pb-3 mb-4' onMouseEnter = {e => {
            setShow('visible')
        }} onMouseLeave = {e => {setShow('invisible')}}>
            <Row>
                <Col md = {11}>

                        <code className = 'px-3'>
                            {code}
                        </code>

                </Col>
                <Col md = {1}>
                    <Button className = {show} variant = 'outline-info' size = 'sm' onClick={() => {navigator.clipboard.writeText(code)}}>Copy</Button>
                </Col>
            </Row>
        </div>
        
    )
}

export default ReferenceCodeSnippet
