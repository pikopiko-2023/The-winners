import {useState, useRef} from 'react'
import {WinData} from '../../models/wins.ts'


function WinForm() {

  const initialFormData = {
    name: '',
    title: '',
    win: '',
    type: '',
    date: ''
  }

  const [form, setFormData] = useState<WinData>(initialFormData)
  const dateInputRef = useRef(null);
  
  
    function handleChange(e) {
    const {name, value } = e.target
    const updatedForm = {...form, [name]: value}
    setFormData(updatedForm)
    console.log(updatedForm)
    
    }

    return (
      <div className='add-win-form win-box'>
        <h1>Add your win</h1>
        <form aria-label='add-win-form'>
          <label htmlFor='title'>Title:</label>
          <input type="text" onChange={handleChange} value={form.title} name='title' id='title'/><br/>
          <label htmlFor='win'>Win:</label>
          <input type='text' onChange={handleChange} value={form.win} name='win' id='win' /> <br/>
          <label htmlFor="type">Type of win:</label>
          <select id="type" onChange={handleChange} name='type' value={form.type}>
            <option value="Dev">Dev</option>
            <option value="Human Skills">Human Skills</option>
            <option value="Life">Life</option>
          </select>
          <label htmlFor="who">Who:</label>
          <select id="who" onChange={handleChange} name='who' value={form.who}>
            <option value='Rich'>Rich</option>
            <option value='Jayde'>Jayde</option>
            <option value='Mark'>Mark</option>
            <option value='Hope'>Hope</option>
            <option value='Sang'>Sang</option>
            <option value='Suwon'>Suwon</option>  
            <option value='Opelo'>Opelo</option>
            <option value='Sade'>Sade</option>
            <option value='Ben'>Ben</option>
            <option value='Laura'>Laura</option>
            <option value='John'>John</option>
            <option value='Shrena'>Shrena</option>
          </select>
          <label htmlFor='date'>When:</label>
          <input
          id="date" 
          name="date"
          type="date"
          onChange={handleChange}
          ref={dateInputRef}
        />
        <p>Selected Date: {form.date}</p>
        </form>
      </div>
    );
  };
  
export default WinForm  
