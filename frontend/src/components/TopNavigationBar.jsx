import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ GlobalContext }) => {
  //unpack data to be passed to topic list
  const topicData = GlobalContext.state.topicData;
  const setSelectedTopic = GlobalContext.setSelectedTopic;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topicData} setSelectedTopic={setSelectedTopic} />
      <FavBadge GlobalContext={GlobalContext} />
    </div>
  );
};

export default TopNavigation;