import React, {Component} from 'react';
// import Todo from './ToDo';

class Anytime extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputAnytime: '',
            inputEdit:""
        }
        //binds go here
    }

    //   handleChangeMorning(e){     this.setState({       inputMorning:
    // e.target.value     }) }   handleChangeNight(e){     this.setState({
    // inputNight: e.target.value     })   }

    handleChangeAnytime(e) {
        this.setState({inputAnytime: e.target.value})
    }

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////

    handleSubmitAnytime() {
        this
            .props
            .updateAnytime(this.state.inputAnytime)
    }

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////
    render() {
        // console.log(this.props)
        return (
            <div className="column">
                <h1>
                    {this.props.title}
                </h1>

                <input type="text" onChange= { (e) => this.handleChangeAnytime(e)}/>
                <button onClick= { () => this.handleSubmitAnytime() }>Add To Anytime
                </button>

                <ul>
                    {this
                        .props
                        .anytimetodos
                        .map((e, index) => <div key={e.id}>
                            <p className="todoItem">
                                {e.text}
                            </p>
                            <input onChange={dog=>this.setState({inputEdit:dog.target.value})} ></input>
                            <button onClick={() => this.props.editItem(e.id , this.state.inputEdit)}  >Edit</button>
                            <button onClick={event => this.props.deleteItem(e.id)}>Delete</button>

                        </div>)}
                </ul>
            </div>
        );
    }
}

export default Anytime;
