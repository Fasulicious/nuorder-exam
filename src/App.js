import React, { useState, useEffect } from 'react';

import Issues from './components/Issues';
import Form from './components/IssueForm';

const App = () => {

  const [isLoading, setLoading] = useState(true);
  const [issuesFromGithub, setIssuesFromGithub] = useState([]);
  const [issues, setIssues] = useState([]);
  const [titles, setTitles] = useState([]);

  const getGithubData = async (page = 1, per_page = 100) => {
    const response = await fetch(`https://api.github.com/repos/facebook/react/issues?page=${page}&per_page=${per_page}`);
    const issuesFromGithub = await response.json();
    setIssuesFromGithub(issuesFromGithub);
    const issues = issuesFromGithub.map(issue => ({
      id: issue.id,
      title: issue.title,
      selected: false,
      labels: issue.labels.map(label => ({
        id: label.id,
        name: label.name,
        color: label.color
      }))
    }));
    const titles = issues.map(issue => ({
      id: issue.id,
      name: issue.title
    }));
    setTitles(titles);
    setIssues(issues);
    setLoading(false);
  }
  
  const filter = (titles) => {
    let newIssues = [];
    issuesFromGithub.forEach(issue => {
      if (titles.includes(issue.title)) newIssues.push(issue)
    });
    newIssues = newIssues.map(issue => ({
      id: issue.id,
      title: issue.title,
      selected: false,
      labels: issue.labels.map(label => ({
        id: label.id,
        name: label.name,
        color: label.color
      }))
    }));
    setIssues(newIssues);
  }

  useEffect(() => {
    getGithubData()
  }, [])

  let content = (
    <React.Fragment>
      <Form titles = {titles} filter = {filter} />
      <p>Cargando issues ...</p>
    </React.Fragment>
  )

  if (!isLoading) {
    content = (
      <React.Fragment>
        <Form titles = {titles} filter = {filter} />
        <Issues issues = {issues} />
      </React.Fragment>
    );  
  }

  return content;
};

export default App;
