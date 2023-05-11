import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
    Row,
    Col,
    Card,
    Table,
    Badge,
    ProgressBar,
} from "react-bootstrap";

import { Dropdown } from "react-bootstrap";

const TransactionDetail = () => {
    return (
        <Fragment>
            <div className="row">
                <div className="col-lg-3">
                    <div className="card " style={{ height: "unset" }}>
                        <div className="mail-list ">
                            <Link
                                className="list-group-item active"
                            >
                                Thông tin thanh toán
                            </Link>
                            <div className="list-group-item">
                                <div class="text-muted">Loại thẻ</div>
                                <div >Nội địa</div>
                            </div>

                            <div className="list-group-item">
                                <div class="text-muted">Số thẻ</div>
                                <div >XXXXXX312</div>
                            </div>
                            <div className="list-group-item">
                                <div class="text-muted">Ngân hàng</div>
                                <div >Tp Ngân hàng Công Thương Việt Nam</div>
                            </div>
                            <div className="list-group-item">
                                <div class="text-muted">Tổng tiền thanh toán</div>
                                <div >300.000 VND</div>
                            </div>
                            <div className="list-group-item">
                                <div class="text-muted">Trạng thái giao dịch</div>
                                <div >Thành công         <svg
                                    className="mr-3"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999"
                                        stroke="#209F84"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M22 4L12 14.01L9 11.01"
                                        stroke="#209F84"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg></div>
                            </div>
                        </div>

                    </div>
                    <div className=" text-center mb-5">

                        <Link
                            to="/app-profile"
                            className="btn btn-outline-dark d-block btn-lg"
                        >
                            Xem lí do thất bại
                        </Link>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12">
                                    <div className="right-box-padding">
                                        <div className="read-content">
                                            <h2>
                                                Hóa đơn
                                            </h2>
                                            <hr />
                                            <div className="read-content-attachment">
                                                <h6>

                                                    Họ và tên

                                                </h6>
                                                <div className="row attachment">

                                                    <div className="col-auto">
                                                        <Link
                                                            to="/email-read"
                                                            className="text-muted"
                                                        >
                                                            Võ Khắc Triệu
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="read-content-attachment">
                                                <h6>

                                                    Số Điện thoại

                                                </h6>
                                                <div className="row attachment">

                                                    <div className="col-auto">
                                                        <Link
                                                            to="/email-read"
                                                            className="text-muted"
                                                        >
                                                            0335167422
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="read-content-attachment">
                                                <h6>
                                                    Email
                                                </h6>
                                                <div className="row attachment">

                                                    <div className="col-auto">
                                                        <Link
                                                            to="/email-read"
                                                            className="text-muted"
                                                        >
                                                            vokhactrieu91@gmail.com
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="read-content-attachment">
                                                <div className="read-content-attachment">
                                                    <h6>

                                                        Các dịch vụ đã thanh toán
                                                    </h6>
                                                    <div className="row attachment">

                                                        <Table responsive bordered>
                                                            <thead>
                                                                <tr>
                                                                    <th>#</th>
                                                                    <th>Name</th>
                                                                    <th>Price</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th>1</th>
                                                                    <td>Hư quạt</td>
                                                                    <td className="color-primary">$21.56</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>2</th>
                                                                    <td>Tắc đường dẫn ống</td>
                                                                    <td className="color-success">$55.32</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>3</th>
                                                                    <td>Hư dây điện</td>
                                                                    <td className="color-danger">$14.85</td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default TransactionDetail;
