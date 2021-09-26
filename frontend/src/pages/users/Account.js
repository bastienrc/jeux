import { useState } from 'react'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import Profile from './Profile'
import Score from './Score'

const Tabs = styled.div`
  border-bottom: 1px solid #444;
  ul {
    text-decoration: none;
    color: blue;
  }
  li {
    background-color: aliceblue;
    padding: 5px;
    list-style: none;
    width: 100px;
  }
`

const TabsContents = styled.div`
`

function Account () {
  const [curentTab, setCurrentTab] = useState({ name: 'profile' })
  const [tabs] = useState([
    { tabKey: 'profile', tabTitle: 'Mon profile' },
    { tabKey: 'score', tabTitle: 'Mes scores' }
  ])

  const handleTabs = (name) => {
    setCurrentTab({ name })
  }
  return (
    <Layout pageTitle='Mon Compte'>
      <Tabs>
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
      </Tabs>
      <TabsContents>
        {curentTab.name === 'profile' && <Profile />}
        {curentTab.name === 'score' && <Score />}
      </TabsContents>
    </Layout>
  )
}

export default Account
