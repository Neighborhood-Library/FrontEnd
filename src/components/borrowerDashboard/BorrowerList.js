import React from "react";
import { connect } from "react-redux";

import { addBook, toggleDone } from "../actions";

class List extends React.Component {
    state = {
        newTodo: ""
    };
    handleChanges = e => {
        this.setState({ newTodo: e.target.value});
    };
    addTask = e => {
        e.preventDefault();
        this.props.addTask(this.state.addBook);
    };
    toggleDone = (e, index) => {
        this.props.toggleDone(index);
    };
    render(){
        return (
            <React.Fragment>
            <div className = "list">
                {this.props.tasks.map((task, index)=> (
                    <h4 onClick={e => this.toggleDone(e, index)} key={index}>
                        {task.name}
                        {task.done && <i className="fas fa-dragon" />}
                    </h4>
                ))}
            </div>
            <input 
                type="text"
                value={this.state.newList}
                placeholder="Lets Read Some More!!"
                onChange={this.handleChanges}
            />
            <button onClick={this.addBook}>Add Book</button>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        task: state.task
    };
};

export default connect(
    mapStateToProps,
    { addBook, toggleDone }
)(List);