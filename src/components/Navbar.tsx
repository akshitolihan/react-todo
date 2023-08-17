import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <section className="max-w-4xl mx-auto ">
          <ul className="list-none flex justify-between">
            <li className="text-lg font-semibold text-green-400">
              <Link to="/">Todo - X</Link>
            </li>
            <li className="text-lg font-semibold text-green-400">
              <Link to="">Start Creating ToDo</Link>
            </li>
          </ul>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
