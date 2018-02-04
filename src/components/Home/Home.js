import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';

const Home = ({ filmCrawl }) => {
  return (
    <article className="Home">
      <div className="crawl">
        <h1>{ filmCrawl.title }</h1>
        <h2>{ filmCrawl.date }</h2>
        <p> 
          { filmCrawl.crawl }
        </p>
      </div>
    </article>
  );
};

const { shape, string } = PropTypes;

Home.propTypes = {
  filmCrawl: shape({
    title: string.isRequired,
    date: string.isRequired,
    crawl: string.isRequired
  })
};

export default Home;