import MainHeader from "./MainHeader/MainHeader";
import "./HomePage.scss";
import ContainerStoryRules from "./ContainerStoryRules/ContainerStoryRules";
import theCollector from "../../assets/pictures/theCollector.png";

function HomePage() {
  return (
    <>
      <MainHeader />
      <main className="homePageElements">
        <img
          src={theCollector}
          alt=""
          className="homePageElements__mainCharacter"
        />
        <ContainerStoryRules />
      </main>
    </>
  );
}

export default HomePage;
