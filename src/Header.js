import React from 'react';
import { Link } from 'react-router';
import restauranfood from './images/restauranfood.jpg';

function Header() {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Link to="/booking"><button aria-label='on Click'>Reserve a Table</button></Link>
        </div>
        <div className='banner-img'>
          <img src={restauranfood} alt="restauran-food" />
        </div>
        
      </section>
    </header>
  );
}

export default Header;