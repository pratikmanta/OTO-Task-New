import React from 'react';
// import Modal from "react-responsive-modal";
import './App.css';
import List from './List'
import ActionButton from './ActionButton';
import { DragDropContext } from 'react-beautiful-dnd';

let listId = 2;
let cardId = 8

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      list: [
        {
          id: 0,
          title: 'To Do',
          cards: [
            { id: `card-id${3}`, content: 'Test Card' },
            { id: `card-id${4}`, content: 'Card II' },
          ]
        },
        {
          id: 1,
          title: 'Done',
          cards: [
            { id: `card-id${5}`, content: 'New Content' },
            { id: `card-id${6}`, content: ' New Text' },
            { id: `card-id${7}`, content: ' Text' },
          ]
        }
      ]
    };
  }


  toggleModal = () => {
    this.setState({ open: !this.state.open })
  };

  onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
  }

  addList = (listTitle, toggleForm) => {
    this.state.list.push({
      id: listId,
      title: listTitle,
      cards: []
    })
    listId += 1
    this.setState({ list: this.state.list }, toggleForm())
  }

  addCard = (data, id, toggleForm) => {
    this.state.list[id].cards.push({
      id: `card-id${cardId}`,
      content: data
    })
    cardId += 1
    this.setState({ list: this.state.list }, toggleForm())
  }


  render() {
    return (
      <div className="App">
        <h1 className="text-light bg-dark">React Trello</h1>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className="d-flex row m-3">
            {this.state.list.map(listItem => {
              return (
                <List
                  list_Id={listItem.id}
                  key={listItem.id}
                  title={listItem.title}
                  cards={listItem.cards}
                  addCard={this.addCard}
                  open={this.state.open}
                  toggleModal={this.toggleModal}
                />
              )
            })}
            <div className="col mt-2 pt-1">
              <div className="w-25 shadow border border-dark">
                <ActionButton list={this.state.list} addList={this.addList} />
              </div>
            </div>
          </div>
        </DragDropContext>
      </div>
    );
  }
}

export default App;
