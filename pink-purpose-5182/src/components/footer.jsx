import "./footerpart.css"
import { Input, Stack, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { EmailIcon, ArrowForwardIcon } from '@chakra-ui/icons'

function Footer() {
    return (
        <div style={{ backgroundColor: "#f5f5f5" }}>
            <div className="footer-div">
                <div className="footer-container">
                    <p>About</p>
                    <p>Our story</p>
                    <p>Contact us</p>
                    <p>Careers</p>
                    <p>Privacy policy</p>

                </div>
                <div className="footer-container">
                    <p>Support</p>
                    <p>Payments</p>
                    <p>Returns/Exchange</p>
                    <p>Shipment</p>
                    <p>Terms & conditions</p>

                </div>
                <div className="footer-container">
                    <p>Customer Care</p>
                    <p>Timings: 10 AM - 6 PM (Mon - Sat) <br />
                        Call: +91 7011263423 <br />
                        E-Mail: care@koovs.com</p>

                </div>
                <div className="footer-container">
                    <p>Subscribe</p>
                    <p>Enter your email below to be the first to know <br /> about new collections and product launches.</p>
                    <Stack spacing={4}>
                        <InputGroup>
                            <InputLeftElement
                                style={{ marginTop: "9px", marginLeft: "10px" }}
                                fontSize='20px'
                                children={<EmailIcon />}
                            />
                            <Input placeholder='Enter Your Email' style={{ width: "70%", padding: "10px", paddingLeft: "40px", borderRadius: "5px", border: "none", fontSize: "17px" }} />
                            <InputRightElement style={{ marginTop: "13px", marginRight: "80px" }} children={<ArrowForwardIcon color='green.500' />} />
                        </InputGroup>
                    </Stack>

                </div>
            </div>


            <div className="last-footer">
                <div>
                    <img width={"15px"} height="15px" style={{ marginTop: "15px", paddingRight: "10px" }} src="https://lh3.googleusercontent.com/bn0zSqzWB0IwAo1LOGD18O76YCLYNhHTqR6pg3sD4ezgKi_lMeoV_4hm4dSu3fs6aNcb3a-JEGlKriKeAeSJ_XSEOV1LMw548aB7bLardQO49d07eUZNzp-ozHXG8e0_5biZVdpl2HaFDbkQLjPYrgktq4if2Ui8LbukTJmJT74mkCmFFInOEh9ZXnLfQQ2YLwgPF--dYUjTtfvHQxIYKyF90mcK7YMX8otvbGQGehXAYBfOUW2w0PsXQ3P6sdyTch9IgIAmmw8zew1ndenUaqtF_28YrodX0KwA1GGC7vKD9Nj6hulunaVrsmFkPZbqjpgUE8dH7q9MGYJQXBOWsevrYK4XMlmd7GKQH-aT9iRDhPDs97lNG4jqaGIRNN11Ta7n52FalppUr96KNDl5R-rvkm7GxYK0hLjjBBYUNekAPBngBR7pVE4VI7Q2-LSxPWwDjisDqkJLo00dicSYdyWarZk-3aSzVZafFRmmU2FKNI96AKbxx1jvO_Tc4VVkJkFagqH5U0ASxIjyKCvTbb9bR4DXRPQE152W_T5_AOpPExHUGsG31kED-AI6t5lgxG0rcLJj1q4lyWoTuqCTmjyqqMuI5xZVCwjq-I4tvi27WWw8e-RRewBAwap9A4TqQHmPNceAuiBm7WR0MMQSb1GWc77km5vY3pA6TnrZaj_y9yCfOtW0n0jo2Q8-Wt8xbMBy86XP8eKQn_x5m_nKq-lOqdEb_ya3yWoEQfZSIqbzpMJmHqckQr16MQwBzttyxMKal-aLgzP0eg-Go_g_HG-pj6DPVtfLG-4qX79-KwCacXdwn43GRypw8zpXYHEzGKsBhCJXKw8wmH9srYswa9TiFeaE45CE_yuHo7EKxcUEuekcNpPdSgHwFFoJD2P08u46DWS5GWG2nW0YEolRNq_HvUK3NwJOJzi3_WJkD5IAkczw6lqlfwYTRmNNXrC10yf39DjkNegsZDSgaTrIOjU=w626-h626-s-no?authuser=0" alt="luv" />

                    <img width={"15px"} height="15px" style={{ marginTop: "15px", paddingRight: "10px" }} src="https://lh3.googleusercontent.com/QdkFnkPLgf1nQtWTz3O21rM9kLoKkaSJn61Ni6ZGwqfEEjLfnT-k3yjt2XUs9y7MHyE8X8Z4itvZouQ02SVkB5ops2AMrb76ibNwgS6yYYkmgu09quD7pDU22SB9vW1VLKV2KPI5cGyhM63gfblFYsguuXPPUZIqo3l_JldPPWB8CpjHjgQjkwVB94XaSg42XJheGHI4SNp5Qf5A3LYvCdHaewgb_dbOlDy8IwtPr9r0U-9AubNHZbxijO6MwWEimT0aF0iSpvWRAlX3wnQniacChTYBLfs_w24deTY2hdYFbjXn5pKJAB_fHfrc1AFDzgZwINDM9VUzu_U6ClrcIrt95K0e-ABabgw4lguYYS3hJedJbsPTRz5QpiXFcWtpQEK0NJV3Xsg_kUqf8kJ-IfVbVKbtlwFJgzS3fxpPrvbFkX5MINCFEsiQdv86waFeXUje6hBgZcCSJj5d7Olj2jwPuBiM7GvRYP7NygwFbOLm4uEwmBGgepqzdfqU5Q69Ki_MCJwgQzWTMPAvfZqr0YJO-qRLGEwKr8O0Ffe7GWv43_rgKRaTn3mDd4_y4OLbbdUAHGReJKDSt47OoroGpu17QtpOiNak6f4dMbJHYJiOLhtAaSmKC7s3ojsLQJ2Loj7XAj6TugmMr8dT3k0tT_e-kim2SFkWjTG_cAZBo5URk1QYKgDZyEVsnkNN1vl2P4MiWaAmSq-PCT5PbWoyaNGzOXVWRmK4E08h8atGGwipwjD2m9gSJS9IVK1Ur5ZtdwKxwdxE0H5XiwRhxGXTZpxXIo7JjCXlT9FFZCnBfDqfy5CJ0nXPgUZUiXX2qjOmnqNJHKFiwE7aoXF8T9k8w-1EdMThbme9zw6KTak85b00gCSa_SrHkMvF3U_Z9qj5Q3utNgCRwUG9Aa2HKgajkFy9oEI6iSKQLDlS5by9rdtTdC8X_RN4I_X1VmuPaGkxDkDtYQRfYfvyx6I2guUP1C8=w512-h512-s-no?authuser=0" alt="luv" />

                </div>
                <div>
                    <p>© NEWBRAVE VENTURE PRIVATE LIMITED</p>

                </div>

                <div>
                    <img src="https://lh3.googleusercontent.com/kvUkPQc-X04dy0lKcBl2dqWy0aj8tozyJ8iMRM8sbRTRb1gBFqI9Q3pCvfhigEsE-XIq1HUi4vWpie1iGRLs0hHLTzb6f0MO-PukuBFLLJRvee2O91YhV9vg-oi8kIglk0pG0p_51Z2H3SmquLltdccPzxpL4f8Z23j4H_5gA3gbZiKiboBfMzpVFwCOq68WuNId_zuqgIqtyQhYpyBxlmKZu0I9j8FdwXJNhQMPc7TWnRZ5jYq7XKIywJaj2Yrn7iEjMjTkbpfccbr735ouzJqNPVqM3qxjXe_YLh_UL6BCILlstKRBUCHDcis6c_THXwCxTEBzQea5L_YFqgNftzOQkDqZutjR8Hk5nELEERfp1JWD9v8a8WP6nmagmwLTQMjCUUXgfLjHOKZqiDH6SNLMS_HIjvUY5-lyvWbYnXVoP8GYRh0ZTlTKk3KJ6wSp4WJik7srCIGiNSiAxD3VDErIZK9sqUpwQdjOY97xorb5pkbmuYX-oTD3F-bXaSo7inbv2Ke6IaJHldtnoVwa3gBAJKbmpZkQ65uCUIbZ-dlQAX2Z5xEdMwOqc722oPHL4Peiff2Rs0DPEaegFRjaUB3v43m1vNiBkJ0a7tYDaH3pxKHPPu60ryIXM-nksE9hGdkZ3b9h6gpOilM128vNoDI-wS2LbCGQQPrvI-xMZlBnqpRHQ5IjssKxOXqoaBGZ2o0SU20RM-_xequo75qz055DLi46dI6roiSyu2vAwesDRD6QztsLuN9DLAj9togZxsa8zhhOwNjWCioG-ydvVE1CLxvXAgmH-UzGtC2Qp-uRIASb5b8KYd6MdweBdIet58aDZ3jVEX-ag6daC-8io6KJR91g5uj7uUKC8sp8losKbRmTKlZSfG7iSw0Jmtb_gaqUqpYQtiQRNb-w30r4UA3ISuiPk9QNDDrmGmoIvVU-MBgrULMb7Vq3mP9ZOkFpUwdEbCg7ZZRShpip48oPVPQ=w884-h103-s-no?authuser=0" alt="luv" />
                </div>

            </div>

        </div>
    )
}

export default Footer











