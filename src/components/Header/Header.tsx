import { Link } from "react-router-dom";
import { DiCssdeck } from "react-icons/di";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import './HeaderStyles.css'


export default function Header() {
  return (
    <div className="container">
      <div className="Div1">
        <Link to="/">
          <a style={{ display: "flex", alignItems: "center", color: "white" ,marginBottom:'20'}}>
            <DiCssdeck size="3rem" /> <span>Portfolio</span>
          </a>
        </Link>
      </div>
      <div className="Div2">
        <li>
          <Link to="#projects">
            <a className='NavLink'>Projects</a>
          </Link>
        </li>
        <li>
          <Link to="#tech">
            <a className="NavLink">Technologies</a>
          </Link>
        </li>
        <li>
          <Link to="#about">
            <a className="NavLink">About</a>
          </Link>
        </li>
      </div>
       <div className="Div3">
         <a className="SocialIcons" href="https://google.com">
           <AiFillGithub size="3rem" />
         </a>
         <a className="SocialIcons" href="https://google.com">
           <AiFillLinkedin size="3rem" />
         </a>
         <a className="SocialIcons" href="https://google.com">
           <AiFillInstagram size="3rem"/>
         </a>
       </div>
    </div>
  );
}

