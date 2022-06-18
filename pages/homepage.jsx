import Head from "../src/components/head.jsx";
import Header from "../src/components/header.jsx";
import TYPEWRITER from "typewriter-effect";
import style from "../styles/Home.module.css";
import React from "react";
import {
	BsGithub,
	BsTwitter,
	BsYoutube,
	BsReddit,
	BsTwitch,
} from "react-icons/bs";

export default class Homepage extends React.Component {
	render() {
		return (
			<>
				{/* <Head /> */}

				<div style={{ width: "100%" }}>
					{/* <Header /> */}
					<div
						className={`${style.center}`}
						style={{
							height: "50%",
							backgroundColor: "#2d2d30",
							borderRadius: "25px",
							padding: "25px",
							paddingTop: "250px"
						}}
					>

						<p
							className={style.center}
							style={{
								top: "90%",
								position: "fixed",
								width: "max-content",
								transform: "translate(-50%, -50%)",
								fontSize: "20px",
							}}
							id="typewriter"
						>
							<TYPEWRITER
								options={{ loop: true }}
								onInit={(typewriter) => {
									typewriter
										.typeString("I use Nodejs")
										.pauseFor(2500)
										.deleteAll()
										.typeString("I use Github")
										.pauseFor(2500)
										.deleteAll()
										.typeString("I use VS code ")
										.pauseFor(2500)
										.deleteAll()
										.start();
								}}
							/>
						</p>

						<div
							className={`${style.bio}`}
							style={{ marginLeft: "40%" }}
						>
							<button>
								<a href="https://github.com/nigelrex">
									<BsGithub size={40}></BsGithub>
								</a>
							</button>
							<button>
								<a href="https://twitter.com/rajaneesh__r">
									<BsTwitter
										size={40}
										style={{
											color: "rgb(0, 153, 255)",
										}}
									></BsTwitter>
								</a>
							</button>
							<button>
								<a
									href="https://www.youtube.com/channel/UCc-pXjppgghkd_8XyDLbGhA"
									style={{ top: "3px" }}
								>
									<BsYoutube
										size={40}
										style={{
											color: "red",
										}}
									></BsYoutube>
								</a>
							</button>
							<button>
								<a href="https://reddit.com/r/Nigelrex">
									<BsReddit
										size={40}
										style={{ color: "orangered" }}
									></BsReddit>
								</a>
							</button>
							<button>
								<a href="https://discord.com/users/738032578820309072">
									<img
										src={"/Discordv2.png"}
										width={40}
										height={40}
									></img>
								</a>
							</button>
							<button>
								<a href="https://www.twitch.tv/nigelrex">
									<BsTwitch
										size={40}
										style={{ color: "#6441A4" }}
									></BsTwitch>
								</a>
							</button>
						</div>
					</div>
				</div>
			</>
		);
	}
}
