import "./CSS_Files/menDropdown.css"
import { Navigate } from "react-router-dom";
impo

function Dropdown(){

    const handletoProduct=()=>{
        
    }

    return(
        <div  className="container" style={{display:"flex",justifyContent:"space-between",fontSize:"14px",color:"rgba(0, 0, 0, 0.656)"}}>
            <div style={{padding:"20px"}}>
                <p onClick={handletoProduct}>Clothing</p>
                <p>New in</p>
                 <p>View all</p>
                <p>T-Shirt</p>
                <p>jackets & Coats</p>
                <p>Hoodies & Sweatshirts</p>
                <p>Sweatpants</p>
                <p>Shorts</p>
                <p>Co-ord sets</p>

            </div>
            <div style={{padding:"20px"}}>
                <p>Footwear</p>
                <p>View all</p>
                <p>Sneakers</p>
                <p>Slides</p>

            </div>
            <div style={{padding:"20px"}}>
                <p>Accessories</p>
                <p>Sunglasses</p>
                <p>Caps & Hats</p>
                <p>Pins</p>

            </div>
            <div style={{padding:"20px"}}>
                <p>Brands</p>
                <p>Essentials by koovs</p>
                <p>BALL Copenhagen</p>
                <p>Bravesoul</p>
                <p>The couture club</p>
                <p>Arkk copenhagen</p>
                <p>SHU</p>
                <p>Nike</p>
                <p>Tigerbear</p>
                <p>Keen</p>
                <p>5ive</p>
                <p>Kangol</p>
                <p>Comatoes</p>
                <p>Garcon</p>

            </div>
            <div style={{marginRight:"-150px"}}>
                <img style={{borderRadius:"0px 5px 5px 0px",width:"90%",marginTop:"-8px"}} src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/Screenshot_2022-11-10_at_5.37.53_PM.png?v=1668083230&width=533" alt="" />

            </div>
            
        </div>
    )
}

export default Dropdown;