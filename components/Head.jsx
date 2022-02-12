import Head from 'next/head';
import React from 'react';

const HeadComponent = ({text}) => {
  return <div>
      <Head>
          <title>{text}</title>
      </Head>
  </div>;
};

export default HeadComponent;
