import React from 'react'

function index() {
  const rows = Array.from({ length: 8 });
  const cols = Array.from({ length: 8 });

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(8, 1fr)',
      width: '400px',
      height: '400px',
    }}>
  {rows.map((_, rowIndex) =>
    cols.map((_, colIndex) =>
      <div key={`${rowIndex}-${colIndex}`} style={{
        backgroundColor: (rowIndex + colIndex) % 2 === 0 ? 'white' : 'black',
        width: '100%',
        height: '100%',
      }} 
      >
        {rowIndex === 7 && <div style={{ color: 'white', textAlign: 'center' }}>{String.fromCharCode(65 + colIndex)}</div>}
        {colIndex === 0 && <div style={{ color: 'white', textAlign: 'center' }}>{8 - rowIndex}</div>}
      </div>
    )
  )}
</div>
  )
}

export default index