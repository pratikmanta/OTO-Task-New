import React from 'react';
import onClickOutside from "react-onclickoutside";

class ActionButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            text: ""
        }
    }

    toggleForm = () => {
        this.setState({ open: !this.state.open })
    }

    handleClickOutside = evt => {
        this.setState({ open: false })
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value })
    }


    renderAddButton = () => {
        const { list, style } = this.props;

        const buttonText = list ? "Add new list" : "Add new card";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "black" : "inherit";
        const buttonBackGround = list ? "transparent" : "inherit";


        return (
            <div onClick={this.toggleForm} className="row rounded p-1 align-items-center ml-2" style={{
                color: buttonTextColor,
                opacity: buttonTextOpacity,
                backgroundColor: buttonBackGround,
                position: style,
                cursor: 'pointer',
            }}>
                <h2 className="ml-1">+</h2>
                <h5 className="mt-1 pl-2">{buttonText}</h5>
            </div>
        )
    }

    renderForm = () => {
        const { listId, list, addList, addCard } = this.props;

        const buttonTitle = list ? "Add List" : "Add Card"
        const placeholder = list ? "Enter list title..." : "Enter card content...";
        return (
            <div>
                <div className="card">
                    <textarea autoFocus onChange={this.handleChange} placeholder={placeholder} className="card-body form-control" />
                </div>
                <button
                    onClick={() => list ? addList(this.state.text, this.toggleForm) : addCard(this.state.text, listId, this.toggleForm)}
                    className="float-left mt-1 btn btn-success w-50">
                    {buttonTitle}
                </button>
            </div>
        )
    }

    render() {
        return this.state.open ? this.renderForm() : this.renderAddButton();
    }

}


export default onClickOutside(ActionButton);