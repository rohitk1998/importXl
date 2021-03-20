import React, { useState } from 'react';
import { Box, Button, Flex, Select } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { InputField } from '../../components/Inputs/InputField';
import { Layout } from '../../components/Layout';
import { useCreateSubFromInviteMutation } from '../../generated/graphql';
import { withApollo } from '../../utils/withApollo';
import { toErrorMap } from '../../utils/toErrorMap';
import { SelectField } from '../../components/Inputs/SelectField';

const InviteLink = () => {
  const router = useRouter();
  const [createSubFromInvite] = useCreateSubFromInviteMutation();
  const [tokenError, setTokenError] = useState('');
  const token =
    typeof router.query.token === 'string' ? router.query.token : '';

  return (
    <Layout variant='small'>
      <Formik
        initialValues={{
          name: '',
          email: '',
          frequency: 1,
        }}
        onSubmit={async (values, { setErrors }) => {
          const response = await createSubFromInvite({
            variables: {
              input: {
                name: values.name,
                email: values.email,
                frequency: parseInt(values.frequency as any),
                token,
              },
            },
          });

          if (response.data?.createSubFromInvite.errors) {
            const errorMap = toErrorMap(
              response.data.createSubFromInvite.errors,
            );
            setErrors(errorMap);
            if ('token' in errorMap) {
              setTokenError(errorMap.token);
            }
          } else if (response.data?.createSubFromInvite.sub) {
            console.log('worked');

            // router.push('/');
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {tokenError ? (
              <Flex>
                <Box mr={2} style={{ color: 'red' }}>
                  {tokenError}
                </Box>
              </Flex>
            ) : null}
            <InputField name='name' placeholder='Name' label='Name' />
            <Box mt={4}>
              <InputField name='email' placeholder='email' label='Email' />
            </Box>
            <Box mt={4}>
              <SelectField name='frequency' label='Frequency' />
            </Box>
            <Button
              mt={4}
              type='submit'
              isLoading={isSubmitting}
              background='blue'
              color='white'
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withApollo({ ssr: false })(InviteLink);
