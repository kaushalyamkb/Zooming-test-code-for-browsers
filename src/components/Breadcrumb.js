// Breadcrumb.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/breadcrumb.css'


const Breadcrumb = ({ paths }) => {
  return (
    <div>
      {paths.map((path, index) => (
        <span key={index} className="homeBreadCrumb">
          {index > 0 && (
            <span className="breadcrumb-separator"> / </span>
          )}
          {path.link ? (
            <Link to={path.link}>{path.label}</Link>
          ) : (
            <span className="activeBreadCrumb">{path.label}</span>
          )}
        </span>

      ))}
    </div>
  );
};

export default Breadcrumb;
