import React, { Component } from 'react'
import Layout from '../../components/Layout'
import HallOfFameService from './ApiHallOfFame'

class CreateHallOfFameComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      player: '',
      scores: ''
    }
    this.changePlayerHandler = this.changePlayerHandler.bind(this)
    this.changeScoresHandler = this.changeScoresHandler.bind(this)
    this.saveOrUpdateHallOfFame = this.saveOrUpdateHallOfFame.bind(this)
  }

  componentDidMount() {
    if (this.state.id === '_add') {
      return
    }
    else
    {
      HallOfFameService.getHallOfFameById(this.state.id).then( (res) =>{
        let halloffame = res.data;
        this.setState({
          player: halloffame.player,
          scores: halloffame.scores
        });
    });
    }
  }

  saveOrUpdateHallOfFame = (e) => {
    e.preventDefault();

    let halloffame = {
      player: this.state.player,
      scores: this.state.scores
    };

    console.log('halloffame => ' + JSON.stringify(halloffame));

    // step 5
    if(this.state.id === '_add'){
      HallOfFameService.createHallOfFame(halloffame).then(res =>{
        this.props.history.push('/halloffame');
      });
    }else{
      HallOfFameService.updateHallOfFame(halloffame, this.state.id).then( res => {
        this.props.history.push('/halloffame');
      });
    }
  }

  changePlayerHandler= (event) => {
    this.setState({player: event.target.value});
  }

  changeScoresHandler= (event) => {
    this.setState({scores: event.target.value});
  }

  cancel(){
    this.props.history.push('/halloffame');
  }

  getTitle(){
    if(this.state.id === '_add'){
      return <h3 className="text-center">Add HallOfFame</h3>
    }else{
      return <h3 className="text-center">Update HallOfFame</h3>
    }
  }

  render() {
    return (
      <Layout>
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
                    <label>Player: </label>
                    <input
                      placeholder="Player"
                      name="player"
                      className="form-control"
                      value={this.state.player}
                      onChange={this.changePlayerHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Scores: </label>
                    <input
                      placeholder="Scores"
                      name="scores" className="form-control"
                      value={this.state.scores}
                      onChange={this.changeScoresHandler}
                    />
                  </div>
                  <button className="btn btn-success" onClick={this.saveOrUpdateHallOfFame}>Save</button>
                  <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default CreateHallOfFameComponent

