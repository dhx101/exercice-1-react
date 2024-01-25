import React from "react";

const Header = ({ data }) => {
	return (
		<header>
			<div>
				<img src={data.logo.img} alt="Instant Gaming"></img>
			</div>
			<div>
				<ul>
					{data.links.map((item, index) => (
						<li key={index}>
							<a href={item.url}>{item.text}</a>
						</li>
					))}
				</ul>
				<ul>
					{data.menu.map((item, index) => (
						<li key={index}>
							<a href={item.url}>{item.text}</a>
						</li>
					))}
				</ul>
			</div>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="Icono"></img>
                <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="Icono"></img>
            </div>
		</header>
	);
};

export default Header;
