import React, { useEffect, useContext } from 'react';
import MyContext from '../context/MyContext';

import ShowBlog from './ShowBlog';

const ShowAllBlogs = () => {
  //Get blogs from context
  const context = useContext(MyContext);
  const { setRedirect, blogs, setBlogs } = context;

  //Initialize page title and get blogs from LocalStorage
  useEffect(() => {
    let tempBlogArr = [];

    //Retrieve any previously created blogs from LocalStorage
    const blogs = JSON.parse(localStorage.getItem('blog'));
    blogs ? blogs.map((blog) => tempBlogArr.push(blog)) : tempBlogArr.push();
    setBlogs(tempBlogArr);
    setRedirect(false);
  }, [setBlogs, setRedirect]);

  //Get individual blogs
  const blogsList = blogs.map((blog) => <ShowBlog blog={blog} key={blog.id} />);

  //Conditionally render the blogs or not
  if (blogs.length > 0) {
    return <section className='blogs-list'>{blogsList}</section>;
  } else {
    return (
      <section className='no-show'>
        <h2>There are no blogs to show</h2>
      </section>
    );
  }
};

export default ShowAllBlogs;
