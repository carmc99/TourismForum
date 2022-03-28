import React from 'react';
import { prisma } from '../../lib/prisma';
import gql from 'graphql-tag';

export const QUERY_TOOL = gql`
    query Tool($id: Int!) {
        tool(where: { id: $id }) {
            id
            name
        }
    }
`;

export const getServerSideProps = async ({ params }) => {
  const id = params.id;
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
    },
  });
  return {
    props: {
      user,
    },
  };
};

const User = ({ user }) => {
  console.log('Esta es la variable en el front', user);
  return (
    <div>
      <div>Tabla usuario</div>
      {user &&
        user.map((u) => {
          return <div key={u.id}>{u.name}</div>;
        })}
    </div>
  );
};

export default User;