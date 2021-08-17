import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Footer2 from '../../components/Footer'
import Head from 'next/head'

const Makartt =() => {
    return(
        
            <div>
              <Head>
                <title>Email Sale</title>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-MS13S8H0FC"/>
            </Head>
                <Navbar5 />
                <style dangerouslySetInnerHTML={{__html: "\n        @media only screen and (min-width:960px){\n            .container{\n                width: 600px;\n            }\n            .item{\n                padding-bottom: 10px;\n            }\n        }\n              /* MIDSIZES */\n        @media only screen and (max-width:960px){\n              .container{\n                  width: 600px;\n              }\n        }\n              /* MOBILE */\n        @media only screen and (max-width:600px){\n              .container{\n                  width: 100%;\n              }\n              \n        }\n      " }} />
        {/* Start of html email*/}
        <table style={{background: '#f3f3f4'}} width="100%" cellSpacing={0} cellPadding={0} border={0}>
          <tbody><tr>
              <td>
                {/*start of container*/}
                <table className="container" style={{background: '#ffffff'}} width={600} cellSpacing={0} cellPadding={0} border={0} align="center">
                  {/*start of top row*/}
                  <tbody><tr>
                      <td style={{padding: '20px'}}>
                        <table width="200px" cellSpacing={0} cellPadding={0} border={0} align="left">
                          <tbody><tr>
                              <td>
                                <img src="images/img/logo.png" alt="logo" style={{display: 'block', width: '100%'}} />
                              </td>
                            </tr>
                          </tbody></table>
                        <table width="200px" cellSpacing={0} cellPadding={0} border={0} align="right">
                          <tbody><tr>
                              <td style={{textAlign: 'right', color: '#999999', fontSize: '16px', height: '100%'}}>
                                <span style={{verticalAlign: 'text-middle'}}>Order #49163</span> 
                              </td>
                            </tr>
                          </tbody></table>
                      </td>
                    </tr>
                    {/*end of top row*/}
                    {/*start of thank you row*/}
                    <tr>
                      <td style={{padding: '20px'}}>
                        <table width="100%" cellSpacing={0} cellPadding={0} border={0} align="center">
                          <tbody><tr>
                              <td>
                                <span style={{fontWeight: 600, fontSize: '20px'}}>Thank you for your purchase!</span>
                                <br />
                                <p style={{color: '#777777', fontSize: '16px', lineHeight: '1.3'}}>Hi Customer, thank you so much for your recent purchase from Makartt.com! It means the world to us and we hope you love what you ordered. We're getting your order ready and will notify you when it's shipped.
                                </p>
                                <br />
                                <br />
                                <a href="#" style={{color: '#ffffff', background: '#f2b7bd', padding: '25px 30px', borderRadius: '10px', textDecoration: 'none', fontWeight: 500, marginRight: '10px'}}>View your order</a> or <a href="#" style={{color: '#f2b7bd', textDecoration: 'none', fontSize: '18px', paddingLeft: '10px'}}>Visit our store</a>
                              </td>
                            </tr>
                          </tbody></table>
                      </td>
                    </tr>
                    {/*end of thank you row*/}
                    {/*start of order summary row*/}
                    <tr>
                      <td style={{padding: '20px'}}>
                        <table style={{padding: '40px 0'}} width="100%" cellSpacing={0} cellPadding={0} border={0} align="center">
                          <tbody><tr>
                              <td>
                                <span style={{fontWeight: 300, fontSize: '24px'}}>Order summary</span>
                                <br />
                              </td>
                            </tr>
                          </tbody></table>
                        {/*start of item row*/}
                        <table valign="middle" style={{paddingBottom: '10px', borderBottom: '1px solid #e5e5e5'}} width="100%" cellSpacing={0} cellPadding={0} border={0} align="center">
                          <tbody><tr>
                              <td>
                                <table width="20%" cellSpacing={0} cellPadding={0} border={0} align="left">
                                  <tbody><tr>
                                      <td>
                                        <img src="images/img/1item.png" style={{width: '80%', borderRadius: '10px'}} />
                                      </td>
                                    </tr>
                                  </tbody></table>
                                <table width="60%" cellSpacing={0} cellPadding={0} border={0} align="left">
                                  <tbody><tr>
                                      <td>
                                        <span style={{verticalAlign: '-20px', color: '#555555', fontSize: '16px', fontWeight: 500}}>Femi Beauty x Makartt Full Collection Bundle × 1</span> 
                                      </td>
                                    </tr>
                                  </tbody></table>
                                <table width="20%" cellSpacing={0} cellPadding={0} border={0} align="right">
                                  <tbody><tr>
                                      <td style={{textAlign: 'right'}}>
                                        <span style={{verticalAlign: '-30px', color: '#555555', fontSize: '16px', fontWeight: 600}}>$115.18</span>
                                      </td>
                                    </tr>
                                  </tbody></table>
                              </td>
                            </tr>
                          </tbody></table>
                        {/*end of item row*/}
                        {/*start of item row*/}
                        <table valign="middle" style={{paddingBottom: '10px', paddingTop: '10px', borderBottom: '1px solid #e5e5e5'}} width="100%" cellSpacing={0} cellPadding={0} border={0} align="center">
                          <tbody><tr>
                              <td>
                                <table width="20%" cellSpacing={0} cellPadding={0} border={0} align="left">
                                  <tbody><tr>
                                      <td>
                                        <img src="images/img/2item.jpg" style={{width: '80%', borderRadius: '10px'}} />
                                      </td>
                                    </tr>
                                  </tbody></table>
                                <table width="60%" cellSpacing={0} cellPadding={0} border={0} align="left">
                                  <tbody><tr>
                                      <td>
                                        <span style={{verticalAlign: '-20px', color: '#555555', fontSize: '16px', fontWeight: 500}}>Ocean Couture Nail Decoration Set × 1</span> 
                                      </td>
                                    </tr>
                                  </tbody></table>
                                <table width="20%" cellSpacing={0} cellPadding={0} border={0} align="right">
                                  <tbody><tr>
                                      <td style={{textAlign: 'right'}}>
                                        <span style={{verticalAlign: '-30px', color: '#555555', fontSize: '16px', fontWeight: 600}}>$26.99</span>
                                      </td>
                                    </tr>
                                  </tbody></table>
                              </td>
                            </tr>
                          </tbody></table>
                        {/*end of item row*/}
                        {/*start of item row*/}
                        <table valign="middle" style={{paddingBottom: '10px', paddingTop: '10px', borderBottom: '1px solid #e5e5e5'}} width="60%" cellSpacing={0} cellPadding={0} border={0} align="right">
                          <tbody><tr>
                              <td style={{display: 'block'}}>
                                <table className="item" width="70%" cellSpacing={0} cellPadding={0} border={0} align="left">
                                  <tbody><tr>
                                      <td>
                                        <span style={{color: '#555555', fontSize: '16px', fontWeight: 500}}>Discount</span> 
                                      </td>
                                    </tr>
                                  </tbody></table>
                                <table className="item" width="30%" cellSpacing={0} cellPadding={0} border={0} align="right">
                                  <tbody><tr>
                                      <td style={{textAlign: 'right'}}>
                                        <span style={{color: '#555555', fontSize: '16px', fontWeight: 600}}>-$21.32</span>
                                      </td>
                                    </tr>
                                  </tbody></table>
                                <table className="item" width="70%" cellSpacing={0} cellPadding={0} border={0} align="left">
                                  <tbody><tr>
                                      <td>
                                        <span style={{color: '#555555', fontSize: '16px', fontWeight: 500}}>Subtotal</span> 
                                      </td>
                                    </tr>
                                  </tbody></table>
                                <table className="item" width="30%" cellSpacing={0} cellPadding={0} border={0} align="right">
                                  <tbody><tr>
                                      <td style={{textAlign: 'right'}}>
                                        <span style={{color: '#555555', fontSize: '16px', fontWeight: 600}}>$120.85</span>
                                      </td>
                                    </tr>
                                  </tbody></table>
                                <table className="item" width="70%" cellSpacing={0} cellPadding={0} border={0} align="left">
                                  <tbody><tr>
                                      <td>
                                        <span style={{color: '#555555', fontSize: '16px', fontWeight: 500}}>Shipping</span> 
                                      </td>
                                    </tr>
                                  </tbody></table>
                                <table className="item" width="30%" cellSpacing={0} cellPadding={0} border={0} align="right">
                                  <tbody><tr>
                                      <td style={{textAlign: 'right'}}>
                                        <span style={{color: '#555555', fontSize: '16px', fontWeight: 600}}>$0.00</span>
                                      </td>
                                    </tr>
                                  </tbody></table>
                                <table className="item" width="70%" cellSpacing={0} cellPadding={0} border={0} align="left">
                                  <tbody><tr>
                                      <td>
                                        <span style={{color: '#555555', fontSize: '16px', fontWeight: 500}}>Taxes</span> 
                                      </td>
                                    </tr>
                                  </tbody></table>
                                <table className="item" width="30%" cellSpacing={0} cellPadding={0} border={0} align="right">
                                  <tbody><tr>
                                      <td style={{textAlign: 'right'}}>
                                        <span style={{color: '#555555', fontSize: '16px', fontWeight: 600}}>$7.85</span>
                                      </td>
                                    </tr>
                                  </tbody></table>
                              </td>
                            </tr>
                          </tbody></table>
                        {/*end of item row*/}
                        {/*start of total row*/}
                        <table style={{paddingBottom: '10px', paddingTop: '20px'}} width="60%" cellSpacing={0} cellPadding={0} border={0} align="right">
                          <tbody><tr>
                              <td>
                                <table width="40%" cellSpacing={0} cellPadding={0} border={0} align="left">
                                  <tbody><tr>
                                      <td>
                                        <span style={{color: '#555555', fontSize: '16px', fontWeight: 500}}>Total</span> 
                                      </td>
                                    </tr>
                                  </tbody></table>
                                <table width="60%" cellSpacing={0} cellPadding={0} border={0} align="right">
                                  <tbody><tr>
                                      <td style={{textAlign: 'right'}}>
                                        <span style={{color: '#555555', fontSize: '20px', fontWeight: 600}}>$128.70 USD</span>
                                      </td>
                                    </tr>
                                  </tbody></table>
                                <table style={{paddingTop: '10px'}} width="60%" cellSpacing={0} cellPadding={0} border={0} align="right">
                                  <tbody><tr>
                                      <td style={{textAlign: 'right'}}>
                                        <span style={{color: '#555555', fontSize: '16px', fontWeight: 600}}>You saved $21.32</span>
                                      </td>
                                    </tr>
                                  </tbody></table>
                              </td>
                            </tr>
                          </tbody></table>
                        {/*end of total row*/}
                      </td>
                    </tr>
                    {/*end of order summary row*/}
                    {/*start of Customer row*/}
                    <tr>
                      <td style={{padding: '20px'}}>
                        <table width="100%" cellSpacing={0} cellPadding={0} border={0} align="left">
                          <tbody><tr>
                              <td>
                                <span style={{color: '#000000', fontSize: '20px', fontWeight: 300}}>Customer information</span>
                              </td>
                            </tr>
                          </tbody></table>
                      </td>
                    </tr>
                    {/*end of Customer row*/}
                    {/*start of Customer row*/}
                    <tr>
                      <td style={{padding: '20px'}}>
                        <table width="70%" cellSpacing={0} cellPadding={0} border={0} align="left">
                          <tbody><tr>
                              <td>
                                <table width="50%" cellSpacing={0} cellPadding={0} border={0} align="left">
                                  <tbody><tr>
                                      <td style={{color: '#555555', fontSize: '16px', height: '100%', fontWeight: 600}}>
                                        <span style={{verticalAlign: 'text-middle'}}>Shipping address</span> 
                                      </td>
                                    </tr>
                                  </tbody></table>
                                <table width="50%" cellSpacing={0} cellPadding={0} border={0} align="left">
                                  <tbody><tr>
                                      <td style={{color: '#555555', fontSize: '16px', height: '100%', fontWeight: 600}}>
                                        <span style={{verticalAlign: 'text-middle'}}>Billing address</span> 
                                      </td>
                                    </tr>
                                  </tbody></table>
                              </td>
                            </tr>
                          </tbody></table>
                      </td>
                    </tr>
                    {/*end of Customer row*/}
                    {/*start of Customer info row*/}
                    <tr>
                      <td style={{padding: '0 20px'}}>
                        <table width="70%" cellSpacing={0} cellPadding={0} border={0} align="left">
                          <tbody><tr>
                              <td>
                                <table width="50%" cellSpacing={0} cellPadding={0} border={0} align="left">
                                  <tbody><tr>
                                      <td style={{color: '#555555', fontSize: '16px', height: '100%'}}>
                                        <span style={{verticalAlign: 'text-middle'}}>Jane Smith</span> 
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{color: '#555555', fontSize: '16px', height: '100%'}}>
                                        <span style={{verticalAlign: 'text-middle'}}>5015 Nowhere Dr</span> 
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{color: '#555555', fontSize: '16px', height: '100%'}}>
                                        <span style={{verticalAlign: 'text-middle'}}>Middletown OH 45042</span> 
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{color: '#555555', fontSize: '16px', height: '100%'}}>
                                        <span style={{verticalAlign: 'text-middle'}}>United States</span> 
                                      </td>
                                    </tr>
                                  </tbody></table>
                                <table width="50%" cellSpacing={0} cellPadding={0} border={0} align="left">
                                  <tbody><tr>
                                      <td style={{color: '#555555', fontSize: '16px', height: '100%'}}>
                                        <span style={{verticalAlign: 'text-middle'}}>Jane Smith</span> 
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{color: '#555555', fontSize: '16px', height: '100%'}}>
                                        <span style={{verticalAlign: 'text-middle'}}>5015 Nowhere Dr</span> 
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{color: '#555555', fontSize: '16px', height: '100%'}}>
                                        <span style={{verticalAlign: 'text-middle'}}>Middletown OH 45042</span> 
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{color: '#555555', fontSize: '16px', height: '100%'}}>
                                        <span style={{verticalAlign: 'text-middle'}}>United States</span> 
                                      </td>
                                    </tr>
                                  </tbody></table>
                              </td>
                            </tr>
                          </tbody></table>
                      </td>
                    </tr>
                    {/*end of Customer info row*/}
                    {/*start of Customer row*/}
                    <tr>
                      <td style={{padding: '20px'}}>
                        <table width="70%" cellSpacing={0} cellPadding={0} border={0} align="left">
                          <tbody><tr>
                              <td>
                                <table width="50%" cellSpacing={0} cellPadding={0} border={0} align="left">
                                  <tbody><tr>
                                      <td style={{color: '#555555', fontSize: '16px', height: '100%', fontWeight: 600}}>
                                        <span style={{verticalAlign: 'text-middle'}}>Shipping method</span> 
                                      </td>
                                    </tr>
                                  </tbody></table>
                                <table width="50%" cellSpacing={0} cellPadding={0} border={0} align="left">
                                  <tbody><tr>
                                      <td style={{color: '#555555', fontSize: '16px', height: '100%', fontWeight: 600}}>
                                        <span style={{verticalAlign: 'text-middle'}}>Payment method</span> 
                                      </td>
                                    </tr>
                                  </tbody></table>
                              </td>
                            </tr>
                          </tbody></table>
                      </td>
                    </tr>
                    {/*end of Customer row*/}
                    {/*start of Customer info row*/}
                    <tr>
                      <td style={{padding: '0 20px'}}>
                        <table width="70%" cellSpacing={0} cellPadding={0} border={0} align="left">
                          <tbody><tr>
                              <td>
                                <table width="50%" cellSpacing={0} cellPadding={0} border={0} align="left">
                                  <tbody><tr>
                                      <td style={{color: '#555555', fontSize: '16px', height: '100%'}}>
                                        <span style={{verticalAlign: 'text-middle'}}>Standard</span> 
                                      </td>
                                    </tr>
                                  </tbody></table>
                                <table width="50%" cellSpacing={0} cellPadding={0} border={0} align="left">
                                  <tbody><tr>
                                      <td style={{color: '#555555', fontSize: '16px', height: '100%'}}>
                                        <span style={{verticalAlign: 'text-middle'}}>Visa - 4503</span> 
                                      </td>
                                    </tr>
                                  </tbody></table>
                              </td>
                            </tr>
                          </tbody></table>
                      </td>
                    </tr>
                    {/*end of Customer info row*/}
                    {/*start of top row*/}
                    <tr>
                      <td style={{paddingLeft: '20px', paddingRight: '20px', paddingTop: '30px', paddingBottom: '30px'}}>
                        <table style={{borderTop: '1px solid #e5e5e5'}} width="100%" cellSpacing={0} cellPadding={0} border={0} align="left">
                          <tbody><tr>
                              <td>
                                <table width="100%" cellSpacing={0} cellPadding={0} border={0} align="left">
                                  <tbody><tr>
                                      <td style={{paddingTop: '30px'}}>
                                        <span style={{color: '#999999', fontSize: '16px', fontWeight: 600}}>International Duties</span> 
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{paddingBottom: '20px'}}>
                                        <span style={{color: '#999999', fontSize: '16px'}}>As of February 11th, 2021, all customs clearing, duties and taxes on international orders outside of the United States shall be the responsibility of the buyer. Makartt is not responsible for duties, customs and inspection fees. No refund will be provided on any orders where the buyer is unable to clear customs.
                                        </span> 
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <span style={{color: '#999999', fontSize: '16px', fontWeight: 600}}>Trying to cancel an order?</span> 
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{paddingBottom: '20px'}}>
                                        <span style={{color: '#999999', fontSize: '16px'}}>All of our orders are processed within 1 hour during business hours Monday through Friday 9-5pm EST. If you'd like to cancel your order, please contact us and our representative will let you know if your order can still be canceled. If your order tracking number has already been generated, we will not be able to cancel your order.
                                        </span> 
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{paddingBottom: '10px'}}>
                                        <span style={{color: '#999999', fontSize: '16px', fontWeight: 600}}>CALL US</span> 
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{paddingBottom: '5px'}}>
                                        <span style={{color: '#999999', fontSize: '16px'}}>+ 1 (855) 594-0508 (US)
                                        </span> 
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{paddingBottom: '5px'}}>
                                        <span style={{color: '#999999', fontSize: '16px'}}>Business Hours:
                                        </span> 
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <span style={{color: '#999999', fontSize: '16px'}}>MON - FRI 9-6pm EST)
                                        </span> 
                                      </td>
                                    </tr>
                                  </tbody></table>
                              </td>
                            </tr>
                          </tbody></table>
                      </td>
                    </tr>
                    {/*end of top row*/}
                  </tbody></table>
                {/*end of container*/}
              </td>
            </tr>
          </tbody></table>
        {/*end of html email*/}
    
        </div>
    )
};
export default Makartt;