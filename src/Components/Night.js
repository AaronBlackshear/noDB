import React, {Component} from 'react';
// import Todo from './ToDo';

class Night extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // inputMorning: '',
            inputNight: '',
            // inputAnytime: '',
            inputEdit:''
        }
//binds go here
    }
    ////////////////////////////////////////////////////////////////////////////////


    handleChangeNight(e) {
        this.setState({inputNight: e.target.value})
    }

    ////////////////////////////////////////////////////////////////////////////////



    handleSubmitNight() {
        this
            .props
            .updateNight(this.state.inputNight)
    }

    ////////////////////////////////////////////////////////////////////////////////


    handleEdit(newEditText){
        this.setState({inputEdit : newEditText })
    }


    render() {
        console.log(this.props)

        return (
            <div className="column">
                <h1>
                    {this.props.title}
                </h1>
                <input type="text" onChange={(e) => this.handleChangeNight(e)}/>
                <button onClick={() => this.handleSubmitNight()}>Add to Night</button>

                <ul>
                    {this
                        .props
                        .nighttodos
                        .map((e, index) => <div key={e.id}>
                            <p className="todoItem">
                                {e.text}
                            </p>
                            <input onChange={(event) => this.handleEdit(event.target.value) }></input>
                            <button onClick={() => this.props.editItem(e.id , this.state.inputEdit)}>Edit</button>
                            <button onClick={() => this.props.deleteItem(e.id)}>Delete</button>

                        </div>)}
                </ul>

            </div>
        );
    }
}

export default Night;
