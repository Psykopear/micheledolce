import Link from "next/link";

const Header = () => {
  return (
    <nav id="hamnav">
      <div className="left">
        <a className="header-left" href="/">
          <b>MICHELE DOLCE</b>
        </a>
      </div>

      <div className="right">
        <label htmlFor="hamburger">&#9776;</label>
        <input type="checkbox" id="hamburger" />
        <div id="hamitems">
          <Link href="/research">Research</Link>
          <Link href="/teaching">Teaching</Link>
          <Link href="/seminars">Seminars</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
