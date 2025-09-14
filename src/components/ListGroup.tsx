import { useState } from 'react';

const ListGroup = () => {
  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  const [myIndex, setMyIndex] = useState();

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => {
          return (
            <li
              key={item}
              className={`list-group-item ${myIndex === index && 'active'}`}
              onClick={() => {
                setMyIndex(index);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default ListGroup;
