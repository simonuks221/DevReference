import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {useState} from 'react'


export const ReferenceCodeSnippet = ({children}) => {
    
    const [show, setShow] = useState('invisible')

    
    return (
        <div className = 'bg-dark rounded pt-3 pb-3 mb-4' onMouseEnter = {e => {
            setShow('visible')
        }} onMouseLeave = {e => {setShow('invisible')}}>
            
            <Row>
                <Col md = {11}>
                    <pre className = 'px-3 mt-1 mb-0'>
                        <code style = {{color: '#e83e8c'}}>
                            {children}
                        </code>
                    </pre>
                </Col>
                <Col md = {1}>
                    <Button className = {show} variant = 'outline-info' size = 'sm' onClick={() => {navigator.clipboard.writeText(children)}}>Copy</Button>
                </Col>
            </Row>
        </div>
        
        
    )
    
}

export default ReferenceCodeSnippet
