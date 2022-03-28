import React from 'react';
import safeJsonStringify from 'safe-json-stringify';

export async function getServerSideProps() {
  // const productos = await prisma.producto.findMany({
  //   include: {
  //     inventario: {
  //       include: {
  //         movimientoInventario: {
  //           include: {
  //             usuario: true,
  //           },
  //         },
  //       },
  //     },
  //   },
  // });
  const posts = [{
      id: 1,
      nombre: "GG",
  }];
  return {
    props: { posts: JSON.parse(safeJsonStringify(posts)) }, // will be passed to the page component as props
  };
}

const Posts = ({ posts }) => {
  console.log('Esta es la variable en el front', posts);
  return (
    <div>
      <div>Tabla producos</div>
      {posts &&
        posts.map((p) => {
          return <div key={p.id}>{p.nombre}</div>;
        })}
    </div>
  );
};

export default Posts;