import React from 'react';
import { Layout } from '../components/Layout';
import Quotes from '../components/Quote';
import { withApollo } from '../utils/withApollo';

const QuotesPage = () => {
  return (
    <Layout>
      <Quotes />
    </Layout>
  );
};

export default withApollo({ ssr: false })(QuotesPage);
