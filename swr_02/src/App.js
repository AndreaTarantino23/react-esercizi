import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<GithubUser username="andreatarantino" />} />;
      </Routes>
    );
  }
}