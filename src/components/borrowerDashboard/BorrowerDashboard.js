import React from 'react';
import './BorrowerDashboard.css';
import FilterResults from "react-filter-search";

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      data: [ ],
      value: ' '
    };
  }
  componentWillMount() {
    fetch('http://https://neighborhood-library-labspt5.netlify.com/borrowers')
      .then(response => response.json())
      .then(json => this.setState({ data: json }));
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  render() {
    const { data, value } = this.state;
    return (
      <div>
        <input type= "text" value={value} onChange={this.handleChange} />
        <SearchResults 
          value={value}
          data={data}
          renderResults={results => (
            <div>
              {results.map(el => (
                <div>
                  <span>{el.name}</span>
                  <span>{el.title}</span>
                </div>
            ))}
            </div>
          )}
        />
      </div>
    )
  }
}

export default class BorrowerDashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Borrower Dashboard</h1>
      </div>
    );
  }
}
