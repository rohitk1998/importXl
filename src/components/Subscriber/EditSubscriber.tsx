import React from 'react';
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
import { SwitchField } from '../Inputs/SwitchField';
import { useUpdateSubMutation } from '../../generated/graphql';

interface SubsModalProps {
  id: number;
  name: string;
  email: string;
  subscribed: boolean;
}

const SubsModal: React.FC<SubsModalProps> = ({
  id,
  name,
  email,
  subscribed,
}) => {
  const [updateSub] = useUpdateSubMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Edit</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Subscriber {name}</ModalHeader>
          <ModalCloseButton />
          <Formik
            initialValues={{ name, email, subscribed }}
            onSubmit={async (values) => {
              await updateSub({ variables: { id: id, ...values } });
              onClose();
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <ModalBody pb={6}>
                  <InputField name='name' placeholder='name' label='Name' />
                  <Box mt={4}>
                    <InputField
                      name='email'
                      placeholder='email'
                      label='Email'
                    />
                  </Box>
                  {subscribed && (
                    <Box mt={4}>
                      <SwitchField
                        name='subscribed'
                        label='Subscribed?'
                        defaultIsChecked={subscribed}
                      />
                    </Box>
                  )}
                </ModalBody>

                <ModalFooter>
                  <Button
                    mr={3}
                    type='submit'
                    isLoading={isSubmitting}
                    background='blue'
                    color='white'
                  >
                    update post
                  </Button>

                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        </ModalContent>
      </Modal>
    </>
  );
};

export default withApollo({ ssr: false })(SubsModal);
