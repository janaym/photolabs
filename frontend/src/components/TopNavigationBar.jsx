import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ GlobalContext, topics }) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={GlobalContext.state.topicData} />
      <FavBadge GlobalContext={GlobalContext} />
    </div>
  )
}

export default TopNavigation;