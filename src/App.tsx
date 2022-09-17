import React from 'react';
import Function from './components/Function';
import FlatFunction from "./components/FlatFunction";
import ErrorFlat from './components/ErrorFlat';


function App() {
    return (
        <div className="App">
            {/*<Function/>*/}
            <FlatFunction />
            <ErrorFlat />
        </div>
    );
}

export default App;
