import React from "react";
import "./Table.css";

export default function Table(props) {
  const deleteItem = (value) => {
    document.getElementById(value).remove();
  };
  const renderTableData = props.users.map((users, index) => {
    const { firstName, lastName, email, phone } = users;
    return (
      <tr id={"table" + index + 1} key={index}>
        <td>{firstName + " " + lastName}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <button type="delete" onClick={() => deleteItem("table" + index + 1)}>
          Delete Record
        </button>
      </tr>
    );
  });
  return (
    <div>
      <table id="students">
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Delete</td>
          </tr>
        </tbody>
        <tbody>{renderTableData}</tbody>
      </table>
    </div>
  );
}
