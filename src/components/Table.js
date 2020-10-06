import React from 'react';
import { css } from 'glamor';

export const Table = ({ tableData, onClick, chosenGraph }) => {
  const style = {
    maxWidth: '500px',

    ' .asterisk-text': {
      marginTop: '5px',
      textAlign: 'left'
    }
  };

  const tableRow = (id, index) => ({
    color: id === index ? '#82829e' : 'inherit'
  });

  const dataName = color => ({
    ':before': {
      content: '""',
      display: 'inline-block',
      width: '10px',
      height: '10px',
      backgroundColor: color,
      marginRight: '5px',
      borderRadius: '10px'
    }
  });

  return (
    <div {...css(style)}>
      <table>
        <tbody>
          <tr>
            <th>
              <p>Name</p>
            </th>
            <th>
              <p>Value</p>
            </th>
          </tr>
          {tableData &&
            Object.entries(tableData).map(([name, data], index) => (
              <tr
                {...css(tableRow(chosenGraph, index))}
                key={index}
                onClick={() => onClick(index)}
              >
                <td>
                  <p {...css(dataName(data.color))}>{name}</p>
                </td>
                <td>
                  <p>{data.values[data.values.length - 1]}</p>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <p className="asterisk-text text-sm">*The table is clickable</p>
    </div>
  );
};

export default Table;
