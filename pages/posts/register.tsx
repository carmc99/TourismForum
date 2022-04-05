import React from "react";
import { useState } from "react";
import validator from "validator";
import { useQuery, gql, useMutation } from "@apollo/client";
import { useSession } from "next-auth/react";

const GET_COUNTRIES = gql`
  query Countries {
    countries {
      name
      id
    }
  }
`;
const STORE_POST = gql`
  mutation CreatePost($data: PostCreateInput!) {
    createPost(data: $data) {
      biome
      title
      description
      image
      average_score
      author {
        id
      }
      location {
        id
      }
      hotel {
        id
      }
    }
  }
`;

const RegisterForm = () => {
  const [inputs, setInputs] = useState({});
  const biomes = [
    "TUNDRA",
    "BOSQUE",
    "PRADERA",
    "CHAPARRAL",
    "DESIERTO",
    "TAIGA",
    "ESTEPA",
    "SELVA_TROPICAL",
    "SABANA",
    "MANGLAR",
  ];
  const user = useSession().data;
  console.table(user);
  const [addPost, { load, err }] = useMutation(STORE_POST);
  if (load)
    return (
      <main>
        <div>Guardando...</div>
      </main>
    );
  if (err)
    return (
      <main>
        <div>${err.message}</div>
      </main>
    );
  const { loading, error, data } = useQuery(GET_COUNTRIES, {
    fetchPolicy: "cache-and-network",
  });
  if (loading)
    return (
      <main>
        <div>Loading...</div>
      </main>
    );
  if (error)
    return (
      <main>
        <div>${error.message}</div>
      </main>
    );
  const { countries } = data;

  const validate = (value) => {
    if (!value) {
      return false;
    }
    return validator.isURL(value);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost({
      variables: {
        data: {
          biome: inputs.biome,
          title: inputs.title,
          description: inputs.description,
          image: inputs.imageUrl,
          average_score: 0,
          author: {
            connect: {
              id: user.user.id,
            },
          },
          location: {
            connect: {
              id: "1",
            },
          },
        },
      },
    });
  };

  return (
    <form className="w-full " onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Titulo
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="title"
            type="text"
            placeholder="Mi titulo"
            required={true}
            onChange={handleChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Bioma
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="biome"
              required={true}
              onChange={handleChange}
            >
              <option value="">Seleccione una opcion</option>
              {biomes.map((biome) => (
                <option value={biome}>{biome}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Descripcion
          </label>
          <textarea
            placeholder="Descripcion"
            className="resize-none bg-gray-200 text-gray-700 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500 w-full"
            name="description"
            required={true}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Pais
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="country"
              required={true}
              onChange={handleChange}
            >
              <option value="">Seleccione una opcion</option>
              {countries.map((country) => (
                <option value={country.id}>{country.name}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Localizacion
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="city"
            type="text"
            required={true}
            onChange={handleChange}
            placeholder="Medellin"
          />
        </div>

        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Imagen
          </label>
          <input
            className="
            block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            name="imageUrl"
            required={true}
            value={inputs.imageUrl || ""}
            onChange={handleChange}
          />
          <p className="text-red-500 text-xs italic">
            Por favor ingrese la direccion url donde se encuentra aloajda la
            imagen.
          </p>
        </div>
        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0 pt-5">
          <img
            className="p-0 h-auto rounded-full bg-white h-12"
            src={inputs.imageUrl || ""}
            alt=""
          />
          {validate(inputs.imageUrl) ? (
            <p className="text-red-500 text-xs italic">Previsualizacion</p>
          ) : (
            <p className="text-red-500 text-xs italic">
              No se ha ingresado ninguna imagen valida para mostrar
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-ful px-3 mb-6 md:mb-0">
          <h3 className="block tracking-wide text-gray-700 font-bold mb-2">
            (Opcional) Informacion del hotel
          </h3>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-ful md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Nombre
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            name="hotelName"
            value={inputs.hotelName || ""}
            placeholder="Nombre hotel"
            onChange={handleChange}
          />
        </div>
        <div className="w-ful md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Precio por noche
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="number"
            name="price"
            value={inputs.price || 0}
            placeholder="Precio por noche"
            onChange={handleChange}
          />
        </div>
        <div className="w-ful md:w-1/3 px-3 mb-6 md:mb-0 flex items-center">
          <label className="form-check-label inline-block text-gray-800 pr-2">
            Incluye alimentacion?
          </label>
          <input
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            name="lunch"
            value={inputs.lunch || false}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-ful px-3 mb-6 md:mb-0">
          <button
            className="block bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Guardar
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
