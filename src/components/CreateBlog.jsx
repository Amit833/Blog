import React, { useContext, useRef, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import MyContext from '../context/MyContext';

const CreateBlog = () => {
  const context = useContext(MyContext);
  const {
    blogs,
    setBlogs,
    redirect,
    setRedirect,
    formData,
    setFormData,
  } = context;

  //Input field refs
  const refUserName = useRef();

  useEffect(() => {
    refUserName.current.focus();
  }, []);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRedirect(true);

    //create blog
    const blog = {
      id: uuidv4(),
      userName: formData.userName,
      title: formData.title,
      content: formData.content,
      today: new Date().toLocaleString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    };

    let tempBlogArr = [];

    //Map through any existing blogs and pre-fill tempBlogArr
    blogs.map((blog) => tempBlogArr.push(blog));

    //Add new blog to our tempBlogArray, LocalStorage and update the context
    tempBlogArr.push(blog);
    localStorage.setItem('blog', JSON.stringify(tempBlogArr));
    setBlogs(tempBlogArr);
  };

  //If our state redirect flag is true redirect to showAllBlogs, else show the createBlog form.
  if (redirect) {
    return <Redirect to='/ShowAllBlogs' />;
  } else {
    return (
      <section className='createBlog'>
        <form>
          <input
            name='username'
            type='text'
            placeholder='Please enter a username'
            maxLength='20'
            onChange={changeHandler}
            ref={refUserName}
          />

          <input
            name='title'
            type='text'
            placeholder='Please enter a title'
            maxLength='25'
            onChange={changeHandler}
          />

          <textarea
            rows='7'
            cols='50'
            wrap='hard'
            name='content'
            maxLength='800'
            placeholder='Please enter you blog details'
            onChange={changeHandler}
          />

          <button className='form-button' type='button' onClick={handleSubmit}>
            Add Blog
          </button>
        </form>
      </section>
    );
  }
};

export default CreateBlog;
