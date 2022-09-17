import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10").then((res) =>
      console.log(res)
    );
  }, []);

  return <div className="App">Quiz</div>;
};

export default App;
