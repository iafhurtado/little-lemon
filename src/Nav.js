import Logo from "../icons_assets/Logo.svg";

function Nav() {
    return (
        <>
            <img href="Logo" alt="logo"></img>
            <ul>
                <li><a href="./home" alt="home">Home</a></li>
                <li><a href="./about" alt="about">About</a></li>
                <li><a href="./Menu" alt="menu">Menu</a></li>
                <li><a href="./Reservations" alt="reservations">Reservations</a></li>
                <li><a href="./Orderonline" alt="orderonline">Order Online</a></li>
                <li><a href="./Login" alt="login">Login</a></li>
            </ul>
        </>
    );
}

export default Nav;