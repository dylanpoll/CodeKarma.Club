import React from 'react';
import { Indent, SmallText, HeaderText, PageTitleText } from "../components/styleComponets/Layout";

export const quests = () => (
    <>
        <PageTitleText>Current Quests</PageTitleText>
        <Indent>
            <HeaderText>Code Quests :</HeaderText>
            <Indent>
                <SmallText>
                  This is under development
                </SmallText>
                <Indent>
                    <SmallText>
                        * Quest || token || point value || deadline
                        {'\n'}* Quest || token || point value || deadline
                    </SmallText>
                </Indent>
            </Indent>
        </Indent>
    </>
)