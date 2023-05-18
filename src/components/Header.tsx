import { Link, useNavigate } from "react-router-dom";
function Header() {
  const applicationName = "KASH0622";
  const assignments = ["Tic Tac Toe", "redux demo"];
  const navItems = [
    {
      name: "Assignments",
      type: "text",
      options: assignments,
    },
  ];
  const navigate = useNavigate();
  const navigatelink = (name) => {
    if (name === "redux") {
      navigate("/home/redux", { state: { name } });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a
          className="navbar-brand ms-2"
          href="#"
          style={{ display: "block", paddingTop: "15px", fontSize: "18px" }}
        >
          {applicationName}
        </a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          {navItems.map((item, i) => (
            <li key={i} className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown{i}"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {item.name}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown{i}">
                {item.options.map((option, j) => (
                  <li key={i + j}>
                    <a
                      className="dropdown-item"
                      onClick={() => navigatelink("redux")}
                      href="#"
                    >
                      {option}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
