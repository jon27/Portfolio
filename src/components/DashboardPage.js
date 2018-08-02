import React from 'react';
import Bio from './Bio.js';
import Contact from './Contact';
import Header from './Header.js';
import ListSkills from './ListSkills';
import ShowcaseProjects from './ShowcaseProjects';


const DashboardPage = () => (
  <div>
    <Header />
    <Bio />
    <ListSkills />
    <ShowcaseProjects />
    <Contact />
  </div>
);

export default DashboardPage;
