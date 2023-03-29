import React from "react"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'


function Header() {
    return (

        <div style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px", fontSize: "15px", fontFamily: "Roboto, sans-serif" }}>
            <div style={{ display: "flex", margin: "0px 70px 0px 70px", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>

                    <img width={"20px"} height="20px" style={{ marginTop: "15px", paddingRight: "10px" }} src="https://lh3.googleusercontent.com/bn0zSqzWB0IwAo1LOGD18O76YCLYNhHTqR6pg3sD4ezgKi_lMeoV_4hm4dSu3fs6aNcb3a-JEGlKriKeAeSJ_XSEOV1LMw548aB7bLardQO49d07eUZNzp-ozHXG8e0_5biZVdpl2HaFDbkQLjPYrgktq4if2Ui8LbukTJmJT74mkCmFFInOEh9ZXnLfQQ2YLwgPF--dYUjTtfvHQxIYKyF90mcK7YMX8otvbGQGehXAYBfOUW2w0PsXQ3P6sdyTch9IgIAmmw8zew1ndenUaqtF_28YrodX0KwA1GGC7vKD9Nj6hulunaVrsmFkPZbqjpgUE8dH7q9MGYJQXBOWsevrYK4XMlmd7GKQH-aT9iRDhPDs97lNG4jqaGIRNN11Ta7n52FalppUr96KNDl5R-rvkm7GxYK0hLjjBBYUNekAPBngBR7pVE4VI7Q2-LSxPWwDjisDqkJLo00dicSYdyWarZk-3aSzVZafFRmmU2FKNI96AKbxx1jvO_Tc4VVkJkFagqH5U0ASxIjyKCvTbb9bR4DXRPQE152W_T5_AOpPExHUGsG31kED-AI6t5lgxG0rcLJj1q4lyWoTuqCTmjyqqMuI5xZVCwjq-I4tvi27WWw8e-RRewBAwap9A4TqQHmPNceAuiBm7WR0MMQSb1GWc77km5vY3pA6TnrZaj_y9yCfOtW0n0jo2Q8-Wt8xbMBy86XP8eKQn_x5m_nKq-lOqdEb_ya3yWoEQfZSIqbzpMJmHqckQr16MQwBzttyxMKal-aLgzP0eg-Go_g_HG-pj6DPVtfLG-4qX79-KwCacXdwn43GRypw8zpXYHEzGKsBhCJXKw8wmH9srYswa9TiFeaE45CE_yuHo7EKxcUEuekcNpPdSgHwFFoJD2P08u46DWS5GWG2nW0YEolRNq_HvUK3NwJOJzi3_WJkD5IAkczw6lqlfwYTRmNNXrC10yf39DjkNegsZDSgaTrIOjU=w626-h626-s-no?authuser=0" alt="luv" />
                    <p style={{ marginRight: "20px" }}>1.5M Followers</p>
                    <img width={"20px"} height="20px" style={{ marginTop: "15px", paddingRight: "10px" }} src="https://lh3.googleusercontent.com/QdkFnkPLgf1nQtWTz3O21rM9kLoKkaSJn61Ni6ZGwqfEEjLfnT-k3yjt2XUs9y7MHyE8X8Z4itvZouQ02SVkB5ops2AMrb76ibNwgS6yYYkmgu09quD7pDU22SB9vW1VLKV2KPI5cGyhM63gfblFYsguuXPPUZIqo3l_JldPPWB8CpjHjgQjkwVB94XaSg42XJheGHI4SNp5Qf5A3LYvCdHaewgb_dbOlDy8IwtPr9r0U-9AubNHZbxijO6MwWEimT0aF0iSpvWRAlX3wnQniacChTYBLfs_w24deTY2hdYFbjXn5pKJAB_fHfrc1AFDzgZwINDM9VUzu_U6ClrcIrt95K0e-ABabgw4lguYYS3hJedJbsPTRz5QpiXFcWtpQEK0NJV3Xsg_kUqf8kJ-IfVbVKbtlwFJgzS3fxpPrvbFkX5MINCFEsiQdv86waFeXUje6hBgZcCSJj5d7Olj2jwPuBiM7GvRYP7NygwFbOLm4uEwmBGgepqzdfqU5Q69Ki_MCJwgQzWTMPAvfZqr0YJO-qRLGEwKr8O0Ffe7GWv43_rgKRaTn3mDd4_y4OLbbdUAHGReJKDSt47OoroGpu17QtpOiNak6f4dMbJHYJiOLhtAaSmKC7s3ojsLQJ2Loj7XAj6TugmMr8dT3k0tT_e-kim2SFkWjTG_cAZBo5URk1QYKgDZyEVsnkNN1vl2P4MiWaAmSq-PCT5PbWoyaNGzOXVWRmK4E08h8atGGwipwjD2m9gSJS9IVK1Ur5ZtdwKxwdxE0H5XiwRhxGXTZpxXIo7JjCXlT9FFZCnBfDqfy5CJ0nXPgUZUiXX2qjOmnqNJHKFiwE7aoXF8T9k8w-1EdMThbme9zw6KTak85b00gCSa_SrHkMvF3U_Z9qj5Q3utNgCRwUG9Aa2HKgajkFy9oEI6iSKQLDlS5by9rdtTdC8X_RN4I_X1VmuPaGkxDkDtYQRfYfvyx6I2guUP1C8=w512-h512-s-no?authuser=0" alt="luv" />
                    <p>628k Followers</p>
                </div>
                <div style={{ marginLeft: "-210px" }}>
                    <p>Open doors to a world of fashion | Young and fresh</p>

                </div>

                <div style={{}}>
                    <select name="" id="" style={{ border: "none", marginTop: "15px", fontSize: "16px" }}>
                        <option value="">English</option>
                    </select>
                </div>
            </div>

        </div>
    )
}

export default Header