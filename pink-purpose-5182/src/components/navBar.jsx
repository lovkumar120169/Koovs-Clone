import React, { useState } from "react";
import Dropdown from "./mendropdown"
import WomanDropdown from "./womanDropdown";
import "./CSS_Files/navBar.css"
import logo from "../images/TrendZ.png"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Text,
    Box,
    Image,
    Divider,
    Input,
    InputRightElement,
    InputGroup
} from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    DrawerFooter,


} from '@chakra-ui/react';
import { Link,useNavigate } from "react-router-dom";
import { CiLogout, CiLogin } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { AiOutlineStar } from "react-icons/ai";

import DrawerExample from "./DrawerExample.jsx";
import { AuthContext } from "./Authcontext";
import { useContext } from "react";
import {useSelector} from "react-redux"




function DrawerSearch() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [errorText,SetErrorText]=useState(false)
    const navigate = useNavigate();
    const [searchText,SetSearchText]=useState("")
    const handleSearch = (e) => {
        e.preventDefault()
        if(searchText=="bra" || searchText=="top" || searchText=="Leggings"){
            navigate(`/products/women/${searchText}`);
        }else if(searchText=="T-shirts" || searchText=="sweatshirts" || searchText=="jacket" || searchText=="pants" || searchText=="shorts"){
            navigate(`/products/men/${searchText}`);
        }else{
            SetErrorText(true)
            SetSearchText("")
        }
        

    }

    return (
        <>
            <SearchIcon style={{ marginTop: "2px", cursor: "pointer", width: "18px", height: "19px" }} src="./images/Search.png" alt="" onClick={onOpen} />
            <Drawer
                zIndex="10"
                isOpen={isOpen}
                placement='top'
                onClose={onClose}
                finalFocusRef={btnRef}

            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />


                    <DrawerBody>
                   
                        <form onSubmit={(e)=>handleSearch(e)}>
                            <Image display="block" margin="auto" src={logo} />
                            <Text mt={7} mb={2} textAlign={"center"}>Explore our limited collection featuring T-shirts, sweatshirts, jacket, pants, and shorts, bra, top, Leggings.</Text>
                            <InputGroup display="block" margin="auto"  width={"50%"} onChange={(e)=>SetSearchText(e.target.value)}>
                                <Input
                                    pr='4.5rem'
                                    type="text"
                                    placeholder='Search Products..'
                                    width="100%"
                                    value={searchText}
                                />
                                <InputRightElement width='4.5rem'>
                                    <SearchIcon onClick={handleSearch} />
                                </InputRightElement>
                            </InputGroup>
                        </form>
                        <br/>
                        {errorText?<Text color="red" fontWeight="600" fontSize="20px" textAlign="center">Note: Unfortunately, the product is not in our database. We have limited Products</Text>:""}
                        
                    </DrawerBody>

                    <DrawerFooter>
                        
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}




export default function Navbar({ status }) {

    const { isAuth, SetisAuth } = useContext(AuthContext)
    const userName=useSelector((store)=>store.AuthReducer.userName)

    const handleAuth = () => {
        SetisAuth(false)
    }

    return (
        <div style={{ display: "flex", justifyContent: "space-between", position: "sticky", top: "0", backgroundColor: "white", zIndex: "9", boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px" }}>
            <div style={{ display: "flex", justifyContent: "space-around", width: "30%", marginLeft: "20px" }}>
                <Menu>
                    <MenuButton as={Button} _hover={{ backgroundColor: "white" }} rightIcon={<ChevronDownIcon />} style={{ border: "none", marginTop: "10px", fontSize: "15px" }} bgColor="white" height="40px">
                        Men
                    </MenuButton>
                    <MenuList bgColor="white" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", width: "125%", height: "600px", borderRadius: "5px", marginTop: "-5px" }}>
                        <Dropdown />
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton as={Button} _hover={{ backgroundColor: "white" }} rightIcon={<ChevronDownIcon />} style={{ border: "none", marginTop: "10px", fontSize: "15px" }} bgColor="white" height="40px">
                        Women
                    </MenuButton>
                    <MenuList bgColor="white" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", width: "100%", height: "600px", borderRadius: "5px", marginTop: "-5px" }}>
                        <WomanDropdown />
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton as={Button} _hover={{ backgroundColor: "white" }} rightIcon={<ChevronDownIcon />} style={{ border: "none", marginTop: "10px", fontSize: "15px" }} bgColor="white" height="40px">
                        Artist collab
                    </MenuButton>
                    <MenuList bgColor="white" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", width: "140%", borderRadius: "5px", marginTop: "-5px", padding: "10px" }}>
                        <MenuItem className="menu-item" color="rgba(0, 0, 0, 0.656)">George Thomas</MenuItem>
                        <MenuItem className="menu-item" color="rgba(0, 0, 0, 0.656)">Boomranng</MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton as={Button} _hover={{ backgroundColor: "white" }} rightIcon={<ChevronDownIcon />} style={{ border: "none", marginTop: "10px", fontSize: "15px" }} bgColor="white" height="40px">
                        Collections
                    </MenuButton>
                    <MenuList bgColor="white" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", width: "140%", borderRadius: "5px", marginTop: "-5px", padding: "10px" }}>
                        <MenuItem className="menu-item" color="rgba(0, 0, 0, 0.656)">Summer Tees</MenuItem>
                        <MenuItem className="menu-item" color="rgba(0, 0, 0, 0.656)">Varsity</MenuItem>
                    </MenuList>
                </Menu>

            </div>
            <div style={{ marginRight: "220px" }}>
                <Link to={"/"}> <img width={"150px"} style={{ marginTop: "10px", marginLeft: "-30px", paddingBottom: "10px" }} src={logo} alt="luv" /></Link>
            </div>
            <div style={{ marginRight: "60px", width: "10%", display: "flex", justifyContent: "space-between", marginTop: "20px" }}>

                <DrawerSearch />



                <Menu>
                    <MenuButton as={Box} cursor="pointer" >
                        <img style={{ width: "22px", height: "22px" }} src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Pic.png" alt="" />
                    </MenuButton>
                    {
                        isAuth ? <MenuList width="30px">


                            <MenuItem>
                                <Image width={"20%"} src="https://portkennedyps.wa.edu.au/wp-content/uploads/2017/06/user-icon-male.jpg" alt="" />
                                <Text ml={20}>{userName}</Text>
                            </MenuItem>
                            <Divider />

                            <MenuItem mb={1} pt={3} justifyContent="space-between">
                                Your Profile
                                <CgProfile />
                            </MenuItem>
                            <Divider />

                            <MenuItem onClick={handleAuth} justifyContent="space-between">
                                Logout
                                <CiLogout />
                            </MenuItem>

                        </MenuList> : <MenuList width="30px" textAlign="center">
                            <MenuItem fontSize="18px" mb={5} >
                                <Text >Signup or Login</Text>
                            </MenuItem>


                            <Link to="/login"><MenuItem mb={1} pt={3} justifyContent="space-between">
                                Login
                                <CiLogin />
                            </MenuItem></Link>
                            <Divider />

                            <Link to="/signup">
                                <MenuItem justifyContent="space-between">
                                    Signup
                                    <CgProfile />
                                </MenuItem>
                            </Link>

                        </MenuList>
                    }
                </Menu>
                <AiOutlineStar style={{ marginTop: "-2px", cursor: "pointer", width: "25px", height: "25px" }} />

                <DrawerExample status={status} />
            </div>


        </div>


    )
}




