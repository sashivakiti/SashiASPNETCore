import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Dashboard extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="utf-8" />
            <title>Jdsports</title>
            <link href="css/bootstrap.min.css" rel="stylesheet" />
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />
            <link href="css/Style.css" rel="stylesheet" />
            <div className="page_width">
                <div className="heading">
                    <div className="row">
                        <div className="left_align logo">
                            <img src="img/logo-large-au.png" width={272} height={40} />
                        </div>
                        <div className="jd_drop pull-right">
                            <div className="back_button">
                                <button type="submit"
                                    //onKeyPress={() => this.props.navigation.goBack()}
                                >Back</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="reports_bg">
                    <div className="row">
                        <div className="sub_headin">
                            JD Sport Multi-channel Report V.2
        </div>
                        <div className="date">
                            <label>Date: <span className="date_name">Today</span> </label>
                        </div>
                        <div className="grid_set_2">
                            <div className="grid_set">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="table_col_3">
                                            <table className="grids_table">
                                                <tbody><tr>
                                                    <th>Sales (Gross)</th>
                                                    <th colSpan={2} />
                                                    <th className="border_none" />
                                                    <th className="border_none"> </th>
                                                </tr>
                                                    <tr>
                                                        <td rowSpan={3} className=" vertical gross_td">Gross</td>
                                                        <td>Total</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="border_none" />
                                                        <td className="border_none" />
                                                    </tr>
                                                    <tr>
                                                        <td>AUS</td>
                                                        <td className="white_bg center_text">87717</td>
                                                        <td className="white_bg border_none text_rigt">50.8</td>
                                                        <td className="border_none">%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>UK</td>
                                                        <td className="white_bg  center_text">87717</td>
                                                        <td className="white_bg border_none text_rigt">50.8</td>
                                                        <td className="border_none">%</td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="table_col_3">
                                            <table className="grids_table">
                                                <tbody><tr>
                                                    <th>Changed Sales</th>
                                                    <th colSpan={2} />
                                                    <th className="border_none" />
                                                    <th className="border_none"> </th>
                                                </tr>
                                                    <tr>
                                                        <td rowSpan={3} className="gross_td vertical">Gross</td>
                                                        <td>Total</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="border_none" />
                                                        <td className="border_none" />
                                                    </tr>
                                                    <tr>
                                                        <td>AUS</td>
                                                        <td className="white_bg center_text">87717</td>
                                                        <td className="white_bg border_none text_rigt">50.8</td>
                                                        <td className="border_none">%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>UK</td>
                                                        <td className="white_bg  center_text">87717</td>
                                                        <td className="white_bg border_none text_rigt">50.8</td>
                                                        <td className="border_none">%</td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid_set">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="table_col_3">
                                            <table className="grids_table">
                                                <tbody><tr>
                                                    <th>Sales (Net)</th>
                                                    <th colSpan={2} />
                                                    <th className="border_none" />
                                                    <th className="border_none"> </th>
                                                </tr>
                                                    <tr>
                                                        <td rowSpan={3} className="gross_td vertical">NET</td>
                                                        <td>Total</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="border_none" />
                                                        <td className="border_none" />
                                                    </tr>
                                                    <tr>
                                                        <td>AUS</td>
                                                        <td className="white_bg center_text">87717</td>
                                                        <td className="white_bg border_none text_rigt">50.8</td>
                                                        <td className="border_none">%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>UK</td>
                                                        <td className="white_bg  center_text">87717</td>
                                                        <td className="white_bg border_none text_rigt">50.8</td>
                                                        <td className="border_none">%</td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="table_col_3">
                                            <table className="grids_table">
                                                <tbody><tr>
                                                    <th>Changed Sales</th>
                                                    <th colSpan={2} />
                                                    <th className="border_none" />
                                                    <th className="border_none"> </th>
                                                </tr>
                                                    <tr>
                                                        <td rowSpan={3} className="gross_td vertical">NET</td>
                                                        <td>Total</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="border_none" />
                                                        <td className="border_none" />
                                                    </tr>
                                                    <tr>
                                                        <td>AUS</td>
                                                        <td className="white_bg center_text">87717</td>
                                                        <td className="white_bg border_none text_rigt">50.8</td>
                                                        <td className="border_none">%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>UK</td>
                                                        <td className="white_bg  center_text">87717</td>
                                                        <td className="white_bg border_none text_rigt">50.8</td>
                                                        <td className="border_none">%</td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid_set">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="table_col_3">
                                            <table className="grids_table">
                                                <tbody><tr>
                                                    <th colSpan={2} className="td_width">Refunds Units</th>
                                                    <th className="center_text">Qty</th>
                                                    <th className="center_text"> $$</th>
                                                </tr>
                                                    <tr>
                                                        <td className="td_width" />
                                                        <td>Total</td>
                                                        <td className="center_text">-134</td>
                                                        <td className="center_text">11845</td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                        <div className="table_col_3">
                                            <div className="grid_set">
                                                <table className="grids_table">
                                                    <tbody><tr>
                                                        <th colSpan={2} className="td_width">Refunds Orders</th>
                                                        <th className="center_text">Qty</th>
                                                        <th className="center_text">$$</th>
                                                    </tr>
                                                        <tr>
                                                            <td className="td_width" />
                                                            <td>Total</td>
                                                            <td className="center_text">-134</td>
                                                            <td className="center_text">11845</td>
                                                        </tr>
                                                    </tbody></table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="table_col_3">
                                            <table className="grids_table">
                                                <tbody><tr>
                                                    <th>Changed Sales</th>
                                                    <th colSpan={2} />
                                                    <th className="border_none" />
                                                    <th className="border_none"> </th>
                                                </tr>
                                                    <tr>
                                                        <td rowSpan={3} className="gross_td vertical">Jack Special</td>
                                                        <td>Total</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="border_none" />
                                                        <td className="border_none" />
                                                    </tr>
                                                    <tr>
                                                        <td>AUS</td>
                                                        <td className="white_bg center_text">87717</td>
                                                        <td className="white_bg border_none text_rigt">50.8</td>
                                                        <td className="border_none">%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>UK</td>
                                                        <td className="white_bg  center_text">87717</td>
                                                        <td className="white_bg border_none text_rigt">50.8</td>
                                                        <td className="border_none">%</td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid_set">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="table_col_3">
                                            <table className="grids_table">
                                                <tbody><tr>
                                                    <th>Orders</th>
                                                    <th />
                                                    <th className="center_text">QTY</th>
                                                    <th className="center_text">$$</th>
                                                </tr>
                                                    <tr>
                                                        <td rowSpan={3} className=" vertical gross_td">Gross</td>
                                                        <td>Total</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="border_none center_text" />
                                                        <td className="border_none" />
                                                    </tr>
                                                    <tr>
                                                        <td>AUS</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="white_bg border_none text_rigt">17</td>
                                                        <td className="border_none">%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>UK</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="white_bg border_none text_rigt">17</td>
                                                        <td className="border_none">%</td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="table_col_3">
                                            <table className="grids_table">
                                                <tbody><tr>
                                                    <th>Units</th>
                                                    <th />
                                                    <th className="center_text">QTY</th>
                                                    <th className="center_text">$$</th>
                                                </tr>
                                                    <tr>
                                                        <td rowSpan={3} className=" vertical gross_td">Gross</td>
                                                        <td>Total</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="border_none center_text" />
                                                        <td className="border_none" />
                                                    </tr>
                                                    <tr>
                                                        <td>AUS</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="white_bg border_none text_rigt">68</td>
                                                        <td className="border_none">%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>UK</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="white_bg border_none text_rigt">68</td>
                                                        <td className="border_none">%</td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid_set">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="table_col_3">
                                            <table className="grids_table">
                                                <tbody><tr>
                                                    <th>Fulfille Orders</th>
                                                    <th />
                                                    <th className="center_text">QTY</th>
                                                    <th className="center_text">$$</th>
                                                </tr>
                                                    <tr>
                                                        <td rowSpan={3} className=" vertical gross_td">Gross</td>
                                                        <td>Total</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="border_none center_text" />
                                                        <td className="border_none" />
                                                    </tr>
                                                    <tr>
                                                        <td>AUS</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="white_bg border_none text_rigt">68</td>
                                                        <td className="border_none">%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>UK</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="white_bg border_none text_rigt">68</td>
                                                        <td className="border_none">%</td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="table_col_3">
                                            <table className="grids_table">
                                                <tbody><tr>
                                                    <th>Fulfille Units</th>
                                                    <th />
                                                    <th className="center_text">QTY</th>
                                                    <th className="center_text">$$</th>
                                                </tr>
                                                    <tr>
                                                        <td rowSpan={3} className=" vertical gross_td">Gross</td>
                                                        <td>Total</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="border_none center_text" />
                                                        <td className="border_none" />
                                                    </tr>
                                                    <tr>
                                                        <td>AUS</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="white_bg border_none text_rigt">68</td>
                                                        <td className="border_none">%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>UK</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="white_bg center_text">175168</td>
                                                        <td className="white_bg border_none text_rigt">68</td>
                                                        <td className="border_none">%</td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid_set">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="table_col_3">
                                                <table className="grids_table">
                                                    <tbody><tr>
                                                        <th colSpan={2} className="cancelled_td">Warehouse Cancelled Units</th>
                                                        <th className="center_text">QTY</th>
                                                        <th className="center_text">$$</th>
                                                    </tr>
                                                        <tr>
                                                            <td className="center_text">Gross</td>
                                                            <td>AUS</td>
                                                            <td className="center_text white_bg">12</td>
                                                            <td className="center_text white_bg">12</td>
                                                        </tr>
                                                    </tbody></table>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="table_col_3">
                                                <table className="grids_table">
                                                    <tbody><tr>
                                                        <th className="td_width">Pending Units</th>
                                                        <th />
                                                        <th className="center_text">QTY</th>
                                                        <th className="center_text">$$</th>
                                                    </tr>
                                                        <tr>
                                                            <td className="center_text" />
                                                            <td>AUS</td>
                                                            <td className="center_text white_bg">12</td>
                                                            <td className="center_text white_bg">12</td>
                                                        </tr>
                                                    </tbody></table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid_set">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="table_col_3">
                                                <table className="grids_table">
                                                    <tbody><tr>
                                                        <th colSpan={2} className="td_width">Payment Method</th>
                                                        <th className="center_text">Qty</th>
                                                        <th className="center_text"> $$</th>
                                                    </tr>
                                                        <tr>
                                                            <td rowSpan={3} className="gross_td vertical">Gross</td>
                                                            <td>Afterpay</td>
                                                            <td className="white_bg center_text">175168</td>
                                                            <td className="white_bg center_text">175168</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Creditcard</td>
                                                            <td className="white_bg center_text">175168</td>
                                                            <td className="white_bg center_text">175168</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Paypal</td>
                                                            <td className="white_bg center_text">175168</td>
                                                            <td className="white_bg center_text">175168</td>
                                                        </tr>
                                                    </tbody></table>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="table_col_3">
                                                <table className="grids_table">
                                                    <tbody><tr>
                                                        <th colSpan={2} className="td_width">Pending Orders</th>
                                                        <th className="center_text">QTY</th>
                                                        <th className="center_text">$$</th>
                                                    </tr>
                                                        <tr>
                                                            <td className="td_width" />
                                                            <td>AUS</td>
                                                            <td className="center_text white_bg">12</td>
                                                            <td className="center_text white_bg">12</td>
                                                        </tr>
                                                    </tbody></table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
;
    }
}