import React from 'react';
import Table from './components/Table';
import {showOverflow} from './components/user_events/TableCellEvents';
import SelWrapper from './components/SelectionWrapper'

import argBinder from './util/argument_binder';

const child_process = require('child_process');
let FILE = child_process.execSync("node -e 'console.log(")

function App() {
  return (
    <Table
      id ='table'
      userEvents ={{
        row: {

        },
        cell: {
          onClick: argBinder(showOverflow, SelWrapper)
        }
      }}
      rowsData ={testObject}/>
  );
}

export default App;
