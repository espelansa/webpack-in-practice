import React from 'react';
import ReactDOM from 'react-dom';
import './search.less'
import bg from './images/bg.png';

class Search extends React.Component {
  render() {
    return <div className="search-text">
      Search Text
      <div style={{
        width: 600
      }}>
        <img src={bg} />
      </div>
    </div>;
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)