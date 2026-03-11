import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import MyAcademicProgressIMG from "../assets/images/My_Academic-Progress.png";
import DataCopyUtilityIMG from "../assets/images/data_copy_utility.png";
// import DTDCUiIMG from "../assets/images/dtdc.png";
import BigInterviewIMG from "../assets/images/Big-Interview.png";
import DAC from "../assets/images/DAC.png";
import RuchiSnacksIMG from "../assets/images/Ruchi_Snack.png";

const projects = [
  {
    title: "My Academic Progress",
    category: "Academic",
    tools: "React.js, TypeScript, Azure, C#, GitHubDesktop",
    image: MyAcademicProgressIMG,
  },

  {
    title: "Degree Audit Designer",
    category: "Tool for Academic Officers",
    tools: "React.js, TypeScript, Azure, C#, GitHubDesktop",
    image: DAC,
  }, {
    title: "Data-Copy Utlity",
    category: "Internal tool for UAT & Development team",
    tools: "React.js, TypeScript, Azure, C#, GitHubDesktop",
    image: DataCopyUtilityIMG,
  },
  {
    title: "Big-interview",
    category: "Mock Interview Platform",
    tools: "React.js, TypeScript, Azure, C#, GitHubDesktop",
    image: BigInterviewIMG,
  },
  {
    title: "Ruchi Snacks",
    category: "Freelance project for snck shop",
    tools: "Next.js, TypeScript,  GitHubDesktop",
    image: RuchiSnacksIMG,
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
