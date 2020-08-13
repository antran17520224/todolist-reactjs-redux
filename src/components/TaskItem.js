import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class TaskItem extends Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id)
    }

    onDeleteTask = () => {
        this.props.onDeleteItem(this.props.task.id);
        this.props.onCloseForm()
    }

    onUpdateTask = () => {
        this.props.onOpenForm()
        this.props.onEditTask(this.props.task)
    }

    render() {
        let { task, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span
                        className={task.status === true ? 'bg-success' : 'bg-danger'}
                        onClick={this.onUpdateStatus}
                    >
                        {task.status === true ? 'Kích hoạt' : 'Ẩn'}
                    </span>
                </td>
                <td className="text-center">
                    <button 
                    type="button" 
                    className="btn btn-warning"
                    onClick={this.onUpdateTask} >
                        <span className="fas fa-pencil-alt mr-5" />Sửa
					</button>
							&nbsp;
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.onDeleteTask}
                    >
                        <span className="fa fa-trash mr-5" />Xóa
					</button>
                </td>
            </tr>
        );
    }

}

const mapStateToProps = state => {
	return {
	}
}

const mapDispatchToProps = (dispatch,props) => {
	return {
		onUpdateStatus : (id) => {
			dispatch(actions.updateStatus(id))
        },
        onDeleteItem : (id) => {
            dispatch(actions.deleteTask(id))
        },
        onCloseForm : () => {
			dispatch(actions.closeForm())
        },
        onOpenForm : () => {
			dispatch(actions.openForm())
		},
		onEditTask: (task) => {
            dispatch(actions.editTask(task))
        }
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskItem);
