import { useState } from 'react'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  // const changeValue = () => {
  //   setCount(
  //     (count) => count + 1
  //   )
  // }

  const [Value, setValue] = useState(0);



  return (
    <>
      <div className="card">
        {/* <button onClick={changeValue}>
          count is {count} 
        </button>

Hii There */}

        <ButtonChange Value={Value} setValue={setValue} ></ButtonChange>


      </div>
    </>
  )
}


function ButtonChange(props) {

  function ChangeHandler() {
    props.setValue(props.Value + 1);

  }


  return (
    <div>

      <button onClick={ChangeHandler} >Count {props.Value}</button>

    </div>
  );


}

export default App
