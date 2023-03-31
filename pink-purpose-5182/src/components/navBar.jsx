import React from "react";
import { useState, useEffect } from "react"
import Dropdown from "./mendropdown"
import WomanDropdown from "./womanDropdown";
import "./navBar.css"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Input,
    Text,
    Box
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    DrawerFooter
} from '@chakra-ui/react';
import { GoPencil } from "react-icons/go";
import { RiCoupon2Fill, RiTruckLine } from "react-icons/ri";

{/* <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Open
        </Button> */}
function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <img style={{ cursor: "pointer", width: "20px", height: "20px" }} src="./images/bag.png" alt="" ref={btnRef} onClick={onOpen} />
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={"md"}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader mt={-2} fontSize={"2xl"}>Shopping Cart</DrawerHeader>

                    
                    <DrawerBody>
                    <Text fontSize={"18px"}>Congrats! You are eligible for <span style={{ fontWeight: "600" }}>FREE Shipping</span></Text>

                    </DrawerBody>

                    <DrawerFooter bgColor={"#f5f5f5"} paddingTop={"15px"} marginTop="340px">
                        
                        <Box width={"100%"}>
                            <Box display={"grid"} gridTemplateColumns={"repeat(3,30%)"} width={"100%"} fontSize={"17px"} fontWeight={500} textAlign={"center"} ml={5}>
                                <Box borderRight={"2px solid #e5e7eb"}>
                                    <GoPencil style={{ marginLeft: "60px" }} />
                                    <Text>Note</Text>
                                </Box>
                                <Box borderRight={"2px solid #e5e7eb"}>
                                    <RiTruckLine style={{ marginLeft: "60px" }} />
                                    <Text>Shipping</Text>
                                </Box>
                                <Box>
                                    <RiCoupon2Fill style={{ marginLeft: "60px" }} />
                                    <Text>Coupan</Text>
                                </Box>
                            </Box>

                            <Box>
                                <br />
                                <Box display={"block"}>
                                    <Box display={"flex"} p={5} justifyContent="space-between">
                                        <Text>Shipping:</Text>
                                        <Text>FREE</Text>
                                    </Box>
                                </Box>
                                <br />
                                <Box display={"block"} mt={-39}>
                                    <Box display={"flex"} padding="0px 20px 0px 20px" justifyContent="space-between">
                                        <Text fontSize={"18px"} fontWeight={500}>Subtotal:</Text>
                                        <Text fontSize={"18px"} fontWeight={500}>Rs. 1999.00</Text>
                                    </Box>
                                </Box>
                                <Text fontSize={"14px"} textAlign="right" textDecoration={"underline"} mt={5} mr={5}>5% Extra off on UPI</Text>
                                <Button bgColor={"black"} color={"white"} width={"94%"} ml={5}>Place order</Button>
                            </Box>
                        </Box>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}


function Navbar() {







    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
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
                <img width={"150px"} style={{ marginTop: "10px", marginLeft: "-30px" }} src="./images/Sitelogo.jpeg" alt="luv" />
            </div>
            <div style={{ marginRight: "60px", width: "10%", display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                <img style={{ marginTop: "2px", cursor: "pointer", width: "20px", height: "20px" }} src="./images/Search.png" alt="" />
                <img style={{ cursor: "pointer", width: "22px", height: "22px" }} src="./images/account.png" alt="" />
                <img style={{ marginTop: "-2px", cursor: "pointer", width: "25px", height: "25px" }} src="./images/star.png" alt="" />

                <DrawerExample />
            </div>


        </div>

    )
}

export default Navbar