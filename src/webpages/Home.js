import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Indent, SmallText, HeaderText, PageTitleText } from "../components/styleComponets/Layout"

export const Greeting = () => {
    const { isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <PageTitleText>Hello!</PageTitleText>
        )
    )
}
export const NewGreeting = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated &&(
            <div>
                <PageTitleText>Welcome Back {user.name}! </PageTitleText>
            </div>
            )
    )
}
export const Home = () => (
    <div style={{ width: "100%"}}>
            <PageTitleText> Hello! Welcome to the club!</PageTitleText>
            <Indent>
            <HeaderText>About Karma :</HeaderText>
            </Indent>
            <Indent>
            <Indent>
                <SmallText>
                    This is a project for deploying a club or organization attendence and point aggregation system with a POS.
                    {'\n'}{'\n'}The project can accomplish :
                </SmallText>
                <Indent>
                    <SmallText>
                        <ul>
                            <li><span> Tracking attendence   </span></li>
                            <li><span> An easy deploment system  </span></li>
                            <li><span> A Discord Bot   </span></li>
                            <li><span> A phone App   </span></li>
                            <li><span> Roles  </span></li>
                            <li><span> Scanning in members </span></li>
                            <li><span> And more </span></li>
                        </ul>
                    </SmallText>
                </Indent>
            </Indent>
        </Indent>
        <Indent>
            <HeaderText>Contact Me (Developer) :{'\n'}</HeaderText>
                <Indent>
                    <SmallText>
                        <li><span> E-Mail : <a href="DylanManPoll@gmail.com">DylanManPoll@gmail.com</a>  </span></li>
                        <li><span> GitHub : <a href="https://github.com/dylanpoll">github.com/dylanpoll </a> </span></li>
                        <li><span> LinkdIn : <a href="https://www.linkedin.com/in/dylanpoll">linkedin.com/in/dylanpoll</a> </span></li>
                        <li><span> My Website : <a href="https://devdylan.me">devdylan.me</a> </span></li>
                    </SmallText>
                </Indent>
        </Indent>
    </div>
);