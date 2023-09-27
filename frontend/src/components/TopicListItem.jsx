import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, setSelectedTopic }) => {
  return (
    <div className="topic-list__item" onClick={(event) => setSelectedTopic(event, topic.id)}>
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
