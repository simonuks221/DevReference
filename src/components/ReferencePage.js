import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavigationSideBar from './NavigationSideBar.js'
import ReferenceContainer from './ReferenceContainer.js'
import Container from 'react-bootstrap/Container'


const ReferencePage = () => {
    return (
        <div>
            <Row>
              <Col xs = {2}>
                <NavigationSideBar/>
              </Col>
              <Col xs = {10}>
                <ReferenceContainer/>
              </Col>
            </Row>
        </div>
    )
}

export default ReferencePage
