import Container from 'react-bootstrap/Container'
import {ReferenceSectionHeader as RHead} from './ReferenceSectionHeader.js'
import {ReferenceSectionText as RText} from './ReferenceSectionText'
import {ReferenceCodeSnippet as RCode} from './ReferenceCodeSnippet'


const ReferenceContainer = () => {
    return (
        <Container fluid className = 'bg-light'>
            <RHead link = 'https://reactjs.org/docs/create-a-new-react-app.html'>Start react project</RHead>
            <RText>To start a project write to terminal: </RText>
            <RCode code = 'npx create-react-app my-app'></RCode>
            <RText>To start develpment server: </RText>
            <RCode code = 'npm start'></RCode>
            <RText>To add a new component quickly, shortcut to write with <a href = 'https://github.com/dsznajder/vscode-es7-javascript-react-snippets'>VSCode addon:</a> </RText>
            <RCode code = 'rafce'></RCode>
            <RText>That gives: </RText>
            <RCode code = 'const GettingStarted = () => { \n return (<div>components here</div>)}export default GettingStarted'></RCode>
            <RHead link = 'https://react-bootstrap.netlify.app/'>React bootstrap</RHead>
            <RText>To install bootstrap: </RText>
            <RCode code = 'npm install react-bootstrap'></RCode>
            <RText>To import bootstrap styles add to App.js: </RText>
            <RCode code = {'import \'bootstrap/dist/css/bootstrap.min.css\''}></RCode>

        </Container>
    )
}

export default ReferenceContainer
