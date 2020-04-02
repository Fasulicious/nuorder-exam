import React from 'react';

const LabelBox = props => {
  const { label } = props

  const pStyle = (color) => ({
    fontSize: '18px',
    background: `#${color}`,
    border: '1px',
    borderRadius: '5px',
    padding: '10px 15px',
    marginLeft: '20px',
    marginRight: '20px'
  })

  let content = (
    <p style = {pStyle(label.color)}>
      {label.name}
    </p>
  )

  return content
}

export default LabelBox
