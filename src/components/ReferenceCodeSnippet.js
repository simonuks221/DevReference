import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export const ReferenceCodeSnippet = ({code}) => {
    return (
        <div className = 'bg-dark rounded pt-3 pb-4'>
            <Row>
                <Col md = {11}>
                    <code className = 'px-3'>
                        {code}
                    </code>
                </Col>
                <Col md = {1}>
                    <Button variant = 'outline-info' size = 'sm' onClick={() => {navigator.clipboard.writeText(code)}}>Copy</Button>
                </Col>
            </Row>
        </div>
        
    )
}

export default ReferenceCodeSnippet
