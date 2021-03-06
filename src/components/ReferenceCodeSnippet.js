import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const ReferenceCodeSnippet = ({children}) => {

    return (
        <div className = 'bg-dark rounded pt-3 pb-3 mb-4 codeSnippet'>
            <Row>
                <Col md = {11}>
                    <pre className = 'px-3 mt-1 mb-0'>
                        <code style = {{color: '#e83e8c'}}>
                            {children}
                        </code>
                    </pre>
                </Col>
                <Col md = {1} >
                    <Button id = 'copyButton' variant = 'outline-info' size = 'sm' onClick={() => {navigator.clipboard.writeText(children)}}>Copy</Button>
                </Col>
            </Row>
        </div>
    )
}

export default ReferenceCodeSnippet
