import React from "react";
import safeJsonStringify from "safe-json-stringify";
import Head from "next/head";

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
  const posts = [
    {
      id: 1,
      nombre: "GG",
    },
  ];
  return {
    props: { posts: JSON.parse(safeJsonStringify(posts)) }, // will be passed to the page component as props
  };
}

const Posts = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Posts</title>
        <meta name="description" content="Posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Tabla producos</div>
      {posts &&
        posts.map((p) => {
          return <div key={p.id}>{p.nombre}</div>;
        })}
    </div>
  );
};

export default Posts;
