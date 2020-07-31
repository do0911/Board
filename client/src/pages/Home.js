import React from "react";
import { Jumbotron } from "reactstrap";

const Home = () => {
  return (
    <Jumbotron>
      <h1 className="display-3">Board</h1>

      <hr className="my-2" />
      <p className="lead">간단한 게시판입니다.</p>
    </Jumbotron>
  );
};

export default Home;
