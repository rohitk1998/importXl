import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useQuotesQuery } from "../../generated/graphql";
import { withApollo } from "../../utils/withApollo";
import { useIsAuth } from "../../utils/useIsAuth";
import CreateQuote from "./CreateQuote";
import React from "react";
import { DeleteQuoteButton } from "./DeleteQuote";
import EditQuote from "./EditQuote";

const Quotes = () => {
  useIsAuth();
  const { data, error, loading, fetchMore, variables } = useQuotesQuery({
    variables: {
      limit: 15,
      cursor: null,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (!loading && !data) {
    return (
      <div>
        <div>you got query failed for some reason</div>
        <div>{error?.message}</div>
      </div>
    );
  }

  return (
    <>
      {!data && loading ? (
        <div>loading...</div>
      ) : (
        <>
          <Flex mb={2} align="center">
            <CreateQuote />
          </Flex>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Quote</Th>
                <Th>Created By</Th>
                <Th></Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data!.quotes.quotes.map((q) =>
                !q ? null : (
                  <Tr key={q.id}>
                    <Td>{q.name}</Td>
                    <Td>{q.user.username}</Td>
                    <Td>
                      <EditQuote id={q.id} name={q.name} />
                    </Td>
                    <Td>
                      <DeleteQuoteButton id={q.id} creatorId={q.user.id} />
                    </Td>
                  </Tr>
                )
              )}
            </Tbody>
          </Table>
        </>
      )}
      {data && data.quotes.hasMore ? (
        <Flex>
          <Button
            onClick={() => {
              fetchMore({
                variables: {
                  limit: variables?.limit,
                  cursor:
                    data.quotes.quotes[data.quotes.quotes.length - 1].createdAt,
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
      ) : null}
    </>
  );
};

export default withApollo({ ssr: false })(Quotes);
