import React from 'react';
import DisplayPosts from './components/DisplayPosts';
import './App.css';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <div className="App">
      <CreatePost/>
      <DisplayPosts />
    </div>
  );
}
export default App;
