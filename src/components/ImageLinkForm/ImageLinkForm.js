import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
     <p> This magic App will detect the faces on your picture! Give it a try!
     </p>
     <div className='form center'>
      <div className='center pa4 br3 shadow-5'>
        <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}></input>
        <button className='w-30 f4 grow link ph3 pv2 dib white bg-light-purple' onClick = {onButtonSubmit}>Submit</button>
      </div>
     </div>
    </div>
  )
}

export default ImageLinkForm;