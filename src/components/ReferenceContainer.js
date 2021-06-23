import Container from 'react-bootstrap/Container'

import React, {lazy, useState, useEffect} from 'react'

const importView = subreddit =>
  lazy(() =>
    import(`./react-reference/${subreddit}`).catch(() =>
      console.log('Didnt find')
    )
  );

const ReferenceContainer = () => {
    const [views, setViews] = useState([]);

    const subredditsToShow = [
        'GettingStarted'
        ];

  useEffect(() => {
    async function loadViews() {
      const componentPromises =
        subredditsToShow.map(async subreddit => {
          const View = await importView(subreddit);
          console.log(`./react-reference/${subreddit}.js`)
          return <View/>;
        });

      Promise.all(componentPromises).then(setViews);
    }

    loadViews();
  }, []);

    return (
        <Container fluid className = 'bg-light'>
            <React.Suspense fallback="Loading views...">
                <div>{views}</div>
            </React.Suspense>
        </Container>
    )
}

export default ReferenceContainer
