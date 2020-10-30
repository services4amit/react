import React from "react";

const List = (props) => {
  return (
    <ul>
      {props.list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const ListItem = ({ item }) => {
    return <li>{item.name}</li>;
  };

export default List;
