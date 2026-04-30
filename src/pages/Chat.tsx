import React, { useState } from 'react'
import { ReactComponent as Search } from '../images/search-icon.svg'
import { ReactComponent as UserImg } from '../images/userImg.svg'
import { ReactComponent as MessageIcon } from '../images/messages.svg'
import Button from '../components/Button/Button'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import PageHeading from '../components/PageHeading/PageHeading'
import Input from '../components/Input/Input'
import ContactCard from '../components/chat/ContactCard'
import DriverCard from '../components/chat/DriverCard'
import SentMessage from '../components/chat/SentMessage'
import ReceivedMessage from '../components/chat/ReceviedMessage'

const ChatWrapper = styled.div`
    ${tw`flex gap-4`},
    ${css`
        .inpuy_otr {
            width: 100%;
            height: 48px;
        }
    `}
`
const LargeHeading = styled.h1`
    ${tw`text-[20px] font-bold mt-6`}
`

const ContactsWrapper = styled.div`
    ${tw`flex flex-col w-4/12 rounded-xl bg-light h-screen`},
`

const ContentDiv = styled.div`
    ${tw`overflow-y-scroll`}
`
const TopHeaders = styled.div`
    ${tw`p-6 pb-0`}
`
const MessagesWrapper = styled.div`
    ${tw`flex flex-col w-8/12 rounded-xl bg-light p-6 h-screen relative`}
`

const MessagesHeader = styled.div`
    ${tw`flex w-[100%] gap-6 pb-4 items-center `}
    ${css`
        border-bottom: 1px solid #15151517;
    `}
`

const MessagesBody = styled.div`
    ${tw`flex w-[100%] flex-col py-2 pb-11 gap-2  h-full overflow-y-scroll overflow-x-hidden`}
`

const MessageType = styled.div`
    ${tw`absolute bottom-0 left-3 p-6 pl-0 flex w-full gap-1 items-center`}
`

const UserName = styled.label`
    ${tw`text-[20px]`}
`

const CompanyName = styled.label`
    ${tw`text-[16px] text-[#15151585] `}
`
const NoChatSelected = styled.div`
    ${tw`w-full h-full flex justify-center items-center`}
`
const EmptyLabel = styled.label`
    ${tw`text-[16px] text-dark`}
`

const Chat = () => {
    const [isSelected, setIsSelected] = useState(false)
    const [name, setName] = useState('')
    function setSelected(name: string) {
        setIsSelected(true)
        setName(name)
    }
    return (
        <main className="p-6">
            <PageHeading HeadingText="Messages" />
            <ChatWrapper>
                <ContactsWrapper>
                    <TopHeaders>
                        <Input
                            PreContent={<Search />}
                            InputPlaceholder="Search for users"
                            LabelFor=""
                            LabelText=""
                            InputName="searchText"
                            InputType="text"
                            CustomWidth="100%"
                        />

                        <LargeHeading>Chats</LargeHeading>
                    </TopHeaders>
                    <ContentDiv>
                        <ContactCard
                            name="Andy"
                            lastMsg="hi there"
                            onClick={setSelected}
                        />
                        <ContactCard
                            name="Jalil"
                            lastMsg="hello"
                            onClick={setSelected}
                        />
                        <ContactCard
                            name="Mike"
                            lastMsg="you got it"
                            onClick={setSelected}
                        />
                        <ContactCard
                            name="Tate"
                            lastMsg="catch you there"
                            onClick={setSelected}
                        />
                    </ContentDiv>
                    <TopHeaders>
                        <LargeHeading>Available drivers</LargeHeading>
                    </TopHeaders>

                    <ContentDiv>
                        <DriverCard
                            name="Andy"
                            company="AndyTrucks.pvt"
                            onClick={setSelected}
                        />
                        <DriverCard
                            name="Jalil"
                            company="JalilTrucks.pvt"
                            onClick={setSelected}
                        />
                        <DriverCard
                            name="Mike"
                            company="MikeTrucks.pvt"
                            onClick={setSelected}
                        />
                        <DriverCard
                            name="Tate"
                            company="TateTrucks.pvt"
                            onClick={setSelected}
                        />
                        <DriverCard
                            name="Tom"
                            company="TomTrucks.pvt"
                            onClick={setSelected}
                        />
                    </ContentDiv>
                </ContactsWrapper>

                <MessagesWrapper>
                    {isSelected ? (
                        <>
                            <MessagesHeader>
                                <UserImg />
                                <div className="flex flex-col">
                                    <UserName>{name}</UserName>
                                    <CompanyName>{name}</CompanyName>
                                </div>
                            </MessagesHeader>

                            <MessagesBody>
                                <SentMessage
                                    message="New pickup request at 123 Main St. ETA: 10 mins"
                                    sender="Abdul"
                                />
                                <SentMessage
                                    message="New pickup needs ot neufilajsd h"
                                    sender="Abdul"
                                />
                                <SentMessage
                                    message="hi there "
                                    sender="Abdul"
                                />
                                <ReceivedMessage
                                    message="New pickup New pickup request at 123 Main St. ETA: 10 minsNew pickup request at 123 Main St. ETA: 10 minsNew pickup request at 123 Main St. ETA: 10 minsNew pickup request at 123 Main St. ETA: 10 minsNew pickup request at 123 Main St. ETA: 10 mins"
                                    sender={name}
                                />
                                <SentMessage
                                    message="New pickup New pickup request at 123 Main St. ETA: 10 minsNew pickup request at 123 Main St. ETA: 10 minsNew pickup request at 123 Main St. ETA: 10 minsNew pickup request at 123 Main St. ETA: 10 minsNew pickup request at 123 Main St. ETA: 10 mins"
                                    sender="Abdul"
                                />
                                <ReceivedMessage
                                    message="New pickup needs ot neufilajsd h"
                                    sender={name}
                                />
                            </MessagesBody>
                            <MessageType>
                                <Input
                                    PreContent={<MessageIcon />}
                                    InputPlaceholder="Type message"
                                    LabelFor=""
                                    LabelText=""
                                    InputName="messageText"
                                    InputType="text"
                                    CustomWidth="100%"
                                />
                                <Button ButtonText="Send" color="primary" />
                            </MessageType>
                        </>
                    ) : (
                        <NoChatSelected>
                            <EmptyLabel>
                                Select a user from the list to start a
                                conversation
                            </EmptyLabel>
                        </NoChatSelected>
                    )}
                </MessagesWrapper>
            </ChatWrapper>
        </main>
    )
}

export default Chat
