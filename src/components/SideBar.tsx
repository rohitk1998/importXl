import React from 'react';
import { Box, Icon } from '@chakra-ui/react';
import { MdHome, MdEmail } from 'react-icons/md';
import { ImUsers, ImQuotesRight } from 'react-icons/im';

import ActiveLink from './ActiveLink';
import { useMeQuery } from '../generated/graphql';
import { isServer } from '../utils/isServer';

export const SideBar = () => {
  const { data, loading } = useMeQuery({
    skip: isServer(),
  });

  let body = null;

  if (loading) {
  } else if (data?.me?.role !== 'admin') {
  } else {
    body = (
      <ActiveLink href='/quotes'>
        <Icon as={ImQuotesRight} mr={2} mb='5px' />
        Quotes
      </ActiveLink>
    );
  }
  return (
    <Box
      bg='gray.200'
      position={{ base: 'relative', md: 'relative', lg: 'fixed' }}
      width={{ base: '100%', md: '200px', lg: '200px' }}
      height={{ base: 'auto', md: '100%', lg: '100%' }}
    >
      <Box mt={{ base: '0', md: '110px', lg: '110px' }} ml={8} fontWeight={600}>
        <ActiveLink href='/'>
          <Icon as={MdHome} mr={2} mb='5px' />
          Dashboard
        </ActiveLink>
        <ActiveLink href='/subscribers'>
          <Icon as={ImUsers} mr={2} mb='5px' />
          Subsribers
        </ActiveLink>
        <ActiveLink href='/'>
          <Icon as={MdEmail} mr={2} mb='2px' />
          Messages
        </ActiveLink>
        {body}
      </Box>
    </Box>
  );
};
