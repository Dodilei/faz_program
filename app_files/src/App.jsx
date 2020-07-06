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
                data: 'A very big cell 1',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 2',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 3',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 4',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 5',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 6',
                styleClasses: ['default']
            },
            {
                data: '.',
                styleClasses: ['default']
            }
        ]
    },
    {
        title: 'Row',
        description: 'A row',
        open: false,
        styleClasses: ['default'],
        cellData: [
            {
                data: 'A very big cell 1',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 2',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 3',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 4',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 5',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 6',
                styleClasses: ['default']
            },
            {
                data: '.',
                styleClasses: ['default']
            }
        ]
    },
    {
        title: 'Row',
        description: 'A row',
        open: false,
        styleClasses: ['default'],
        cellData: [
            {
                data: 'A very big cell 1',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 2',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 3',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 4',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 5',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 6',
                styleClasses: ['default']
            },
            {
                data: '.',
                styleClasses: ['default']
            }
        ]
    },
    {
        title: 'Row',
        description: 'A row',
        open: false,
        styleClasses: ['default'],
        cellData: [
            {
                data: 'A very big cell 1',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 2',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 3',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 4',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 5',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 6',
                styleClasses: ['default']
            },
            {
                data: '.',
                styleClasses: ['default']
            }
        ]
    },
    {
        title: 'Row',
        description: 'A row',
        open: false,
        styleClasses: ['default'],
        cellData: [
            {
                data: 'A very big cell 1',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 2',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 3',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 4',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 5',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 6',
                styleClasses: ['default']
            },
            {
                data: '.',
                styleClasses: ['default']
            }
        ]
    },
    {
        title: 'Row',
        description: 'A row',
        open: false,
        styleClasses: ['default'],
        cellData: [
            {
                data: 'A very big cell 1',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 2',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 3',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 4',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 5',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 6',
                styleClasses: ['default']
            },
            {
                data: '.',
                styleClasses: ['default']
            }
        ]
    },
    {
        title: 'Row',
        description: 'A row',
        open: false,
        styleClasses: ['default'],
        cellData: [
            {
                data: 'A very big cell 1',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 2',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 3',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 4',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 5',
                styleClasses: ['default']
            },
            {
                data: 'A very big cell 6',
                styleClasses: ['default']
            },
            {
                data: '.',
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
