import styles from '../styles/Home.module.css'
const Navbar = () => {
    return (
      <nav>
          <div className={styles.wrapper}>
            <div className="logo">
            <h1>CodeChamps</h1>
            </div>
            <a>Home</a>
            <a>About</a>
            <a>Login</a>
          </div>
      </nav>
  );
  }
   
  export default Navbar;