import React from 'react';
import ETable from './components/ETable';

const child_process = require('child_process');
let FILE = child_process.execSync("node -e 'console.log(")

function App() {
  return (
    <ETable file={FILE}></ETable>
  );
}

export default App;
