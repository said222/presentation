import { useState } from 'react';

import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import axios from 'axios';
import jQuery from 'jquery'
// import mg from 'mailgun-js';
// import Mailgun from 'mailgun-js';

export default function IndexPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = e =>{
        e.preventDefault();

        console.log('Sending')

        const data = {
            name,
            email,
            phone,
            subject,
            message,
          };

        fetch('api/contact', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then((res) => {
              console.log('Response received')
              console.log(res)
              if (res.status === 200) {
                  console.log('Response succeeded!')
                  console.log(res)
                  setSubmitted(true) 
                  setName('')
                  setEmail('')
                  setMessage('')
              }
          })
        
    }

    

    
        return (
            <>
            <Head>
                <>
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="description" content="Name of your web site" />
                    <meta name="author" content="Marketify" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, maximum-scale=1"
                    />
                    <title>Dizme | Home</title>  
                    {/* STYLES */}
                    {/* <link
                        href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
                        rel="stylesheet"
                    /> */}
                    <link rel="stylesheet" type="text/css" href="css/plugins.css" />
                    <link rel="stylesheet" type="text/css" href="css/dark.css" />
                    <link rel="stylesheet" type="text/css" href="css/style.css" />

                </>
            </Head>

            <>
                {/* PRELOADER */}
                <div id="preloader">
                    <div className="loader_line" />
                </div>
                {/* /PRELOADER */}
                {/* WRAPPER ALL */}
                <div className="dizme_tm_all_wrap" data-magic-cursor="show">
                    {/* MOBILE MENU */}
                    <div className="dizme_tm_mobile_menu">
                    <div className="mobile_menu_inner">
                        <div className="mobile_in">
                        <div className="logo">
                            <a href="#">
                            <img src="img/logo/logo.png" alt="" />
                            </a>
                        </div>
                        <div className="trigger">
                            <div className="hamburger hamburger--slider">
                            <div className="hamburger-box">
                                <div className="hamburger-inner" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="dropdown_inner">
                        <ul className="anchor_nav">
                            <li className="current">
                            <a href="#home">Home</a>
                            </li>
                            <li>
                            <a href="#about">About</a>
                            </li>
                            <li>
                            <a href="#portfolio">Portfolio</a>
                            </li>
                            <li>
                            <a href="#service">Service</a>
                            </li>
                            <li>
                            <a href="#blog">Blog</a>
                            </li>
                            <li>
                            <a href="#contact">Contact</a>
                            </li>
                            <li className="download_cv">
                            <a href="img/cv/1.jpg" download="">
                                <span>Download CV</span>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    {/* /MOBILE MENU */}
                    {/* HEADER */}
                    <div className="dizme_tm_header">
                    <div className="container">
                        <div className="inner">
                        <div className="logo">
                            <a href="#">
                            <img src="img/logo/logo.png" alt="" />
                            </a>
                        </div>
                        <div className="menu">
                            <ul className="anchor_nav">
                            <li className="current">
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a href="#service">Service</a>
                            </li>
                            <li>
                                <a href="#blog">Blog</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                            <li className="download_cv">
                                <a href="img/cv/1.jpg" download="">
                                <span>Download CV</span>
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* /HEADER */}
                    {/* HERO */}
                    <div className="dizme_tm_section" id="home">
                    <div className="dizme_tm_hero">
                        <div className="background" data-img-url="img/slider/1.jpg" />
                        <div className="container">
                        <div className="content">
                            <div className="details">
                            <div className="hello">
                                <h3 className="orangeText">Hello, I'm</h3>
                            </div>
                            <div className="name">
                                <h3>James Smith</h3>
                            </div>
                            <div className="job">
                                <p>
                                A <span className="greenText">Creative Designer</span> From{" "}
                                <span className="purpleText">New York</span>
                                </p>
                            </div>
                            <div className="text">
                                <p>
                                I'm creative designer based in New York, and I'm very
                                passionate and dedicated to my work.
                                </p>
                            </div>
                            <div className="button">
                                <div className="dizme_tm_button">
                                <a className="anchor" href="#about">
                                    <span>About Me</span>
                                </a>
                                </div>
                                <div className="social">
                                <ul>
                                    <li>
                                    <a href="#">
                                        <i className="icon-facebook-1" />
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <i className="icon-twitter-1" />
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <i className="icon-linkedin-1" />
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        <i className="icon-behance" />
                                    </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="avatar">
                            <div className="image">
                                <img src="img/slider/avatar.png" alt="" />
                                <span className="skills illustrator anim_moveBottom">
                                <img
                                    className="svg"
                                    src="img/svg/skills/illustrator.svg"
                                    alt=""
                                />
                                </span>
                                <span className="skills photoshop anim_moveBottom">
                                <img
                                    className="svg"
                                    src="img/svg/skills/photoshop.svg"
                                    alt=""
                                />
                                </span>
                                <span className="skills figma anim_moveBottom">
                                <img className="svg" src="img/svg/skills/figma.svg" alt="" />
                                </span>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="dizme_tm_down">
                        <a className="anchor" href="#about">
                            <svg
                            width="26px"
                            height="100%"
                            viewBox="0 0 247 390"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            style={{
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeMiterlimit: "1.5"
                            }}
                            >
                            <path
                                id="wheel"
                                d="M123.359,79.775l0,72.843"
                                style={{ fill: "none", stroke: "#000", strokeWidth: 20 }}
                            />
                            <path
                                id="mouse"
                                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                                style={{ fill: "none", stroke: "#000", strokeWidth: 20 }}
                            />
                            </svg>
                        </a>
                        </div>
                    </div>
                    </div>
                    {/* HERO */}
                    {/* PROCESS */}
                    <div className="dizme_tm_section">
                    <div className="dizme_tm_process">
                        <div className="container">
                        <div className="list">
                            <ul>
                            <li className="wow fadeInUp" data-wow-duration="1s">
                                <div className="list_inner">
                                <div className="icon">
                                    <span>
                                    <img
                                        className="brush"
                                        src="img/brushes/process/1.png"
                                        alt=""
                                    />
                                    <img
                                        className="svg"
                                        src="img/svg/process/target.svg"
                                        alt=""
                                    />
                                    </span>
                                </div>
                                <div className="title">
                                    <h3>Pixel Perfect</h3>
                                </div>
                                <div className="text">
                                    <p>
                                    Most common methods for designing websites that work well
                                    on desktop is responsive and adaptive design.
                                    </p>
                                </div>
                                </div>
                            </li>
                            <li
                                className="wow fadeInUp"
                                data-wow-duration="1s"
                                data-wow-delay="0.2s"
                            >
                                <div className="list_inner">
                                <div className="icon">
                                    <span>
                                    <img
                                        className="brush"
                                        src="img/brushes/process/2.png"
                                        alt=""
                                    />
                                    <img
                                        className="svg"
                                        src="img/svg/process/brush.svg"
                                        alt=""
                                    />
                                    </span>
                                </div>
                                <div className="title">
                                    <h3>High Quality</h3>
                                </div>
                                <div className="text">
                                    <p>
                                    Most common methods for designing websites that work well
                                    on desktop is responsive and adaptive design.
                                    </p>
                                </div>
                                </div>
                            </li>
                            <li
                                className="wow fadeInUp"
                                data-wow-duration="1s"
                                data-wow-delay="0.4s"
                            >
                                <div className="list_inner">
                                <div className="icon">
                                    <span>
                                    <img
                                        className="brush"
                                        src="img/brushes/process/3.png"
                                        alt=""
                                    />
                                    <img
                                        className="svg"
                                        src="img/svg/process/energy.svg"
                                        alt=""
                                    />
                                    </span>
                                </div>
                                <div className="title">
                                    <h3>Awesome Idea</h3>
                                </div>
                                <div className="text">
                                    <p>
                                    Most common methods for designing websites that work well
                                    on desktop is responsive and adaptive design
                                    </p>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* /PROCESS */}
                    {/* ABOUT */}
                    <div className="dizme_tm_section" id="about">
                    <div className="dizme_tm_about">
                        <div className="container">
                        <div className="wrapper">
                            <div className="left">
                            <div className="image">
                                <img src="img/about/1.jpg" alt="" />
                                <div className="numbers year">
                                <div className="wrapper">
                                    <h3>
                                    <span
                                        className="dizme_tm_counter"
                                        data-from={0}
                                        data-to={18}
                                        data-speed={2000}
                                    >
                                        0
                                    </span>
                                    </h3>
                                    <span className="name">
                                    Years of
                                    <br />
                                    Success
                                    </span>
                                </div>
                                </div>
                                <div className="numbers project">
                                <div className="wrapper">
                                    <h3>
                                    <span
                                        className="dizme_tm_counter"
                                        data-from={0}
                                        data-to={9}
                                        data-speed={2000}
                                    >
                                        0
                                    </span>
                                    K
                                    </h3>
                                    <span className="name">
                                    Total
                                    <br />
                                    Projects
                                    </span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="right">
                            <div className="title wow fadeInUp" data-wow-duration="1s">
                                <span>I'm a Designer</span>
                                <h3>I Can Design Anything You Want</h3>
                            </div>
                            <div className="text wow fadeInUp" data-wow-duration="1s">
                                <p>
                                Hello there! I'm a web designer, and I'm very passionate and
                                dedicated to my work. With 20 years experience as a
                                professional web developer, I have acquired the skills and
                                knowledge necessary to make your project a success. I enjoy
                                every step of the design process, from discussion and
                                collaboration.
                                </p>
                            </div>
                            <div
                                className="dizme_tm_button wow fadeInUp"
                                data-wow-duration="1s"
                            >
                                <a className="anchor" href="#contact">
                                <span>Hire Me</span>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
                        <img src="img/brushes/about/1.png" alt="" />
                        </div>
                        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
                        <img src="img/brushes/about/2.png" alt="" />
                        </div>
                    </div>
                    </div>
                    {/* /ABOUT */}
                    {/* PORTFOLIO */}
                    <div className="dizme_tm_section" id="portfolio">
                    <div className="dizme_tm_portfolio">
                        <div className="container">
                        <div className="dizme_tm_main_title" data-align="center">
                            <span>Portfolio</span>
                            <h3>My Amazing Works</h3>
                            <p>
                            Most common methods for designing websites that work well on
                            desktop is responsive and adaptive design
                            </p>
                        </div>
                        <div className="portfolio_filter">
                            <ul>
                            <li>
                                <a href="#" className="current" data-filter="*">
                                All
                                </a>
                            </li>
                            <li>
                                <a href="#" data-filter=".youtube">
                                Youtube
                                </a>
                            </li>
                            <li>
                                <a href="#" data-filter=".vimeo">
                                Vimeo
                                </a>
                            </li>
                            <li>
                                <a href="#" data-filter=".soundcloud">
                                Soundcloud
                                </a>
                            </li>
                            <li>
                                <a href="#" data-filter=".popup">
                                Popup
                                </a>
                            </li>
                            <li>
                                <a href="#" data-filter=".detail">
                                Detail
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="dizme_tm_portfolio_titles" />
                        <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
                            <ul className="gallery_zoom grid">
                            <li className="youtube grid-item">
                                <div className="inner">
                                <div
                                    className="entry dizme_tm_portfolio_animation_wrap"
                                    data-title="Mockup Shape"
                                    data-category="Youtube"
                                >
                                    <a
                                    className="popup-youtube"
                                    href="https://www.youtube.com/watch?v=7e90gBu4pas"
                                    >
                                    <img src="img/thumbs/42-56.jpg" alt="" />
                                    <div
                                        className="main"
                                        data-img-url="img/portfolio/1.jpg"
                                    />
                                    </a>
                                </div>
                                <div className="mobile_title">
                                    <h3>Mockup Shape</h3>
                                    <span>Youtube</span>
                                </div>
                                </div>
                            </li>
                            <li className="vimeo grid-item">
                                <div className="inner">
                                <div
                                    className="entry dizme_tm_portfolio_animation_wrap"
                                    data-title="Ave Bottle"
                                    data-category="Vimeo"
                                >
                                    <a
                                    className="popup-vimeo"
                                    href="https://vimeo.com/337293658"
                                    >
                                    <img src="img/thumbs/42-34.jpg" alt="" />
                                    <div
                                        className="main"
                                        data-img-url="img/portfolio/2.jpg"
                                    />
                                    </a>
                                </div>
                                <div className="mobile_title">
                                    <h3>Ave Bottle</h3>
                                    <span>Vimeo</span>
                                </div>
                                </div>
                            </li>
                            <li className="soundcloud grid-item">
                                <div className="inner">
                                <div
                                    className="entry dizme_tm_portfolio_animation_wrap"
                                    data-title="Magic Art"
                                    data-category="Soundcloud"
                                >
                                    <a
                                    className="soundcloude_link mfp-iframe audio"
                                    href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                                    >
                                    <img src="img/thumbs/42-56.jpg" alt="" />
                                    <div
                                        className="main"
                                        data-img-url="img/portfolio/3.jpg"
                                    />
                                    </a>
                                </div>
                                <div className="mobile_title">
                                    <h3>Magic Art</h3>
                                    <span>Soundcloud</span>
                                </div>
                                </div>
                            </li>
                            <li className="popup grid-item">
                                <div className="inner">
                                <div
                                    className="entry dizme_tm_portfolio_animation_wrap"
                                    data-title="Scott Felix"
                                    data-category="Popup"
                                >
                                    <a className="zoom" href="img/portfolio/5.jpg">
                                    <img src="img/thumbs/42-56.jpg" alt="" />
                                    <div
                                        className="main"
                                        data-img-url="img/portfolio/5.jpg"
                                    />
                                    </a>
                                </div>
                                <div className="mobile_title">
                                    <h3>Blue Lemon</h3>
                                    <span>Popup</span>
                                </div>
                                </div>
                            </li>
                            <li className="popup grid-item">
                                <div className="inner">
                                <div
                                    className="entry dizme_tm_portfolio_animation_wrap"
                                    data-title="Art Stone"
                                    data-category="Popup"
                                >
                                    <a className="zoom" href="img/portfolio/4.jpg">
                                    <img src="img/thumbs/42-34.jpg" alt="" />
                                    <div
                                        className="main"
                                        data-img-url="img/portfolio/4.jpg"
                                    />
                                    </a>
                                </div>
                                <div className="mobile_title">
                                    <h3>Art Stone</h3>
                                    <span>Popup</span>
                                </div>
                                </div>
                            </li>
                            <li className="detail grid-item">
                                <div className="inner">
                                <div
                                    className="entry dizme_tm_portfolio_animation_wrap"
                                    data-title="Global Evolution"
                                    data-category="Detail"
                                >
                                    <a className="portfolio_popup" href="#">
                                    <img src="img/thumbs/42-34.jpg" alt="" />
                                    <div
                                        className="main"
                                        data-img-url="img/portfolio/6.jpg"
                                    />
                                    </a>
                                </div>
                                <div className="mobile_title">
                                    <h3>Global Evolution</h3>
                                    <span>Detail</span>
                                </div>
                                <div className="hidden_content">
                                    <div className="popup_details">
                                    <div className="main_details">
                                        <div className="textbox">
                                        <p>
                                            We live in a world where we need to move quickly and
                                            iterate on our ideas as flexibly as possible.
                                        </p>
                                        <p>
                                            Mockups are useful both for the creative phase of
                                            the project - for instance when you're trying to
                                            figure out your user flows or the proper visual
                                            hierarchy - and the production phase when they phase
                                            when they will represent the target product.
                                            Building mockups strikes the ideal balance ease of
                                            modification.
                                        </p>
                                        </div>
                                        <div className="detailbox">
                                        <ul>
                                            <li>
                                            <span className="first">Client</span>
                                            <span>Alvaro Morata</span>
                                            </li>
                                            <li>
                                            <span className="first">Category</span>
                                            <span>
                                                <a href="#">Detail</a>
                                            </span>
                                            </li>
                                            <li>
                                            <span className="first">Date</span>
                                            <span>March 07, 2021</span>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    <div className="additional_images">
                                        <ul>
                                        <li>
                                            <div className="list_inner">
                                            <div className="my_image">
                                                <img src="img/thumbs/4-2.jpg" alt="" />
                                                <div
                                                className="main"
                                                data-img-url="img/portfolio/1.jpg"
                                                />
                                            </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_inner">
                                            <div className="my_image">
                                                <img src="img/thumbs/4-2.jpg" alt="" />
                                                <div
                                                className="main"
                                                data-img-url="img/portfolio/2.jpg"
                                                />
                                            </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_inner">
                                            <div className="my_image">
                                                <img src="img/thumbs/4-2.jpg" alt="" />
                                                <div
                                                className="main"
                                                data-img-url="img/portfolio/3.jpg"
                                                />
                                            </div>
                                            </div>
                                        </li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
                        <img src="img/brushes/portfolio/1.png" alt="" />
                        </div>
                        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
                        <img src="img/brushes/portfolio/2.png" alt="" />
                        </div>
                    </div>
                    </div>
                    {/* /PORTFOLIO */}
                    {/* SKILLS */}
                    <div className="dizme_tm_section">
                    <div className="dizme_tm_skills">
                        <div className="container">
                        <div className="wrapper">
                            <div className="left">
                            <div
                                className="dizme_tm_main_title wow fadeInUp"
                                data-wow-duration="1s"
                                data-align="left"
                            >
                                <span>Design is Life</span>
                                <h3>I Develop Skills Regularly to Keep Me Update</h3>
                                <p>
                                Most common methods for designing websites that work well on
                                desktop is responsive and adaptive design
                                </p>
                            </div>
                            <div
                                className="dodo_progress wow fadeInUp"
                                data-wow-duration="1s"
                            >
                                <div
                                className="progress_inner"
                                data-value={85}
                                data-color="#f75023"
                                >
                                <span>
                                    <span className="label">Illustrator</span>
                                    <span className="number">85%</span>
                                </span>
                                <div className="background">
                                    <div className="bar">
                                    <div className="bar_in" />
                                    </div>
                                </div>
                                </div>
                                <div
                                className="progress_inner"
                                data-value={95}
                                data-color="#1cbe59"
                                >
                                <span>
                                    <span className="label">Photoshop</span>
                                    <span className="number">95%</span>
                                </span>
                                <div className="background">
                                    <div className="bar">
                                    <div className="bar_in" />
                                    </div>
                                </div>
                                </div>
                                <div
                                className="progress_inner"
                                data-value={75}
                                data-color="#8067f0"
                                >
                                <span>
                                    <span className="label">Figma</span>
                                    <span className="number">75%</span>
                                </span>
                                <div className="background">
                                    <div className="bar">
                                    <div className="bar_in" />
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="right">
                            <img src="img/skills/1.jpg" alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* /SKILLS */}
                    {/* SERVICES */}
                    <div className="dizme_tm_section" id="service">
                    <div className="dizme_tm_services">
                        <div className="container">
                        <div className="dizme_tm_main_title" data-align="center">
                            <span>Services</span>
                            <h3>What I Do for Clients</h3>
                            <p>
                            Most common methods for designing websites that work well on
                            desktop is responsive and adaptive design
                            </p>
                        </div>
                        <div className="service_list">
                            <ul>
                            <li className="wow fadeInLeft" data-wow-duration="1s">
                                <div className="list_inner tilt-effect">
                                <span className="icon">
                                    <img
                                    className="svg"
                                    src="img/svg/service/anchor.svg"
                                    alt=""
                                    />
                                    <img
                                    className="back"
                                    src="img/brushes/service/1.png"
                                    alt=""
                                    />
                                </span>
                                <div className="title">
                                    <h3>Creative Design</h3>
                                    <span className="price">
                                    Starts from <span>$99</span>
                                    </span>
                                </div>
                                <div className="text">
                                    <p>
                                    Web design refers to the design of websites that are
                                    displayed on the internet. It usually refers to the user
                                    experience aspects of website development
                                    </p>
                                </div>
                                <a className="dizme_tm_full_link" href="#" />
                                <img
                                    className="popup_service_image"
                                    src="img/service/1.jpg"
                                    alt=""
                                />
                                <div className="service_hidden_details">
                                    <div className="service_popup_informations">
                                    <div className="descriptions">
                                        <p>
                                        Dizme is a leading web design agency with an
                                        award-winning design team that creates innovative,
                                        effective websites that capture your brand, improve
                                        your conversion rates, and maximize your revenue to
                                        help grow your business and achieve your goals.
                                        </p>
                                        <p>
                                        In today’s digital world, your website is the first
                                        interaction consumers have with your business. That's
                                        why almost 95 percent of a user’s first impression
                                        relates to web design. It’s also why web design
                                        services can have an immense impact on your company’s
                                        bottom line.
                                        </p>
                                        <p>
                                        That’s why more companies are not only reevaluating
                                        their website’s design but also partnering with Kura,
                                        the web design agency that’s driven more than $2.4
                                        billion in revenue for its clients. With over 50 web
                                        design awards under our belt, we're confident we can
                                        design a custom website that drives sales for your
                                        unique business.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </li>
                            <li
                                className="wow fadeInRight"
                                data-wow-duration="1s"
                                data-wow-delay="0.2s"
                            >
                                <div className="list_inner tilt-effect">
                                <span className="icon">
                                    <img
                                    className="svg"
                                    src="img/svg/service/physics.svg"
                                    alt=""
                                    />
                                    <img
                                    className="back"
                                    src="img/brushes/service/2.png"
                                    alt=""
                                    />
                                </span>
                                <div className="title">
                                    <h3>Graphic Design</h3>
                                    <span className="price">
                                    Starts from <span>$199</span>
                                    </span>
                                </div>
                                <div className="text">
                                    <p>
                                    Web design refers to the design of websites that are
                                    displayed on the internet. It usually refers to the user
                                    experience aspects of website development
                                    </p>
                                </div>
                                <a className="dizme_tm_full_link" href="#" />
                                <img
                                    className="popup_service_image"
                                    src="img/service/2.jpg"
                                    alt=""
                                />
                                <div className="service_hidden_details">
                                    <div className="service_popup_informations">
                                    <div className="descriptions">
                                        <p>
                                        Dizme is a leading web design agency with an
                                        award-winning design team that creates innovative,
                                        effective websites that capture your brand, improve
                                        your conversion rates, and maximize your revenue to
                                        help grow your business and achieve your goals.
                                        </p>
                                        <p>
                                        In today’s digital world, your website is the first
                                        interaction consumers have with your business. That's
                                        why almost 95 percent of a user’s first impression
                                        relates to web design. It’s also why web design
                                        services can have an immense impact on your company’s
                                        bottom line.
                                        </p>
                                        <p>
                                        That’s why more companies are not only reevaluating
                                        their website’s design but also partnering with Kura,
                                        the web design agency that’s driven more than $2.4
                                        billion in revenue for its clients. With over 50 web
                                        design awards under our belt, we're confident we can
                                        design a custom website that drives sales for your
                                        unique business.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </li>
                            <li className="wow fadeInLeft" data-wow-duration="1s">
                                <div className="list_inner tilt-effect">
                                <span className="icon">
                                    <img
                                    className="svg"
                                    src="img/svg/service/contact.svg"
                                    alt=""
                                    />
                                    <img
                                    className="back"
                                    src="img/brushes/service/3.png"
                                    alt=""
                                    />
                                </span>
                                <div className="title">
                                    <h3>UI/UX Design</h3>
                                    <span className="price">
                                    Starts from <span>$299</span>
                                    </span>
                                </div>
                                <div className="text">
                                    <p>
                                    Web design refers to the design of websites that are
                                    displayed on the internet. It usually refers to the user
                                    experience aspects of website development
                                    </p>
                                </div>
                                <a className="dizme_tm_full_link" href="#" />
                                <img
                                    className="popup_service_image"
                                    src="img/service/3.jpg"
                                    alt=""
                                />
                                <div className="service_hidden_details">
                                    <div className="service_popup_informations">
                                    <div className="descriptions">
                                        <p>
                                        Dizme is a leading web design agency with an
                                        award-winning design team that creates innovative,
                                        effective websites that capture your brand, improve
                                        your conversion rates, and maximize your revenue to
                                        help grow your business and achieve your goals.
                                        </p>
                                        <p>
                                        In today’s digital world, your website is the first
                                        interaction consumers have with your business. That's
                                        why almost 95 percent of a user’s first impression
                                        relates to web design. It’s also why web design
                                        services can have an immense impact on your company’s
                                        bottom line.
                                        </p>
                                        <p>
                                        That’s why more companies are not only reevaluating
                                        their website’s design but also partnering with Kura,
                                        the web design agency that’s driven more than $2.4
                                        billion in revenue for its clients. With over 50 web
                                        design awards under our belt, we're confident we can
                                        design a custom website that drives sales for your
                                        unique business.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </li>
                            <li
                                className="wow fadeInRight"
                                data-wow-duration="1s"
                                data-wow-delay="0.2s"
                            >
                                <div className="list_inner tilt-effect">
                                <span className="icon">
                                    <img className="svg" src="img/svg/service/web.svg" alt="" />
                                    <img
                                    className="back"
                                    src="img/brushes/service/4.png"
                                    alt=""
                                    />
                                </span>
                                <div className="title">
                                    <h3>Web Design</h3>
                                    <span className="price">
                                    Starts from <span>$399</span>
                                    </span>
                                </div>
                                <div className="text">
                                    <p>
                                    Web design refers to the design of websites that are
                                    displayed on the internet. It usually refers to the user
                                    experience aspects of website development
                                    </p>
                                </div>
                                <a className="dizme_tm_full_link" href="#" />
                                <img
                                    className="popup_service_image"
                                    src="img/service/4.jpg"
                                    alt=""
                                />
                                <div className="service_hidden_details">
                                    <div className="service_popup_informations">
                                    <div className="descriptions">
                                        <p>
                                        Dizme is a leading web design agency with an
                                        award-winning design team that creates innovative,
                                        effective websites that capture your brand, improve
                                        your conversion rates, and maximize your revenue to
                                        help grow your business and achieve your goals.
                                        </p>
                                        <p>
                                        In today’s digital world, your website is the first
                                        interaction consumers have with your business. That's
                                        why almost 95 percent of a user’s first impression
                                        relates to web design. It’s also why web design
                                        services can have an immense impact on your company’s
                                        bottom line.
                                        </p>
                                        <p>
                                        That’s why more companies are not only reevaluating
                                        their website’s design but also partnering with Kura,
                                        the web design agency that’s driven more than $2.4
                                        billion in revenue for its clients. With over 50 web
                                        design awards under our belt, we're confident we can
                                        design a custom website that drives sales for your
                                        unique business.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
                        <img src="img/brushes/service/5.png" alt="" />
                        </div>
                        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
                        <img src="img/brushes/service/6.png" alt="" />
                        </div>
                    </div>
                    </div>
                    {/* /SERVICES */}
                    {/* TESTIMONIALS */}
                    <div className="dizme_tm_section">
                    <div className="dizme_tm_testimonials">
                        <div className="dizme_tm_main_title" data-align="center">
                        <span>Testimonials</span>
                        <h3>What My Clients Say</h3>
                        <p>
                            Most common methods for designing websites that work well on desktop
                            is responsive and adaptive design
                        </p>
                        </div>
                        <div className="list_wrapper">
                        <div className="total">
                            <div className="in">
                            <ul className="owl-carousel owl-theme">
                                <li>
                                <div className="icon">
                                    <img
                                    className="svg"
                                    src="img/svg/testimonials/quote.svg"
                                    alt=""
                                    />
                                </div>
                                <div className="text">
                                    <p>
                                    I rarely like to write reviews, but the Marketify team
                                    truly deserve a standing ovation for their customer
                                    support, customisation and most importantly, friendliness
                                    and professionalism. Many thanks once again for everything
                                    and hope that I get to deal with you again in the near
                                    future.
                                    </p>
                                </div>
                                <div className="short">
                                    <div className="image">
                                    <div
                                        className="main"
                                        data-img-url="img/testimonials/4.jpg"
                                    />
                                    </div>
                                    <div className="detail">
                                    <h3>Mike Anderson</h3>
                                    <span>Vivaco Studio</span>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <div className="icon">
                                    <img
                                    className="svg"
                                    src="img/svg/testimonials/quote.svg"
                                    alt=""
                                    />
                                </div>
                                <div className="text">
                                    <p>
                                    Really the Code Quality, Customer Support, and design are
                                    awesome and its good support they are giving. They give an
                                    instant solution to our needs. Really awesome. I will
                                    strongly recommend to my friends. Simply amazing team and
                                    amazing theme! Thank you from United States of America!
                                    </p>
                                </div>
                                <div className="short">
                                    <div className="image">
                                    <div
                                        className="main"
                                        data-img-url="img/testimonials/3.jpg"
                                    />
                                    </div>
                                    <div className="detail">
                                    <h3>Keita Smith</h3>
                                    <span>ABC Group</span>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <div className="icon">
                                    <img
                                    className="svg"
                                    src="img/svg/testimonials/quote.svg"
                                    alt=""
                                    />
                                </div>
                                <div className="text">
                                    <p>
                                    Loved the template design, documentation, customizability
                                    and the customer support from Marketify team! I am a noob
                                    in programming with very little knowledge about coding but
                                    the Marketify team helped me to launch my resume website
                                    successfully. Much recommended!
                                    </p>
                                </div>
                                <div className="short">
                                    <div className="image">
                                    <div
                                        className="main"
                                        data-img-url="img/testimonials/6.jpg"
                                    />
                                    </div>
                                    <div className="detail">
                                    <h3>Alan Walker</h3>
                                    <span>Web Designer</span>
                                    </div>
                                </div>
                                </li>
                            </ul>
                            </div>
                            <div className="left_details">
                            <div
                                className="det_image one wow fadeIn"
                                data-wow-duration="1s"
                                data-img-url="img/testimonials/2.jpg"
                            />
                            <div
                                className="det_image two wow fadeIn"
                                data-wow-duration="1s"
                                data-wow-delay="0.2s"
                                data-img-url="img/testimonials/1.jpg"
                            />
                            <div
                                className="det_image three wow fadeIn"
                                data-wow-duration="1s"
                                data-wow-delay="0.4s"
                                data-img-url="img/testimonials/3.jpg"
                            />
                            <div
                                className="det_image four wow fadeIn"
                                data-wow-duration="1s"
                                data-wow-delay="0.6s"
                                data-img-url="img/testimonials/4.jpg"
                            />
                            <span className="circle green animPulse" />
                            <span className="circle yellow animPulse" />
                            <span className="circle border animPulse" />
                            </div>
                            <div className="right_details">
                            <div
                                className="det_image one wow fadeIn"
                                data-wow-duration="1s"
                                data-img-url="img/testimonials/5.jpg"
                            />
                            <div
                                className="det_image two wow fadeIn"
                                data-wow-duration="1s"
                                data-wow-delay="0.2s"
                                data-img-url="img/testimonials/6.jpg"
                            />
                            <div
                                className="det_image three wow fadeIn"
                                data-wow-duration="1s"
                                data-wow-delay="0.4s"
                                data-img-url="img/testimonials/7.jpg"
                            />
                            <span className="circle yellow animPulse" />
                            <span className="circle purple animPulse" />
                            <span className="circle border animPulse" />
                            </div>
                        </div>
                        </div>
                        <div className="brush_1 wow fadeInRight" data-wow-duration="1s">
                        <img src="img/brushes/testimonials/1.png" alt="" />
                        </div>
                    </div>
                    </div>
                    {/* /TESTIMONIALS */}
                    {/* PARTNERS */}
                    <div className="dizme_tm_section">
                    <div className="dizme_tm_partners">
                        <div className="container">
                        <div className="partners_inner">
                            <ul>
                            <li className="wow fadeIn" data-wow-duration="1s">
                                <div className="list_inner">
                                <img src="img/partners/dark/1.png" alt="" />
                                <a className="dizme_tm_full_link" a="" href="#" />
                                </div>
                            </li>
                            <li
                                className="wow fadeIn"
                                data-wow-duration="1s"
                                data-wow-delay="0.2s"
                            >
                                <div className="list_inner">
                                <img src="img/partners/dark/2.png" alt="" />
                                <a className="dizme_tm_full_link" a="" href="#" />
                                </div>
                            </li>
                            <li
                                className="wow fadeIn"
                                data-wow-duration="1s"
                                data-wow-delay="0.4s"
                            >
                                <div className="list_inner">
                                <img src="img/partners/dark/3.png" alt="" />
                                <a className="dizme_tm_full_link" a="" href="#" />
                                </div>
                            </li>
                            <li
                                className="wow fadeIn"
                                data-wow-duration="1s"
                                data-wow-delay="0.6s"
                            >
                                <div className="list_inner">
                                <img src="img/partners/dark/4.png" alt="" />
                                <a className="dizme_tm_full_link" a="" href="#" />
                                </div>
                            </li>
                            <li className="wow fadeIn" data-wow-duration="1s">
                                <div className="list_inner">
                                <img src="img/partners/dark/5.png" alt="" />
                                <a className="dizme_tm_full_link" a="" href="#" />
                                </div>
                            </li>
                            <li
                                className="wow fadeIn"
                                data-wow-duration="1s"
                                data-wow-delay="0.2s"
                            >
                                <div className="list_inner">
                                <img src="img/partners/dark/6.png" alt="" />
                                <a className="dizme_tm_full_link" a="" href="#" />
                                </div>
                            </li>
                            <li
                                className="wow fadeIn"
                                data-wow-duration="1s"
                                data-wow-delay="0.4s"
                            >
                                <div className="list_inner">
                                <img src="img/partners/dark/7.png" alt="" />
                                <a className="dizme_tm_full_link" a="" href="#" />
                                </div>
                            </li>
                            <li
                                className="wow fadeIn"
                                data-wow-duration="1s"
                                data-wow-delay="0.6s"
                            >
                                <div className="list_inner">
                                <img src="img/partners/dark/8.png" alt="" />
                                <a className="dizme_tm_full_link" a="" href="#" />
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
                        <img src="img/brushes/partners/1.png" alt="" />
                        </div>
                    </div>
                    </div>
                    {/* /PARTNERS */}
                    {/* NEWS */}
                    <div className="dizme_tm_section" id="blog">
                    <div className="dizme_tm_news">
                        <div className="container">
                        <div className="dizme_tm_main_title" data-align="center">
                            <span>From My Blog</span>
                            <h3>Our Recent Updates, Blog, Tips, Tricks &amp; More</h3>
                        </div>
                        <div className="news_list">
                            <ul>
                            <li className="wow fadeInUp" data-wow-duration="1s">
                                <div className="list_inner">
                                <div className="image">
                                    <img src="img/thumbs/42-29.jpg" alt="" />
                                    <div className="main" data-img-url="img/news/1.jpg" />
                                    <div className="date">
                                    <h3>23</h3>
                                    <span>Dec</span>
                                    </div>
                                    <a className="dizme_tm_full_link" href="#" />
                                </div>
                                <div className="details">
                                    <span className="category">
                                    <a href="#">Web Development</a>
                                    </span>
                                    <h3 className="title">
                                    <a href="#">
                                        Jim Morisson Says when the musics over turn off the
                                        light
                                    </a>
                                    </h3>
                                </div>
                                <div className="news_hidden_details">
                                    <div className="news_popup_informations">
                                    <div className="text">
                                        <p>
                                        Dizme is a leading web design agency with an
                                        award-winning design team that creates innovative,
                                        effective websites that capture your brand, improve
                                        your conversion rates, and maximize your revenue to
                                        help grow your business and achieve your goals.
                                        </p>
                                        <p>
                                        In today’s digital world, your website is the first
                                        interaction consumers have with your business. That's
                                        why almost 95 percent of a user’s first impression
                                        relates to web design. It’s also why web design
                                        services can have an immense impact on your company’s
                                        bottom line.
                                        </p>
                                        <p>
                                        That’s why more companies are not only reevaluating
                                        their website’s design but also partnering with Kura,
                                        the web design agency that’s driven more than $2.4
                                        billion in revenue for its clients. With over 50 web
                                        design awards under our belt, we're confident we can
                                        design a custom website that drives sales for your
                                        unique business.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </li>
                            <li
                                className="wow fadeInUp"
                                data-wow-duration="1s"
                                data-wow-delay="0.2s"
                            >
                                <div className="list_inner">
                                <div className="image">
                                    <img src="img/thumbs/42-29.jpg" alt="" />
                                    <div className="main" data-img-url="img/news/2.jpg" />
                                    <div className="date">
                                    <h3>23</h3>
                                    <span>Dec</span>
                                    </div>
                                    <a className="dizme_tm_full_link" href="#" />
                                </div>
                                <div className="details">
                                    <span className="category">
                                    <a href="#">Branding</a>
                                    </span>
                                    <h3 className="title">
                                    <a href="#">
                                        How to be appreciated for your hard work as a developer
                                    </a>
                                    </h3>
                                </div>
                                <div className="news_hidden_details">
                                    <div className="news_popup_informations">
                                    <div className="text">
                                        <p>
                                        Dizme is a leading web design agency with an
                                        award-winning design team that creates innovative,
                                        effective websites that capture your brand, improve
                                        your conversion rates, and maximize your revenue to
                                        help grow your business and achieve your goals.
                                        </p>
                                        <p>
                                        In today’s digital world, your website is the first
                                        interaction consumers have with your business. That's
                                        why almost 95 percent of a user’s first impression
                                        relates to web design. It’s also why web design
                                        services can have an immense impact on your company’s
                                        bottom line.
                                        </p>
                                        <p>
                                        That’s why more companies are not only reevaluating
                                        their website’s design but also partnering with Kura,
                                        the web design agency that’s driven more than $2.4
                                        billion in revenue for its clients. With over 50 web
                                        design awards under our belt, we're confident we can
                                        design a custom website that drives sales for your
                                        unique business.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </li>
                            <li
                                className="wow fadeInUp"
                                data-wow-duration="1s"
                                data-wow-delay="0.4s"
                            >
                                <div className="list_inner">
                                <div className="image">
                                    <img src="img/thumbs/42-29.jpg" alt="" />
                                    <div className="main" data-img-url="img/news/3.jpg" />
                                    <div className="date">
                                    <h3>23</h3>
                                    <span>Dec</span>
                                    </div>
                                    <a className="dizme_tm_full_link" href="#" />
                                </div>
                                <div className="details">
                                    <span className="category">
                                    <a href="#">Social Media</a>
                                    </span>
                                    <h3 className="title">
                                    <a href="#">
                                        How designers and developers can collaborate better
                                    </a>
                                    </h3>
                                </div>
                                <div className="news_hidden_details">
                                    <div className="news_popup_informations">
                                    <div className="text">
                                        <p>
                                        Dizme is a leading web design agency with an
                                        award-winning design team that creates innovative,
                                        effective websites that capture your brand, improve
                                        your conversion rates, and maximize your revenue to
                                        help grow your business and achieve your goals.
                                        </p>
                                        <p>
                                        In today’s digital world, your website is the first
                                        interaction consumers have with your business. That's
                                        why almost 95 percent of a user’s first impression
                                        relates to web design. It’s also why web design
                                        services can have an immense impact on your company’s
                                        bottom line.
                                        </p>
                                        <p>
                                        That’s why more companies are not only reevaluating
                                        their website’s design but also partnering with Kura,
                                        the web design agency that’s driven more than $2.4
                                        billion in revenue for its clients. With over 50 web
                                        design awards under our belt, we're confident we can
                                        design a custom website that drives sales for your
                                        unique business.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
                        <img src="img/brushes/news/1.png" alt="" />
                        </div>
                        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
                        <img src="img/brushes/news/2.png" alt="" />
                        </div>
                    </div>
                    </div>
                    {/* /NEWS */}
                    {/* SUBSCRIBE */}
                    <div className="dizme_tm_section">
                    <div className="dizme_tm_subscribe">
                        <div className="container">
                        <div className="inner">
                            <div className="background">
                            <div className="dots" data-img-url="img/subscribe/dots.jpg" />
                            <div className="overlay" />
                            </div>
                            <div className="content">
                            <div className="left wow fadeInLeft" data-wow-duration="1s">
                                <span className="subtitle">Subscribe Now</span>
                                <h3 className="title">Get My Newsletter</h3>
                                <p className="text">
                                Get latest news, updates, tips and trics in your inbox
                                </p>
                            </div>
                            <div className="right wow fadeInRight" data-wow-duration="1s">
                                <div className="field">
                                <input type="text" placeholder="Your email here" />
                                <input type="submit" defaultValue="Send Now" />
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* /SUBSCRIBE */}
                    {/* CONTACT */}
                    <div className="dizme_tm_section" id="contact">
                    <div className="dizme_tm_contact">
                        <div className="container">
                        <div className="dizme_tm_main_title" data-align="center">
                            <span>Contact Me</span>
                            <h3>I Want To Hear From You</h3>
                            <p>
                            Please fill out the form on this section to contact with me. Or
                            call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
                            </p>
                        </div>
                        <div className="contact_inner">
                            <div className="left wow fadeInLeft" data-wow-duration="1s">
                            <ul>
                                <li>
                                <div className="list_inner">
                                    <div className="icon orangeBackground">
                                    <i className="icon-location orangeText" />
                                    </div>
                                    <div className="short">
                                    <h3>Address</h3>
                                    <span>20, Somewhere in world</span>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <div className="list_inner">
                                    <div className="icon greenBackground">
                                    <i className="icon-mail-1 greenText" />
                                    </div>
                                    <div className="short">
                                    <h3>Email</h3>
                                    <span>
                                        <a href="#">hello@dizme.com</a>
                                    </span>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <div className="list_inner">
                                    <div className="icon purpleBackground">
                                    <i className="icon-phone purpleText" />
                                    </div>
                                    <div className="short">
                                    <h3>Phone</h3>
                                    <span>+123 456 7890</span>
                                    </div>
                                </div>
                                </li>
                            </ul>
                            </div>
                            <div className="right wow fadeInRight" data-wow-duration="1s">
                            <div className="fields">
                                <form
                                action="/"
                                method="post"
                                className="contact_form"
                                id="contact_form"
                                autoComplete="off"
                                onSubmit={handleSubmit}
                                >
                                <div
                                    className="returnmessage"
                                    data-success="Your message has been received, We will contact you soon."
                                />
                                <div className="empty_notice">
                                    <span>Please Fill Required Fields</span>
                                </div>
                                <div className="input_list">
                                    <ul>
                                    <li>
                                        <input id="name" type="text" placeholder="Your Name" onChange={e => setName(e.target.value)} />
                                    </li>
                                    <li>
                                        <input
                                        id="email"
                                        type="text"
                                        placeholder="Your Email"
                                        onChange={e => setEmail(e.target.value)}
                                        />
                                    </li>
                                    <li>
                                        <input
                                        id="phone"
                                        type="number"
                                        placeholder="Your Phone"
                                        onChange={e => setPhone(e.target.value)}
                                        />
                                    </li>
                                    <li>
                                        <input id="subject" type="text" placeholder="Subject" onChange={e => setSubject(e.target.value)} />
                                    </li>
                                    </ul>
                                </div>
                                <div className="message_area">
                                    <textarea
                                    id="message"
                                    placeholder="Write your message here"
                                    defaultValue={""}
                                    onChange={e => setMessage(e.target.value)}
                                    />
                                </div>
                                <div className="dizme_tm_button">
                                    <button type="submit" id="send_message" href="#">
                                    <span>Submit Now</span>
                                    </button>
                                </div>
                                </form>
                            </div>
                            </div>
                            <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
                            <img src="img/brushes/contact/2.png" alt="" />
                            </div>
                        </div>
                        <div className="dizme_tm_map wow fadeInUp" data-wow-duration="1s">
                            <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe
                                width="100%"
                                height={375}
                                id="gmap_canvas"
                                src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                frameBorder={0}
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                />
                                <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon" />
                                <br />
                                <style
                                dangerouslySetInnerHTML={{
                                    __html:
                                    ".mapouter{position:relative;text-align:right;height:375px;width:100%;}"
                                }}
                                />
                                <a href="https://www.embedgooglemap.net">
                                how to add google map
                                </a>
                                <style
                                dangerouslySetInnerHTML={{
                                    __html:
                                    ".gmap_canvas {overflow:hidden;background:none!important;height:375px;width:100%;}"
                                }}
                                />
                            </div>
                            </div>
                            {/* Get your API here https://www.embedgooglemap.net */}
                        </div>
                        </div>
                        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
                        <img src="img/brushes/contact/1.png" alt="" />
                        </div>
                    </div>
                    </div>
                    {/* /CONTACT */}
                    {/* COPYRIGHT */}
                    <div className="dizme_tm_section">
                    <div className="dizme_tm_copyright">
                        <div className="container">
                        <div className="inner">
                            <div className="left wow fadeInLeft" data-wow-duration="1s">
                            <p>
                                Developed with love by{" "}
                                <a
                                href="https://themeforest.net/user/marketify"
                                target="_blank"
                                >
                                Marketify
                                </a>{" "}
                                © 2022
                            </p>
                            </div>
                            <div className="right wow fadeInRight" data-wow-duration="1s">
                            <ul>
                                <li>
                                <a href="#">Terms &amp; Condition</a>
                                </li>
                                <li>
                                <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* /COPYRIGHT */}
                    {/* CURSOR */}
                    <div className="mouse-cursor cursor-outer" />
                    <div className="mouse-cursor cursor-inner" />
                    {/* /CURSOR */}
                    {/* TOTOP */}
                    <div className="progressbar">
                    <a href="#">
                        <span className="text">To Top</span>
                    </a>
                    <span className="line" />
                    </div>
                    {/* /TOTOP */}
                </div>
                {/* / WRAPPER ALL */}

                </>


                {/* SCRIPTS */}
                
                <Script type="text/javascript" src="js/jquery.js"></Script>
                <Script type="text/javascript" src="js/plugins.js"  ></Script>
                <Script type="text/javascript" src="js/init.js" ></Script>
                {/* /SCRIPTS */}
            </>
        )

}