import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { ImBlogger } from 'react-icons/im';

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <ImBlogger className='blog-icon' />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to='/' exact activeStyle={{ color: 'firebrick' }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/createBlog' activeStyle={{ color: 'firebrick' }}>
              Create a Blog
            </NavLink>
          </li>
          <li>
            <NavLink to='/showAllBlogs' activeStyle={{ color: 'firebrick' }}>
              Show all Blogs
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
