import { ThemeDarkIcon } from "./Icons";
import Logo from "../assets/img/logo.jpg";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Logo"/>
        <span>React Reading List</span>
      </div>
      <div className="theme-switcher">
        <button>
            <ThemeDarkIcon />
        </button>
        <button>Show</button>
      </div>
    </header>
  );
}
