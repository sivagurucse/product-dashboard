import React, { useState, useEffect } from 'react';
import { AppBar, Grid, Typography } from '@material-ui/core';
import csvtojson from 'csvtojson';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Loader from "react-loader-spinner";


import ErrorPage from './components/common/Error';
import GridLayout from './components/GridLayout';
import Header from './components/common/Header';

const jsonvalue = [{ "Title": "IPL Trump Cards", "Description": "A trump card game with ipl players", "Category": "Game", "How much efforts?": "M", "Tech Stack": "Flutter,Firebase", "Status": "live|Inprogress", "Github": "https://github.com/thiyagab/CricketCards", "Remarks": "", "Links": "https://play.google.com/store/apps/details?id=com.droidapps.cricketcards", "sNo": "1" }, { "Title": "Face Prank", "Description": "A small prank app to train your face using tensorflow and show trained label for you and a different pre-defined label for your friends", "Category": "App", "How much efforts?": "M", "Tech Stack": "Android,Tensorflow", "Status": "live|completed", "Github": "https://github.com/thiyagab/FacePrank", "Remarks": "", "Links": "https://play.google.com/store/apps/details?id=com.droidapps.faceprank", "sNo": "2" }, { "Title": "Anniversary Collage", "Description": "Integrated with google photos API to fetch all the photos taken on a given date over a period of years and to form a nice collage", "Category": "App", "How much efforts?": "M", "Tech Stack": "Android", "Status": "live|broken", "Github": "https://github.com/thiyagab/AnniversaryCollage", "Remarks": "The bug is yet to be fixed", "Links": "https://play.google.com/store/apps/details?id=com.droidapps.anniversarycollage", "sNo": "3" }, { "Title": "sboss", "Description": "A telegram bot, where you assign tasks to friends or students or colleagues, and they get points for completing it.\nThis is useful for teachers, trainers, guides, mentors", "Category": "Bot", "How much efforts?": "M", "Tech Stack": "Python", "Status": "live|Inprogress", "Github": "https://github.com/thiyagab/sboss", "Remarks": "Needs proper deployment, and also its very trivial right now with just an option to ask for points and boss confirms it", "Links": "https://thiyagab.medium.com/free-hosting-for-telegram-bot-in-firebase-written-in-python-e6c72939fa", "sNo": "4" }, { "Title": "Who Likes You?", "Description": "A tinder like app, but for your phone contacts, where you like, dislike, superlike people.  If your friends also likes you, you both will be notified,  Atleast you will know how many ppl in your contacts really like you", "Category": "App", "How much efforts?": "M", "Tech Stack": "Flutter,Firebase", "Status": "development", "Github": "https://github.com/thiyagab/FunWithContacts", "Remarks": "Needs more validation from people", "Links": "", "sNo": "5" }, { "Title": "Wazirx alert bot", "Description": "A simple telegram bot, to alert for given crypto and price", "Category": "Bot", "How much efforts?": "S", "Tech Stack": "Python", "Status": "live|completed", "Github": "https://github.com/99products/WazirxBot", "Remarks": "", "Links": "https://t.me/wazirxin_bot", "sNo": "6" }, { "Title": "Wazirx Virtual Trading", "Description": "Crypto is new to India, and this app lets to practice crypto trade in india's best crypto exchange wazirx", "Category": "App", "How much efforts?": "M", "Tech Stack": "Flutter,Firebase", "Status": "design", "Github": "", "Remarks": "", "Links": "", "sNo": "7" }, { "Title": "I Need Mentor", "Description": "An open platform for mentors and who seek mentors.\nMentors onboard via linkedin, and tagged with skillset.\nStudents, startups, engineers can seek advice to these mentors", "Category": "Web", "How much efforts?": "XL", "Tech Stack": "Flutter,Firebase", "Status": "idea", "Github": "", "Remarks": "More than tech, it needs more campaign to onboard and link right set of people.\nAlso idea needs more refinement to see what value it brings to both mentors and who seek mentors", "Links": "", "sNo": "8" }, { "Title": "Shaky Snake", "Description": "Leveraging accelerometer sensor and gyroscope.  For any small shake in mobile, ( even if you think you hold your phone straight, there will be very minute shake detected by accelerometer, unless you keep it flat on a surface) Snake moves to a wave like shape based on the magnitude of this shake and user needs to navigate this snake using gyroscope through narrow tunnels.", "Category": "Game", "How much efforts?": "L", "Tech Stack": "Flutter", "Status": "idea", "Github": "", "Remarks": "Idea needs more refinement", "Links": "", "sNo": "9" }, { "Title": "Explorer", "Description": "Its a location based flag collection app similar to Pokemon Go.  But the usecase is different here.\nFor example,  An Himalayan explorer, will have to collect the pre-marked flags in all himalayan spots starting from kashmir to annapoorna, and how many flags we collect.\n\nSame way we can have different collections of flags, and users can boast or set goals based on number of flags collected", "Category": "App", "How much efforts?": "L", "Tech Stack": "Flutter", "Status": "development", "Github": "", "Remarks": "", "Links": "", "sNo": "10" }, { "Title": "99products site", "Description": "To build a site with ideas as stickynotes and launch in 99products.in site\nReference site:\nhttps://itsallwidgets.com/", "Category": "Web", "How much efforts?": "M", "Tech Stack": "Flutter", "Status": "live|Inprogress", "Github": "https://github.com/99products/99products_web", "Remarks": "", "Links": "99products.in", "sNo": "11" }, { "Title": "StopMe", "Description": "Its a timer based hyper interactive game.", "Category": "Game", "How much efforts?": "M", "Tech Stack": "Flutter", "Status": "live|Inprogress", "Github": "", "Remarks": "", "Links": "", "sNo": "12" }, { "Title": "TestMySenses", "Description": "A health check using various sensors,\n1. a Handshake detector to check how stable your nerves are\n2.  color differentiator for eye check\n3. Sound detector for ear check\nand more", "Category": "App", "How much efforts?": "M", "Tech Stack": "", "Status": "idea", "Github": "", "Remarks": "Idea needs more refinement", "Links": "", "sNo": "13" }, { "Title": "the good news", "Description": "Media is plagued with so much of breaking news 24/7 creating panic, sense of urge and a feeling of deep shit always.\nThe idea is to just show the only good news happening around the world, and let the user start his day with a sense of positivity", "Category": "Web", "How much efforts?": "L", "Tech Stack": "Flutter", "Status": "idea", "Github": "", "Remarks": "Idea needs more refinement.  More than tech, how do we filter the good news, how to define the news source etc.. is the challenge", "Links": "", "sNo": "14" }, { "Title": "Thamizh Crypto Token", "Description": "A crypto token created and utilized for incentives in digital tamil platform.\nThe coin name will be தமிழ், with symbol as 'ழ'", "Category": "BlockChain", "How much efforts?": "S", "Tech Stack": "Solidity", "Status": "live", "Github": "", "Remarks": "", "Links": "https://bscscan.com/token/0xd97fc50ff0631d546f0f5035a6fca8b1e1836c04", "sNo": "15" }, { "Title": "IDEACoin", "Description": "The objective is to create a Distributed Autonomous organization, a community of devs, designers, ideators to work together and accomplish small goals\nThis will be the standard way we transact within 99products community.  We are trying to build a decentralized autonomous organization, and IDEACoin is the first step towards it", "Category": "BlockChain", "How much efforts?": "S", "Tech Stack": "Solidity", "Status": "live", "Github": "", "Remarks": "", "Links": "https://explorer-mainnet.maticvigil.com/tokens/0xe2618214E9f23811C4881cCB81B453bD6C7F3b2E/token-transfers", "sNo": "16" }, { "Title": "Arbitrage Trading", "Description": "Arbitrage Trading between Wazirx and Binance.\nA program which monitors the deviation of prices between the exchanges and notify if it exceeds the configured threshold", "Category": "Server", "How much efforts?": "S", "Tech Stack": "Python", "Status": "live", "Github": "https://github.com/99products/ArbitrageTrading", "Remarks": "", "Links": "https://github.com/99products/ArbitrageTrading", "sNo": "17" }, { "Title": "Anonymous Friend", "Description": "Users create a link and share with friends, where friends can use that custom link to chat with the user anonymously.\nPhase it , doing it with more privacy as an app, only the contacts in your friends list can chat with you anonymously", "Category": "Web", "How much efforts?": "M", "Tech Stack": "Flutter", "Status": "idea", "Github": "", "Remarks": "Idea needs validation and refinement", "Links": "", "sNo": "18" }];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    height: "100%"
  },
  appBar: {
    color: 'black',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: '10px 0 10px 0'
  },
  alignItemsToMiddleOfScreen: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 10,
    overflow: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

export default function App() {
  const [jsonData, loadData] = useState([]);
  const [showLoader, updateLoader] = useState(false);
  const [showError, updateError] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    // async function fetchMyAPI() {
    //   await axios(
    //     "https://docs.google.com/spreadsheets/d/e/2PACX-1vSJSxT8lSDbx7HOefmSVTOoVglQG2KR1Z0f0w6uc9vtN-T1CnO8ef-QlVgS6fxtTbdCe-ZC5lHNcLwq/pub?gid=0&single=true&output=cs"
    //   ).then((responseText) => {
    //     return csvtojson().fromString(responseText.data)
    //   }).then((jsonData) => {
    //     jsonData.forEach(data => {
    //       let sNo = data.S.No;
    //       data.sNo = sNo;
    //       delete data.S;
    //     })
    //     loadData(jsonData);
    //     updateLoader(false);
    //   }).catch((error) => {
    //     updateLoader(false);
    //     updateError(true);
    //   });
    // }
    // fetchMyAPI();
  }, []);
  return (
    <Grid container className={classes.root}>
      <AppBar position="sticky" className={classes.appBar}>
        <Grid container>
          <Header />
        </Grid>
      </AppBar>
      <Grid container justify="center">
        <Grid className={classes.alignItemsToMiddleOfScreen}>
          <Loader
            type="ThreeDots"
            height={100}
            width={100}
            visible={showLoader}
            color={'green'}
          />
        </Grid>
      </Grid>
      {!showError && !showLoader && <Grid item>
        <GridLayout
          jsonData={jsonvalue} />
      </Grid>}
      {showError && <Grid container justify="center">
        <Grid className={classes.alignItemsToMiddleOfScreen}>
          <ErrorPage />
        </Grid>
      </Grid>}
    </Grid>
  )
}