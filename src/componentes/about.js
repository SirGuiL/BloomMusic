import React from 'react';
// import './about.css';
import Header from './header';
import {Link} from 'react-router-dom'

export default class About extends React.Component{
    Musics(){
        const link = document.querySelector(".none");
        link.click();
    }

    render(){
        return(
            <div className="content">
                <div className="about">
                    {/* <div className="about" id="about">
                        <div className="box">
                            <div className="content">
                                <div>
                                <h2>About Us</h2>
                                <p>We are a music streaming service 
                                based in São Paulo, Brazil, 
                                officially launched on 10/28/2015.</p>
                                </div>
                            </div>
                            <img src="about.jpg" draggable="false"/>
                        </div>
                    </div> */}
                    <div className="box">
                        <h1>About Us</h1>
                        <p>We are a music streaming service 
                           based in São Paulo, Brazil, 
                           officially launched on 10/28/2015.</p>
                        <p>Our main goal is to bring quality 
                           and free content, with music, podcasts 
                           and videos verified by the Bloom Music™ team.</p>
                        <p>In Bloom Music you can create lists of songs 
                           for each moment, a list of songs for studies, 
                           for example. We have one of the best grades on the 
                           market, 4.6 out of 5.</p>
                        <p>We have branches all over the world, 
                           so contact with advertisers and users 
                           is much easier, with native speakers of each language.</p>
                           <button onClick={this.Musics} className="btn">Our Musics</button>
                           <Link className="none" to={"/musics"} />
                    </div>
                </div>
                <Header/>
            </div>
        );
    }
}