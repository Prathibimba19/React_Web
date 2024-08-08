import React, { useState } from "react"
import ReactDom from "react-dom/client"
import { teamList } from "./utils/teamData"

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
        const [filtList, setfiltList] = useState(teamList);
        const [searchText, setSearchText] = useState("");
        return ( 
            <>
            <div className="body-container">

                <h2 className="team-page-heading">MEET OUR TEAM</h2>
                <div className="filter">
                    <button className="filter-btn" onClick={()=>
                        {
                            const filtered = teamList.filter((mem)=> mem.role==="Artist");
                            setfiltList(filtered);
                        }
                    }>Artists</button>
                </div>
                <div className="search">
                    <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
                    <button onClick={()=>{
                        const filtered = teamList.filter((mem)=>mem.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfiltList(filtered);
                    }}>Search</button>
                </div>
                <div className="team-container">
                {
                    filtList.map((mem)=>(<Team key={mem.id} memData={mem}/>))
                }                
                </div>
            </div>
            </>
        )
    }

const Team = (props) =>
    {
        const {memData} = props;
        const {name, role, imageID, branch, year} = memData;
        const baseurl = "https://github.com/Prathibimba19/React_Web/blob/main/";
        const rawQuery = ".jpg?raw=true";
        const fullurl = baseurl + imageID + rawQuery;
        const [source, setSrc] = useState(fullurl);

        const handleError = () => {
            setSrc("https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjY4Ni0yODUtcC5wbmc.png");
          };

        return(
            <>
            <div class="team-card">
                <img src={source} alt="team-member" class="team-img" onError={handleError}/>
                <div class="team-info">
                    <h3 class="team-name">{name}</h3>
                    <p class="team-role">{role}</p>
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
