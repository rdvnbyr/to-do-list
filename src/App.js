import Navigation from "./components/navigation/Navigation";
import UICard from "./components/card/UICard";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { isUndefined, isNull, isEmpty } from "lodash";

function App() {
  const [errorText, setErrorText] = useState();
  const { error } = useSelector((state) => ({
    error: state.app.error,
  }));
  useEffect(() => {
    if (!isEmpty(error)) {
      setErrorText("Some Error Occured.");
    }
  }, [error]);

  return (
    <>
      <Navigation />
      {errorText && <h1>{errorText}</h1>}
      <div className="wrapper">
        <UICard title="To Do List"></UICard>
      </div>
    </>
  );
}

export default App;
