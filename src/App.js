// import React from 'react'
// import DrawerMenu from "./components/Drawer"
// import { BrowserRouter } from 'react-router-dom';
// import ScrollToTop from "./components/ScrollToTop";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Home from './pages/Home';

// const App = () => {
//   return (
//     <>
//       <ScrollToTop>
//         <Routes>

//             {/* <Route path='/' element={<Home />} /> */}

//             <Route path='/' element={<Home />} />

//         </Routes>
//       </ScrollToTop>
//     </>
//   )
// }

// export default App

// import React, { useState } from 'react';

// function Triangle({ v1, v2, v3 }) {
//   console.log(v1, v2, v3, "anas")
//   return (
//     <svg width="200" height="200" viewBox="0 0 200 200">
//       <polygon points={`${v1[0]},${v1[1]} ${v2[0]},${v2[1]} ${v3[0]},${v3[1]}`} fill="blue" />
//     </svg>
//   );
// }

// function App() {
//   const initialState = {
//     v1: [0, 0],
//     v2: [0, 0],
//     v3: [0, 0],
//   };
//   const [input, setInput] = useState(initialState)

//   const handleSubmit = event => {
//     console.log(input)
//     event.preventDefault();
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type='text' value={input.v1} onChange={(e) => setInput((old) => ({
//           ...old,
//           v1: [e.target.value]
//         }))} />
//         <input type='text' value={input.v2} onChange={(e) => setInput((old) => ({
//           ...old,
//           v2: [e.target.value]
//         }))} />
//         <input type='text' value={input.v3} onChange={(e) => setInput((old) => ({
//           ...old,
//           v3: [e.target.value]
//         }))} />
//         <button type='submit'>Make Shape</button>
//       </form>


//       <Triangle v1={input.v1} v2={input.v2} v3={input.v3} />
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import "./App.css";

const useGenerateRandomColor = () => {
  const [color, setColor] = useState("")
  const generateColor = () => {
    setColor(Math.random().toString(16).substr(-6));
  };
  return { color, generateColor };

};

function Triangle({ v1, v2, v3, color }) {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200">
      <polygon points={`${v1[0]},${v1[1]} ${v2[0]},${v2[1]} ${v3[0]},${v3[1]}`} fill={"#69f0ae"} />
    </svg>
  );
};

function App() {

  const { color, generateColor }
    = useGenerateRandomColor();
  const initialState = {
    v1: [10, 10],
    v2: [190, 10],
    v3: [100, 190],
  };
  const [input, setInput] = useState(initialState);

  const handleChange = (e, vector, index) => {
    generateColor()
    const updatedVector = [...input[vector]];
    updatedVector[index] = parseFloat(e.target.value) || 0;
    setInput(prevState => ({ ...prevState, [vector]: updatedVector }));
  }


  return (

    <div className='container colorinp' style={{ backgroundColor: "black", color: "white" }}>
      <div className='row ' style={{ color: "white" }}>
        <div className='col-12 mt-20' >
          <h1>Give three input of X and Y vector</h1>
        </div>
      </div>
      <div className='row' style={{ backcolor: "white" }}>
        <div className='col-md-3 box-control'>
          <TextField
            sx={{
              "& .MuiInputBase-root": {
                color: 'success.main'
              }
            }}
            onChange={(e) => handleChange(e, 'v1', 0)}
            required
            id="outlined-required"
            label="X-Coordinate"
            defaultValue={input.v1[0]}
          />
          <TextField
          sx={{
            "& .MuiInputBase-root": {
              color: 'success.main'
            }
          }}
            onChange={(e) => handleChange(e, 'v1', 1)}
            required
            id="outlined-required"
            label="Y-Coordinate"
            defaultValue={input.v1[1]}
          />
        </div>
        <div className='col-md-3 box-control'>
          <TextField
          sx={{
            "& .MuiInputBase-root": {
              color: 'success.main'
            }
          }}
            onChange={(e) => handleChange(e, 'v2', 0)}
            required
            id="outlined-required"
            label="X-Coordinate"
            defaultValue={input.v2[0]}
          />
          <TextField
          sx={{
            "& .MuiInputBase-root": {
              color: 'success.main'
            }
          }}
            onChange={(e) => handleChange(e, 'v2', 1)}
            required
            id="outlined-required"
            label="Y-Coordinate"
            defaultValue={input.v2[1]}
          />
        </div>
        <div className='col-md-3 box-control'>
          <TextField
          sx={{
            "& .MuiInputBase-root": {
              color: 'success.main'
            }
          }}
            onChange={(e) => handleChange(e, 'v3', 0)}
            required
            id="outlined-required"
            label="X-Coordinate"
            defaultValue={input.v3[0]}
          />
          <TextField
          sx={{
            "& .MuiInputBase-root": {
              color: 'success.main'
            }
          }}
            onChange={(e) => handleChange(e, 'v3', 1)}
            required
            id="outlined-required"
            label="Y-Coordinate"
            defaultValue={input.v3[1]}
          />
        </div>
        <div className='col-md-3 shape-align'>
          <span className='text-center'><label>Shape</label></span><br />
          <Triangle v1={input.v1} v2={input.v2} v3={input.v3} color={color} />
        </div>
      </div>
    </div>
  );
}

export default App;


