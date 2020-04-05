import React from 'react';
import Header from "../components/Header";
import Banner from "../components/Banner";

const Index = () => (
    <div>
        <Header />
        <Banner />

        <section id="one" className="wrapper style1">
            <div className="container 75%">
                <div className="row 200%">
                    <div className="6u 12u$(medium)">
                        <header className="major">
                            <h2>Maecenas luctus lectus</h2>
                            <p>Perspiciatis doloremque recusandae dolor</p>
                        </header>
                    </div>
                    <div className="6u$ 12u$(medium)">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ea mollitia corporis id,
                            distinctio sunt veritatis officiis dolore reprehenderit deleniti voluptatibus harum magna,
                            doloremque alias quisquam minus, eaque. Feugiat quod, nesciunt! Iste quos ipsam, iusto sit
                            esse.</p>
                        <p>Dolorum aspernatur maxime libero ratione quidem distinctio, placeat fugiat laborum voluptatum
                            enim neque soluta vel sunt id ex veritatis. Labore rerum, odit sapiente, alias mollitia
                            magnam exercitationem modi amet earum quia atque ipsum voluptas asperiores quas
                            laboriosam.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="four" className="wrapper style3 special">
            <div className="container">
                <header className="major">
                    <h2>Aenean elementum ligula</h2>
                    <p>Feugiat sed lorem ipsum magna</p>
                </header>
                <ul className="actions">
                    <li><a href="#" className="button special big">Get in touch</a></li>
                </ul>
            </div>
        </section>
    </div>
);

export default Index;
