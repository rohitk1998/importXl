import React from 'react';
import { withApollo } from '../../utils/withApollo';
import { useUpdateUserMutation } from '../../generated/graphql';
import { Box, Text, Button, useToast } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { InputField } from '../Inputs/InputField';
import { toErrorMap } from '../../utils/toErrorMap';

interface UserProfileProps {
  data: {
    username: string;
    email: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({
  data: { username, name, address, city, state, zip },
}) => {
  const [updateUser] = useUpdateUserMutation();
  const toast = useToast();
  return (
    <Box mb={6} pr={12}>
      <Text mt={4} mb={4} fontSize='3xl'>
        {username} manage your profile
      </Text>
      <Formik
        initialValues={{ name, address, city, state, zip }}
        onSubmit={async (values, { setErrors }) => {
          const response = await updateUser({
            variables: {
              input: values,
            },
          });

          if (response.data?.updateUser.errors) {
            const errorMap = toErrorMap(response.data.updateUser.errors);

            setErrors(errorMap);
          } else if (response.data?.updateUser.user) {
            toast({
              title: 'Success',
              description: 'Your account information has been saved.',
              status: 'success',
              duration: 9000,
              isClosable: true,
            });
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name='name' placeholder='name' label='Name' />

            <Box mt={4}>
              <InputField
                name='address'
                placeholder='address'
                label='Address'
              />
            </Box>
            <Box mt={4}>
              <InputField name='city' placeholder='city' label='City' />
            </Box>
            <Box mt={4}>
              <InputField name='state' placeholder='state' label='State' />
            </Box>
            <Box mt={4}>
              <InputField name='zip' placeholder='zip' label='Zip' />
            </Box>

            <Button
              mt={4}
              type='submit'
              isLoading={isSubmitting}
              background='blue'
              color='white'
            >
              update profile
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default withApollo({ ssr: false })(UserProfile);
