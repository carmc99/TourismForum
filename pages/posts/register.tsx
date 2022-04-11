import React from "react";
import { useState } from "react";
import validator from "validator";
import { useSession } from "next-auth/react";
import ReactLoading from "react-loading";
import { BIOMES } from "../../graphql/queries/biomes";
import { toast } from "react-toastify";
import { getCountries } from "../../services/countryService";
import { Country, Location } from "../../prisma/generated/type-graphql";
import { STORE_POST } from "../../graphql/mutations/posts";
import { useQuery, useMutation } from "@apollo/client";

const RegisterForm = () => {
  const [inputs, setInputs] = useState({});
  const user = useSession().data;
  const [addPost, { loading }] = useMutation(STORE_POST);
  const { load, err, countriesData } = getCountries();
  if (load)
    return (
      <main className="flex items-center justify-center">
        <ReactLoading type="cylon" color="black" height={"7%"} width={"7%"} />
      </main>
    );
  if (err) {
    toast.error(err.message);
  }
  const { countries } = countriesData;
  const locations = countries[0].locations;

  const validate = (value: any) => {
    if (!value) {
      return false;
    }
    return validator.isURL(value);
  };

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await addPost({
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
              id: inputs.location,
            },
          },
        },
      },
    });
    if (response.errors) {
      toast.error("Ha ocurrido un problema al intentar almacenar el post");
    }
    toast.success("Post creado con exito");
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
              {BIOMES.map((biome) => (
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
              {countries.map((country: Country) => (
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
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="location"
            required={true}
            onChange={handleChange}
          >
            <option value="">Seleccione una opcion</option>
            {locations.map((location: Location) => (
              <option value={location.id}>{location.name}</option>
            ))}
          </select>
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
            {loading ? <span>Guardando...</span> : <span>Guardar</span>}
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
