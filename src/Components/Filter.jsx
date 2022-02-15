import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const Filter = ({ filterContent }) => {
  return (
    <div className="mt-4 w-100 d-flex flex-column">
      <h4>Filter Movie</h4>
      <DropdownButton id="dropdown-item-button" title="Filter">
        <Dropdown.ItemText>Choose filter</Dropdown.ItemText>
        <Dropdown.Item onClick={() => filterContent("title")} as="button">
          Title
        </Dropdown.Item>
        <Dropdown.Item onClick={() => filterContent("rate")} as="button">
          Rate
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default Filter;
