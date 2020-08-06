import React from 'react';
import ReactDOM from 'react-dom';
import './search.less'
import CQ from './images/CQ.jpg';

class Search extends React.Component {
  render() {
    return <div className="search-text">
      Night View of CQ
      <div style={{
        width: 600
      }}>
        <img src={CQ} />
      </div>
    </div>;
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)