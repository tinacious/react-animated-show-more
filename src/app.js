import React from 'react';
import ReactDOM from 'react-dom';
import { DemoText } from './components/DemoText';
import { DemoToggle } from './components/DemoToggle';

import AnimatedShowMore from './index.js';


const App = () => (
  <div style={{ width: 600, margin: '0 auto' }}>
    <h1>React Animated Read More</h1>

    <h2>⚙️ Default settings</h2>
    <div className="demo-wrapper">
      <AnimatedShowMore>
        <DemoText />
      </AnimatedShowMore>
    </div>

    <h2>▪ With custom height</h2>
    <div className="demo-wrapper">
      <AnimatedShowMore height={110}>
        <DemoText />
      </AnimatedShowMore>
    </div>

    <h2> With small content</h2>
    <div className="demo-wrapper">
      <AnimatedShowMore>
        Not much to say... You shouldn't see a toggle
      </AnimatedShowMore>
    </div>

    <h2>🏁 With speed! </h2>
    <div className="demo-wrapper">
      <AnimatedShowMore speed={2000}>
        <DemoText />
      </AnimatedShowMore>
    </div>

    <h2>🔘 With custom toggle component</h2>
    <div className="demo-wrapper">
      <AnimatedShowMore toggle={DemoToggle}>
        <DemoText />
      </AnimatedShowMore>
    </div>

    <h2>👩🏻‍🎨 With custom shadow colour</h2>
    <div
      className="demo-wrapper"
      style={{
        background: '#f39',
        color: '#fff',
        padding: '0 30px 30px',
        borderRadius: 20
      }}>
      <AnimatedShowMore
        shadowColor="#f39"
        toggle={({ isOpen }) => (
          isOpen ?
            <strong><small>less ipsum</small></strong> :
            <strong><small>mo' ipsum</small></strong>
        )}>
        <DemoText />
      </AnimatedShowMore>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
