import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career & experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>VKInnovation</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Worked on university platforms for UoPeople, including academic progress tracking, degree audit configuration, and document shipment tracking. Built scalable web applications using React.js, C#, Azure, and CRM. Developed responsive interfaces and backend integrations.Created responsive UI/UX
              and designed wireframes using Figma.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Scrum Master</h4>
                <h5>(Additional Responsibility)</h5>
                <h5>VKInnovation</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Managed project scope and timelines while coordinating Agile ceremonies including sprint planning, retrospectives, and daily stand-ups. Ensured high-quality deliverables at the end of each sprint by maintaining development standards and team alignment. Collaborated closely with senior stakeholders across teams to deliver projects on time and maintain strong product quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
