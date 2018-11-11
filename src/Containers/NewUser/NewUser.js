/*eslint-disable*/
import React, { Component } from "react"
import "./NewUser.css"
import Store from "../../Store/Store";
import $ from "jquery"
import cofee from "./cofee.jpg"
import coldDrink from "./coca-cola.jpg"
import tea from "./green-tea.jpg"
import { Alert } from "../../Helpers/Alert";
import history from "../../Helpers/history";

class NewUser extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            nickname: "",
            contact: "",
            userImages: [],
            imagesSrc: [],
            beverages: { cofee: false, coldDrink: false, tea: false },
            getInfo: false,
            getPic: false,
            getBev: false,
            meetingTime: ""
        }

    }

    changeCredentials = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }



    getPictures(ev) {
        const { currentImageCount, userImages, imagesSrc } = this.state;
        userImages[currentImageCount] = ev.target.files[0];

        if (ev.target.files && ev.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                imagesSrc[currentImageCount] = e.target.result
                this.setState({ userImages, imagesSrc })
            };
            reader.readAsDataURL(ev.target.files[0]);
        }
    }


    checkPics() {
        const { userImages } = this.state;
        if (userImages.length < 3) {
            Alert("error", "Form Submition Error", "Please Provide All Three Pics");
            return;
        }
        $(this.refs.profilePics).addClass("animated fadeOutRight")
        setTimeout(() => {
            this.setState({ getPic: true })
        }, 250);
    }

    checkBev() {
        const { beverages } = this.state;
        var bvg = Object.values(beverages).filter((item) => {
            return item === true
        })
        return bvg.length > 0 ? true : false
    }

    setTime(time) {
        this.setState({
            meetingTime: time
        })
    }
    submitData() {
        const { username, nickname, contact, userImages, beverages, meetingTime } = this.state;
        if (username.length < 4 || nickname.length < 2 || contact.length < 11 || !meetingTime) {
            Alert("error", "Form Submition Error", "Please Provide Your All Proper Data");
            return
        }
        this.checkPics();
        this.checkBev();
        Store.dispatch({
            type: "UpdateUserdata",
            username, nickname, contact, userImages, beverages, meetingTime
        })

        Alert("success", "All Done", "Great Irfan Ali !!!");
        history.push("/Map")




    }

    render() {
        const { username, nickname, contact, getInfo, getPic, imagesSrc, getBev, beverages, meetingTime } = this.state;

        return (
            <div className="FormContainer animated fadeIn" >
                <div className="Form animated fadeIn">
                    <div className="header animted fadeIn">
                        <h5>We Need more Info About You</h5>
                    </div>
                    <div className={`forms`}>


                        {
                            !getInfo && <form ref="dataForm" id='register-form' action="JavaScript:void(0)"
                                onSubmit={() => {
                                    $(this.refs.dataForm).addClass("animated fadeOutLeft");
                                    setTimeout(() => {
                                        this.setState({
                                            getInfo: true
                                        })
                                    }, 250);
                                }}
                                method='post'
                            >
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    name="username"
                                    required
                                    value={username}
                                    onChange={(ev) => this.changeCredentials(ev)}
                                />

                                <input
                                    type="text"
                                    placeholder="Nick Name"
                                    name="nickname"
                                    required
                                    value={nickname}
                                    onChange={(ev) => this.changeCredentials(ev)}
                                />
                                <input
                                    type="number"
                                    placeholder="Contact Number"
                                    name="contact"
                                    required
                                    value={contact}
                                    onChange={(ev) => this.changeCredentials(ev)}
                                />
                                <button type='submit'>Next</button>
                            </form>
                        }


                        {
                            getInfo && !getPic && <div ref="profilePics" className="animated fadeInRight">
                                <a href="JavaScript:void(0)" onClick={() => this.setState({ getInfo: false })}>Back</a>
                                <h6 className="picTitle">Please Select Your Appropriate Pictures</h6>
                                <input
                                    type="file"
                                    name="imageSelector"
                                    id="imageSelector"
                                    onChange={(ev) => this.getPictures(ev)}
                                    multiple
                                    accept="image/*"
                                />
                                <div className="userPics animated fadeIn"
                                    onClick={() => {
                                        document.getElementById("imageSelector").click()
                                        this.setState({ currentImageCount: 0 })
                                    }
                                    }>
                                    {imagesSrc[0] ? <img className="uImg" src={imagesSrc[0]} alt="" /> : "Pictures"}
                                </div>
                                <div className="userPics animated fadeIn"
                                    onClick={() => {
                                        document.getElementById("imageSelector").click()
                                        this.setState({ currentImageCount: 1 })
                                    }
                                    }>
                                    {imagesSrc[1] ? <img className="uImg" src={imagesSrc[1]} alt="" /> : "Pictures"}
                                </div>
                                <div className="userPics animated fadeIn"
                                    onClick={() => {
                                        document.getElementById("imageSelector").click()
                                        this.setState({ currentImageCount: 2 })
                                    }
                                    }>
                                    {imagesSrc[2] ? <img className="uImg" src={imagesSrc[2]} alt="" /> : "Pictures"}
                                </div>
                                <button className="picBtn" onClick={() => {
                                    this.checkPics()
                                }} type='submit'>Next</button>
                            </div>
                        }

                        {getInfo && getPic && !getBev && <div className="animated fadeInLeft">
                            <a href="JavaScript:void(0)" onClick={() => this.setState({ getPic: false })}>Back</a>

                            <h6 className="picTitle animated fadeInDown">Please Select Atleast One Bevreage You Like Most</h6>

                            <div className={`beverage animated fadeIn ${beverages.cofee ? "bevSelected" : "notSelected"} `}
                                onClick={() => {
                                    beverages["cofee"] = !beverages.cofee
                                    this.setState({ beverages })
                                }
                                }>
                                <img className="bevPic" src={cofee} alt="" />
                            </div>
                            <div className={`beverage animated fadeIn ${beverages.coldDrink ? "bevSelected" : "notSelected"} `}
                                onClick={() => {
                                    beverages["coldDrink"] = !beverages.coldDrink
                                    this.setState({ beverages })
                                }
                                }>
                                <img className="bevPic" src={coldDrink} alt="" />
                            </div>
                            <div className={`beverage animated fadeIn ${beverages.tea ? "bevSelected" : "notSelected"} `}
                                onClick={() => {
                                    beverages["tea"] = !beverages.tea
                                    this.setState({ beverages })
                                }
                                }>
                                <img className="bevPic" src={tea} alt="" />
                            </div>

                            {getInfo && getPic && this.checkBev() && <div className="animated fadeIn">
                                <h6 className="picTitle animated fadeInDown">Please Select A Time Duration For Meetings</h6>
                                <div ref="Hour1" className={`time animated fadeInLeft ${meetingTime === "Hour1" && "selectedTime"}`} onClick={() => this.setTime("Hour1")} >
                                    <i className="fa fa-clock-o"></i>
                                    <p>1:Hour</p>
                                </div>
                                <div ref="Minutes30" className={`time  animated fadeIn ${meetingTime === "Minutes30" && "selectedTime"}`} onClick={() => this.setTime("Minutes30")} >
                                    <i className="fa fa-clock-o"></i>
                                    <p>30:Minutes</p>
                                </div>
                                <div ref="Minutes15" className={`time animated fadeInRight ${meetingTime === "Minutes15" && "selectedTime"}`} onClick={() => this.setTime("Minutes15")} >
                                    <i className="fa fa-clock-o"></i>
                                    <p>15:Minutes</p>
                                </div>
                                {meetingTime && <button type='button'
                                    onClick={() => this.submitData()}
                                    className="btnEnd animated fadeInUp">Next</button>}

                            </div>

                            }

                        </div>

                        }

                    </div>
                    <div className="footer animated fadeIn">All Rights Reserves To Irfan Ali</div>
                </div>
            </div>
        )
    }
}



export default NewUser;