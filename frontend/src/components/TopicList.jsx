import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, setSelectedTopic }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => <TopicListItem key={topic.slug} topic={topic} setSelectedTopic={setSelectedTopic} />)}
    </div>
  );
};

export default TopicList;
