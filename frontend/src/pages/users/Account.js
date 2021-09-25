import React, { useState } from 'react'
import Layout from '../../components/Layout'

import Profile from './Profile'

const Account = (props) => {
  const [curentTab, setCurrentTab] = useState({ name: 'profile' })
  const [tabs] = useState([
    { tabKey: 'profile', tabTitle: 'Mon profile' }
  ])
  const handleTabs = (name) => {
    setCurrentTab({ name })
  }
  return (
    <Layout pageTitle='Account'>
      <div className='tabs'>
        <ul>
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`tabs-pane ${
                curentTab.name === tab.tabKey ? 'active' : ''
              }`}
            >
              <span onClick={() => handleTabs(tab.tabKey)}>{tab.tabTitle}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='tabs-contents'>
        {curentTab.name === 'profile' && <Profile />}
      </div>
    </Layout>
  )
}

export default Account
