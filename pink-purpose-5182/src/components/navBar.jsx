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
    Text,
    Box,
    Image,
    Divider,
    Input,
    InputRightElement,
    InputGroup
} from '@chakra-ui/react';
import { ChevronDownIcon, DeleteIcon,SearchIcon } from '@chakra-ui/icons';
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
import { Link } from "react-router-dom";
import { GoPencil } from "react-icons/go";
import { RiCoupon2Fill, RiTruckLine } from "react-icons/ri";
import { CiLogout, CiLogin } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccessibilityNew } from "react-icons/md";
import axios from "axios";
import {
    Alert,
    AlertIcon,
} from '@chakra-ui/react';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from '@chakra-ui/react'




function DrawerSearch() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <img style={{ marginTop: "2px", cursor: "pointer", width: "20px", height: "20px" }} src="./images/Search.png" alt="" onClick={onOpen} />
            <Drawer
                isOpen={isOpen}
                placement='top'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type="text"
                                placeholder='Search Products..'
                            />
                            <InputRightElement width='4.5rem'>
                                <SearchIcon/>
                            </InputRightElement>
                        </InputGroup>
                    </DrawerBody>

                    <DrawerFooter>
                        {/* <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button> */}
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

function DrawerExample({ status }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [cartData, Setdata] = useState([])
    const [counter, setcount] = useState(1)
    const [price, Setprice] = useState(0)
    const [relprops, setprops] = useState(true)
    const [remStatus, setRemStatus] = useState(false)

    console.log(price)

    const handleInc = () => {
        setcount(counter + 1)
    }
    const handleDec = () => {
        setcount(counter - 1)
    }

    const handleDel = (e) => {
        setRemStatus(true)
        axios.delete(`https://koovs-api.onrender.com/cartdata/${e.target.value}`)
        setTimeout(() => {
            setprops(!relprops)
            setRemStatus(false)
        }, 1000)
    }


    function RenderData() {
        axios.get("https://koovs-api.onrender.com/cartdata")
            .then((req) => {
                Setdata(req.data)
                // Setprice(price+req.data.price)
                let total = 0
                req.data.forEach(element => {
                    total += (element.oprice * element.quantity)
                });
                Setprice(total)
            })
    }

    useEffect(() => {
        RenderData()
    }, [relprops, status])




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
                    {
                        cartData.length == 0 ? <Box><Image width={"60%"} margin="auto" mt={140} src="./images/empty.png" /> <Text textAlign={"center"} ml={10} mt={50} fontSize={"25px"} textDecoration="underline">Your Cart is Empty!</Text> </Box> :
                            <Text fontSize={"18px"} ml={7} pb={1}>Congrats! You are eligible for <span style={{ fontWeight: "600" }}>FREE Shipping</span></Text>
                    }


                    {
                        remStatus ? <Alert mt={2} status='success' alignItems='center'
                            justifyContent='center'
                            textAlign='center' variant='subtle'>
                            <AlertIcon />
                            Product is Successfully Removed From Cart
                        </Alert> : ""
                    }
                    <DrawerBody>


                        <Box width={"94%"}>
                            <Box mt={5}>
                                {
                                    cartData?.map((ele, ind) => {
                                        return (


                                            <Box width={"100%"} pb={"5px"} mb={"5px"} borderBottom={"1px solid rgba(0, 0, 0, 0.200)"} key={ind} >
                                                <Box display="flex" >
                                                    <Image src={ele.image1} width="17%" />
                                                    <Box ml={5}>
                                                        <Text>{ele.info}</Text>

                                                        <Text mt={2}>Rs. {ele.oprice}.00</Text>
                                                        <Box display="flex" alignItems={"center"}>
                                                            {/* <Button bgColor={"white"} _hover={{ backgroundColor: "white" }} onClick={handleDec} isDisabled={counter == 1}><MinusIcon /></Button>
                                                                {counter}
                                                                <Button bgColor={"white"} _hover={{ backgroundColor: "white" }} onClick={handleInc} style={{ cursor: "pointer" }}><GoPlus /></Button> */}
                                                            <Text>Quantity: {ele.quantity}</Text>
                                                            <Button fontSize="20px" bgColor={"rgba(255, 0, 0, 0.464)"} position={"relative"} left={"190px"} bottom={"25px"} onClick={(e) => handleDel(e)} value={ele.id}><DeleteIcon /></Button>
                                                        </Box>



                                                    </Box>


                                                </Box>
                                            </Box>
                                        )
                                    })
                                }

                            </Box>
                        </Box>
                    </DrawerBody>




                    <DrawerFooter bgColor={"#f5f5f5"} display={cartData.length == 0 ? "none" : "block"} marginTop={cartData.length == 0 ? "340px" : "0px"}>

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
                                        <Text fontSize={"18px"} fontWeight={500}>Rs. {price * counter}.00</Text>
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


function Navbar({ status }) {

    const [loginStatus, SetLoginStatus] = useState(false)



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
               <Link to={"/"}> <img width={"150px"} style={{ marginTop: "10px", marginLeft: "-30px" }} src="./images/Sitelogo.jpeg" alt="luv" /></Link>
            </div>
            <div style={{ marginRight: "60px", width: "10%", display: "flex", justifyContent: "space-between", marginTop: "20px" }}>

                <DrawerSearch />

                {
                    loginStatus ? <Popover isLazy>
                        <PopoverTrigger>
                            <img style={{ cursor: "pointer", width: "22px", height: "22px" }} src="./images/account.png" alt="" />
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverHeader fontWeight='semibold'>
                                <Box display={"flex"}>
                                    <Image
                                        boxSize='4rem'
                                        borderRadius='full'
                                        src='./images/Screenshot 2023-04-01 195020.png'
                                        alt='Fluffybuns the destroyer'
                                        mr='12px'
                                    />
                                    <Text mt={"17px"} ml={1}>Luv Kumar</Text>
                                </Box>
                            </PopoverHeader>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>
                                <Box cursor={"pointer"} display={"flex"} mt={2} justifyContent={"space-between"} width="100%" >
                                    <Box><Text>Your Profile</Text></Box>
                                    <Box mt={1}><CgProfile /></Box>
                                </Box>
                                <Divider />
                                <Box cursor={"pointer"} display={"flex"} mt={2} justifyContent={"space-between"} width="100%" >
                                    <Box><Text fontWeight={"500"}>Logout</Text></Box>
                                    <Box mt={1}><CiLogout /></Box>
                                </Box>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover> : <Popover isLazy>
                        <PopoverTrigger>
                            <img style={{ cursor: "pointer", width: "22px", height: "22px" }} src="./images/account.png" alt="" />
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverHeader fontWeight='semibold'>
                                <Text fontSize={"20px"}>Login or Singup</Text>
                            </PopoverHeader>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>
                                <Box cursor={"pointer"} display={"flex"} mt={2} justifyContent={"space-between"} width="100%" >
                                    <Box><Text fontSize="18px">Login</Text></Box>
                                    <Box mt={1}><CiLogin /></Box>
                                </Box>
                                <Divider />
                                <Box cursor={"pointer"} display={"flex"} mt={2} justifyContent={"space-between"} width="100%" >
                                    <Box><Text fontSize="18px">Singup</Text></Box>
                                    <Box mt={1}><MdOutlineAccessibilityNew /></Box>
                                </Box>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                }
                <img style={{ marginTop: "-2px", cursor: "pointer", width: "25px", height: "25px" }} src="./images/star.png" alt="" />

                <DrawerExample status={status} />
            </div>


        </div>

    )
}

export default Navbar