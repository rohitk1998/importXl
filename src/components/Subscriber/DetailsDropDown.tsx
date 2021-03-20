import React, { useState } from "react";
import { Box, Container, Heading, Select, Text } from "@chakra-ui/react";
import { withApollo } from "../../utils/withApollo";

type CardProps = {
  name: String;
  options: any;
  action: any;
};

const DetailsDropDown: React.FC<CardProps> = ({
  name,
  options,
  action,
}: CardProps) => {
  return (
    <>
      <Box
        w="100%"
        p={4}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text fontSize="md">{name}</Text>
        <Select
          w="40%"
          variant="filled"
          marginLeft="20px"
          onChange={(e) => action({ e, name })}
        >
          <option >{'Select options'}</option>
          {options.map((item: String, index: number) => {
            return <option key={index} value={index}>{item}</option>;
          })}
        </Select>
      </Box>
    </>
  );
};

export default withApollo({ ssr: false })(DetailsDropDown);
