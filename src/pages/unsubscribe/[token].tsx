import React, { useState } from 'react';
import { NextPage } from 'next';
import { Wrapper } from '../../components/Wrapper';
import { toErrorMap } from '../../utils/toErrorMap';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

import { useRouter } from 'next/router';
import { withApollo } from '../../utils/withApollo';
import { useUnsubscribeSubMutation } from '../../generated/graphql';

const SubUnSubscriber: NextPage = () => {
  const router = useRouter();

  const [unsubscribeSub, { loading }] = useUnsubscribeSubMutation();
  const [tokenError, setTokenError] = useState('');

  //Show a congrats page instead of home page

  return (
    <Wrapper variant='regular'>
      <Box>
        <Heading>Welcome to Quote Actions</Heading>
        <Text>Please confirm your subscription preference below:</Text>
      </Box>

      {tokenError ? (
        <Flex>
          <Box mr={2} style={{ color: 'red' }}>
            {tokenError}
          </Box>
        </Flex>
      ) : null}
      <Button
        mt={4}
        type='submit'
        isLoading={loading}
        background='blue'
        color='white'
        onClick={async () => {
          const response = await unsubscribeSub({
            variables: {
              token:
                typeof router.query.token === 'string'
                  ? router.query.token
                  : '',
            },
          });
          console.log(response.data);

          if (response.data?.unsubscribeSub.errors) {
            const errorMap = toErrorMap(response.data.unsubscribeSub.errors);
            if ('token' in errorMap) {
              setTokenError(errorMap.token);
            }
          } else if (response.data?.unsubscribeSub.sub) {
            // worked
            router.push('/');
          }
        }}
      >
        Unsubsribe
      </Button>
    </Wrapper>
  );
};

export default withApollo({ ssr: false })(SubUnSubscriber);
