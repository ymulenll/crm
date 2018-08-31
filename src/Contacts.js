import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const Contacts = ({ data: { loading, error, contacts } }) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <ul>
      {contacts.map(item => (
        <li key={item.id}>{item.firstName} {item.lastName}</li>
      ))}
    </ul>
  );
};

export const contactsListQuery = gql`
  query ConstactsQuery {
    contacts {
      id
      firstName
      lastName
    }
  }
`;

export default graphql(contactsListQuery)(Contacts);
