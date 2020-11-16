import React from 'react'
import './App.css'
import GetPosts from './components/GetPosts'

const App = () => {
  return (
    <div className="App">
      <header className="main-header">
        <h1>MY POSTS</h1>
      </header>
      <GetPosts />
    </div>
  );
}

export default App;
