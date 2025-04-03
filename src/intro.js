import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <div className="intro-box">
            <div className="container intro-container">
                <div className="current-info">
                    <div className="logo-box">
                        <img src="/logo.png" className="img-fluid logo" alt="Logo" />
                    </div>
                    <h3 className="intro-heading">Welcome to LectureLens!</h3>
                    <p className="intro-text">
                        Effortlessly organize and search your lecture notes. Upload handwritten
                        or printed notes, and our smart OCR converts them into searchable text.
                        Stay focused on learning—Lecture Lens finds what you need in seconds!
                    </p>
                    <div className="button-group">
                        <Link to="/upload" className="btn btn-intro btn-lg rounded-pill">Upload</Link>
                        <Link to="/search" className="btn btn-intro btn-lg rounded-pill">Search</Link>
                    </div>
                </div>

                <div className="steps">
                    <div className="steps-box">
                        <h4 className="steps-heading">How to Use LectureLens</h4>
                        <ol className="steps-list">
                            <li>Upload a PDF or image and add tags (optional).</li>
                            <li>Get a summary and keywords automatically.</li>
                            <li>Search by keyword, tag or date range (optional).</li>
                            <li>View results with summaries, key excerpts and file links.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
