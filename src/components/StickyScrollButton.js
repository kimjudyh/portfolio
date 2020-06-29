import React, { useState, useEffect } from 'react';

const StickyButton = () => {
  const [style, setStyle] = useState({opacity: 0})
  const [y, setY] = useState(window.scrollY);
  useEffect(() => {
    // var ele = document.getElementById('root');
    window.addEventListener('scroll', (event) => {
      // setY(window.scrollY);
    if (window.scrollY > 40) {
      setStyle({opacity: 1});
      // setY(window.scrollY)
    } else if (window.scrollY < 40) {
      setStyle({opacity: 0})
    }

    })
    return (window.removeEventListener('scroll', (event) => {
      console.log('hi')
    }))
  }, [y])
  return (
    <div className="sticky-scroll" style={style}>
      <ul> 
        <li className="nav-item active">
          <a className="nav-link scroll-top-nav" href="#welcome-link" >Scroll to Top </a>
        </li>
      </ul>
    </div>
  )
}

export default StickyButton;