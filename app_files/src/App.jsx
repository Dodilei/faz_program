import React from 'react';
import STable from './components/Table'

const testObject = [
    {
        title: 'Row',
        description: 'A row',
        open: false,
        styleClasses: ['default'],
        cellsData: [
            {
                inner_data: 'A very big cell 1',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 2',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 3',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 4',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 5',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 6',
                styleClasses: ['default']
            },
            {
                inner_data: '.',
                styleClasses: ['default']
            }
        ]
    },
    {
        title: 'Row',
        description: 'A row',
        open: false,
        styleClasses: ['default'],
        cellsData: [
            {
                inner_data: 'A very big cell 1',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 2',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 3',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 4',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 5',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 6',
                styleClasses: ['default']
            },
            {
                inner_data: '.',
                styleClasses: ['default']
            }
        ]
    },
    {
        title: 'Row',
        description: 'A row',
        open: false,
        styleClasses: ['default'],
        cellsData: [
            {
                inner_data: 'A very big cell 1',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 2',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 3',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 4',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 5',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 6',
                styleClasses: ['default']
            },
            {
                inner_data: '.',
                styleClasses: ['default']
            }
        ]
    },
    {
        title: 'Row',
        description: 'A row',
        open: false,
        styleClasses: ['default'],
        cellsData: [
            {
                inner_data: 'A very big cell 1',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 2',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 3',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 4',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 5',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 6',
                styleClasses: ['default']
            },
            {
                inner_data: '.',
                styleClasses: ['default']
            }
        ]
    },
    {
        title: 'Row',
        description: 'A row',
        open: false,
        styleClasses: ['default'],
        cellsData: [
            {
                inner_data: 'A very big cell 1',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 2',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 3',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 4',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 5',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 6',
                styleClasses: ['default']
            },
            {
                inner_data: '.',
                styleClasses: ['default']
            }
        ]
    },
    {
        title: 'Row',
        description: 'A row',
        open: false,
        styleClasses: ['default'],
        cellsData: [
            {
                inner_data: 'A very big cell 1',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 2',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 3',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 4',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 5',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 6',
                styleClasses: ['default']
            },
            {
                inner_data: '.',
                styleClasses: ['default']
            }
        ]
    },
    {
        title: 'Row',
        description: 'A row',
        open: false,
        styleClasses: ['default'],
        cellsData: [
            {
                inner_data: 'A very big cell 1',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 2',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 3',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 4',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 5',
                styleClasses: ['default']
            },
            {
                inner_data: 'A very big cell 6',
                styleClasses: ['default']
            },
            {
                inner_data: '.',
                styleClasses: ['default']
            }
        ]
    }
]

function App() {
  return (
    <STable id='table' rowsData={testObject}/>
  );
}

export default App;
