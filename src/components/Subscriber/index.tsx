import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
// import NextLink from "next/link";
import { useSubsQuery } from "../../generated/graphql";
import { withApollo } from "../../utils/withApollo";
import { DeleteSubButtons } from "./DeleteSubcriber";
import { InviteLink } from "./InviteLink";
import SubsModal from "./EditSubscriber";
import DocImport from "./docImport"
import InviteSubscriber from "./InviteSubscriber";
import { useIsAuth } from "../../utils/useIsAuth";
// import { Form, Formik } from 'formik';
// import { InputField } from '../Inputs/InputField';
// import { useCreateSubMutation } from '../../generated/graphql';
// import { toErrorMap } from '../../utils/toErrorMap';
import React from "react";

const Subscribers = () => {
  useIsAuth();
  const { data, error, loading, fetchMore, variables } = useSubsQuery({
    variables: {
      limit: 15,
      cursor: null,
    },
    notifyOnNetworkStatusChange: true,
  });

  // if (!data) {
  //   return (
  //     <div>
  //       <div>you got query failed for some reason</div>
  //       <div>{error?.message}</div>
  //     </div>
  //   );
  // }


  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {!data && loading ? (
        <div>loading...</div>
      ) : (
        <>
          <Flex mb={2} align="center">
            <InviteSubscriber />
            <DocImport/>
            <InviteLink/>
          </Flex>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Subscribed?</Th>
                <Th></Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* {data!.subs.subs.map((s) =>
                !s ? null : (
                  <Tr key={s.id}>
                    <Td>{s.name}</Td>
                    <Td>{s.email}</Td>
                    <Td>
                      {s.subscribed !== true ? "Not Subscribed" : "Subscribed"}
                    </Td>
                    <Td>
                      <SubsModal
                        id={s.id}
                        name={s.name}
                        email={s.email}
                        subscribed={s.subscribed}
                      />
                    </Td>
                    <Td>
                      <DeleteSubButtons id={s.id} creatorId={s.creator.id} />
                    </Td>
                  </Tr>
                )
              )} */}
            </Tbody>
          </Table>
        </>
      )}
      {/* {data && data.subs.hasMore ? (
        <Flex>
          <Button
            onClick={() => {
              fetchMore({
                variables: {
                  limit: variables?.limit,
                  cursor: data.subs.subs[data.subs.subs.length - 1].createdAt,
                },
              });
            }}
            isLoading={loading}
            m="auto"
            my={8}
          >
            load more
          </Button>
        </Flex>
      ) : null} */}
    </>
  );
};

export default withApollo({ ssr: false })(Subscribers);
