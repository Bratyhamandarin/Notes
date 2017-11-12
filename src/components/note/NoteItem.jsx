import React from 'react'
import styled from 'styled-components'

const NoteWrapper = styled.li`
    & textarea {
        max-width: 100%;
        min-width: 100%;
        min-height: 8rem;
        max-height: 8rem;
    }

    & span {
        display: inline-block;
        padding: 0 1rem 0 1rem;
        width: 7rem;
    }

    & .btn-warning {
        display: ${props => props.hiddenButton ? 'none' : 'inline-block'}
    }
    
    & .btn-danger {
        display: ${props => props.hiddenButton ? 'block' : 'none'}
    }
    & .btn-success {
        display: ${props => props.hiddenButton ? 'block' : 'none'}
    }
    
`
export const NoteItem = (props) => {
    return (
        <NoteWrapper hiddenButton={props.isDisabled}>
            <textarea onChange={(e) => props.handleChange(props.id, e.target.value)}
                disabled={props.isDisabled}
                value={props.noteText}></textarea>
            <span className='note_number'>№ {props.index + 1}</span>
            <button onClick={() => props.handleToggle(props.id)}
                    className='btn btn-warning'>
                    Удалить заметку
            </button>
            <div className='btn-group'>
                <button onClick={() => props.handleRemove(props.id)}
                    className='btn btn-danger'>
                    Удалить окончательно
                </button>
                <button onClick={() => props.handleToggle(props.id)}
                    className='btn btn-success'>
                    Восстановить заметку
                </button>
            </div>
        </NoteWrapper>
    )
}