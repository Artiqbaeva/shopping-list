import React from "react";
import { useParams } from "react-router-dom";

const GroupDetails = () => {
  const { groupId } = useParams();
  return <div>Details of group: {groupId}</div>;
};

export default GroupDetails;
