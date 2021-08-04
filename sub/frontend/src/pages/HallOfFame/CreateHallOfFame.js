import React, { Component } from 'react'
import Layout from '../../components/Layout'
import HallOfFameService from './ApiHallOfFame'

class CreateHallOfFameComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      user: '',
      points: ''
    }
    this.changeUserHandler = this.changeUserHandler.bind(this)
    this.changePointsHandler = this.changePointsHandler.bind(this)
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
          user: halloffame.user,
          points: halloffame.points
        });
    });
    }
  }

  saveOrUpdateHallOfFame = (e) => {
    e.preventDefault();

    let halloffame = {
      user: this.state.user,
      points: this.state.points
    };

    console.log('halloffame => ' + JSON.stringify(halloffame));

    // step 5
    if(this.state.id === '_add'){
      HallOfFameService.createHallOfFame(halloffame).then(res =>{
        this.props.history.push('/halloffames');
      });
    }else{
      HallOfFameService.updateHallOfFame(halloffame, this.state.id).then( res => {
        this.props.history.push('/halloffames');
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
    this.props.history.push('/halloffames');
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

