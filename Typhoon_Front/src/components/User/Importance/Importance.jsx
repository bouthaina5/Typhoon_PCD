import React, { useEffect } from "react";
import educationImage from "../../../assets/images/education.png";
import { useSelector, useDispatch } from "react-redux";
import { getEducations } from "../../../actions/educationAction";

const Education = ({ reff }) => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getEducations());
  }, [dispatch]);

  return (
    <section
      ref={reff}
      id="education"
      className="py-5"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <h2 className="h1-responsive font-weight-bold text-center mb-5">
          Importance
        </h2>

        <div className="row">
          <div className="col-lg-5 col-md-12 text-center text-lg-left">
            <img
              className="img-fluid mb-3 d-none d-lg-inline"
              src={educationImage}
              alt="education"
            />
          </div>

          <div className="col-lg-7">
            <div className="row mb-3">
              <p>
              La solution e-learning intégrée
à votre logiciel de management
Plateforme E-learning innovante
dédiée à la réussite pédagogique
de vos informations dans tous les
modules étudiés à l'ENSI.La solution e-learning intégrée
à votre logiciel de management
Plateforme E-learning innovante
dédiée à la réussite pédagogique
de vos informations dans tous les
modules étudiés à l'ENSI.La solution e-learning intégrée
à votre logiciel de management
Plateforme E-learning innovante
dédiée à la réussite pédagogique
de vos informations dans tous les
modules étudiés à l'ENSI.La solution e-learning intégrée
à votre logiciel de management
Plateforme E-learning innovante
dédiée à la réussite pédagogique
de vos informations dans tous les
modules étudiés à l'ENSI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
