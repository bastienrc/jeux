import React from 'react'

const Profile = (props) => {
  return (
    <div className='tab-content'>
      <div className=''>
        <div className='card border-info mb-3'>
          <div className='card-header'>Informations</div>
          <div className='card-body'>
            <h4 className='card-title'>
              Hello <span>BenOpen</span>
            </h4>
            <p className='card-text'>date de création : ....</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
