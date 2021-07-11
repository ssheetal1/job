import React from 'react';

const ApprovalCard = (props) => {
  console.log("AC:",props);
  return(
    <div className="ui card">
      <div>
        {props.children}
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Accept</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
