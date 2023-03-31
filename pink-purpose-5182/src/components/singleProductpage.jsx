import { Box, Text, Heading, Image, Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { ChevronRightIcon, ViewIcon, SmallAddIcon, MinusIcon } from '@chakra-ui/icons'
import SinglePageSlider from "./singlepageSlider";
import CardCreation from "./cardCreation";
import { GoPlus } from "react-icons/go";
import SkeletonModel from "./SkeletonModel";






function SingleProduct() {
    const [dataValue, setData] = useState({})
    const [extraData, setExtraData] = useState([])
    const [SizeValue, setSize] = useState("S")
    const [val, setval] = useState(1)
    const [counter, setcount] = useState(1)
    const [render,setrender]=useState(true)
    const [skeleton,setSkeleton] = useState(true);
  
    console.log(extraData)
    function renderData() {
        axios.get("https://mushy-baseball-cap-clam.cyclic.app/mens/202")
            .then((req) => {
                setData(req.data)
            })
    }

    function ExtraData(dataValue) {
        axios.get(`https://mushy-baseball-cap-clam.cyclic.app/mens?brand=${dataValue.brand}&_limit=4`)
            .then((req) => {
                setExtraData(req.data)
                setSkeleton(false)
            })
    }

    const handelSize = (e) => {
        setSize(e.target.innerText)
    }

    const handleInc = () => {
        setcount(counter + 1)
    }
    const handleDec = () => {
        setcount(counter - 1)
    }
    


    useEffect(() => {
        renderData()
        setTimeout(()=>{
            ExtraData(dataValue)
            setrender(false)
        },1000)
    }, [render])


    return (
        <Box>
            <Text textAlign={"center"} mt={50}>Home <ChevronRightIcon />  Products <ChevronRightIcon /> {dataValue.info}</Text>

            <Box display={"flex"} ml={200} mt={10}>
                <Box width={"7%"}>
                    <Image width={"80%"} onClick={() => setval(1)} cursor="pointer" src={dataValue.image1} mb={5} />
                    <Image width={"80%"} onClick={() => setval(2)} cursor="pointer" src={dataValue.image2} />
                </Box>
                <Box width={"40%"}>
                    <Image width={"100%"} src={val == 1 ? dataValue.image1 : dataValue.image2} />
                </Box>
                <Box ml={10} width={"40%"}>
                    <Heading fontSize={"28px"} fontWeight="450" mb={5}>{dataValue?.info}</Heading>
                    <Heading fontSize={"28px"} fontWeight="450">Rs. {dataValue?.oprice}.00</Heading>
                    <Text mt={2} color={"rgba(0, 0, 0, 0.538)"}>Tax included</Text>

                    <Text mt={10}><ViewIcon mr={2} mt={-1} /> 27 people are viewing this right now</Text>

                    <Text mt={30} fontWeight="500">SIZE: <span style={{ fontWeight: "400" }}>{SizeValue}</span></Text>
                    <Box width={"27%"} display="flex" justifyContent="space-between" mt={30}>
                        <Button onClick={(e) => handelSize(e)} bgColor={SizeValue == "S" ? "black" : ""} color={SizeValue == "S" ? "white" : "black"}>S</Button>
                        <Button onClick={(e) => handelSize(e)} bgColor={SizeValue == "M" ? "black" : ""} color={SizeValue == "M" ? "white" : "black"}>M</Button>
                        <Button onClick={(e) => handelSize(e)} bgColor={SizeValue == "L" ? "black" : ""} color={SizeValue == "L" ? "white" : "black"}>L</Button>
                    </Box>

                    <Box>
                        <Text mt={10} fontWeight="500">Color: <span style={{ fontWeight: "400" }}>{dataValue?.color}</span></Text>
                        <Text mt={5} fontWeight="500" pr={70}>Description: <span style={{ fontWeight: "400" }}>{dataValue?.description}</span></Text>
                    </Box>
                    <Box mt={39}>
                        <Text fontWeight={500} >Quantity</Text>
                        <Box mt={5} border={"1px solid rgba(0, 0, 0, 0.538)"} borderRadius="5px" display="flex" color={"rgba(0, 0, 0, 0.538)"} fontSize={"25px"} width={"19%"} padding="2px 5px 2px 5px" justifyContent="space-between">
                            <Button bgColor={"white"} _hover={{ backgroundColor: "white" }} onClick={handleDec} isDisabled={counter == 1} style={{ cursor: "pointer" }}><MinusIcon /></Button>
                            {counter}
                            <Button bgColor={"white"} _hover={{ backgroundColor: "white" }} onClick={handleInc} style={{ cursor: "pointer" }}><GoPlus /></Button>
                        </Box>
                        <Box>
                            <Button mt={35} bgColor="black" color={"white"} width="100%">Add To Cart</Button>
                            <Button mt={5} width="100%">Buy Now</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>


            <Box mt={50}>
                <SinglePageSlider dis={dataValue?.description} />
            </Box>


            <Box>
                <Heading size={"2xl"} textAlign="center" fontWeight={"400"} mb={30} mt={100}> You Might Also Like</Heading>
                <Box style={{ display: "grid", gridTemplateColumns: "repeat(4,17%)", gap: "10px 20px", justifyContent: "center" }} mt={50}>
                    {
                        skeleton?<SkeletonModel size={4}/>:
                        extraData?.map((ele, ind) => {
                            return <CardCreation props={ele} key={ind} size={5} />

                        })
                    }
                </Box>

            </Box>
        </Box>
    )
}

export default SingleProduct