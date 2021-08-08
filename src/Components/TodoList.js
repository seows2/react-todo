import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="프로젝트 생성하기" done={true} />
      <TodoItem text="서우석 생성하기" done={true} />
      <TodoItem text="티맥스 생성하기" done={false} />
      <TodoItem text="미들웨어 생성하기" done={false} />
    </TodoListBlock>
  );
}

export default TodoList;
