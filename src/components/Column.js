import React, { Component, Fragment } from 'react';
import styled from '@emotion/styled';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import { Card } from './Card';

const Wrapper = styled.div`
    width: 300px;
    background-color: #eee;
    padding: 15px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    font-weight: bold;
    margin: 0;
    font-size: 20px;
    padding-bottom: 15px;
`;

const StyledButton = styled.button`
    color:  #a6a6a6;
    background-color: #eee;
    height: 30px;
    font-size: 14px;
    text-align: center;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: #bebebe;
        color: #848484;
    }
`;

const StyledTextArea = styled.textarea`
    padding: 10px;
    height: 50px;
    border: none;
    resize: none;
    font-size: 14px;
    border-radius: 4px;
    margin-bottom: 15px;
     &:focus {
        outline: none;
    }
`;

const StyledSaveButton = styled.button`
    line-height: 20px;
    border-radius: 4px;
    font-weight: 400;
    font-size: 14px;
    height: 32px;
    color: white;
    border: none;
    background-color: #5aac44;
    cursor: pointer;
    &:hover {
        background-color: #61bd4f
    }
`;

const StyledDelete = styled.a`
    color: #6b778c;
    border: none;
    font-size: 24px;
    line-height: 32px;
    background: none;
    padding-left: 10px;
    height: 32px;
    width: 32px;
    cursor: pointer;
    &:hover {
        color: #172b4d;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
`;

export class Column extends Component {
    state = {
        tasks: [],
        showTextArea: false
    };

    ref = React.createRef();

    onKeyDown = event => {
        if(event.keyCode !== 13) return;
        this.setState({ tasks: [...this.state.tasks, event.target.value], showTextArea: false });
    };

    onSaveClicked = () => {
        this.setState({ tasks: [...this.state.tasks, this.ref.current.value], showTextArea: false });
    };

    onCancelClicked = () => {
        this.setState({ showTextArea: false });
    };

    onDeleteClick = index => {
      const { tasks } = this.state;
      tasks.splice(index, 1);
      this.setState({ tasks });
    };

    render() {
        const { showTextArea, tasks } = this.state;
        return (
            <Wrapper>
                <Title>Todo</Title>
                {
                    tasks.map((task, index) =>
                        <Card
                            key={`${task.replace(/\W/, '-').substring(0, 10)}-${index}`}
                            task={task}
                            index={index}
                            onDeleteClick={this.onDeleteClick}
                        />
                    )
                }
                {
                    showTextArea ? (
                        <Fragment>
                            <StyledTextArea
                                ref={this.ref}
                                autoFocus
                                placeholder="Enter a task"
                                onKeyDown={this.onKeyDown}
                            />
                            <ButtonGroup>
                                <StyledSaveButton onClick={this.onSaveClicked}>Add Task</StyledSaveButton>
                                <StyledDelete onClick={this.onCancelClicked}><CrossIcon /></StyledDelete>
                            </ButtonGroup>
                        </Fragment>
                    ) : (
                        <StyledButton onClick={() => this.setState({ showTextArea: true })}>+ add card</StyledButton>
                    )
                }
            </Wrapper>
        );
    }
}
