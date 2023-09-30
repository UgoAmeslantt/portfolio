import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom/client";
const Menu = props => {
  return (
      <div className={`menu-container ${props.showMenu}`}>
        <div className="overlay" />
        <div className="menu-items">
          <ul>
            <li>
              <a href="#welcome-section" onClick={props.toggleMenu}>
                HOME
              </a>
            </li>
            <li>
              <a href="#about" onClick={props.toggleMenu}>
                ABOUT
              </a>
            </li>
            <li>
              <a href="#projects" onClick={props.toggleMenu}>
                PORTFOLIO
              </a>
            </li>
            <li>
              <a href="#contact" onClick={props.toggleMenu}>
                CONTACT
              </a>
            </li>
          </ul>
          <SocialLinks />
        </div>
      </div>
  );
};


/***********************
 Nav Component
 ***********************/

const Nav = props => {
  return (
      <React.Fragment>
        <nav id="navbar">
          <div className="nav-wrapper">
            <p className="brand">
              Ugo
              <strong>Ameslant</strong>
            </p>
            <a
                onClick={props.toggleMenu}
                className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
            >
              <span />
            </a>
          </div>
        </nav>
      </React.Fragment>
  );
};



/***********************
 Header Component
 ***********************/

const Header = props => {
  return (
      <header id="welcome-section">
        <div className="forest" />
        <div className="silhouette" />
        <div className="moon" />
        <div className="container">
          <h1>
            <span className="line">Je suis développeur </span>
            <span className="line">d'applications et d'applications web</span>
            <span className="line">
            <span className="color">&</span> code.
          </span>
          </h1>
          <div className="buttons">
            <a href="#projects">Mon portfolio</a>
            <a href="#contact" className="cta">
              Contactez-moi
            </a>
          </div>
        </div>
      </header>
  );
};


/***********************
 About Component
 ***********************/

const About = props => {
  return (
      <section id="about">
        <div className="wrapper">
          <article>
            <div className="title">
              <h3>Qui je suis?</h3>
              <p className="separator" />
            </div>
            <div className="desc full">
              <h4 className="subtitle">Mon nom est ugo</h4>
              <p>
                Je suis un jeune développeur, étudiant a Sophia Ynov Campus actuellement a la recherche d'une alternance.
              </p>
              <p>
                J'apprécie énormément résoudre des problèmes tout en créant des designs esthétiques et conviviaux. Mon insatiable soif d'apprentissage me pousse constamment à acquérir de nouvelles compétences, car plus j'en apprends, mieux c'est.
              </p>
            </div>
            <div className="title">
              <h3>Ce que je fait  ?</h3>
              <p className="separator" />
            </div>
            <div className="desc">
              <h4 className="subtitle">Je suis programmeur.</h4>
              <p>
                Je suis un développeur passionné avec une solide expérience dans des langages tels que Java, C, C++, C#, Python, ainsi qu'en gestion de bases de données SQL. Mon amour pour la programmation m'incite constamment à explorer de nouvelles opportunités et à relever des défis techniques passionnants. J'adore particulièrement tout ce qui concerne l'algorithmie et l'analyse de données, ce qui me pousse à développer des solutions innovantes pour résoudre des problèmes complexes.
              </p>

            </div>
            <div className="desc">
              <h4 className="subtitle">Aussi un développeur web</h4>
              <p>
                En ce qui concerne le développement front-end, je travaille généralement avec JavaScript,
                que ce soit de manière autonome ou en intégrant des frameworks populaires tels que ReactJS et VueJS.

              </p>

            </div>
          </article>
        </div>
      </section>
  );
};


/***********************
 Project Component
 ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node'
  };

  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return (
      <div className="project">
        <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
          <img className="project-image" src={props.img} alt={'Screenshot of ' + props.title} />
        </a>
        <div className="project-details">
          <div className="project-tile">
            <p className="icons">
              {props.tech.split(' ').map(t => (
                  <i className={tech[t]} key={t} />
              ))}
            </p>
            {props.title}{' '}
          </div>
          {props.children}
          <div className="buttons">
            <a href={repo} target="_blank" rel="noopener noreferrer">
              View source <i className="fas fa-external-link-alt" />
            </a>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Try it Live <i className="fas fa-external-link-alt" />
            </a>
          </div>
        </div>
      </div>
  );
};



/***********************
 Projects Component
 ***********************/

/***********************
 Projects Component

 <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">
 freeCodeCamp
 </a>
 ***********************/

const Projects = props => {
  return (
      <section id="projects">
        <div className="projects-container">
          <div className="heading">
            <h3 className="title">Mes Projets / experience </h3>
            <p className="separator" />
            <p className="subtitle">
              Découvrez un aperçu de mes réalisations variées qui reflètent ma passion pour le développement

            </p>
          </div>
          <div className="projects-wrapper">









            <Project
                title="Stage Maison de L'intelligence Artificielle."
                img={'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Tribute.jpg'}
                tech="js sass"
                link="https://stage-pied.vercel.app/"
                repo="https://stage-pied.vercel.app/"

            >
              <p>
                Développement d'une application qui explique le fonctionnement d'un neurone Artificiel
              </p>
            </Project>



          </div>
        </div>
      </section>
  );
};



/***********************
 Contact Component
 ***********************/

const Contact = props => {
  return (
      <section id="contact">
        <div className="container">
          <div className="heading-wrapper">
            <div className="heading">
              <p className="title">
                Vous voulez <br />
                me contacter ?
              </p>
              <p className="separator" />
              <p className="subtitle">
                S'il vous plaît, utilisez le formulaire ci-dessous ou envoyez un e-mail à ugo.ameslant@gmail.com:
                {''}
                <span className="mail">
                <i className="fas fa-at at" />

                <i className="fas fa-circle dot" />

              </span>

              </p>
            </div>
            <SocialLinks />
          </div>
          <form id="contact-form" action="#">
            <input placeholder="Name" name="name" type="text" required />
            <input placeholder="Email" name="email" type="email" required />
            <textarea placeholder="Message" type="text" name="message" />
            <input className="button" id="submit" value="Envoyer" type="submit" />
          </form>
        </div>
      </section>
  );
};



/***********************
 Footer Component
 ***********************/

const Footer = props => {
  return (
      <footer>
        <div className="wrapper">
          <h3>THANKS FOR VISITING</h3>
          <p>© {new Date().getFullYear()} Yago Estévez.</p>
          <SocialLinks />
        </div>
      </footer>
  );
};




/***********************
 Social Links Component
 ***********************/

const SocialLinks = props => {
  return (
      <div className="social">
        <a
            href="https://twitter.com/yagoestevez"
            target="_blank"
            rel="noopener noreferrer"
            title="Link to author's Twitter profile"
        >
          {' '}
          <i className="fab fa-twitter" />
        </a>
        <a
            id="profile-link"
            href="https://github.com/yagoestevez"
            target="_blank"
            rel="noopener noreferrer"
            title="Link to author's GitHub Profile"
        >
          {' '}
          <i className="fab fa-github" />
        </a>
        <a
            href="https://codepen.io/yagoestevez"
            target="_blank"
            rel="noopener noreferrer"
            title="Link to author's Codepen Profile"
        >
          {' '}
          <i className="fab fa-codepen" />
        </a>
      </div>
  );
};



/***********************
 Main Component
 ***********************/

class App extends React.Component {
  state = {
    menuState: false
  };

  toggleMenu = () => {
    this.setState(state => ({
      menuState: !state.menuState
          ? 'active'
          : state.menuState === 'deactive'
              ? 'active'
              : 'deactive'
    }));
  };

  render() {
    return (
        <React.Fragment>
          <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
          <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
          <Header />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </React.Fragment>
    );
  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
        header.style.visibility = header.style.visibility === 'hidden' && 'visible';
      else header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');

      else navbar.classList.remove('bg-active');

    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
          });
        }
      }
    })();
  }
}

export default App;