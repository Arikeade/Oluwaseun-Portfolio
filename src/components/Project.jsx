import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImgOne from "../assets/img/first.png";
import projImgTwo from "../assets/img/second.png";
import projImg1 from "../assets/img/Screenshot (121).png";
import projImg3 from "../assets/img/third.png";
import projImg4 from "../assets/img/fifth.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const firstProjects = [
    {
      title: "Fahuz Support Group",
      description: "An NGO Organization Website",
      imgUrl: projImgOne,
      link: "https://fahuz-support-group.vercel.app/",
    },
    {
      title: "SFMIS ",
      description: "Financial Reports",
      imgUrl: projImgTwo,
      link: "https://sfmis.vercel.app/",
    },
    {
      title: "Huddle Clone",
      description: "Commercial App",
      imgUrl: projImg3,
      link: "https://coding-challenge-five.vercel.app/",
    },
  ];

  const secondProjects = [
    {
      title: "E-commerce",
      description: "E-commerce Website",
      imgUrl: projImg1,
      link: "https://afrimash.vercel.app/",
    },
    {
      title: "PUSH FOUNDATION",
      description: "NGO Organization",
      imgUrl: projImg4,
      link: "https://push-foundation.vercel.app/",
    },
    {
      title: "E-commerce Website",
      description: "Media & Entertainment",
      imgUrl: projImg3,
      link: "https://afrimash.vercel.app/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Leadership offers an opportunity to make a difference in
                    someone’s life, no matter what the project
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {firstProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {secondProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Being a Software Developer is like being an artist,
                          you have the different colored process streams
                          combining into a work of art!!!
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
