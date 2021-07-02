import {ReferenceSectionHeader as RHead} from '../ReferenceSectionHeader.js'
import {ReferenceSectionText as RText} from '../ReferenceSectionText'
import {ReferenceCodeSnippet as RCode} from '../ReferenceCodeSnippet'

const GettingStarted = () => {
    return (
        <div>
            <RHead link = 'https://reactrouter.com/web/guides/quick-start'>Router</RHead>
            <RText>Install package:</RText>
            <RCode>
                {`npm install react-router-dom`}
            </RCode>
            <RText>Import components:</RText>
            <RCode>
                {`import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";`}
            </RCode>
            <RText>Wrap all APP.js with:</RText>
            <RCode>
                {`<Router basename = {process.env.PUBLIC_URL}>`}
            </RCode>
            <RText>Wrap content to be liked to with:</RText>
            <RCode>
                {`<Route path = '/path'>
    <LinkedToComponentHere/>
</Route>`}
            </RCode>
            <RText>To link to the page without realoading use: </RText>
            <RCode>
                {`<Link to="/">
    Link text
</Link>`}
            </RCode>
            <RHead link = ''>Extra functions</RHead>
            <RText>To link with js use useHistory:</RText>
            <RCode>
                {`history.push(to)`}
            </RCode>
            <RText>To see in what page you are on:</RText>
            <RCode>
                {`useLocation().pathname`}
            </RCode>
            <RText>Remember to import these from "react-router-dom".</RText>
        </div>
    )
}

export default GettingStarted
