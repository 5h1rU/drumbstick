import React from 'react';
import Head from 'next/head';

import './asserts/styles.less';

export default ({ children }) => (
  <div>
    <Head/>
    {children}
  </div>
);
