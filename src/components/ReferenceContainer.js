import Container from 'react-bootstrap/Container'
import {ReferenceSectionHeader as RHead} from './ReferenceSectionHeader.js'
import {ReferenceSectionText as RText} from './ReferenceSectionText'
import {ReferenceCodeSnippet as RCode} from './ReferenceCodeSnippet'


const ReferenceContainer = () => {
    return (
        <Container fluid className = 'bg-light'>
            <RHead link = 'https://reactjs.org/docs/create-a-new-react-app.html'>Start react project</RHead>
            <RText>tekstas</RText>
            <RCode code = 'npm install linux'></RCode>
        </Container>
    )
}

export default ReferenceContainer
