import React from "react";

export default function Hook() {
  const [user, setUser] = React.useState("");
  const [pass, setPass] = React.useState("");
  let handleEvent = (e) => {
    console.log(user);
    console.log(pass);
    e.preventDefault();
    alert("Form submitte Successfully");
  };
  return (
    <div>
      <form onSubmit={handleEvent}>
        <label>Enter your username</label>
        <input
          type="text"
          placeholder="Enter your username"
          onChange={(e) => {
            console.log(user)
            setUser(e.target.value);
          }}
        ></input>
        <br></br>

        <label>Enter your password</label>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        ></input>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}
