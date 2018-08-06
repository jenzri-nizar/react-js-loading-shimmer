import React, { Component } from 'react'

import Shimmer from 'react-js-shimmer'

export default class App extends Component {
  render () {
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
    )
  }
}
