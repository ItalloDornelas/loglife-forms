import { AppBarStyled, ToolbarStyled, Nav } from "./styles";
import { CgMenuGridO } from "react-icons/cg";
import { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useHistory } from "react-router";
import useWindowDimensions from "../../utils/windowDimensions/windowDimentions";
import { useAuth } from "../../provider/auth/auth";

export default function Header() {
  const token = localStorage.getItem("@token");
  const [openMenu, setOpenMenu] = useState(false);
  const { logout } = useAuth();

  const { width } = useWindowDimensions();

  const history = useHistory();
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleRedirect = (path: string) => {
    history.push(path);

    handleMenu();
  };

  return (
    <>
      <CssBaseline />
      <AppBarStyled openMenu={openMenu}>
        <ToolbarStyled openMenu={openMenu}>
          <h1>
            <h2 onClick={() => history.push("/")}>
              Log<span>.</span>Life
            </h2>
            {Number(width) < 888 && (
              <div className="icon" onClick={handleMenu}>
                {openMenu ? "x" : <CgMenuGridO />}
              </div>
            )}
          </h1>
          {openMenu || Number(width) > 888 ? (
            <>
              <Nav>
                <ul>
                  <li
                    className="btn-1"
                    onClick={() => handleRedirect("/dashboard")}
                  >
                    Serviços
                  </li>
                  <li
                    className="btn-1"
                    onClick={() => handleRedirect("/registerMember")}
                  >
                    Tornar-se membro
                  </li>
                  <li
                    className="btn-1"
                    onClick={() => handleRedirect("/listMember")}
                  >
                    Lista de Membros
                  </li>
                  {token ? (
                    <li className="btn-1" onClick={() => logout(history)}>
                      Logout
                    </li>
                  ) : (
                    <li
                      className="btn-1"
                      onClick={() => handleRedirect("/login")}
                    >
                      Login
                    </li>
                  )}
                </ul>
              </Nav>
            </>
          ) : (
            <></>
          )}
        </ToolbarStyled>
      </AppBarStyled>
    </>
  );
}
