import React from 'react';

import IssueBox from './IssueBox'

const Issues = props => {
  const { issues } = props;

  const issuesStyle = () => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingRight: '20px',
    paddingLeft: '20px',
  });

  let content = (
    <div style = {issuesStyle()}>
      {issues.map(issue => <IssueBox issue = {issue} key = {issue.id}/>)}
    </div>
  );
  return content;
}

export default Issues
