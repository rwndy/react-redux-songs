import React from 'react';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';


const App = () => {
  return (
   <div className="ui container grid">
     <div className="ui row">
       <div className="column eight wided" style={{marginTop: '10'}}>
         <SongList />
       </div>
       <div className="column eight wided">
         <SongDetail />
       </div>
     </div>
   </div>
  );
}

export default App;
