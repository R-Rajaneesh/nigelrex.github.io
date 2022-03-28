import React from "react";
import HeadNext from "next/head";
import { BsCompass, BsHouseFill } from "react-icons/bs";
class Head extends React.Component {
  render() {
    return (
			<HeadNext>
				<title>Nigelrex - Homepage</title>
				<meta
					name="description"
					content="Nigelrex's Webpage"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<link rel="icon" href="/logo.ico" />
				<meta name="HandheldFriendly" content="True" />
				<meta name="MobileOptimized" content="320" />
			</HeadNext>
		);
  }
}

export default Head;
