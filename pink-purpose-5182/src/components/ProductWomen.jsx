import React, { useReducer } from "react";
import { Box, Button, Heading, Text,Divider } from "@chakra-ui/react";
import { useEffect, useState} from "react";
import axios from 'axios';
import CardCreation from "./cardCreation";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'
import { ChevronDownIcon,RepeatIcon,ChevronRightIcon } from '@chakra-ui/icons';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react';
import { Checkbox, Stack } from '@chakra-ui/react';
import { MdViewHeadline,MdFormatAlignJustify } from "react-icons/md";
import { productGetRequestW, productGetSuccessW, productGetFaliureW, filterFunctionW,filterFunctionCategoeryW } from "../Redux/WomenPReducer/action"

import SkeletonModel from "./SkeletonModel";
import Navbar from "./navBar";
import { useParams } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
  



function Drawerfun() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const { category } = useParams()
    const dispatchh = useDispatch()
    const [filterDataArr, SetfilterDataArr] = useState([])
    const [filterDataArrCategoery, SetfilterDataArrCategoery] = useState([])

    const handleCheckboxChange = (checkboxName) => {
        if (filterDataArr.includes(checkboxName)) {
            let fData = filterDataArr;
            for (let i = 0; i < filterDataArr.length - 1; i++) {

                if (fData[i] == checkboxName) {
                    let temp = fData[i]
                    fData[i] = fData[fData.length - 1];
                    fData[fData.length - 1] = temp;
                }
            }
            fData.pop()
            SetfilterDataArr(fData)
            dispatchh(filterFunctionW(fData))
        } else {
            SetfilterDataArr([...filterDataArr, checkboxName])
            let newArr = [...filterDataArr, checkboxName]
            // filterDataArr.push(checkboxName)
            dispatchh(filterFunctionW(newArr))
        }


    };

    const handleCheckboxChangeforCategoery = (checkboxName) => {
        if (filterDataArrCategoery.includes(checkboxName)) {
            let fData = filterDataArrCategoery;
            for (let i = 0; i < filterDataArrCategoery.length - 1; i++) {

                if (fData[i] == checkboxName) {
                    let temp = fData[i]
                    fData[i] = fData[fData.length - 1];
                    fData[fData.length - 1] = temp;
                }
            }
            fData.pop()
            SetfilterDataArrCategoery(fData)
            dispatchh(filterFunctionCategoeryW(fData))
        } else {
            SetfilterDataArrCategoery([...filterDataArrCategoery, checkboxName])
            let newArr = [...filterDataArrCategoery, checkboxName]
            // filterDataArr.push(checkboxName)
            dispatchh(filterFunctionCategoeryW(newArr))
        }


    };



    // useEffect(() => {
    //     // This effect will run after each render
    //     RenderData()
    // }, [checkboxes]);
    return (
        <>
            <Button ref={btnRef} bgColor="white" _hover={{ backgroundColor: "white" }} onClick={onOpen} rightIcon={<ChevronDownIcon />}>
                Filter
            </Button>
            {category ? <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader fontSize={"25px"} mt={-2}>Filter</DrawerHeader>
                    <DrawerBody>
                        <Heading fontSize={"20px"} fontWeight={400}>Brand</Heading>
                        <br />
                        <Stack spacing={5} ml={3} direction="column">
                            <Checkbox isChecked={filterDataArr.includes("Koovs")} onChange={() => handleCheckboxChange('Koovs')}>
                                Koovs
                            </Checkbox>
                            <Checkbox isChecked={filterDataArr.includes("The Couture Club")} onChange={() => handleCheckboxChange('The Couture Club')}>
                                The Couture Club
                            </Checkbox>
                            <Checkbox isChecked={filterDataArr.includes("The cult sweatshirt")} onChange={() => handleCheckboxChange('The cult sweatshirt')}>
                                The cult sweatshirt
                            </Checkbox>
                            <Checkbox isChecked={filterDataArr.includes("Bravesoul")} onChange={() => handleCheckboxChange('Bravesoul')}>
                                Bravesoul
                            </Checkbox>
                            <Checkbox isChecked={filterDataArr.includes("BALL Copenhagen")} onChange={() => handleCheckboxChange('BALL Copenhagen')}>
                                BALL Copenhagen
                            </Checkbox>
                            <Checkbox isChecked={filterDataArr.includes("Essentials By Koovs")} onChange={() => handleCheckboxChange('Essentials By Koovs')}>
                                Essentials By Koovs
                            </Checkbox>
                            <Checkbox isChecked={filterDataArr.includes("Garcon")} onChange={() => handleCheckboxChange('Garcon')}>
                                Garcon
                            </Checkbox>
                        </Stack>

                    </DrawerBody>

                </DrawerContent>
            </Drawer> : <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader fontSize={"25px"} mt={-2}>Filter</DrawerHeader>
                    <DrawerBody>
                        <Heading fontSize={"20px"} fontWeight={400}>Product Type</Heading>
                        <br />
                        <Stack spacing={5} ml={3} direction="column">
                        <Checkbox isChecked={filterDataArrCategoery.includes("T-shirt")} onChange={() => handleCheckboxChangeforCategoery('T-shirt')}>
                        T-shirt
                            </Checkbox>
                            <Checkbox isChecked={filterDataArrCategoery.includes("top")} onChange={() => handleCheckboxChangeforCategoery('top')}>
                               Top
                            </Checkbox>
                            <Checkbox isChecked={filterDataArrCategoery.includes("sweatshirts")} onChange={() => handleCheckboxChangeforCategoery('sweatshirts')}>
                                Sweatshirts
                            </Checkbox>
                            <Checkbox isChecked={filterDataArrCategoery.includes("bra")} onChange={() => handleCheckboxChangeforCategoery('bra')}>
                                Bra
                            </Checkbox>
                            <Checkbox isChecked={filterDataArrCategoery.includes("shorts")} onChange={() => handleCheckboxChangeforCategoery('shorts')}>
                                Shorts
                            </Checkbox>
                        </Stack>
                        <br />
                        <Heading fontSize={"20px"} fontWeight={400}>Brand</Heading>
                        <br />
                        <Stack spacing={5} ml={3} direction="column">
                            <Checkbox isChecked={filterDataArr.includes("Koovs")} onChange={() => handleCheckboxChange('Koovs')}>
                                Koovs
                            </Checkbox>
                            <Checkbox isChecked={filterDataArr.includes("The Couture Club")} onChange={() => handleCheckboxChange('The Couture Club')}>
                                The Couture Club
                            </Checkbox>
                            <Checkbox isChecked={filterDataArr.includes("The cult sweatshirt")} onChange={() => handleCheckboxChange('The cult sweatshirt')}>
                                The cult sweatshirt
                            </Checkbox>
                            <Checkbox isChecked={filterDataArr.includes("Bravesoul")} onChange={() => handleCheckboxChange('Bravesoul')}>
                                Bravesoul
                            </Checkbox>
                            <Checkbox isChecked={filterDataArr.includes("BALL Copenhagen")} onChange={() => handleCheckboxChange('BALL Copenhagen')}>
                                BALL Copenhagen
                            </Checkbox>
                            <Checkbox isChecked={filterDataArr.includes("Essentials By Koovs")} onChange={() => handleCheckboxChange('Essentials By Koovs')}>
                                Essentials By Koovs
                            </Checkbox>
                            <Checkbox isChecked={filterDataArr.includes("Garcon")} onChange={() => handleCheckboxChange('Garcon')}>
                                Garcon
                            </Checkbox>
                        </Stack>

                    </DrawerBody>

                </DrawerContent>
            </Drawer>}
        </>
    )
}

const initState={
    _sort:"",
    _order:""
}


const reducer=(state,action)=>{
    if(action.type=="asc"){
        return{
            ...state,
            _sort:"oprice",
            _order:action.payload
        }
    }
    else if(action.type=="desc"){
        return{
            ...state,
            _sort:"oprice",
            _order:action.payload
        }
    }
    else if(action.type=="ascname"){
        return{
            ...state,
            _sort:"info",
            _order:action.payload
        }

    }
    else if(action.type=="dscename"){
        return{
            ...state,
            _sort:"info",
            _order:action.payload
        }

    }
    else if(action.type=="reset"){
        return initState;
    }
}

function WomenProduct() {
    const [state,dispatch]=useReducer(reducer,initState)
    const [page, Setpage] = useState(1)
    const [gridSize,setgridSize]=useState(4)
    const [totBtn,SettotBtn]=useState(0)
    const [skeleton,setSkeleton] = useState(true);
    const brandfilter = useSelector((store) => store.WomenProductReducer.brandfilter)
    const categoeryfilter = useSelector((store) => store.WomenProductReducer.categoeryfilter)
    const Products = useSelector((store) => store.WomenProductReducer.Products)
    const dispatchh = useDispatch()
    const {category}=useParams()
    console.log(category)

    function RenderData() {
        dispatchh(productGetRequestW())
        axios.get(`https://koovs-api-data.onrender.com/mens?gender=women&_limit=15&_page=${page}`,{
            params: { ...state, brand:brandfilter,category:[...categoeryfilter,category] }
        })
            .then((req) => {
                setSkeleton(true)
                console.log(req.data)
                dispatchh(productGetSuccessW(req.data))
                let totalData=req.headers["x-total-count"]
                totalData=Math.ceil(totalData/15)
                SettotBtn(totalData)
                setSkeleton(false)
            }).catch((err) => {
                console.log(err)
                dispatchh(productGetFaliureW())
            })
    }

    const handleClick = (e) => {
        Setpage(e.target.innerText)
    }

    const handleClickGrid=(e)=>{
        setgridSize(e.target.value)
    }
    let newArray = new Array(totBtn).fill(0)

    useEffect(() => {
        RenderData()
    }, [page,gridSize,state,brandfilter,categoeryfilter]);

    
    
    return (
        <Box>
            <Navbar/>
            <Heading size={"2xl"} textAlign="center" fontWeight={"400"} mb={30} mt={10}>Products</Heading>
            <Text textAlign={"center"} mb={30}>Home <ChevronRightIcon /> Products <ChevronRightIcon /> Women <ChevronRightIcon/> {category}</Text>
            <Box mt={100} mb={5} marginLeft="75px" display={"flex"} justifyContent="space-between">
                <Box>
                    <Menu>
                        <Drawerfun />
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} bgColor="white" _hover={{ backgroundColor: "white" }} style={{ fontWeight: "600", fontSize: "14px" }} rightIcon={<ChevronDownIcon />}>
                            Featured
                        </MenuButton>
                        <MenuList >
                            <MenuItem onClick={(e)=>dispatch({type:"ascname",payload:e.target.value})} value={"asc"}>Alphabetically, A-Z</MenuItem>
                            <MenuItem onClick={(e)=>dispatch({type:"descname",payload:e.target.value})} value={"desc"}>Alphabetically, Z-A</MenuItem>
                            <MenuItem onClick={(e)=>dispatch({type:"asc",payload:e.target.value})} value={"asc"}>Price, low to high</MenuItem>
                            <MenuItem onClick={(e)=>dispatch({type:"desc",payload:e.target.value})} value={"desc"}>Price, high to low</MenuItem>
                            <Divider />
                            <MenuItem onClick={(e)=>dispatch({type:"reset"})}>Reaset  <RepeatIcon ml={130} mt={1}/></MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box mr={50} display="flex" justifyContent={"space-between"} width={"9%"}>
                    <Button onClick={(e)=>handleClickGrid(e)} value={"4"} bgColor="rgba(255, 0, 0, 0.464)" borderRadius="100px"><MdViewHeadline size={"30px"}/></Button>
                    <Button onClick={(e)=>handleClickGrid(e)} value={"5"} bgColor="rgba(255, 0, 0, 0.464)" borderRadius="100px"><MdFormatAlignJustify size={"25px"}/></Button>
                </Box>
            </Box>

            {
                 Products.length==0?<div style={{padding:"20px",fontSize:"30px",fontWeight:"400",textAlign:"center",width:"100%"}}>Oops! It looks like the product is not listed...</div>:""
            }

            <Box style={{ display: "grid", gridTemplateColumns:gridSize==5?"repeat(5,15%)":"repeat(4,20%)", gap: "20px 50px", justifyContent: "center" }}>
                {
                    skeleton?<SkeletonModel size={15}/>:
                    Products?.map((ele, ind) => {
                        return <CardCreation props={ele} key={ind} size={gridSize} />

                    })
                }
            </Box>
            


            <Box display={"flex"} justifyContent="center" gap={"2px"} margin="auto" mt={50}>
                {
                    newArray?.map((ele, ind) => {
                        return (
                            <Button key={ind} borderRadius="100px" isDisabled={page == ind + 1} bgColor={page == ind + 1 ? "black" : ""} color={page == ind + 1 ? "white" : ""} onClick={(e) => handleClick(e)}>{ind + 1}</Button>
                        )
                    })
                }
            </Box>

        </Box>
    )
}

export default WomenProduct;