import React from "react";
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return(
        <>
            <div className="header_div">
                <div className="logo"><span>Keep Notes</span></div>
                <div className="search_div">
                    <div className="search_icon">
                        <SearchIcon />
                    </div>
                    <input 
                        type="text"
                        placeholder="Search Your Note"
                    />
                </div>
            </div>
        </>
    );
}

export default Header;