# react-js-loading-shimmer

> ReactJs Shimmer is an easy way to add a shimmering effect to any view in your web page. It&#x27;s useful as an unobtrusive loading indicator.

[![NPM](https://img.shields.io/npm/v/react-js-shimmer.svg)](https://www.npmjs.com/package/react-js-shimmer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-js-loading-shimmer
```

## Usage

```jsx
import React, { Component } from 'react';
import Shimmer from 'react-js-loading-shimmer';
class App extends Component {
    render() {
        return (
            <div className="App container">
                <h1 style={{textAlign:"center"}}>Shimmer Loader</h1>

                <div className="row">
                    <div className="col-sm-4 col-11">
                        <div className="content-grid">
                            <div className="box-mask">
                                <Shimmer height={"183px"} className={"class_name_test"}/>

                            </div>
                            <div className="box-containt-mask">

                                <div className="text1">
                                    <div className={"row"}>
                                        <div className={"col-sm-4"}><Shimmer height={"50px"}/></div>
                                        <div className={"col-sm-8"}><Shimmer height={"25px"}/><Shimmer
                                            height={"25px"}/></div>
                                    </div>
                                </div>
                                <table className="table">
                                    <tbody>
                                    <tr>
                                        <td className="align-middle">
                                            <Shimmer/> <br/><Shimmer/></td>
                                        <td className="align-middle">
                                            <Shimmer/> <br/><Shimmer/></td>
                                        <td className="align-middle">
                                            <Shimmer/> <br/><Shimmer/></td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <Shimmer/> <br/><Shimmer/></td>
                                        <td className="align-middle">
                                            <Shimmer/> <br/><Shimmer/>
                                        </td>
                                        <td className="align-middle">
                                            <Shimmer/> <br/><Shimmer/>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-11">
                        <div className="content-grid">
                            <div className="box-mask">
                                <Shimmer height={"183px"} className={"class_name_test"}/>
                            </div>
                            <div className="box-containt-mask">

                                <div className="text1">
                                    <div className={"row"}>
                                        <div className={"col-sm-4"}><Shimmer height={"50px"}/></div>
                                        <div className={"col-sm-8"}><Shimmer height={"25px"}/><Shimmer
                                            height={"25px"}/></div>
                                    </div>
                                </div>
                                <table className="table">
                                    <tbody>
                                    <tr>
                                        <td className="align-middle">
                                            <Shimmer/> <br/><Shimmer/></td>
                                        <td className="align-middle">
                                            <Shimmer/> <br/><Shimmer/></td>
                                        <td className="align-middle">
                                            <Shimmer/> <br/><Shimmer/></td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <Shimmer/> <br/><Shimmer/></td>
                                        <td className="align-middle">
                                            <Shimmer/> <br/><Shimmer/>
                                        </td>
                                        <td className="align-middle">
                                            <Shimmer/> <br/><Shimmer/>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-11">
                        <div className="content-grid">
                            <div className="box-mask">
                                <Shimmer height={"183px"}/>

                            </div>
                            <div className="box-containt-mask">

                                <div className="text1">
                                    <div className={"row"}>
                                        <div className={"col-sm-4"}><Shimmer height={"50px"}/></div>
                                        <div className={"col-sm-8"}><Shimmer height={"25px"}/><Shimmer
                                            height={"25px"}/></div>
                                    </div>
                                </div>
                                <table className="table">
                                    <tbody>
                                    <tr>
                                        <td className="align-middle">
                                            <Shimmer/> <br/><Shimmer/></td>
                                        <td className="align-middle">
                                            <Shimmer/> <br/><Shimmer/></td>
                                        <td className="align-middle">
                                            <Shimmer/> <br/><Shimmer/></td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <Shimmer/> <br/><Shimmer/></td>
                                        <td className="align-middle">
                                            <Shimmer/> <br/><Shimmer/>
                                        </td>
                                        <td className="align-middle">
                                            <Shimmer/> <br/><Shimmer/>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

```

## Demo

[![dEMO](https://image.ibb.co/d7HN0e/exemple.gif)]

## License

MIT © [jenzri-nizar](https://github.com/jenzri-nizar)
