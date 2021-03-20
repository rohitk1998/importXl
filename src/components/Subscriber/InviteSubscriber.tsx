import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  useDisclosure,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { withApollo } from '../../utils/withApollo';
import { InputField } from '../Inputs/InputField';
import { useCreateSubMutation } from '../../generated/graphql';
import { toErrorMap } from '../../utils/toErrorMap';

const InviteSubscriber: React.FC<{}> = ({}) => {
  const [createSub] = useCreateSubMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Invite Subscriber</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Invite a Subscriber</ModalHeader>

          <Formik
            initialValues={{ name: '', email: '' }}
            onSubmit={async (values, { setErrors }) => {
              const response = await createSub({
                variables: { input: values },
                update: (cache, { data }) => {
                  if (!data?.createSub.errors) {
                    cache.evict({ fieldName: 'subs:{}' });
                  }
                },
              });

              if (response.data?.createSub.errors) {
                setErrors(toErrorMap(response.data.createSub.errors));
                console.log(response.data.createSub.errors);
              } else if (response.data?.createSub.sub) {
              }
            }}
          >
            {({ isSubmitting }) => {
              return (
                <Form>
                  {isSubmitting ? null : <ModalCloseButton />}
                  <ModalBody pb={6}>
                    <InputField name='name' placeholder='Name' label='Name' />
                    <Box mt={4}>
                      <InputField
                        name='email'
                        placeholder='email'
                        label='Email'
                      />
                    </Box>
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      mr={2}
                      type='submit'
                      isLoading={isSubmitting}
                      background='blue'
                      color='white'
                    >
                      Send Invite
                    </Button>

                    <Button isLoading={isSubmitting} onClick={onClose}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Form>
              );
            }}
          </Formik>
        </ModalContent>
      </Modal>
    </>
  );
};

export default withApollo({ ssr: false })(InviteSubscriber);
