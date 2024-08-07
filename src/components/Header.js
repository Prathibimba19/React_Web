const Header = () =>
    {
        return(<>
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src="https://raw.githubusercontent.com/Prathibimba19/React_Web/main/pratibimba-05.png"/>
                </div>

                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>Gallery</li>
                        <li>Events</li>
                        <li>Team</li>
                        <li>About Us</li>
                    </ul>
                </div>
            </div>
            </>
        )
    }

export default Header();