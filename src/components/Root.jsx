import React from 'react';
import App from './App';
import NavigationBar from './NavigationBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NoMatch from './pages/NoMatch';

function Root() {
  return (
    <Router>
      <div className="todo-app-container">
        <NavigationBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" exact element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Root;
