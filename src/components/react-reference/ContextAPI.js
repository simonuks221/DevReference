import {ReferenceSectionHeader as RHead} from '../ReferenceSectionHeader.js'
import {ReferenceSectionText as RText} from '../ReferenceSectionText'
import {ReferenceCodeSnippet as RCode} from '../ReferenceCodeSnippet'

const GettingStarted = () => {
    return (
        <div>
            <RHead link = 'https://reactjs.org/docs/context.html'>ContextAPI</RHead>
            <RText>Creating main context to use by other components: </RText>
            <RCode code = 'export const MainContext = React.createContext(undefined);'></RCode>
            <RText>Wrap everything in .Provider component: </RText>
            <RCode code = '<MainContext.Provider value = {}> \n <MainContext.Provider>'></RCode>
            <RText>To use context in other components import it: </RText>
            <RCode code = 'import { ReferenceContext } from pathHere'></RCode>
            <RText>And assign to a variable: </RText>
            <RCode code = 'const context = useContext(MainContext)'/>
        </div>
    )
}

export default GettingStarted
