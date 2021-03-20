import { Layout } from '../components/Layout';
import Subscribers from '../components/Subscriber';
import { withApollo } from '../utils/withApollo';

const SubscribersPage = () => {
  return (
    <Layout>
      <Subscribers />
    </Layout>
  );
};

export default withApollo({ ssr: false })(SubscribersPage);
