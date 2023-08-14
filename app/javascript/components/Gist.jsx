import React from 'react';
import ReactEmbedGist from 'react-embed-gist';

const Gist = ({ id }) => {
  const src = `https://gist.github.com/alexmcdermid/${id}.pibb`
  return (
    <ReactEmbedGist 
      gist={`alexmcdermid/${id}`}
    />
  );
};

export default Gist;
