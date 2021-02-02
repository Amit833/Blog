//React imports
import React from 'react';

const ShowDetail = (props) => {
  //Destructuring props. As these props are coming via a link they will be located inside location.state
  const { userName, title, content, today } = props.location.state.blog;

  //This little bit of code handles our back button
  const handleBack = () => {
    props.history.goBack();
  };

  return (
    <section className='detail'>
      <p>
        <span>User:</span> {userName}
      </p>
      <p>
        <span>Title: </span>
        {title}
      </p>

      <p>
        <span>Date: </span>
        {today}
      </p>

      <p>
        <span>Blog:</span> {content}
      </p>
      <button className='back-btn' onClick={handleBack}>
        Back
      </button>
    </section>
  );
};

export default ShowDetail;
