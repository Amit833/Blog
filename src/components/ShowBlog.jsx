import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import MyContext from '../context/MyContext';

const ShowBlog = ({ blog }) => {
  const context = useContext(MyContext);
  const { setBlogs } = context;

  //Deconstruct blog
  const { id, userName, title, content, today } = blog;

  //Delete blog function
  //First we retrieve all the blogs from local storage
  //We filter out the blog to be deleted
  //If there are any blogs left we replace the newly filtered array into LocalStorage
  //If there are no blogs left after the delete we clear LocalStorage
  //We then add to the store
  const handleDelete = () => {
    const blogs = JSON.parse(localStorage.getItem('blog'));
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    newBlogs.length > 0
      ? localStorage.setItem('blog', JSON.stringify(newBlogs))
      : localStorage.clear();
    setBlogs(newBlogs);
  };

  return (
    <section className='blog'>
      <p>
        <span>User</span> {userName}
      </p>
      <Link
        className='blog-link'
        to={{
          pathname: '/showBlogDetail',
          state: {
            blog: {
              userName: userName,
              title: title,
              content: content,
              today: today,
            },
          },
        }}>
        <p>
          <span>Title</span> {title}
        </p>
      </Link>

      <p>
        <span>{today}</span>
      </p>

      <button className='blog-delete' onClick={handleDelete}>
        Delete
      </button>
    </section>
  );
};

export default ShowBlog;
