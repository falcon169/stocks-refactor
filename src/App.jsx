import './App.css';
import React, { useState } from 'react';


function App() {
  return (
    <div
    >
      <h1 className="text-center my-4">Stock Portfolio</h1>
      <table className="table table-responsive">
        <thead>
          <tr>
            <th scope="col"> Name </th>
            <th scope="col"> Shares Owned </th>
            <th scope="col"> Cost per share($) </th>
            <th scope="col"> Market Price($) </th>
            <th scope="col"> Market Value($) </th>
            <th scope="col"> Unrealized Gain / Loss($) </th>
            <th scope="col"> </th>
          </tr>
          <label1>
            Stocks input: <input name="myInput" />
          </label1>
                  
          <button className="btn btn-primary btn-sm">add</button>
        </thead>

      </table>
      <label>
        Text input: <input name="myInput" defaultValue="Some initial value" />
      </label>
      <hr />
      <label>
        Checkbox: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
      </label>
      <hr />
      <p>
        Radio buttons:
        <label>
          <input type="radio" name="myRadio" value="option1" />
          Option 1
        </label>
        <label>
          <input
            type="radio"
            name="myRadio"
            value="option2"
            defaultChecked={true} 
          />
          Option 2
        </label>
        <label>
          <input type="radio" name="myRadio" value="option3" />
          Option 3
        </label>
        </p>
      <footer className="text-center mt-4">
        <p>
          Check out my{" "}
          <a
            href="https://github.com/yosephdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://yoseph.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio Website
          </a>
        </p>
      </footer>
    </div >
  );
}

export default App;
