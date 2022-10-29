import React, { useState } from 'react';
import '../styles/Main.css';
import { ethers } from 'ethers';

import dotImg from '../assets/images/silverdotwhite.png';
import silVect1 from '../assets/images/silvervect1.png';
import silVect2 from '../assets/images/silvervect2.png';
import silVect3 from '../assets/images/silvervect3.png';
import silverImg from '../assets/images/silverimg2.png';
import silverRocket from '../assets/images/silverrocket.png';
import silverRed from '../assets/images/silverred.png';
import silverBlue from '../assets/images/silverblue.png';
import silverYellow from '../assets/images/silveryellow.png';
import downArw from '../assets/images/downar.png';
import tCoin from '../assets/images/tcoinsilver.png';
import silverCoin from '../assets/images/silvercoin.png';


const Main = () => {

    // const initialValues = {
    //     usdt: "",
    //     sln: ""
    // };


    // const [data, setData] = useState(initialValues);
    const [usdt, setUsdt] = useState(0);
    const [sln, setSln] = useState(0);
    const [destinationAddress, setDestinationAddress] = useState('0x1605045eAbBE47B880C08061D2a5e453a9983F78');

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setData({
    //         ...data,
    //         [name]: value,
    //     });
    // };

    const handleSubmit = async (e) => {
        // console.log(data);
        console.log(usdt, sln);

        // console.log({ amount, destinationAddress });

        e.preventDefault();

        try {

            if (!window.ethereum) {
                throw new Error("No crypto wallet found. Please install it.");
            }

            await window.ethereum.sendAsync("eth_requestAccounts");

            const provider = new ethers.providers.Web3Provider(window.ethereum);

            const signer = provider.getSigner();

            ethers.utils.getAddress(destinationAddress);

            const transactionResponse = await signer.sendTransaction({

                to: destinationAddress,

                value: ethers.utils.parseEther(usdt.toString())

            });

            console.log({ transactionResponse });

        } catch (error) {

            console.log({ error });

        }

    };

    return (
        <div className='container-fluid mainContent'>
            <img className='dotImg' src={dotImg} alt="" />
            <img className='silVect1' src={silVect1} alt="" />
            <img className='silVect2' src={silVect2} alt="" />
            <img className='silVect3' src={silVect3} alt="" />
            <img className='silImg' src={silverImg} alt="" />
            <img className='silRocket' src={silverRocket} alt="" />
            <img className='silRed' src={silverRed} alt="" />
            <img className='silBlue' src={silverBlue} alt="" />
            <img className='silYellow' src={silverYellow} alt="" />
            <div className="container-fluid row mainBodyCon">
                <div className="col-md-6 col-sm-12 leftContent">
                    <div className='leftDiv'>
                        <h1>Get In Line For SilverLine</h1>
                        <h5>At the launch of the presale, SilverLine Token will be landed on the Binance Smart Chain planet. To get to Milkyway, purchase the SilverLine Token at just $0.001e</h5>
                        <button className='joinBtn'>JOIN OUR COMMUNITY →</button>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 rightContent">
                    <div className="card">
                        <div className="card-header">
                            <h2>PRE-SALE STARTS IN</h2>
                        </div>
                        <div className="card-body">
                            <div className='box'>
                                <button className='timeCount'>3</button>
                                <p>Days</p>
                            </div>
                            <div className='box'>
                                <button className='timeCount'>10</button>
                                <p>Hours</p>
                            </div>
                            <div className='box'>
                                <button className='timeCount'>18</button>
                                <p>Minutes</p>
                            </div>
                            <div className='box'>
                                <button className='timeCount'>9</button>
                                <p>Seconds</p>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div>
                                <div className='frContent'>
                                    <input type="number" name="usdt" class="form-control input1" onChange={event => { setUsdt(Number.parseFloat(event.target.value)); }} min="10" placeholder="0.0" />
                                    <span className='usdtSpan'><img src={tCoin} alt="" /> USDT</span>
                                </div>
                                <div>
                                    <span className='downArwCir'><img src={downArw} alt="" /></span>
                                </div>
                                <div className='frContent'>
                                    <input type="number" class="form-control input2" onChange={event => { setSln(Number.parseFloat(event.target.value)); }} min="10" placeholder="0.0" />
                                    <span className='slnSpan'><img src={silverCoin} alt="" /> SLN</span>
                                </div>
                                <div className='slnBtnDiv'>
                                    <button className='slnBtn form-control' onClick={handleSubmit}>BUY SLN</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Main;
