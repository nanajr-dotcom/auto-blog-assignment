import React from 'react'
import fd1 from './Images/fd1.jpg'
import mst1 from './Images/mst1.jpg'
import chv1 from './Images/chv1.jpg'
import gmc1 from './Images/gmc1.jpg'
function Postsonpage3() {
    return (
        <>

            <section className="container">
                <div className="row">
                    <div className="row" >
                        <div className="col-md-4">
                            <div>
                                <article className="article">
                                    <h1 className="article-title">Can this battle the F150?</h1>
                                    <img src={fd1} className="img-fluid" alt="Responsive image"></img>
                                    <div className="article-body">
                                        <p>
                                            The term “artificial intelligence” has been floating around since the
                                            mid-20th century &mdash; a phrase encompassing “the science and engineering
                                            of intelligent machines.” But what of robots’ emotional intelligence?
                                            Though humans largely fear this aspect of the robot race, there’s no
                                            need. According to the handbook for the Society of Emotionally
                                            Available Robots (SEAR):
                </p>
                                        <p><a className="btn btn-primary" href="#" role="button">Read More »</a></p>
                                    </div>
                                </article>
                                <article className="article">
                                    <h1 className="article-title">The Horsepower of this Mustang is Insane</h1>
                                    <img src={mst1} className="img-fluid" alt="Responsive image"></img>
                                    <div className="article-body">
                                        <p>
                                            The term “artificial intelligence” has been floating around since the
                                            mid-20th century &mdash; a phrase encompassing “the science and engineering
                                            of intelligent machines.” But what of robots’ emotional intelligence?
                                            Though humans largely fear this aspect of the robot race, there’s no
                                            need. According to the handbook for the Society of Emotionally
                                            Available Robots (SEAR):
                </p>
                                        <p><a className="btn btn-primary" href="#" role="button">Read More »</a></p>
                                    </div>
                                </article>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div>
                                <article className="article">
                                    <h1 className="article-title">Chevy Camaro "I am a Beast"</h1>
                                    <img src={chv1} className="img-fluid" alt="Responsive image"></img>
                                    <div className="article-body">
                                        <p>
                                            The term “artificial intelligence” has been floating around since the
                                            mid-20th century &mdash; a phrase encompassing “the science and engineering
                                            of intelligent machines.” But what of robots’ emotional intelligence?
                                            Though humans largely fear this aspect of the robot race, there’s no
                                            need. According to the handbook for the Society of Emotionally
                                            Available Robots (SEAR):
                </p>
                                        <p><a className="btn btn-primary" href="#" role="button">Read More »</a></p>
                                    </div>
                                </article>
                                <article className="article">
                                    <h1 className="article-title">This GMC is bae</h1>
                                    <img src={gmc1} className="img-fluid" alt="Responsive image"></img>
                                    <div className="article-body">
                                        <p>
                                            The term “artificial intelligence” has been floating around since the
                                            mid-20th century &mdash; a phrase encompassing “the science and engineering
                                            of intelligent machines.” But what of robots’ emotional intelligence?
                                            Though humans largely fear this aspect of the robot race, there’s no
                                            need. According to the handbook for the Society of Emotionally
                                            Available Robots (SEAR):
                </p>
                                        <p><a className="btn btn-primary" href="#" role="button">Read More »</a></p>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <>
                                <form class="form-inline">
                                    <i class="fas fa-search" aria-hidden="true"></i>
                                    <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                                </form></>
                            <div className="p-4 mb-3">
                                <h4 className="font-italic">About Auto Info</h4>
                                <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                            </div>
                            <div className="p-4">
                                <h4 className="font-italic">Archives</h4>
                                <ol className="list-unstyled mb-0">
                                    <li><a href="#">March 2014</a></li>
                                    <li><a href="#">February 2014</a></li>
                                    <li><a href="#">January 2014</a></li>
                                    <li><a href="#">December 2013</a></li>
                                    <li><a href="#">November 2013</a></li>
                                    <li><a href="#">October 2013</a></li>
                                    <li><a href="#">September 2013</a></li>
                                    <li><a href="#">August 2013</a></li>
                                    <li><a href="#">July 2013</a></li>
                                    <li><a href="#">June 2013</a></li>
                                    <li><a href="#">May 2013</a></li>
                                    <li><a href="#">April 2013</a></li>
                                </ol>
                            </div>
                            <div className="p-4">
                                <h4 className="font-italic">Categories</h4>
                                <ol className="list-unstyled mb-0">
                                    <li><a href="#">American Cars</a></li>
                                    <li><a href="#">German Cars</a></li>
                                    <li><a href="#">Luxury Cars</a></li>
                                    <li><a href="#">London Cars</a></li>

                                </ol>
                            </div>
                        </div>
                    </div>


                </div>
                <nav class="blog-pagination">
                    <a class="btn btn-outline-primary" href="#">Older</a>
                    <a class="btn btn-outline-secondary disabled" href="#" tabindex="-1" aria-disabled="true">Newer</a>
                </nav>
            </section>
        </>

    )
}

export default Postsonpage3
