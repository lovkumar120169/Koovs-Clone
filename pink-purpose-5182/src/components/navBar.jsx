import { useState,useEffect } from "react"
import Dropdown from "./mendropdown"
import WomanDropdown from "./womanDropdown";
import "./navBar.css"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'


function Navbar() {
  




   

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", justifyContent: "space-around", width: "30%",marginLeft:"20px" }}>
                <Menu>
                    <MenuButton as={Button}  _hover={{backgroundColor:"white"}} rightIcon={<ChevronDownIcon />} style={{ border: "none", marginTop: "10px", fontSize: "15px"}} bgColor="white" height="40px">
                        Men
                    </MenuButton>
                    <MenuList bgColor="white" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", width: "125%", height: "600px", borderRadius: "5px", marginTop: "-5px" }}>
                        <Dropdown/>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton as={Button}  _hover={{backgroundColor:"white"}} rightIcon={<ChevronDownIcon />} style={{ border: "none", marginTop: "10px", fontSize: "15px" }} bgColor="white" height="40px">
                        Women
                    </MenuButton>
                    <MenuList bgColor="white" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", width: "100%", height: "600px", borderRadius: "5px", marginTop: "-5px" }}>
                        <WomanDropdown/>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton as={Button}  _hover={{backgroundColor:"white"}} rightIcon={<ChevronDownIcon />} style={{ border: "none", marginTop: "10px", fontSize: "15px" }} bgColor="white" height="40px">
                        Artist collab
                    </MenuButton>
                    <MenuList  bgColor="white" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", width: "140%", borderRadius: "5px", marginTop: "-5px", padding: "10px" }}>
                        <MenuItem className="menu-item" color="rgba(0, 0, 0, 0.656)">George Thomas</MenuItem>
                        <MenuItem className="menu-item" color="rgba(0, 0, 0, 0.656)">Boomranng</MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton as={Button}  _hover={{backgroundColor:"white"}} rightIcon={<ChevronDownIcon />} style={{ border: "none", marginTop: "10px", fontSize: "15px" }} bgColor="white" height="40px">
                        Collections
                    </MenuButton>
                    <MenuList bgColor="white" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", width: "140%", borderRadius: "5px", marginTop: "-5px", padding: "10px" }}>
                        <MenuItem className="menu-item" color="rgba(0, 0, 0, 0.656)">Summer Tees</MenuItem>
                        <MenuItem className="menu-item" color="rgba(0, 0, 0, 0.656)">Varsity</MenuItem>
                    </MenuList>
                </Menu>

            </div>
            <div style={{ marginRight: "220px" }}>
                <img width={"120px"} style={{ marginTop: "10px" }} src="./images/Sitelogo.jpeg" alt="luv" />
            </div>
            <div style={{ marginRight: "60px", width: "10%", display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                <img  style={{ marginTop: "2px", cursor: "pointer",width:"20px",height:"20px" }} src="./images/Search.png" alt="" />
                <img  style={{ cursor: "pointer",width:"22px",height:"22px"  }} src="./images/account.png" alt="" />
                <img  style={{ marginTop: "-2px", cursor: "pointer",width:"25px",height:"25px"  }} src="./images/star.png" alt="" />
                <img  style={{ cursor: "pointer",width:"20px",height:"20px" }} src="./images/bag.png" alt="" />
            </div>


        </div>

    )
}

export default Navbar