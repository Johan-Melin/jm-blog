"use client";

import React from 'react'

function index() {
  const rows = Array.from({ length: 9 });
  const cols = Array.from({ length: 9 });

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(9, 1fr)',
      width: '400px',
      height: '400px',
    }}>
  {rows.map((_, rowIndex) =>
    cols.map((_, colIndex) =>
      <div className='cell' key={`${rowIndex}-${colIndex}`} style={{
        backgroundColor: rowIndex === 8 || colIndex === 0 
        ? 'transparent'
        : (rowIndex + colIndex) % 2 === 0 ? 'white' : 'black',
        width: '100%',
        height: '100%',
        color: 'white',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
      }} 
      >
        {rowIndex === 8 && colIndex !== 0 && <div>{String.fromCharCode(64 + colIndex)}</div>}
        {colIndex === 0 && rowIndex !== 8 && <div>{8 - rowIndex}</div>}
      </div>
    )
  )}
</div>
  )
}

export default index