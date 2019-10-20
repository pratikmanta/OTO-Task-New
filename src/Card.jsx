import React from 'react';
import { Draggable } from 'react-beautiful-dnd';


const CardItem = ({ id, content, index }) => {
    return (
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <div className="card mb-2" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <div className="card-body">
                        {content}
                    </div>
                </div>
            )}
        </Draggable>
    )
}



export default CardItem