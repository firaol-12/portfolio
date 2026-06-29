import React from 'react';
import { 
  FaCode, 
  FaBolt, 
  FaChartBar, 
  FaPaintBrush, 
  FaCodeBranch, 
  FaDatabase,
  FaSyncAlt 
} from 'react-icons/fa';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython 
} from 'react-icons/fa';

import { 
  SiTailwindcss,
  SiThreedotjs,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiMysql,
  SiTypescript
} from 'react-icons/si';

// SkillBar Component
const SkillBar = ({ icon: Icon, label, percentage }) => {
  return (
    <div className="skill-bar-group group bg whi">
      <div className="flex justify-between items-center mb-1.5 text-sm font-medium">
        <span className="text-slate-200 flex items-center gap-2">
          <Icon className="text-yellow-400 text-lg w-5" />
          {label}
        </span>
        <span className="text-yellow-300 font-semibold bg-slate-700/70 px-2.5 py-0.5 rounded-full text-xs">
          {percentage}%
        </span>
      </div>
      <div className="w-full h-2.5 bg-slate-700/80 rounded-full overflow-hidden shadow-inner">
        <div 
          className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 shadow-md shadow-yellow-500/40 transition-all duration-1000 ease-out group-hover:brightness-110"
          style={{ 
            width: `${percentage}%`,
            animation: `fillBar 1.4s cubic-bezier(0.22, 0.61, 0.36, 1) forwards` 
          }}
        />
      </div>
    </div>
  );
};

// Main Profile Component
const ProfileSkills = () => {
  const skills = [
    { 
      icon: FaReact, 
      label: 'React', 
      percentage: 92 
    },

    { 
      icon: FaNodeJs, 
      label: 'Node & Express', 
      percentage: 88 
    },
    { 
      icon: SiHtml5, 
      label: 'HTML5', 
      percentage: 85 
    },
    { 
      icon: SiTailwindcss, 
      label: 'Tailwind', 
      percentage: 90 
    },
    { 
      icon: FaCodeBranch, 
      label: 'Git & Git hub', 
      percentage: 83 
    },
    { 
      icon: SiPostgresql, 
      label: 'PostgreSQL', 
      percentage: 87 
    },
  ];


  const skills2 = [
    { 
      icon: SiCss, 
      label: 'CSS3', 
      percentage: 92 
    },

    { 
      icon: SiJavascript, 
      label: 'Javascript', 
      percentage: 88 
    },
    { 
      icon: SiThreedotjs, 
      label: 'Three', 
      percentage: 85 
    },
    { 
      icon: SiNextdotjs, 
      label: 'Next', 
      percentage: 90 
    },
    { 
      icon: SiTypescript, 
      label: 'Typescript', 
      percentage: 83 
    },
    { 
      icon: SiMysql, 
      label: 'MySql', 
      percentage: 87 
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-around p-5 bg-white">
      {/* Add keyframes for animation */}
      <style>{`
        @keyframes fillBar {
          0% { width: 0%; }
        }
      `}</style>

{/* skill title */}

              <div className="w-full flex flex-col justify-center items-center mb-5 md:mb-0">
                <div className="h-full text-black flex flex-col gap-5 justify-center items-center">
                    <h2 className="text-3xl text-black"><span className="text-amber-300 text-3xl">Development Skills</span></h2>
                    <p className="text-center w-80 md:w-140">
                      Technologies and tools I use to build modern, high-quality web applications.
                  </p>
                </div>
            </div>

      {/* Profile Card Container */}
      <div className=' w-80 md:w-5/6 flex flex-col items-center justify-center md:justify-around rounded-3xl  shadow-2xl shadow-black/40 border border-yellow-500/20 ring-1 ring-white/5 transition-all'>

      <div className='w-full flex flex-col md:flex-row justify-center md:justify-around p-5 items-center '>

        <div className="w-80 md:w-120 rounded-3xl p-7 pb-5 md:pb-7  transition-all text-gray-900">
        
        {/* Header: avatar + name */}
        {/* <div className="flex items-center gap-4 mb-7 flex-wrap">
          <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-white text-3xl shadow-lg shadow-yellow-500/30 transform rotate-1">
            <FaCode />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Alex Rivera
            </h2>
            <p className="text-yellow-200/80 text-sm sm:text-base flex items-center gap-1.5 mt-0.5">
              <FaBolt className="text-yellow-400" />
              Full‑stack developer
            </p>
          </div>
        </div> */}

        {/* Skills Section Title */}
        {/* <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
          <h3 className="text-xl font-semibold text-yellow-300 flex items-center gap-2">
            <FaChartBar />
            Technical skills
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
        </div> */}

        {/* Skill Bars Container */}
        <div className="space-y-5">
          {skills.map((skill, index) => (
            <SkillBar 
              key={index}
              icon={skill.icon}
              label={skill.label}
              percentage={skill.percentage}
            />
          ))}
        </div>

        {/* Footer note */}
        {/* <div className="mt-7 flex justify-end items-center text-xs text-slate-400 gap-2">
          <FaSyncAlt className="text-yellow-500/70" />
          <span>updated recently</span>
        </div> */}
      </div>


      {/* Profile Card Container */}
      <div className="w-80 md:w-120 rounded-3xl p-7 pt-0 md:pt-7 transition-all">
        
        {/* Header: avatar + name */}
        {/* <div className="flex items-center gap-4 mb-7 flex-wrap"> */}
          {/* <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-white text-3xl shadow-lg shadow-yellow-500/30 transform rotate-1">
            <FaCode />
          </div> */}
          {/* <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Alex Rivera
            </h2>
            <p className="text-yellow-200/80 text-sm sm:text-base flex items-center gap-1.5 mt-0.5">
              <FaBolt className="text-yellow-400" />
              Full‑stack developer
            </p>
          </div> */}
        {/* </div> */}

        {/* Skills Section Title */}
        {/* <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
          <h3 className="text-xl font-semibold text-yellow-300 flex items-center gap-2">
            <FaChartBar />
            Technical skills
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
        </div> */}

        {/* Skill Bars Container */}
        <div className="space-y-5">
          {skills2.map((skill, index) => (
            <SkillBar
              key={index}
              icon={skill.icon}
              label={skill.label}
              percentage={skill.percentage}
            />
          ))}
        </div>

        {/* Footer note */}
        {/* <div className="mt-7 flex justify-end items-center text-xs text-slate-400 gap-2">
          <FaSyncAlt className="text-yellow-500/70" />
          <span>updated recently</span>
        </div> */}
      </div>
      </div>
      </div>



    </div>
  );
};

export default ProfileSkills;