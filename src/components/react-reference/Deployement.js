import {ReferenceSectionHeader as RHead} from '../ReferenceSectionHeader.js'
import {ReferenceSectionText as RText} from '../ReferenceSectionText'
import {ReferenceCodeSnippet as RCode} from '../ReferenceCodeSnippet'

const GettingStarted = () => {
    return (
        <div>
            <RHead link = 'https://create-react-app.dev/docs/deployment/'>Deploying your React app</RHead>
            <h3 className = 'py-2'>Deploying to a GitHub page</h3>
            <RText>Import gh-pages package with:</RText>
            <RCode>
                {`npm install gh-pages`}
            </RCode>
            <RText>Add a few lines to package.json:</RText>
            <RCode>
            {`"homepage": "Link to the website adress here",
            
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    }`}
            </RCode>
            <RText>Make a gh-pages branch of the repository and make sure that pages are using it in the settings.</RText>
            <RText>Run comand to build and publish the website automatically:</RText>
            <RCode>
            {`npm run deploy`}
            </RCode>
            <RText className = 'text-danger'>If using Router components add to the Router component: </RText>
            <RCode>
            {`<Router basename = {process.env.PUBLIC_URL}>`}
            </RCode>

        </div>
    )
}

export default GettingStarted
