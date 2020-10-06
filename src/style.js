const globalStyle = {
  padding: '10px',

  '@media(min-width: 480px)': {
    padding: '20px'
  },

  ' h1': {
    fontSize: '23px',
    margin: '10px 0',

    '@media(min-width: 480px)': {
      fontSize: '1.5em'
    }
  },

  ' p': {
    fontSize: '12px',
    margin: 0,

    '@media(min-width: 480px)': {
      fontSize: '14px'
    }
  },

  ' .text-sm': {
    fontSize: '11px'
  },

  ' table': {
    border: '1px solid #c0c0de',
    borderSpacing: 0,

    ' td, th': {
      borderBottom: '1px solid #c0c0de',
      ' p': {
        padding: '10px 10px',
        margin: 0
      },
      ':first-of-type': {
        borderRight: '1px solid #c0c0de'
      }
    },
    ' tr': {
      ':hover': {
        cursor: 'pointer',
        color: '#82829e',

        ' th': {
          cursor: 'initial',
          color: 'black'
        }
      },

      ':first-of-type': {
        ' p': {
          textAlign: 'left'
        },
        ' th p': {
          textAlign: 'center'
        }
      },
      ' td:last-of-type': {
        ' p': {
          textAlign: 'right'
        }
      }
    },
    ' tr:nth-of-type(even)': {
      backgroundColor: '#f8f8fb'
    },
    ' tr:last-of-type': {
      ' td': {
        borderBottom: 'none'
      }
    }
  }
};

export default globalStyle;
