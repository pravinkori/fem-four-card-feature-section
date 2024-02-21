import "../css/App.css";
import iconCalculator from "../assets/images/icon-calculator.svg";
import iconKarma from "../assets/images/icon-karma.svg";
import iconSupervisor from "../assets/images/icon-supervisor.svg";
import iconTeam from "../assets/images/icon-team-builder.svg";

function Card() {
  return (
    <>
      <div className="wrapper">
        <div className="layout-grid">
          <div className="col">
            <div className="card border-cyan">
              <h2 className="card__title">Supervisor</h2>
              <p>Monitors activity to identify project roadblocks</p>
              <img className="card__img" src={iconSupervisor} alt="icon" />
            </div>
          </div>
          <div className="col">
            <div className="card border-red">
              <h2 className="card__title">Team Builder</h2>
              <p>
                Scans our talent network to create the optimal team for your
                project
              </p>
              <img className="card__img" src={iconTeam} alt="" />
            </div>
            <div className="card border-orange">
              <h2 className="card__title">Karma</h2>
              <p>Regularly evaluates our talent to ensure quality</p>
              <img className="card__img" src={iconKarma} alt="" />
            </div>
          </div>
          <div className="col">
            <div className="card border-blue">
              <h2 className="card__title">Calculator</h2>
              <p>
                Uses data from past projects to provide better delivery
                estimates
              </p>
              <img className="card__img" src={iconCalculator} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
