import React, {useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import {addToCart }from '../redux/actions/cartActions'
import {useDispatch} from 'react-redux'
const alanKey='c4766e6fbd24d6b914e0f4a093981f9a2e956eca572e1d8b807a3e2338fdd0dc/stage';
export default function AlanBtn() {
    const dispatch = useDispatch()
    useEffect(()=> {
        alanBtn({
            key:alanKey,
            onCommand: (commandData) => {
                if(commandData.command === 'testCommand') {
                    alert('This is a Alan AI demo');
                }else if(commandData.command  === 'goToCart'){
                    window.open('/cart', "_self");
                }else if(commandData.command  === 'goBack') {
                    window.open('/', "_self");
                }else if(commandData.command  === 'viewProduct') {
                    console.log(commandData.data);
                    window.open(`/product/${commandData.data}`, "_self");
                }else if(commandData.command  === 'addToCart'){
                    dispatch(addToCart('6118c9629175ab280c09c753',1));
                }
            }
        })
    },[]);
    
    return null
}