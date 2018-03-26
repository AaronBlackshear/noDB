import React, {Component} from 'react';
// import Todo from './ToDo';

class Morning extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputMorning: '',
            inputNight: '',
            inputAnytime: ''
        }
        //binds go here
    }
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////

    handleChangeMorning(e) {
        this.setState({inputMorning: e.target.value})
    }

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////

    handleSubmitMorning() {
        this
            .props
            .updateMorning(this.state.inputMorning)
        // console.log(this.props, this.state)
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

                <input type="text" onChange= { (e) => this.handleChangeMorning(e)}/>
                <button onClick= { () => this.handleSubmitMorning() }>Add to Morning</button>
                <ul>
                    {this
                        .props
                        .morningtodos
                        .map((e, index) => <div key={e.id}>
                            <p className="todoItem">
                                {e.text}
                            </p>

                            <button>Edit</button>
                            <button onClick={event => this.props.deleteMorningItem(e.id)}>Delete</button>

                        </div>)}
                </ul>
            </div>
        );
    }
}

export default Morning;
