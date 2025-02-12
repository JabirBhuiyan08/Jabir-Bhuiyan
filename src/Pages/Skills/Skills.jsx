import { motion } from "framer-motion";
import { DiMongodb } from "react-icons/di";
import { FaDatabase, FaCode, FaWordpress, FaChartBar, FaPaintBrush,  } from "react-icons/fa";

const skills = [
  { name: "MERN Stack", level: 65, icon: <FaCode /> },
  { name: "WordPress", level: 70, icon: <FaWordpress /> },
  { name: "Graphic Design", level: 75, icon: <FaPaintBrush /> },
  { name: "SEO & Website Boosting", level: 65, icon: <FaChartBar /> },
  { name: "MySQL", level: 50, icon: <FaDatabase /> },
  { name: "MONGO DB", level: 65, icon: <DiMongodb /> }
];

const Skills = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">My Skills</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative bg-gray-900/30 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center"
          >
            <div className="text-5xl text-green-400 mb-4 mx-auto">{skill.icon}</div>
            <h2 className="text-xl font-semibold text-white">{skill.name}</h2>
            <motion.div
              className="relative w-24 h-24 mx-auto mt-4"
              
              transition={{ duration: 2,  ease: "linear" }}
            >
              <svg width="100" height="100" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="8"
                  fill="transparent"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="rgb(54, 69, 79)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="transparent"
                  strokeDasharray="251"
                  strokeDashoffset="251"
                  animate={{ strokeDashoffset: 251 - (251 * skill.level) / 100 }}
                  transition={{ duration: 1.5 }}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">
                {skill.level}%
              </span>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
