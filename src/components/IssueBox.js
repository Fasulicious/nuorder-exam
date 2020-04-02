import React, { useState } from 'react';
//import useHotkeys from '@reecelucas/react-use-hotkeys';

import LabelBox from './LabelBox'

import './IssueBox.css'

const IssueBox = props => {
  const { issue } = props;

  const [selected, select] = useState(issue.selected);

  const onClick = () => {
    select(!selected);
  }

  let content = (
    <div className = {selected ? 'issue selected' : 'issue'} onClick = {onClick} >
      
      <h1 className = 'title'>{issue.title}</h1>
      <h2 className = 'subtitle'> LABELS: </h2>
      {issue.labels.map(label => <LabelBox label = {label} key = {label.id} />)}
    </div>
  );
  return content;
}

export default IssueBox