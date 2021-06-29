import {ReferenceSectionHeader as RHead} from '../ReferenceSectionHeader.js'
import {ReferenceSectionText as RText} from '../ReferenceSectionText'
import {ReferenceCodeSnippet as RCode} from '../ReferenceCodeSnippet'

const GettingStarted = () => {
    return (
        <div>
            <RHead link = 'https://reactjs.org/docs/create-a-new-react-app.html'>Start react project</RHead>
            <RText>To start a project write to terminal: </RText>
            <RCode>
                {`npx create-react-app my-app`}
            </RCode>
            <RText>To start develpment server: </RText>
            <RCode>
            {`npm start`}
            </RCode>
            <RText>To add a new component quickly, shortcut to write with <a href = 'https://github.com/dsznajder/vscode-es7-javascript-react-snippets'>VSCode addon:</a> </RText>
            <RCode>
            {`rafce`}
            </RCode>
            <RText>That gives: </RText>
            <RCode>
            {`const GettingStarted = () => {
    return (
        <div>
            components here
        </div>
    )
}

export default GettingStarted`}
            </RCode>
            <RHead link = 'https://react-bootstrap.netlify.app/'>React bootstrap</RHead>
            <RText>To install bootstrap: </RText>
            <RCode>
            {`npm install react-bootstrap`}
            </RCode>
            <RText>To import bootstrap styles add to App.js: </RText>
            <RCode>
            {`import 'bootstrap/dist/css/bootstrap.min.css'`}
            </RCode>
        </div>
    )
}

export default GettingStarted
