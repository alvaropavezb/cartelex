import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const Portfolio = () => {
  return (
    <div className="shane_tm_section" id="portfolio">
      <SimpleReactLightbox>
        <div className="shane_tm_portfolio">
          <div className="container">
            <div className="positon-relative">
              <div className="shane_tm_title">
                <div className="title_flex">
                  <div className="left">
                    <span>Portfolio</span>
                    <h3>Creative Portfolio</h3>
                  </div>
                </div>
              </div>
              {/* End shane_tm_title */}
              <div className="portfolio_filter">
                <Tabs>
                  <TabList>
                    <Tab>All</Tab>
                    <Tab>Design</Tab>
                    <Tab>Branding</Tab>
                    <Tab>Photography</Tab>
                  </TabList>
                  {/* End tablist */}
                  <div className="portfolio_list has-effect">
                    <SRLWrapper>
                      <TabPanel>
                        <ul className="gallery_zoom">
                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/1.jpg">
                                  <img
                                    src="/img/portfolio/1.jpg"
                                    alt="Design"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>
                                  <a
                                    href="https://www.instagram.com/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    My Story
                                  </a>
                                </h3>
                                <span>Design</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/2.jpg">
                                  <img
                                    src="/img/portfolio/2.jpg"
                                    alt="Branding"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>
                                  <a
                                    href="https://dribbble.com/shots/16545341-Imroz-Vue-JS-Creative-Agency-Portfolio-Template"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Design Trend
                                  </a>
                                </h3>
                                <span>Branding</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/14.jpg">
                                  <img
                                    src="/img/portfolio/14.jpg"
                                    alt="Photography"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>
                                  <a
                                    href="https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Ice Cream
                                  </a>
                                </h3>
                                <span>Photography</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/22.jpg">
                                  <img
                                    src="/img/portfolio/22.jpg"
                                    alt="Design"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>
                                  <a
                                    href="https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Shane Design
                                  </a>
                                </h3>
                                <span>Design</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/7.jpg">
                                  <img
                                    src="/img/portfolio/7.jpg"
                                    alt="Photography"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>
                                  <a
                                    href="https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Sweet Cherry
                                  </a>
                                </h3>
                                <span>Photography</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/3.jpg">
                                  <img
                                    src="/img/portfolio/3.jpg"
                                    alt="Branding"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>
                                  <a
                                    href="https://www.behance.net/ib-themes"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Behance Shoot
                                  </a>
                                </h3>
                                <span>Branding</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}
                        </ul>
                        {/* End portfolio list */}
                      </TabPanel>
                      {/* END ALL PORTFOLIO GALLERY */}

                      <TabPanel>
                        <ul className="gallery_zoom">
                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/22.jpg">
                                  <img
                                    src="/img/portfolio/22.jpg"
                                    alt="Design"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>
                                  <a
                                    href="https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Shane Design
                                  </a>
                                </h3>
                                <span>Design</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/7.jpg">
                                  <img
                                    src="/img/portfolio/7.jpg"
                                    alt="Photography"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>
                                  <a
                                    href="https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Sweet Cherry
                                  </a>
                                </h3>
                                <span>Photography</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}
                        </ul>
                        {/* End portfolio list */}
                      </TabPanel>

                      <TabPanel>
                        <ul className="gallery_zoom">
                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/1.jpg">
                                  <img
                                    src="/img/portfolio/1.jpg"
                                    alt="Design"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>
                                  <a
                                    href="https://www.instagram.com/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    My Story
                                  </a>
                                </h3>
                                <span>Design</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/2.jpg">
                                  <img
                                    src="/img/portfolio/2.jpg"
                                    alt="Branding"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>
                                  <a
                                    href="https://dribbble.com/shots/16545341-Imroz-Vue-JS-Creative-Agency-Portfolio-Template"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Design Trend
                                  </a>
                                </h3>
                                <span>Branding</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}
                        </ul>
                        {/* End single image block */}
                      </TabPanel>

                      <TabPanel>
                        <ul className="gallery_zoom">
                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/7.jpg">
                                  <img
                                    src="/img/portfolio/7.jpg"
                                    alt="Photography"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>
                                  <a
                                    href="https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Sweet Cherry
                                  </a>
                                </h3>
                                <span>Photography</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/15.jpg">
                                  <img
                                    src="/img/portfolio/15.jpg"
                                    alt="Branding"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>
                                  <a
                                    href="https://www.behance.net/ib-themes"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Behance Shoot
                                  </a>
                                </h3>
                                <span>Branding</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}
                        </ul>
                        {/* End single image block */}
                      </TabPanel>
                    </SRLWrapper>
                    {/* End tabpanel */}
                  </div>
                  {/* End list wrapper */}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </SimpleReactLightbox>
    </div>
  );
};

export default Portfolio;
