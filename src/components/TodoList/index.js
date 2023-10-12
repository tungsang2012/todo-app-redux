import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import todoListSlice from '../TodoList/todoListSlice';
import { todosRemainingSelector } from '../../redux/selector';

export default function TodoList() {

  const [todoName, setTodoName] = useState('');
  const [todoPriority, setTodoPriority] = useState('Medium');
  const dispatch = useDispatch();
  const todoList = useSelector(todosRemainingSelector);

  const handleInputChange = (e) => {
    setTodoName(pre => e.target.value);
  }

  const handleSelectChange = (e) => {
    setTodoPriority(pre => e);
  }

  const onAddTodo = () => {
    var todo = {
      id: uuidv4(),
      name: todoName,
      priority: todoPriority,
      completed: false
    };

    dispatch(todoListSlice.actions.addTodo(todo));
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {
          todoList.map(todo => {
            return <Todo name={todo.name} priority={todo.priority} id={todo.id} key={todo.id} completed={todo.completed} />
          })
        }
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select defaultValue="Medium" onChange={handleSelectChange} value={todoPriority}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={(onAddTodo)}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
