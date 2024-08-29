import React from "react";
import cssModule from "./Skills.module.css";

//Icon
import checkmarkIcon from "../../../../assets/imported-images/checkmark-dark.svg";

//Components
import SkillList from "./components/SkillList";

// Constants
import {
  skillsLanguagesAndMore,
  skillFrameworks,
  skillBackEnd,
  skillDatabases,
} from "../../../../constants";

function Skills() {
  return (
    <section id="skills" className={cssModule.container}>
      <h1 className={cssModule.sectionTitle}>Habilidades</h1>
      <div className={cssModule.skillList}>
        {skillsLanguagesAndMore.map((skill) => {
          return <SkillList src={checkmarkIcon} skill={skill.skill} />;
        })}
      </div>
      <hr />
      <div className={cssModule.skillList}>
        {skillFrameworks.map((skill) => {
          return <SkillList src={checkmarkIcon} skill={skill.skill} />;
        })}
      </div>
      <hr />
      <div className={cssModule.skillList}>
        {skillBackEnd.map((skill) => {
          return <SkillList src={checkmarkIcon} skill={skill.skill} />;
        })}
      </div>
      <hr />
      <div className={cssModule.skillList}>
        {skillDatabases.map((skill) => {
          return <SkillList src={checkmarkIcon} skill={skill.skill} />;
        })}
      </div>
    </section>
  );
}

export default Skills;
