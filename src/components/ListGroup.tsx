import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Fransico", "Delhi", "Tokyo", "Paris"];

  //event handler
  const handleClick = (event: MouseEvent) => console.log(event);



  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item,index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(event) => {
              console.log(item, index, event);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
