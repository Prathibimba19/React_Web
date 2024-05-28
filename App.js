import React from "react"
import ReactDom from "react-dom/client"

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

const Body = () =>
    {
        return ( 
            <>
            <div className="body-container">
                <h2 className="team-page-heading">MEET OUR TEAM</h2>
                <div className="search">Search</div>
                <div className="team-container">
                <Team/>
                <Team/>
                <Team/>
                <Team/>
                <Team/>
                <Team/>
                <Team/>
                <Team/>
                </div>
            </div>
            </>
        )
    }

const Team = () =>
    {
        return(
            <>
            <div class="team-card">
                <img src="https://raw.githubusercontent.com/Prathibimba19/React_Web/main/IMG-20240504-WA0019.jpg" alt="Team Member" class="team-img"/>
                <div class="team-info">
                    <h3 class="team-name">Bhavana R</h3>
                    <p class="team-role">Senior Artist</p>
                <div/>
            </div>
</div>
            </>
        )
    }

const AppLayout = () =>
    {
        return(<>
            <Header/>
            <Body/>
            
            </>
        )
    }



const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
