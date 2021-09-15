import "./index.css"

const themes = ["dark", "light"]
const changeTheme = (theme?: string, element?: HTMLElement): boolean => {
  if (theme) {
    if (typeof theme !== "string" || themes.indexOf(theme) !== -1) {
      throw `invalid theme: ${theme}`
    }
  }
  const html = document.getElementsByTagName("html")[0];
  const current = html.getAttribute("theme");
  const next = theme ? theme : themes[(themes.indexOf(current!) + 1) % themes.length];
  console.log(`changeTheme: ${current} => ${next}`);
  html.setAttribute("theme", next);
  return true;
}

export default changeTheme
export { changeTheme, themes }