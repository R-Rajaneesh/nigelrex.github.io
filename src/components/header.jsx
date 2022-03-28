import React from "react";
import { BsCompass, BsHouseFill } from "react-icons/bs";
class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="button-group">
          <img
            src="/logo.ico"
            style={{
              verticalAlign: "bottom",
              marginLeft: "5px",
              marginBottom: "2.5px",
            }}
          ></img>
          <button className="responsiveMenu">
            <a>
              <span className="icon">
                <BsCompass size={20} style={{ verticalAlign: "bottom" }} />
              </span>{" "}
              Menu
            </a>
          </button>
          <button id="LS">
            <a href=".">
              <span className="icon">
                <BsHouseFill size={20} style={{ verticalAlign: "bottom" }} />
              </span>{" "}
              Home
            </a>
          </button>
          {/* <button id="LS">
						<a href="https://github.com/nigelrex">
							{" "}
							<span className="icon">
								<BsGithub
									size={20}
									style={{
										verticalAlign: "bottom",
									}}
								/>
							</span>{" "}
							Github
						</a>
					</button> */}

          {/* <button id="LS">
						<a href="/chat">
							{" "}
							<span className="icon">
								<BsChat
									size={20}
									style={{
										verticalAlign: "bottom",
									}}
								/>
							</span>{" "}
							Chat
						</a>
					</button> */}
        </div>
      </header>
    );
  }
}

export default Header;
