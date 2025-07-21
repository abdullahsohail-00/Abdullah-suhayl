import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Playground from './components/Playground';
import GraphicDesign from './components/GraphicDesign';
import WebsitesPortfolio from './components/WebsitesPortfolio';
import PhotographyPortfolio from './components/PhotographyPortfolio';
import ExperiencePage from './components/ExperiencePage';
import DataAnalysisPage from './components/DataAnalysisPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/websites" element={<WebsitesPortfolio />} />
          <Route path="/photography" element={<PhotographyPortfolio />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/data-analysis" element={<DataAnalysisPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;