import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Indent, SmallText, HeaderText, PageTitleText } from "../components/styleComponets/Layout";

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
    <div>
        <NewGreeting />
        <Greeting />
        <Indent>
            <HeaderText>About Karma :</HeaderText>
            <Indent>
                <SmallText>
                    This is a project for deploying a club or organization attendence and point aggregation system with a POS.
                    {'\n'}The project can accomplish :
                </SmallText>
                <Indent>
                    <SmallText>
                        * Scanning in members
                        {'\n'}* Tracking attendence
                        {'\n'}* An easy deploment system
                        {'\n'}* A Discord Bot
                        {'\n'}* A phone App
                        {'\n'}* Roles
                        {'\n'}* And more
                    </SmallText>
                </Indent>
            </Indent>
        </Indent>

        <Indent>
            <HeaderText>Contact Me (Developer) :{'\n'}</HeaderText>
                <Indent>
                    <SmallText>
                        E-Mail : <a href="DylanManPoll@gmail.com">DylanManPoll@gmail.com</a>
                        {'\n'}GitHub : <a href="https://github.com/dylanpoll"> https://github.com/dylanpoll </a>
                        {'\n'}LinkdIn : <a href="https://www.linkedin.com/in/dylan-poll-4a324a1a2/">https://www.linkedin.com/in/dylan-poll-4a324a1a2/</a>
                        {'\n'}My Website : <a href="https://devdylan.me">https://devdylan.me</a>
                    </SmallText>
                </Indent>
        </Indent>
    </div>
);