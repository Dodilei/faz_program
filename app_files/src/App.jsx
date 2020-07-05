import React from 'react';
import STable from './components/Table'

const testObject = [
    {
        title: 'Row',
        description: 'A row',
        open: false,
        styleClasses: ['default'],
        cellData: [
            {
                data: 'A cell',
                seq: 0,
                styleClasses: ['default']
            }
        ]
    }
]

function App() {
  return (
    <STable id='table' rowData={testObject}/>
  );
}

export default App;
