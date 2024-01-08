import styled from 'styled-components';

const TodoItem = (props) => {
  const onToggle = () => {
    props.onToggle(props.id);
  };

  const onDelete = () => {
    props.onDelete(props.id);
  };

  return (
    <TodoItemWrapper>
      <div>
        <TodoItemLabel
          completed={props.completed}
          onChange={onToggle}
        >
          <input
            type='checkbox'
            checked={props.completed}
          />
          <span>{props.content}</span>
        </TodoItemLabel>
      </div>

      <div>
        <TodoDeleteButton onClick={onDelete}>삭제하기</TodoDeleteButton>
      </div>
    </TodoItemWrapper>
  );
};

const TodoItemWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;

const TodoDeleteButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  font-size: 14px;
  color: white;
  background-color: red;
  cursor: pointer;
`;

const TodoItemLabel = styled.label`
  display: flex;
  gap: 5px;
  align-items: center;
  text-decoration: ${(props) => (props.completed ? 'line-through' : '')};
`;

export default TodoItem;
