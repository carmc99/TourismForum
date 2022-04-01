import { useSession } from "next-auth/react";
import React, { useState } from "react";
import useFormData from "../../hooks/useFormData";
import Button from "@material-tailwind/react/Button";


const CommentForm = () => {
  const star = (param) => {
    return clicked[param] ? "fa-solid fa-star cursor-pointer" : "fa-regular fa-star cursor-pointer";
  };

  const { form, formData, updateFormData } = useFormData(null);

  const submitForm = (e) => {
    e.preventDefault();
  };

  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = (e, index) => {
    e.preventDefault();
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      if (i <= index) clickStates[i] = true;
      else clickStates[i] = false;
    }

    setClicked(clickStates);
  };

  const session = useSession();
  const user = session.data?.user;
  return (
    <div>
      <ul>
        <li className="py-2 sm:py-2">
          <form
            ref={form}
            onChange={updateFormData}
            onSubmit={submitForm}
            className="flex items-center space-x-4"
          >
            <div className="flex-shrink-0">
              <img className="w-16 h-16 rounded-full" src={user?.image} />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex justify-center">
                <textarea
                  rows="3"
                  placeholder="Comentario"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                />
              </div>
            </div>
            <div className="flex-0 min-w-0">
              <div className="flex justify-center">
                <p>Calificar: </p>
                <i onClick={(e) => handleStarClick(e, 0)} className={star(0)} />
                <i onClick={(e) => handleStarClick(e, 1)} className={star(1)} />
                <i onClick={(e) => handleStarClick(e, 2)} className={star(2)} />
                <i onClick={(e) => handleStarClick(e, 3)} className={star(3)} />
                <i onClick={(e) => handleStarClick(e, 4)} className={star(4)} />
              </div>
            </div>
            <div className="inline-flex items-center">
              <Button color="blue" size="lg" ripple="dark" type="submit">
                Comentar
              </Button>
            </div>
          </form>
        </li>
      </ul>
    </div>
  );
};

export default CommentForm;
