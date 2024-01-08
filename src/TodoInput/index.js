import { useState } from 'react';
import styled from 'styled-components';

const TodoInput = (props) => {
  const [content, setContent] = useState('');

  const changeContent = (event) => {
    setContent(event.target.value);
  };

  const onSubmit = () => {
    props.onAdd(content);

    setContent('');
  };

  return (
    <TodoInputWrapper>
      <TodoInputElement
        placeholder='할 일을 입력하세요.'
        value={content}
        onChange={changeContent}
      />

      <button
        className='todo-submit'
        onClick={onSubmit}
      >
        확인
      </button>
    </TodoInputWrapper>
  );
};

const TodoInputWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const TodoInputElement = styled.input`
  flex: 1;
  outline: none;
  border: 1px solid #dedede;
  border-radius: 5px;
  padding: 8px 12px;
`;

export default TodoInput;
