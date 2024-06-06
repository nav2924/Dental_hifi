import React from "react";
// import "../style/Bio.css";
function BioMumbaiEvent2() {
  return (
    <div className="parent-container">
      <div className="bio-container">
        <div className="left-part">
          <div className="dr-image"></div>
          <div className="dr-name">Dr. Priya Sharma</div>
          <div className="c">Orthodontist</div>
          <div className="dr-experience">15 Years of Experience</div>
          <div className="education">Education: DDS, MDS</div>
          <div className="dr-services">
            Services: Braces, Aligners, Jaw Surgery, Retainers
          </div>
          <div className="description">
            Dr. Priya Sharma specializes in orthodontics, offering expert care
            in braces, aligners, jaw surgery, and retainers. With 15 years of
            experience, she is dedicated to creating beautiful, straight smiles
            and improving her patients' oral health.
          </div>
        </div>
        <div className="right-part">
          <div className="images">
            <div className="image-1">
              <img
                src="https://cdn.pixabay.com/photo/2021/08/10/13/43/orthodontics-6536026_1280.jpg"
                alt="Dr. Priya Sharma"
              ></img>
            </div>
            <div className="image-2">
              <img
                src="https://cdn.pixabay.com/photo/2017/07/23/10/42/dentist-2530983_960_720.jpg"
                alt="Dr. Priya Sharma"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BioMumbaiEvent2;
