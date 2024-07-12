import React from 'react'

const Header = ()=>{
    return (
             <>
                <meta />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href={`${process.env.PUBLIC_URL}/images/haryana-sarkar-logo.png`} 
                />
                <link href={`${process.env.PUBLIC_URL}/css/bootstrap.min.css`}  rel="stylesheet" />
                <link href={`${process.env.PUBLIC_URL}/css/style.css`} rel="stylesheet" />
                <link href={`${process.env.PUBLIC_URL}/css/jquery.passwordRequirements.css`} rel="stylesheet" />
                <link href={`${process.env.PUBLIC_URL}/css/sweetalert.min.css`}  rel="stylesheet" />
                <link href={`${process.env.PUBLIC_URL}/css/datatables.min.css`}  rel="stylesheet" />
                <link href={`${process.env.PUBLIC_URL}/css/select2.min.css`} rel="stylesheet" />

                <script src={`${process.env.PUBLIC_URL}/js/jquery-3.4.1.slim.min.js`}></script>
                <script src={`${process.env.PUBLIC_URL}/js/popper.min.js`}></script>
                <script src={`${process.env.PUBLIC_URL}/js/swl.js`}></script>
                <script src={`${process.env.PUBLIC_URL}/js/aes-json-format.js`}></script>
                <script src={`${process.env.PUBLIC_URL}/js/aes.js`}></script>
                <script src={`${process.env.PUBLIC_URL}/jquery.min.js`}></script>
                <script src={`${process.env.PUBLIC_URL}/js/bootstrap.min.js`}></script>
                <script src={`${process.env.PUBLIC_URL}/js/sweetalert.min.js`}></script>
                <script src={`${process.env.PUBLIC_URL}/js/jquery.passwordRequirements.min.js`}></script>
                <script src={`${process.env.PUBLIC_URL}/js/dataTables.bootstrap5.min.js`}></script>
                <script src={`${process.env.PUBLIC_URL}/js/select2.min.js`}></script>
                <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                    __html:
                        "\n\tbody{background: linear-gradient(90deg, rgb(240, 202, 128) 0%, rgb(255, 255, 255) 35%, rgb(248, 248, 248) 100%);}\n\t.shadow_box {\n\t  max-width: 100%;\n\t  background-color: #ffffff;\n\t  margin: 40px auto;\n\t  padding: 40px;\n\t  box-shadow: 0px 6px 18px rgb(0 0 0 / 9%);\n\t  border-radius: 12px;\n\t}\n\t#loading{\n\t\tbackground-color: #fff;\n\t    display: block;\n\t    height: 100%;\n\t    left: 0;\n\t    opacity: 0.7;\n\t    position: fixed;\n\t    text-align: center;\n\t    top: 0px;\n\t    width: 100%;\n\t    z-index: 99;\n\t    padding-top: 144px;\n\t}\n\t.alert {\n    margin-top: 20px;\n}\n    .portal {\n          font-size: 18px !important;\n          margin-top: 5px;\n          color: red !important;\n          font-weight: bold !important;\n  }\n  .top-header a:hover{\n  \tcolor: #fff !important;\n  }\n  .tp-hf li button {\n    box-shadow: none;\n    border: none;\n    background: #f0f4f5;\n    color: #08466d;\n    font-size: 12px;\n    font-weight: 600;\n}\n.tp-hf li button {\n    margin-left: 0px;\n    padding: 2px 5px;\n    border-radius: 5px;\n}\n.tp-hf li button {\n    box-shadow: none;\n    border: none;\n    background: #f0f4f5;\n    color: #08466d;\n    font-size: 12px;\n    font-weight: 600;\n}\n.select-box li {\n    display: inline-block;\n    margin-right: 20px;\n    position: relative;\n}\n.top-header a, .select-box li {\n    color: #fff;\n    background: none;\n    font-size: 13px;\n    font-weight: 500;\n}\n    .portal1 {\n          font-size: 18px !important;\n          margin-top: 5px;\n          color: red !important;\n          font-weight: bold !important;\n  }\n    h5{\n        font-weight: bold;\n    }\n"
                    }}
                />
                <div id="loading" style={{ display: "none" }}>
                    <img id="loading-image" src={`${process.env.PUBLIC_URL}/images/loading.gif`} alt="Loading..." />
                </div>

                <header>
                    <div className="top-header">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-sm-10 adjust-width">
                            <ul className="select-box text-left">
                            <li>
                                <a href="javascript:void(0)">
                                {" "}
                                <i className="fa fa-envelope" /> <span>sample@mail.com</span>
                                </a>
                            </li>
                            <li>
                                {" "}
                                <i className="fa fa-phone" /> <span> 1800-1800-1800</span>
                            </li>
                            </ul>
                        </div>
                        <div className="col-sm-2 no-padding-left adjust-width text-right">
                            <ul className="select-box tp-hf">
                            <li className="incr-decr-btn">
                                <button id="btn-decrease">A-</button>
                                <button id="btn-orig">A</button>
                                <button id="btn-increase">A+</button>
                            </li>
                            <li></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="main-header">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-xl-2 col-md-2 col-sm-3 full-width">
                            <div className="logo">
                            <a href="">
                                <img
                                src={`${process.env.PUBLIC_URL}/images/haryana-sarkar-logo.png`}
                                alt="LOGO"
                                height={100}
                                />
                            </a>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-6 half-width">
                            <div className="consol-port text-center">
                            <a href="">
                                {/*	<strong>Haryana Public Service Commission</strong> */}
                                {/*<span>Government of Haryana</span>*/}
                                <strong>SAMADHAN PRAKOSHTH</strong>
                                {/*<span class="portal">Online Registration Portal </span> */}
                                <span className="portal1">Government of Haryana</span>
                            </a>
                            </div>
                        </div>
                        <div className="col-md-2 d-none d-md-block pt-2">
                            <span className="float-right cm-picture-box" style={{ right: 20 }}>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/azadi-ka-amrit-mahotsav-logo.png`}
                                alt=""
                                className="img-fluid"
                            />
                            </span>
                        </div>
                        </div>
                    </div>
                    <div style={{ height: 2, background: "#ff6000" }} />
                    </div>
                    <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                        __html: "\n\ta {\n    text-decoration: initial !important;\n}\n\n"
                    }}
                    />
                </header>
    </>
)

}

export default Header
