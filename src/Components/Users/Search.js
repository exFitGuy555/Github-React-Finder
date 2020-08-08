import React, { useState, useContext } from "react";
import GithubContext from '../../Context/Github/githubContext'
import AlertContext from '../../Context/Alert/alertContext'

const Search = () => {
  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)
  const [text, setText] = useState("");

  //connecting the state to the onChange method || if want to make it work for all fileds email,lastname etc, use ev.target.name
  const onChange = (ev) => setText(ev.target.value);

  //connecting the state to the onSubmit method
  //also creating the condition for alert to get created
  //moving the setAlert as a props
  const onSubmit = (ev) => {
    ev.preventDefault();
    if (text === "") {
      alertContext.setAlert("Plese Enter Username", "danger");
    } else {
        githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />{" "}
        <input
          type="submit"
          value="Search"
          className="btb btn-dark btn-block"
          placeholder="Search Users..."
        />
      </form>{" "}

      {githubContext.users.length > 0 && (
        <button className="btn btn-dark btn-block" onClick={githubContext.clearUsers}>
          Clear{" "}
        </button>
      )}{" "}
    </div>
  );
};


export default Search;
