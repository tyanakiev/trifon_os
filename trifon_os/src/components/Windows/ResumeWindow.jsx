import React from 'react';

const ResumeWindow = ({ windowDetails, onClose }) => {
  const resumeData = {
    name: 'Trifon Yanakiev',
    title: 'Senior Software Engineer',
    linkedin: 'www.linkedin.com/in/trifonyanakiev',
    skills: [
      'FastAPI',
      '.NET Framework',
      'Python',
      'AWS',
      'React'
    ],
    languages: [
      'English (Full Professional)',
      'Bulgarian (Native or Bilingual)',
    ],
    summary: `As an experienced Software Developer, I bring over 10 years of expertise in software development, data analysis, and automation. My focus lies in designing, building, and implementing robust software solutions that directly meet the changing needs of businesses. Leveraging my skills in Python, web development, and SQL, I create solutions that foster growth, enhance efficiency, and ensure the scalability of diverse processes, all with a keen eye on addressing the dynamic requirements of the business. I actively collaborate with cross-functional teams, sharing best practices and troubleshooting issues to deliver high-impact products. My commitment to simplicity and care is evident in my approach to problem-solving and my dedication to ensuring the success of each project. Passionate about applying automation engineering to real-world challenges, I aim to optimize business outcomes and make a meaningful impact through my work.`,
    experience: [
      {
        company: 'Schreiber Foods',
        role: 'Senior Software Engineer',
        duration: 'May 2022 - Present (2 years 7 months)',
        location: 'Green Bay, Wisconsin, United States',
        description: 'Develop, and deploy robust computer systems, specializing in the design and implementation of advanced solutions for efficient data storage and retrieval within Oracle database environments.',
      },
      {
        company: 'Georgia-Pacific LLC',
        role: 'Systems Analyst',
        duration: 'June 2019 - June 2020 (1 year 1 month)',
        description: 'Engineer and maintain cutting-edge software solutions tailored for manufacturing facilities, focusing on data analysis, predictive analytics, and automation. Proficient in Python, with expertise in leveraging numpy, scipy, and pandas to enhance computational capabilities.',
      },
      {
        company: 'BayCare Clinic',
        role: 'Web Developer',
        duration: 'May 2018 - May 2019 (1 year 1 month)',
        location: 'Green Bay, Wisconsin',
        description: 'Collaborated closely with cross-functional teams, participating in the design and implementation of user-friendly .NET Core web applications. Focused on writing scalable and maintainable code to ensure optimal system performance and seamless integration of internal systems.',
      },
      {
        company: 'PROS',
        role: 'Automation Developer',
        duration: 'May 2015 - July 2017 (2 years 3 months)',
        location: 'Sofia, Bulgaria',
        description: 'Streamlined the quality assurance of the search platform through comprehensive process automation. Developed and expanded the Continuous Integration framework to enhance the test coverage across all Vayant products.',
      },
      {
        company: 'Ipsos',
        role: 'Survey Programmer',
        duration: 'December 2013 - April 2015 (1 year 5 months)',
        location: 'Sofia, Bulgaria',
        description: 'Executed and delivered market research surveys using specific VB-based software in combination with web technologies like JavaScript and HTML. Involved in development, quality assurance, and direct communication with clients.',
      }
    ],
    education: [
      {
        school: 'University of Wisconsin-Green Bay',
        degree: 'Bachelor of Science - BS, Computer Science',
        duration: 'September 2020 - December 2022',
      },
      {
        school: 'Technical University of Sofia',
        degree: 'Bachelor of Engineering, Automation Engineering',
        duration: 'September 2009 - May 2013',
      },
    ],
  };

  return (
    <div className="absolute top-1/4 left-1/4 w-1/2 bg-gray-800 text-white rounded-lg shadow-xl p-6 overflow-y-auto max-h-[80vh]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Resume</h2>
        <button 
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
        >
          Close
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">{resumeData.name}</h3>
        <p className="text-gray-300 mb-4">{resumeData.title}</p>
        
        <section className="mb-4">
          <p>
            <a href={`https://${resumeData.linkedin}`} className="text-blue-400" target="_blank" rel="noopener noreferrer">
              {resumeData.linkedin}
            </a>
          </p>
        </section>
        
        <section className="mb-4">
          <h4 className="font-bold mb-2">Top Skills</h4>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-gray-700 px-2 py-1 rounded text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
        
        <section className="mb-4">
          <h4 className="font-bold mb-2">Languages</h4>
          <div className="flex flex-wrap gap-2">
            {resumeData.languages.map((language, index) => (
              <span 
                key={index} 
                className="bg-gray-700 px-2 py-1 rounded text-sm"
              >
                {language}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-4">
          <h4 className="font-bold mb-2">Summary</h4>
          <p>{resumeData.summary}</p>
        </section>

        <section>
          <h4 className="font-bold mb-2">Experience</h4>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="bg-gray-700 p-3 rounded mb-2">
              <h5 className="font-semibold">{exp.role}</h5>
              <p className="text-gray-400">{exp.company}</p>
              <p className="text-sm">{exp.duration}</p>
              {exp.location && <p className="text-gray-400 text-sm">{exp.location}</p>}
              <p>{exp.description}</p>
            </div>
          ))}
        </section>

        <section>
          <h4 className="font-bold mb-2">Education</h4>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="bg-gray-700 p-3 rounded mb-2">
              <h5 className="font-semibold">{edu.degree}</h5>
              <p className="text-gray-400">{edu.school}</p>
              <p className="text-sm">{edu.duration}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ResumeWindow;
