import "../css/App.css";
import iconCalculator from "../assets/images/icon-calculator.svg";
import iconKarma from "../assets/images/icon-karma.svg";
import iconSupervisor from "../assets/images/icon-supervisor.svg";
import iconTeam from "../assets/images/icon-team-builder.svg";

function Card() {
  return (
    <div className="wrapper">
      <div className="layout-grid">
        <div className="col">
          <CardItem
            title="Supervisor"
            description="Monitors activity to identify project roadblocks"
            image={iconSupervisor}
            borderColor="cyan"
          />
        </div>
        <div className="col">
          <CardItem
            title="Team Builder"
            description="Scans our talent network to create the optimal team for your project"
            image={iconTeam}
            borderColor="red"
          />
          <CardItem
            title="Karma"
            description="Regularly evaluates our talent to ensure quality"
            image={iconKarma}
            borderColor="orange"
          />
        </div>
        <div className="col">
          <CardItem
            title="Calculator"
            description="Uses data from past projects to provide better delivery estimates"
            image={iconCalculator}
            borderColor="blue"
          />
        </div>
      </div>
    </div>
  );
}

const CardItem = ({ title, description, image, borderColor }) => (
  <div className={`card border-${borderColor}`}>
    <h2 className="card__title">{title}</h2>
    <p>{description}</p>
    <img className="card__img" src={image} alt="icon" />
  </div>
);

export default Card;
