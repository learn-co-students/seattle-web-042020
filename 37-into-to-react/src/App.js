import React from 'react';
import Authors from './Authors.js'

const App = () => {
  let authorsArr = [{name: 'Cathy O neal', genera: 'non-fiction'}, {name: 'Kady Martine', genera: 'scifi'},{name: 'Sam Kean', genera: 'non-fiction'} ,{name: 'Ann Leckie', genera: 'sci-fi, fantasy'}]
  return (
    <div >
      <Authors authorsArr={authorsArr} />
    </div>
  );
}

export default App;
