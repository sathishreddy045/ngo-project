import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      
      <section className="hero-section">
        <h1>Empowering Communities, <span className="highlight">Changing Lives</span></h1>
        <p>
          HopeFoundation is dedicated to creating lasting change through education, healthcare, and sustainable development. Join our movement and be a part of the story.
        </p>
        <Link to="/register" className="cta-button">
          Become a Volunteer Today
        </Link>
      </section>

      
      <section className="info-section container">
        <h2 className="section-title">Our Core Mission</h2>
        <div className="card-grid">
          
          <div className="card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </div>
            <h3>Quality Education</h3>
            <p>Providing accessible and quality education to underprivileged children to unlock their potential.</p>
          </div>
          
          <div className="card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </div>
            <h3>Healthcare Access</h3>
            <p>Running medical camps and awareness programs to ensure community health and well-being.</p>
          </div>
          
          <div className="card">
            <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.884 11.243l.447.894a2 2 0 001.789 1.113h2.762a2 2 0 001.789-1.113l.447-.894M15 21h2a2 2 0 002-2v-3.382a2 2 0 00-.586-1.414l-4.414-4.414a2 2 0 00-2.828 0L7.586 14.192a2 2 0 00-.586 1.414V19a2 2 0 002 2h2z" /></svg>
            </div>
            <h3>Planet Protection</h3>
            <p>Organizing tree plantation drives and promoting sustainable practices for a greener future.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
