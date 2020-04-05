import React from 'react';
import Header from "../components/Header";
import Banner from "../components/Banner";

const Index = () => (
    <div>
        <Header/>
        <Banner/>

        <section id="one" className="wrapper style1">
            <div className="container 75%">
                <div className="row 200%">
                    <div className="6u 12u$(medium)">
                        <header className="major">
                            <h2>Sample text</h2>
                            <p>About volcanoes</p>
                        </header>
                    </div>
                    <div className="6u$ 12u$(medium)">
                        <p>A volcano is a rupture in the crust of a planetary-mass object, such as Earth, that allows
                            hot lava, volcanic ash, and gases to escape from a magma chamber below the surface.</p>
                        <p>Earth's volcanoes occur because its crust is broken into 17 major, rigid tectonic plates that
                            float on a hotter, softer layer in its mantle. Therefore, on Earth, volcanoes are generally
                            found where tectonic plates are diverging or converging, and most are found underwater.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="four" className="wrapper style3 special">
            <div className="container">
                <header className="major">
                    <p>THAT IS A TEST PAGE ABOUT <br /> NEXT.JS INTERNATIONALIZATION.</p>
                </header>
                <ul className="actions">
                    <li>
                        <button className="button special big">FRENCH</button>
                    </li>
                    <li>
                        <button href="#" className="button special big">ENGLISH</button>
                    </li>
                    <li>
                        <button href="#" className="button special big">GERMAN</button>
                    </li>
                </ul>
            </div>
        </section>
    </div>
);

export default Index;
