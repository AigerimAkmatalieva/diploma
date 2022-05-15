import Navbar from "../Navbar/Nav";
import Logo from "../user-interface/Logo";
import classes from "./Drawer.module.css";

function Drawer({ open, toggle }) {
  const classNames = [classes.Drawer];
  if (open) {
    classNames.push(classes.open);
  }

  return (
    <div className={classNames.join(" ")}>
      <div onClick={toggle} className={classes.backdrop}></div>
      <div className={classes.content}>
        <Logo />
        <Navbar />
      </div>
    </div>
  );
}

export default Drawer; 