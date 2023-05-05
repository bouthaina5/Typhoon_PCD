import React, { useEffect } from "react";
import SkillBar from "react-skillbars";
import { useSelector, useDispatch } from "react-redux";
import { getSkills } from "../../../actions/skillAction";
import './skills.css';

const Skills = ({ reff }) => {
  const skills = useSelector((state) => state.skills);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSkills());
  }, [dispatch]);

  const colors = {
    bar: "#3498db",
    title: {
      text: "#fff",
      background: "#2980b9",
    },
  };

  return (
    <div ref={reff} className="pt-0 pb-5" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <h2 className="h1-responsive font-weight-bold text-center mb-4">
          Typhoon En Chiffre 
        </h2>

<p>Etudiants</p>
<div class="container">
  <div class="skills css">80%</div>
</div>

<p>Professeurs</p>
<div class="container">
  <div class="skills js">50%</div>
</div>

<p>Modules</p>
<div class="container">
  <div class="skills php">40%</div>
</div>
        <SkillBar
          skills={skills}
          colors={colors}
          animationDuration={4000}
        ></SkillBar>
      </div>
    </div>
  );
};

export default Skills;
