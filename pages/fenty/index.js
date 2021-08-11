import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Footer2 from '../../components/Footer'
import Head from 'next/head'

const Fenty =() => {
    return(
        
            <div>
                <Navbar5 />
            <style dangerouslySetInnerHTML={{__html: "\n      @media only screen and (min-width:960px){\n          .container{\n              width: 600px;\n          }\n      }\n            /* MIDSIZES */\n      @media only screen and (max-width:960px){\n            .container{\n                width: 600px;\n            }\n      }\n            /* MOBILE */\n      @media only screen and (max-width:600px){\n            .container{\n                width: 100%;\n            }\n            .item{\n                width: 50%;\n            }\n            .item-img{\n                width: 10%;\n                 /* max-width: 250px; */\n                 /* margin-left: auto;\n                margin-right: auto; */\n            }\n      }\n    " }} />
        {/* Start of html email*/}
        <table style={{background: '#f3f3f4'}} width="100%" cellSpacing={0} cellPadding={0} border={0}>
          <tbody><tr>
              <td>
                {/*start of container*/}
                <table className="container" width={600} cellSpacing={0} cellPadding={0} border={0} align="center">
                  {/*start of free shiping row*/}
                  <tbody><tr>
                      <td>
                        <table className width="100%" cellSpacing={0} cellPadding={0} border={0} align="center">
                          <tbody><tr>
                              <td>
                                <img src="images/imgg/shipping_top.png" alt="logo" style={{display: 'block', width: '100%'}} />
                              </td>
                            </tr>
                          </tbody></table>
                      </td>
                    </tr>
                    {/*end of free shipping row*/}
                    {/*start of link fb + fs row*/}
                    <tr>
                      <td>
                        <table className width="50%" cellSpacing={0} cellPadding={0} border={0} align="left">
                          <tbody><tr>
                              <td>
                                <a href="#" target="_blank">
                                  <img src="images/imgg/fb1.png" alt="" style={{display: 'block', width: '100%'}} />
                                </a>
                              </td>
                            </tr>
                          </tbody></table>
                        <table className width="50%" cellSpacing={0} cellPadding={0} border={0} align="right">
                          <tbody><tr>
                              <td> 
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                  <img src="images/imgg/fs2.png" alt="" style={{display: 'block', width: '100%'}} />
                                </a>
                              </td>
                            </tr>
                          </tbody></table>
                      </td>
                    </tr>
                    {/*end of link fb fs row*/}
                    {/*start of main row img*/}
                    <tr>
                      <td>
                        <table className width="100%" cellSpacing={0} cellPadding={0} border={0} align="center">
                          <tbody><tr>
                              <td>
                                <img src="images/imgg/main.jpg" alt="" style={{width: '100%', height: '100%', display: 'block'}} />
                              </td>
                            </tr>
                          </tbody></table>
                      </td>
                    </tr>
                    {/*end of main row img*/}
                    {/*start of main row link*/}
                    <tr>
                      <td>
                        <table className width="100%" cellSpacing={0} cellPadding={0} border={0} align="center">
                          <tbody><tr>
                              <td>
                                <a href="#">
                                  <img src="images/imgg/main2.jpg" alt="" style={{width: '100%', display: 'block'}} />
                                </a>
                              </td>
                            </tr>
                          </tbody></table>
                      </td>
                    </tr>
                    {/*end of main row link*/}
                    {/*start of main row link product*/}
                    <tr>
                      <td>
                        <table className width="100%" cellSpacing={0} cellPadding={0} border={0} align="center">
                          <tbody><tr>
                              <td>
                                <a href="#">
                                  <img src="images/imgg/main3.jpg" alt="" style={{width: '100%', display: 'block'}} />
                                </a>
                              </td>
                            </tr>
                          </tbody></table>
                      </td>
                    </tr>
                    {/*end of main row link product*/}
                    {/*start of main row img*/}
                    <tr>
                      <td>
                        <table className width="100%" cellSpacing={0} cellPadding={0} border={0} align="center">
                          <tbody><tr>
                              <td>
                                <img src="images/imgg/main4.jpg" alt="" style={{width: '100%', display: 'block'}} />
                              </td>
                            </tr>
                          </tbody></table>
                      </td>
                    </tr>
                    {/*end of main row img*/}
                    {/*start of shop items row*/}
                    <tr>
                      <td style={{background: '#ffffff', paddingBottom: '20px'}}>
                        <table className width="100%" cellSpacing={0} cellPadding={0} border={0} align="center">
                          <tbody><tr>
                              <td align="center">
                                <img src="images/imgg/youl.png" alt="" style={{width: '100%', display: 'block'}} />
                              </td>
                            </tr>
                          </tbody></table>
                        <table className="item" style={{display: 'inline-block', verticalAlign: 'top'}} width="33.33%" cellSpacing={0} cellPadding={10} border={0} align="left">
                          <tbody><tr>
                              <td align="center"> 
                                <a href="#">
                                  <img src="images/imgg/item1.jpg" alt="" style={{width: '100%', height: '100%', display: 'block'}} />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td style={{textAlign: 'center', fontSize: '14px', fontWeight: 700, lineHeight: '1.5', paddingBottom: '20px', height: '85px'}}>
                                SOFT MATTE COMPLEXION ESSENTIALS WITH BRUSH
                              </td>
                            </tr>
                            <tr>
                              <td style={{textAlign: 'center'}}>
                                <a href="#" target="_blank" style={{color: '#ffffff', background: '#222222', padding: '15px 50px', textDecoration: 'none', textTransform: 'uppercase', fontSize: '10px'}}>
                                  shop now
                                </a>
                              </td>
                            </tr>
                          </tbody></table>
                        <table className="item" style={{display: 'inline-block'}} width="33.33%" cellSpacing={0} cellPadding={10} border={0} align="left">
                          <tbody><tr>
                              <td align="center">
                                <a href="#">
                                  <img className="item-img" src="images/imgg/item2.jpg" alt="" style={{width: '100%', height: '100%', display: 'block', margin: 'auto'}} />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td style={{textAlign: 'center', fontSize: '14px', fontWeight: 700, lineHeight: '1.5', paddingBottom: '20px', height: '85px'}}>
                                FENTY SKIN VAULT 5-PIECE AM + PM SKINCARE ESSENTIALS 
                              </td>
                            </tr>
                            <tr>
                              <td style={{textAlign: 'center'}}>
                                <a href="#" target="_blank" style={{color: '#ffffff', background: '#222222', padding: '15px 50px', textDecoration: 'none', textTransform: 'uppercase', fontSize: '10px'}}>
                                  shop now
                                </a>
                              </td>
                            </tr>
                          </tbody></table>
                        <table className="item" style={{display: 'inline-block'}} width="33.33%" cellSpacing={0} cellPadding={10} border={0} align="left">
                          <tbody><tr>
                              <td align="center">
                                <a href="#">
                                  <img src="images/imgg/item3.jpg" alt="" style={{width: '100%', height: '100%', display: 'block', margin: 'auto'}} />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td style={{textAlign: 'center', fontSize: '14px', fontWeight: 700, lineHeight: '1.5', paddingBottom: '20px', height: '85px'}}>
                                DIAMOND BOMB ALL-OVER DIAMOND VEIL 
                              </td>
                            </tr>
                            <tr>
                              <td style={{textAlign: 'center'}}>
                                <a href="#" target="_blank" style={{color: '#ffffff', background: '#222222', padding: '15px 50px', textDecoration: 'none', textTransform: 'uppercase', fontSize: '10px'}}>
                                  shop now
                                </a>
                              </td>
                            </tr>
                          </tbody></table>
                      </td>
                    </tr>
                    {/*end of shop items row*/}
                    {/*start of after pay */}
                    <tr>
                      <td>
                        <table className width="100%" cellSpacing={0} cellPadding={0} border={0} align="center">
                          <tbody><tr>
                              <td>
                                <a href="#" target="_blank"> <img src="images/imgg/afterpay.jpg" alt="" style={{width: '100%', display: 'block'}} /> </a>
                              </td>
                            </tr>
                          </tbody></table>
                        <table className width="100%" cellSpacing={0} cellPadding={0} border={0} align="center">
                          <tbody><tr>
                              <td>
                                <img src="images/imgg/nonrisk.gif" alt="" style={{width: '100%', display: 'block'}} />
                              </td>
                            </tr>
                          </tbody></table>
                        <table className width="100%" cellSpacing={0} cellPadding={0} border={0} align="center">
                          <tbody><tr>
                              <td>
                                <a href="#" target="_blank"> <img src="images/imgg/getshade.png" alt="" style={{width: '100%', display: 'block'}} /></a>
                              </td>
                            </tr>
                          </tbody></table>
                      </td>
                    </tr>
                    {/*end of after pay*/}
                    {/*start of offers row*/}
                    <tr>
                      <td>
                        <table className style={{display: 'inline-block'}} width="50%" cellSpacing={0} cellPadding={0} border={0} align="left">
                          <tbody><tr>
                              <td>
                                <img src="images/imgg/1.gif" alt="" style={{width: '100%', display: 'block'}} />
                              </td>
                            </tr>
                          </tbody></table>
                        <table className style={{display: 'inline-block'}} width="50%" cellSpacing={0} cellPadding={0} border={0} align="right">
                          <tbody><tr>
                              <td>
                                <img src="images/imgg/2.gif" alt="" style={{width: '100%', display: 'block'}} />
                              </td>
                            </tr>
                          </tbody></table>
                        <table className style={{display: 'inline-block'}} width="50%" cellSpacing={0} cellPadding={0} border={0} align="left">
                          <tbody><tr>
                              <td>
                                <img src="images/imgg/3.gif" alt="" style={{width: '100%', display: 'block'}} />
                              </td>
                            </tr>
                          </tbody></table>
                        <table className style={{display: 'inline-block'}} width="50%" cellSpacing={0} cellPadding={0} border={0} align="right">
                          <tbody><tr>
                              <td>
                                <img src="images/imgg/4.gif" alt="" style={{width: '100%', display: 'block'}} />
                              </td>
                            </tr>
                          </tbody></table>
                        <table className style={{display: 'inline-block'}} width="50%" cellSpacing={0} cellPadding={0} border={0} align="left">
                          <tbody><tr>
                              <td>
                                <img src="images/imgg/5.gif" alt="" style={{width: '100%', display: 'block'}} />
                              </td>
                            </tr>
                          </tbody></table>
                        <table className style={{display: 'inline-block'}} width="50%" cellSpacing={0} cellPadding={0} border={0} align="right">
                          <tbody><tr>
                              <td>
                                <img src="images/imgg/6.gif" alt="" style={{width: '100%', display: 'block'}} />
                              </td>
                            </tr>
                          </tbody></table>
                      </td>
                    </tr>
                    {/*end of offers row*/}
                    {/*start of footer row*/}
                    <tr>
                      <td>
                        <table className style={{display: 'inline-block'}} width="100%" cellSpacing={0} cellPadding={0} border={0} align="left">
                          <tbody><tr>
                              <td>
                                <a href="#" target="_blank"> <img src="images/imgg/foot1.gif" alt="" style={{width: '100%', display: 'block'}} /> </a>
                              </td>
                            </tr>
                          </tbody></table>
                        <table className style={{display: 'inline-block'}} width="100%" cellSpacing={0} cellPadding={0} border={0} align="left">
                          <tbody><tr>
                              <td>
                                <a href="#" target="_blank"> <img src="images/imgg/foot2.gif" alt="" style={{width: '100%', display: 'block'}} /> </a>
                              </td>
                            </tr>
                          </tbody></table>
                        <table className style={{display: 'inline-block'}} width="100%" cellSpacing={0} cellPadding={0} border={0} align="left">
                          <tbody><tr>
                              <td>
                                <a href="#" target="_blank"> <img src="images/imgg/foot3.gif" alt="" style={{width: '100%', display: 'block'}} /> </a>
                              </td>
                            </tr>
                          </tbody></table>
                        <table className style={{display: 'inline-block'}} width="100%" cellSpacing={0} cellPadding={0} border={0} align="left">
                          <tbody><tr>
                              <td>
                                <img src="images/imgg/foot4.gif" alt="" style={{width: '100%', display: 'block'}} /> 
                              </td>
                            </tr>
                          </tbody></table>
                        <table className style={{display: 'inline-block'}} width="100%" cellSpacing={0} cellPadding={0} border={0} align="left">
                          <tbody><tr>
                              <td>
                                <img src="images/imgg/black.gif" alt="" style={{width: '100%', display: 'block'}} /> 
                              </td>
                              <td>
                                <a href="#" target="_blank"> <img src="images/imgg/ig2.gif" alt="" style={{width: '100%', display: 'block'}} /> </a>
                              </td>
                              <td>
                                <a href="#" target="_blank"> <img src="images/imgg/twit2.gif" alt="" style={{width: '100%', display: 'block'}} /> </a>
                              </td>
                              <td>
                                <a href="#" target="_blank"> <img src="images/imgg/fb2.gif" alt="" style={{width: '100%', display: 'block'}} /> </a>
                              </td>
                              <td>
                                <a href="#" target="_blank"> <img src="images/imgg/tik2.gif" alt="" style={{width: '100%', display: 'block'}} /> </a>
                              </td>
                              <td>
                                <a href="#" target="_blank"> <img src="images/imgg/yt2.gif" alt="" style={{width: '100%', display: 'block'}} /> </a>
                              </td>
                              <td>
                                <a href="#" target="_blank"> <img src="images/imgg/black2.gif" alt="" style={{width: '100%', display: 'block'}} /> </a>
                              </td>
                            </tr>
                          </tbody></table>
                        <table className style={{display: 'block', background: '#000000', color: '#c8c8c8', textAlign: 'center'}} width="100%" cellSpacing={0} cellPadding={0} border={0} align="center">
                          <tbody><tr>
                              <td style={{padding: '40px 0', fontSize: '12px', lineHeight: '1.5', letterSpacing: '1px'}} width={600}>
                                This email was sent by Fenty Beauty + Fenty Skin
                                <br />
                                425 Market Street, 19th Floor, San Francisco, CA 94105 
                                <br />
                                <br />
                                <br />
                                <a href="#" target="_blank" style={{textDecoration: 'none', color: '#c8c8c8', textTransform: 'capitalize', padding: '0 10px'}}> privacy policy</a> |
                                <a href="#" target="_blank" style={{textDecoration: 'none', color: '#c8c8c8', textTransform: 'capitalize', padding: '0 10px'}}> contact us</a> |
                                <a href="#" target="_blank" style={{textDecoration: 'none', color: '#c8c8c8', textTransform: 'capitalize', padding: '0 10px'}}> customer service</a> |
                                <a href="#" target="_blank" style={{textDecoration: 'none', color: '#c8c8c8', textTransform: 'capitalize', padding: '0 10px'}}> unsubscribe</a>
                                <br />
                                <br />
                                <br />
                                A Kendo Holdings Company. All Rights Reserved.
                              </td>
                            </tr>
                            <tr>
                              <td style={{background: '#f3f3f4', color: '#000000', fontSize: '12px', lineHeight: '1.8', padding: '0 10px'}}>
                                <br />
                                To receive free standard shipping in the U.S., add at least $1 USD of merchandise before tax. To receive free 2 day shipping in the U.S., add at least $75 of merchandise before tax and shipping charges will automatically be adjusted on qualifying orders at checkout. All Fenty Eau de Parfum full-size 75ml products can only be shipped by UPS ground to the 48 contiguous states in the U.S and Canada. We cannot ship to Alaska, Hawaii, P.O. boxes, APO/FPO military address and international locations at this time. To receive international shipping for $9.95, add at least $50 of merchandise before tax. To receive free international shipping, add at least $75 of merchandise before tax and shipping charges will automatically be adjusted on qualifying orders at checkout. Shipping &amp; handling, taxes, any international fees, CLF donations, and purchase of e-gift cards do not qualify. This offer is not redeemable for cash, credit, e-gift cards nor are they valid toward previous purchases. We reserve the right to cancel any order due to unauthorized, altered or ineligible use of this offer and to modify or cancel this offer due to system error or unforeseen problems. Subject to change without notice.
                              </td>
                            </tr>
                          </tbody></table>
                      </td>
                    </tr>
                    {/*end of footer row*/}
                  </tbody></table>
                {/*end of container*/}
              </td>
            </tr>
          </tbody></table>
        {/*end of html email*/}

    
        </div>
    )
};
export default Fenty;