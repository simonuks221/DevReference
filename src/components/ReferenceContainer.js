import Container from 'react-bootstrap/Container'

import React, {lazy, useState, useEffect, useContext} from 'react'

import { ReferenceContext } from '../App';

const importView = path =>
  lazy(() =>
    import(`./${path}`).catch(() =>
      console.log('Didnt find')
    )
  );

const ReferenceContainer = () => {
    const [view, setView] = useState();
    const context = useContext(ReferenceContext)

  useEffect(() => {
    async function loadView() {
      const currentSectionPath = context.references.find(ref => ref.id === context.currentReferenceId).referenceSections.find(sec => sec.id === context.currentSectionId).path
          const View = await importView(currentSectionPath);
          setView(<View/>)
    }

    loadView();
  }, [context.currentSectionId, context.currentReferenceId, context.references]);

    return (
        <Container fluid className = 'bg-light'>
            <React.Suspense fallback="Loading views...">
                <div>{view}</div>
            </React.Suspense>
        </Container>
    )
}

export default ReferenceContainer
