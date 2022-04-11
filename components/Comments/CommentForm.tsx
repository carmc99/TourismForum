import { useSession, signOut } from "next-auth/react";
import React, { useState } from "react";
import useFormData from "../../hooks/useFormData";
import { useMutation } from "@apollo/client";
import ReactLoading from "react-loading";
import { STORE_COMMENT } from "../../graphql/mutations/comments";
import { toast } from "react-toastify";

const CommentForm = (props: any) => {
  const [addComment, { loading, error }] = useMutation(STORE_COMMENT);
  const session = useSession();
  const user: any = session.data?.user;
  if (loading) {
    <main className="flex items-center justify-center">
      <ReactLoading type="cylon" color="black" height={"7%"} width={"7%"} />
    </main>;
  }
  if (error) {
    toast.error(error.message);
  }

  const star = (param: any) => {
    return clicked[param]
      ? "fa-solid fa-star cursor-pointer"
      : "fa-regular fa-star cursor-pointer";
  };
  const { form, formData, updateFormData } = useFormData(null);

  const submitForm = async (e: any) => {
    e.preventDefault();
    if (!user) {
      signOut();
    }
    await addComment({
      variables: {
        data: {
          description: formData.comment,
          score: getScore(clicked),
          user: {
            connect: {
              id: user?.id,
            },
          },
          post: {
            connect: {
              id: props.posId,
            },
          },
        },
      },
    });
    toast.success("Registro almacenado con exito");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const getScore = (scores: any) => {
    let i = 0;
    while (scores[i]) {
      i++;
    }
    return i;
  };

  const handleStarClick = (e: any, index: any) => {
    e.preventDefault();
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      if (i <= index) clickStates[i] = true;
      else clickStates[i] = false;
    }

    setClicked(clickStates);
  };

  return (
    <form
      ref={form}
      onChange={updateFormData}
      onSubmit={submitForm}
      className="flex mb-4"
    >
      <div className="flex-1/2  mt-3">
        <div className="flex-shrink-0">
          <img className="w-16 h-16 rounded-full" src={user?.image} />
        </div>
      </div>
      <div className="flex-1  m-3">
        <textarea
          rows={3}
          required={true}
          name="comment"
          placeholder="Comentario"
          className="resize-none block px-8 w-full border rounded py-2 text-gray-700 focus:outline-none items-center max-h-150"
        />
      </div>
      <div className="flex-1/2  flex justify-center items-center">
        <p className="pr-2">Calificar: </p>
        <i onClick={(e) => handleStarClick(e, 0)} className={star(0)} />
        <i onClick={(e) => handleStarClick(e, 1)} className={star(1)} />
        <i onClick={(e) => handleStarClick(e, 2)} className={star(2)} />
        <i onClick={(e) => handleStarClick(e, 3)} className={star(3)} />
        <i onClick={(e) => handleStarClick(e, 4)} className={star(4)} />
      </div>
      <div className="flex-1/2 flex justify-center items-center p-3">
        <button
          className="block bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          {loading ? <span>Cargando...</span> : <span>Comentar</span>}
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
