import * as React from 'react';
import { RouteComponentProps } from 'react-router';


export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="utf-8" />
            <title>Jdsports</title>
            <link rel="stylesheet" href="~/dist/bootstrap.min.css" asp-append-version="true" />
            <link rel="stylesheet" href="~/dist/site.css" asp-append-version="true" />
            <link rel="stylesheet" href="~/dist/style.css" asp-append-version="true" />
            <div className="page_width">
                <div className="heading">
                    <div className="row">
                        <div className="left_align logo">
                            <img src="img/logo-large-au.png" height={40} width={272} />
                        </div>
                        <div className="jd_drop pull-right">
                            <div className="jd_set">
                                <select>
                                    <option>JD</option>
                                </select>
                                <span className="jd_icon"><i className="fas fa-arrow-down" /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box_set">
                    <div className="row">
                        <div className="blackbtn">
                            <label>Live Sales:</label>
                            <div className="live_sale">
                                <h1>$100,000.00</h1>
                            </div>
                        </div>
                        <div className="table1">
                            <div className="table_style">
                                <table>
                                    <tbody><tr>
                                        <th colSpan={2}>Sales</th>
                                        <th />
                                    </tr>
                                        <tr>
                                            <td rowSpan={2} className="blue_color_light text_center">GROSS</td>
                                            <td className="blue_color_light">AUS</td>
                                            <td className="blue_color_light">$70,000.00</td>
                                        </tr>
                                        <tr>
                                            <td className="blue_color_light1">UK</td>
                                            <td className="blue_color_light1">$30,000.00</td>
                                        </tr>
                                    </tbody></table>
                            </div>
                            <div className="table_style">
                                <table>
                                    <tbody><tr>
                                        <th colSpan={2}>Sales</th>
                                        <th />
                                    </tr>
                                        <tr>
                                            <td rowSpan={2} className="blue_color_light text_center">NET</td>
                                            <td className="blue_color_light">AUS</td>
                                            <td className="blue_color_light">$70,000.00</td>
                                        </tr>
                                        <tr>
                                            <td className="blue_color_light1">UK</td>
                                            <td className="blue_color_light1">$30,000.00</td>
                                        </tr>
                                    </tbody></table>
                            </div>
                        </div>
                        <div className="table2">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="table_style">
                                        <table>
                                            <tbody><tr>
                                                <th colSpan={2}>Charged Sales</th>
                                                <th />
                                            </tr>
                                                <tr>
                                                    <td rowSpan={2} className="blue_color_light text_center">GROSS</td>
                                                    <td className="blue_color_light">AUS</td>
                                                    <td className="blue_color_light">$70,000.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="blue_color_light1">UK</td>
                                                    <td className="blue_color_light1">$30,000.00</td>
                                                </tr>
                                            </tbody></table>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="table_style">
                                        <table>
                                            <tbody><tr>
                                                <th colSpan={2}>Charged Sales</th>
                                                <th />
                                            </tr>
                                                <tr>
                                                    <td rowSpan={2} className="blue_color_light text_center">NET</td>
                                                    <td className="blue_color_light">AUS</td>
                                                    <td className="blue_color_light">$70,000.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="blue_color_light1">UK</td>
                                                    <td className="blue_color_light1">$30,000.00</td>
                                                </tr>
                                            </tbody></table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="leble_set">
                            <div className="row">
                                <div className="col-md-4">                                  
                                        
                                        <button className="benner"
                                            title='Today’s MC Report'
                                        >Today’s MC Report</button>
                                    
                                </div>
                                <div className="col-md-4">
                                    <div className="benner">
                                        <h1> Yesterday’s MC Report</h1>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="benner">
                                        <h1>WTD MC Report</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="benner">
                                        <h1> Sales by Style</h1>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="benner">
                                        <h1>  Sales by Brand</h1>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="benner">
                                        <h1>Refunds by SKU</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="benner">
                                        <h1>AUS DC Cancellations</h1>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="benner">
                                        <h1>
                                            Coming Soon…</h1>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="benner">
                                        <h1> Coming Soon…</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
