import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../config/supabaseClient';
import './CreateCrewmate.css';

const CreateCrewmate = () => {
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [color, setColor] = useState('');
  const [formError, setFormError] = useState(null);
  
  const navigate = useNavigate();
  
  const colorOptions = ['Red', 'Green', 'Blue', 'Purple', 'Yellow', 'Orange', 'Pink', 'Rainbow'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || !speed || !color) {
      setFormError('Please fill in all the fields.');
      return;
    }
    
    const { data, error } = await supabase
      .from('crewmates')
      .insert([{ name, speed, color, created_at: new Date() }])
      .select();
    
    if (error) {
      setFormError('Error creating crewmate. Please try again.');
      console.error(error);
    }
    
    if (data) {
      setFormError(null);
      navigate('/gallery');
    }
  };
  
  return (
    <div className="create-container">
      <h2>Create a New Crewmate</h2>
      
      <img 
        src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/03/among-us-crewmates.jpg" 
        alt="Crewmates" 
        className="create-crewmate-image" 
      />
      
      <form onSubmit={handleSubmit} className="create-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter crewmate name"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="speed">Speed (mph):</label>
          <input 
            type="number" 
            step="0.1"
            id="speed" 
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
            placeholder="Enter speed"
          />
        </div>
        
        <div className="form-group">
          <label>Color:</label>
          <div className="color-options">
            {colorOptions.map(option => (
              <div 
                key={option} 
                className={`color-option ${color === option ? 'selected' : ''}`}
                onClick={() => setColor(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
        
        {formError && <div className="error">{formError}</div>}
        
        <button className="create-button">Create Crewmate</button>
      </form>
    </div>
  );
};

export default CreateCrewmate;
