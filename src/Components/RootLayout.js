import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import { Outlet , NavLink  } from "react-router-dom";

function RootLayout() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
        <>
       
		<header >
			<h3>LOGO</h3>
			<nav ref={navRef} onClick={showNavbar}>
				<NavLink to="/"   >Home </NavLink>
				<NavLink to="/work">My work</NavLink>
				<NavLink to="/blog">Blog</NavLink>
				<NavLink to="/me">about me</NavLink>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
        <main>
            <Outlet />
        </main>
        </>
    
	);
}

export default RootLayout;
