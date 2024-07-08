export default function Modules() {
  return (
      <div>
        {/* Collapse All button, View Progress button, etc. */}
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">Lecture 1 - Course Introduction, Syllabus, Agenda</span>
                <ul className="wd-content">
                  <li className="wd-content-item">
                    <strong>LEARNING OBJECTIVES</strong>
                    <ul>
                      <li>Introduction to the course</li>
                      <li>Learn what is Web Development</li>
                    </ul>
                  </li>
                  <li className="wd-content-item">
                    <strong>READING</strong>
                    <ul>
                      <li>Full Stack Developer - Chapter 1 - Introduction</li>
                      <li>Full Stack Developer - Chapter 2 - Creating User Interfaces</li>
                    </ul>
                  </li>
                  <li className="wd-content-item">
                    <strong>SLIDES</strong>
                    <ul>
                      <li>Introduction to Web Development</li>
                      <li>Creating an HTTP server with Node.js</li>
                      <li>Creating a React Application</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">Lecture 2 - Formatting User Interfaces with HTML</span>
                <ul className="wd-content">
                  <li className="wd-content-item">
                    <strong>LEARNING OBJECTIVES</strong>
                    <ul>
                      <li>Learn how to create user interfaces with HTML</li>
                      <li>Deploy the assignment to Netlify</li>
                    </ul>
                  </li>
                  <li className="wd-content-item">
                    <strong>SLIDES</strong>
                    <ul>
                      <li>Introduction to HTML and the DOM</li>
                      <li>Formatting Web content with Headings and Paragraphs</li>
                      <li>Formatting content with Lists and Tables</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  {/* week2 */}
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );
}
