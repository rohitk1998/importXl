import { Layout } from '../components/Layout';
import { withApollo } from '../utils/withApollo';
import { useMeQuery } from '../generated/graphql';
import { isServer } from '../utils/isServer';
import { useIsAuth } from '../utils/useIsAuth';
import UserProfile from '../components/Profile/UserProfile';
import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import UserAuth from '../components/Profile/UserAuth';

const Profile = () => {
  useIsAuth();
  const { data, loading } = useMeQuery();
  const userData = data?.me ? data?.me : null;

  let profile = null;
  let auth = null;

  if (loading) {
  } else {
    profile = <UserProfile data={userData} />;
    auth = <UserAuth data={userData} />;
  }

  return (
    <Layout>
      <Tabs variant='soft-rounded' colorScheme='gray'>
        <TabList>
          <Tab>User Profile</Tab>
          <Tab>Security</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{profile}</TabPanel>
          <TabPanel>{auth}</TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
};

export default withApollo({ ssr: false })(Profile);
