import { useUpdateTheme } from "../context/ThemeContext"


const Footer = () => {
  const setTheme = useUpdateTheme();

  console.log("Footer rendered")
  return (
    <footer>
      <div>フッター</div>
    </footer>
  );
};

export default Footer;
