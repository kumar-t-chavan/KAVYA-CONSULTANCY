import React from 'react'
import IT from '../assets/IT.png'
import '../index.css'
const Mainsection = () => {
  return (
    <div>
      <div>
        <main>
            <div className='mainsection'>
        <div className='box'>
            <img src={IT} alt="" height={50} width={50}/>
            <h1>DATA INDEXER</h1>
            <p>Organizes, verifies, and indexes medical or business data accurately into digital system.</p>
        </div>
           <div className='box'>
            <img src={IT} alt="" height={50} width={50}/>
            <h1>DATA ENTRY OPERATOR</h1>
            <p>Enters and updates information in databases with high accuracy.</p>
        </div>
           <div className='box'>
            <img src={IT} alt="" height={50} width={50}/>
            <h1>MEDICAL CODER</h1>
            <p>Converts medical records into standardized diagnosis and procedure codes.</p>
        </div>
           <div className='box'>
            <img src={IT} alt="" height={50} width={50}/>
            <h1>QUALITY ANALYST (QA)</h1>
            <p>Review data and processes to ensure accuracy and maintain quality standards</p>
        </div>
            </div>
        </main>
      </div>
    </div>
  )
}

export default Mainsection
