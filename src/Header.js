import { BsFillCloudMoonFill } from 'react-icons/bs';
import { LuSunMoon } from 'react-icons/lu';
import { useGlobalContext } from './context';

const Header = () => {
  const { toggleDarkTheme, isLightTheme } = useGlobalContext();
  return (
    <div className="header flex flex-jc-sb">
      <h1>TODO</h1>

      <button className="toggle__btn" onClick={toggleDarkTheme}>
        {isLightTheme ? (
          <LuSunMoon className="toggle__icon" />
        ) : (
          <BsFillCloudMoonFill className="toggle__icon" />
        )}
      </button>
    </div>
  );
};
export default Header;
