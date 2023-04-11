import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [urlLegal, setUrlLegality] = useState(false);
  const [message, setMessage] = useState('');

  function handleChange(value: string) {
    const regEx = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    if (value.match(regEx)) {
      setUrlLegality(true);
      setMessage(value);
    }
    else {
      setUrlLegality(false);
      setMessage('');
    }
  }

  function handleClick(){
    console.log('res is: '+ message);
  }
  
  return (
    <div>
      <input
        type="text"
        className="form-control"
        id="basic-url"
        aria-describedby="basic-addon3 basic-addon4"
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
      {urlLegal && <Button onClick={handleClick}>SHORTEN</Button> }
    </div>
  );
}

export default App;