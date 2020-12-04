import React from 'react';
import { Indent, SmallText, HeaderText, PageTitleText } from "../components/styleComponets/Layout";

export const Discord = () => (
    <>
        <PageTitleText>Discord Bot Commands</PageTitleText>
        <Indent>
            <HeaderText>Bot Commands :</HeaderText>
            <Indent>
                <SmallText>
                  This is under development
                </SmallText>
                <Indent>
                    <SmallText>
                        * !viewProfile @(user) : completed quest, attendance, events, projects, rank, and skills.
                        {'\n'}* !set.name.(user).(prefered name) : if they don't wan't their personal name used they can change it  
                        {'\n'}* !set.id.(id number).me : link the user id for karma to their discord account. 
                        {'\n'}* !my.karma : shows total karma and tells placement in club 
                        {'\n'}* !leaderboard : shows 10 people with the most karma in descening order  
                        {'\n'}* !Rank.info : gives information on how much karma each rank is.
                        {'\n'}* !help : gives a print of all these commands.
                        {'\n'}* !gift @(user) (value) : for the really nice people, you can give up to 5 karma when people help you but you wont get any back, not like rep points, you actually lose karma, you also can't give more than 1 time a day.  
                        {'\n'}* !quest.claim.(quest title) : the user can claim completing the quest, this will que them for the karma raise but if they use it improperly the quest giver can reject it.
                        {'\n'}* !skill.claim.(skill) : puts a claim in for a skill.
                        {'\n'}* !class.claim.(class) : puts a claim in for a class.
                    </SmallText>
                </Indent>
            </Indent>
        </Indent>
    </>
)