import React, { Component } from 'react'
import ScoreService from '../scores/score';

class CreateScoreComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // step 2
      id: this.props.match.params.id,
      user: '',
      points: ''
    }
    this.changeUserHandler = this.changeUserHandler.bind(this);
    this.changePointsHandler = this.changePointsHandler.bind(this);
    this.saveOrUpdateScore = this.saveOrUpdateScore.bind(this);
  }

  // step 3
  componentDidMount(){
    // step 4
    if (this.state.id === '_add') {
      return
    }
    else
    {
      ScoreService.getScoreById(this.state.id).then( (res) =>{
        let score = res.data;
        this.setState({
          user: score.user,
          points: score.points
        });
    });
    }
  }

  saveOrUpdateScore = (e) => {
    e.preventDefault();

    let score = {
      user: this.state.user,
      points: this.state.points
    };

    console.log('score => ' + JSON.stringify(score));

    // step 5
    if(this.state.id === '_add'){
      ScoreService.createScore(score).then(res =>{
        this.props.history.push('/scores');
      });
    }else{
      ScoreService.updateScore(score, this.state.id).then( res => {
        this.props.history.push('/scores');
      });
    }
  }

  changeUserHandler= (event) => {
    this.setState({user: event.target.value});
  }

  changePointsHandler= (event) => {
    this.setState({points: event.target.value});
  }

  cancel(){
    this.props.history.push('/scores');
  }

  getTitle(){
    if(this.state.id === '_add'){
      return <h3 className="text-center">Add Score</h3>
    }else{
      return <h3 className="text-center">Update Score</h3>
    }
  }

  render() {
    return (
      <div>
        <br></br>
        <div className = "container">
          <div className = "row">
            <div className = "card col-md-6 offset-md-3 offset-md-3">
              {
                this.getTitle()
              }
              <div className = "card-body">
                <form>
                  <div className = "form-group">
                    <label>User: </label>
                    <input
                      placeholder="User"
                      name="user"
                      className="form-control"
                      value={this.state.user}
                      onChange={this.changeUserHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Points: </label>
                    <input
                      placeholder="Points"
                      name="points" className="form-control"
                      value={this.state.points}
                      onChange={this.changePointsHandler}
                    />
                  </div>
                  <button className="btn btn-success" onClick={this.saveOrUpdateScore}>Save</button>
                  <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateScoreComponent

