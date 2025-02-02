import sun from "../../../assets/sun.svg";
import moon from "../../../assets/moon.svg";

export const ThemeToggle = () => {
  return (
    <label className="switch">
      <input id="toggle-switch" type="checkbox" />
      <span className="slider round">
        <i>
          <img src={sun} className="color-theme-icon" alt="light mode" />
        </i>
        <i>
          <img src={moon} className="color-theme-icon" alt="dark mode" />
        </i>

        <span className="z-index-10"></span>
      </span>
    </label>
  );
};
