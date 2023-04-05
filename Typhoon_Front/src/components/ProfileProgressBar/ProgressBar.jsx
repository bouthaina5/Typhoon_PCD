import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import './progressBarStyle.css';

const ProgressBarProfile = (props) => {
  return (
    <div className="progressBarContainer">
        <label className="nom-module">{props.nomModule}</label>
      <ProgressBar
        completed={props.progres}
        bgColor={props.color}
        animateOnRender={true}
        className="wrapper"
        labelClassName="label"
        height="8px"
        width="100%"
      />
    </div>
  );
};

export default ProgressBarProfile;
