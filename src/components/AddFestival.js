import React, { Component } from 'react';
import '../styles/AddFestival.css';
import 'react-date-picker/index.css';
import { DateField, Calendar } from 'react-date-picker'


class AddFestival extends Component {
  constructor(props) {
    super(props);
    this.state = {bezeichnung : '',
                  beginn : '',
                  genre : ''};
  }

  handleBezeichnungChange(e) {
    this.setState({bezeichnung : e.target.value})
  }

  handleGenreChange(event) {
    this.setState({genre: event.target.value});
  }

  handleSubmit(e) {
    //call Add Service
  }

  render() {
    const onChange1 = (dateString, { dateMoment, timestamp }) => {
      console.log(dateString)
    }

    const onChange2 = (dateString, { dateMoment, timestamp }) => {
      console.log(dateString)
    }

    let date = '2017-04-24'

    return (
      <div className="AddFestival">
        <form>
          <label>
            Bezeichnung:
            <input type="text" value={this.state.bezeichnung} onChange={this.handleBezeichnungChange.bind(this)} />
          </label>
          <label style={{color:'#000'}}>Beginn-Datum</label>
          <Calendar
            dateFormat="YYYY-MM-DD"
            onChange={onChange1}
          />
          <label style={{color:'#000'}}>Ende-Datum</label>
          <Calendar
            dateFormat="YYYY-MM-DD"
            onChange={onChange2}
          />
          <label className="genre">
            Genre: <select value={this.state.genre} onChange={this.handleGenreChange.bind(this)}>
              <option genre="Hip Hop">Hip Hop</option>
              <option genre="Rock">Rock</option>
              <option genre="Pop">Pop</option>
              <option genre="Rap">Rap</option>
            </select>
          </label>
          <button type="button" value="Submit" onClick={this.handleSubmit.bind(this)} />
        </form>
      </div>
    );
  }
}

export default AddFestival;
