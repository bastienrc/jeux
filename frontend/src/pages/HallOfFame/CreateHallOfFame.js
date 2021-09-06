import React, { Component } from 'react'
import Layout from '../../components/Layout'
import HallOfFameService from './ApiHallOfFame'

class CreateHallOfFameComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      player: '',
      score: ''
    }
    this.changePlayerHandler = this.changePlayerHandler.bind(this)
    this.changeScoreHandler = this.changeScoreHandler.bind(this)
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
          score: halloffame.score
        });
    });
    }
  }

  saveOrUpdateHallOfFame = (e) => {
    e.preventDefault();

    let halloffame = {
      player: this.state.player,
      score: this.state.score
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

  changeScoreHandler= (event) => {
    this.setState({score: event.target.value});
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
        { this.getTitle() }
        <div className = "card-body">
          <form>
            <div className = "form-group">
              <label>Player: </label>
              <input
                placeholder="Player"
                name="player"
                value={this.state.player}
                onChange={this.changePlayerHandler}
              />
            </div>
            <div className="form-group">
              <label>Score: </label>
              <input
                placeholder="Score"
                name="score"
                value={this.state.score}
                onChange={this.changeScoreHandler}
              />
            </div>
            <button onClick={this.saveOrUpdateHallOfFame}>Enregistrer</button>
            <button onClick={this.cancel.bind(this)}>Annuler</button>
          </form>
        </div>
      </Layout>
    )
  }
}

export default CreateHallOfFameComponent

