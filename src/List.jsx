import React from 'react';
import CardItem from './Card'
import ActionButton from './ActionButton';
import { Droppable } from 'react-beautiful-dnd';
import Modal from 'react-responsive-modal';

const List = ({ list_Id, title, cards, addCard, open, toggleModal }) => {
    const card = cards.map((card, index) => {
        return (
        <div onClick={toggleModal}>
            <CardItem id={card.id} index={index} key={card.id} content={card.content} />
        </div>
        )
    })
    return (
        <Droppable  droppableId={String(list_Id)}>
            {provided => (
                <div {...provided.droppableProps} ref={provided.innerRef} style={styles.cardContainer}>
                    <Modal open={open} onClose={() => toggleModal()}>
                        <div className="row p-1 m-2">
                            <div className="col">
                                <h3>Edit Card</h3>
                                <div className="form-group">
                                    <label htmlFor="description">Content</label>
                                    <textarea rows={5} className="form-control" id="description" />
                                </div>
                            </div>
                        </div>
                    </Modal>
                    <div className="col">
                        <h4 className="mb-3">{title}</h4>
                        {card}
                        {provided.placeholder}
                        <ActionButton listId={list_Id} addCard={addCard} cards={cards} />
                    </div>
                </div>
            )}
        </Droppable>
    );

}

const styles = {
    cardContainer: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        minHeight: 'px',
        width: '18%',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    }
}

export default List;