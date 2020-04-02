import React, { useState } from 'react';
import './IssueForm.css';

const Form = props => {
  const { titles, filter } = props;
  
  const [inputValue, setInput ] = useState('');
  const [datalist, setDatalist] = useState([]);

  const onSubmit = e => {
    e.preventDefault();
  }

  const onChange = e => {
    setInput(e.target.value);
    const filteredTitles = titles.filter(title => title.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setDatalist(filteredTitles);
    filter(filteredTitles.map(title => title.name));
  }

  const onKeyUp = () => 'ac(this.value)';

  let content = (
    <div>
      <h1 className = 'formTitle'>NuOrder Exam</h1>
      <br/>
      <form onSubmit = {onSubmit} className = 'form'>
        <input
          className = 'formText'
          type = 'text'
          placeholder = 'Ingrese una referencia ...'
          onChange = {onChange}
          value = {inputValue}
          list = 'datalist'
          onKeyUp = {onKeyUp} />
        <datalist id = 'datalist'>
          {datalist.map(item => <option key = {item.id} value = {item.name} ></option>)}
        </datalist>
        <input
          className = 'formButton'
          type = 'submit'
          value = 'Buscar' />
      </form>
    </div>
  )
  return content;
}

export default Form;
