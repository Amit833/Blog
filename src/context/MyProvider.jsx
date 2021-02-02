import React, { useState } from 'react';
import MyContext from './MyContext';

const MyProvider = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    userName: '',
    title: '',
    content: '',
  });
  const [redirect, setRedirect] = useState(false);

  return (
    <MyContext.Provider
      value={{ blogs, setBlogs, formData, setFormData, redirect, setRedirect }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
