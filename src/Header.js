const Header = () => {
  const colorThemes = document.querySelectorAll('[name="theme"]');

  const storeTheme = function (theme) {
    localStorage.setItem('theme', theme);
  };

  const setTheme = function () {
    const activeTheme = localStorage.getItem('theme');
    colorThemes.forEach((themeOption) => {
      if (themeOption.id === activeTheme) {
        themeOption.checked = true;
      }
    });
    //fallback for no :has() support
    document.documentElement.className = activeTheme;
  };
  const handleTheme = (e) => {
    if (e.target.classList.contains('input')) {
      storeTheme(e.target.id);
      document.documentElement.className = e.target.id;
    }
  };
  document.onload = setTheme();
  return (
    <div className="header flex flex-jc-sb">
      <h1>TODO</h1>
      <fieldset
        onClick={handleTheme}
        className="header__toggle toggle"
        aria-label="theme toggle"
        role="radiogroup"
      >
        {' '}
        <div className="toggle__wrapper">
          <input
            type="radio"
            name="theme"
            className="input"
            id="dark"
            defaultChecked
          />
          <input type="radio" name="theme" className="input" id="light" />
          <div className="toggle__icon-wrapper flex">
            <i className="fa-sharp fa-regular fa-sun toggle__icon"></i>{' '}
            <i className="fa-solid fa-moon toggle__icon" aria-hidden="true"></i>
          </div>
          <span aria-hidden="true" className="toggle__background">
            {' '}
          </span>
          <span aria-hidden="true" className="toggle__switcher"></span>
        </div>
        <label htmlFor="light" className="visually-hidden">
          Light mode
        </label>
        <label htmlFor="dark">Dark Mode</label>
      </fieldset>
    </div>
  );
};
export default Header;
