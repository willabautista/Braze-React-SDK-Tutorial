import React, { useState } from 'react';
import styled from 'styled-components';
import TitledInputBox from '../components/TitledInputBox';
import KeyValueInputBox from '../components/KeyValueInputBox';
import * as braze from "@braze/web-sdk";

function User() {

    // HOOKS

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [homeCity, setHomeCity] = useState('')
    const [language, setLanguage] = useState('')
    const [gender, setGender] = useState('')
    const [phone, setPhone] = useState('')
    const [birthday, setBirthday] = useState('')
    const [pushSub, setPushSub] = useState('')
    const [emailSub, setEmailSub] = useState('')

    const [customAttributeKey, setCustomAttributeKey] = useState('')
    const [customAttributeValue, setCustomAttributeValue] = useState('')

    const [eventName, setEventName] = useState('')
    const [eventProperties, setEventProperties] = useState('')

    const [productId, setProductId] = useState('')
    const [price, setPrice] = useState('')
    const [currencyCode, setCurrencyCode] = useState('')
    const [quantity, setQuantity] = useState('')
    const [purchaseProperties, setPurchaseProperties] = useState('')


    // FUNCTIONS

    const setStandardAttributes = () => {
        // TODO: add SDK methods 

        if (firstName) {
        }

        if (lastName) {
        }

        if (email) {
        }

        if (country) {
        }

        if (homeCity) {
        }

        if (language) {
        }

        if (gender) {
        }

        if (phone) {
        }

        if (birthday) {
        }

        if (pushSub) {
        }

        if (emailSub) {
        }
    }

    const setCustomAttribute = () => {
        // TODO: add SDK method 
        if (customAttributeKey && customAttributeValue) {

        }
    }

    const setCustomEvent = () => {
        // TODO: add SDK methods
        if (eventName) {
            if (eventProperties) {

            }
            else {

            }
        }
    }

    const setPurchaseEvent = () => {
        // TODO: add SDK methods
        if (productId && price) {

        }
    }


    // RETURN

    return (
        <UserContainer>
            <SectionContainer>
                <Title>Standard Attributes</Title>
                <TitledInputBox title={'First Name'} v={firstName} setV={setFirstName} />
                <TitledInputBox title={'Last Name'} v={lastName} setV={setLastName} />
                <TitledInputBox title={'Email'} v={email} setV={setEmail} />
                <TitledInputBox title={'Country'} v={country} setV={setCountry} />
                <TitledInputBox title={'Home City'} v={homeCity} setV={setHomeCity} />
                <TitledInputBox title={'Lanugage'} v={language} setV={setLanguage} />
                <TitledInputBox title={'Gender'} v={gender} setV={setGender} />
                <TitledInputBox title={'Phone'} v={phone} setV={setPhone} />
                <TitledInputBox title={'Birthday'} v={birthday} setV={setBirthday} />
                <TitledInputBox title={'Push Sub'} v={pushSub} setV={setPushSub} />
                <TitledInputBox title={'Email Sub'} v={emailSub} setV={setEmailSub} />
                <Button onClick={setStandardAttributes}>Submit</Button>
                <Title>Custom Attributes</Title>
                <KeyValueInputBox k={customAttributeKey} setK={setCustomAttributeKey} v={customAttributeValue} setV={setCustomAttributeValue} />
                <Button onClick={setCustomAttribute}>Submit</Button>
            </SectionContainer>
            <SectionContainer>
                <Title>Events</Title>
                <TitledInputBox title={'Name'} v={eventName} setV={setEventName} />
                <TitledInputBox title={'Properties'} v={eventProperties} setV={setEventProperties} />
                <Button onClick={setCustomEvent}>Submit</Button>
                <Title>Purchases</Title>
                <TitledInputBox title={'Product Id'} v={productId} setV={setProductId} />
                <TitledInputBox title={'Price'} v={price} setV={setPrice} />
                <TitledInputBox title={'Currency Code'} v={currencyCode} setV={setCurrencyCode} />
                <TitledInputBox title={'Quantity'} v={quantity} setV={setQuantity} />
                <TitledInputBox title={'Properties'} v={purchaseProperties} setV={setPurchaseProperties} />
                <Button onClick={setPurchaseEvent}>Submit</Button>
            </SectionContainer>
        </UserContainer>
    )
}

// STYLES

const UserContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const SectionContainer = styled.div`
`;

const Title = styled.div`
    font-size: 25px;
    padding-top: 60px;
    padding-bottom: 20px;
`;

const Button = styled.button`
    height: 20px;
    width: 60px;
    margin-top: 20px;
`;


export default User