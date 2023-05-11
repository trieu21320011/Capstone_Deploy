import React, { useState } from "react";
import { Link } from "react-router-dom";
import bg5 from "../../../images/big/img5.jpg";
import profile from "../../../images/profile/pic1.jpg";
import DropFile from "../AppsMenu/Email/Compose/DropFile";
import { useEffect, useMemo } from "react";
import { getAllOrder } from "./service";
import { Pagination } from "@mui/material";
import axios from "axios";
import { baseURL } from "../../api/axios";
import {
   Row,
   Col,
   Card,
   Table,
   Badge,
} from "react-bootstrap";
import moment from "moment";

function CustomerDetail() {
    const [activeBudget, setActiveBudget] = useState(1000);
    const [page, setPage] = useState(1)
   const [pageSize] = useState(10)
   const [totalCount, setTotalCount] = useState(0)
   const [keyword, setKeyword] = useState("")
   const [orderList, setOrderList] = useState([])
   const [sortType, setSortType] = useState("asc");
   const [search, setSearch] = useState('');
   const [status, setStatus] = useState('');
   const [sortProperty, setSortProperty] = useState('')
   const [totalPage, setTotalPage] = useState(1);


      const setSorting = (col) => {
         if (sortType === 'asc') {
            setSortProperty(col)
            setSortType("desc")
            getData(col,page)
         }
         if (sortType === 'desc') {
            setSortProperty(col)
            setSortType("asc")
            getData(col,page)
         }  
      } 


   const getData = (col,page) => {
      debugger
        var sortProperty = 'sort-property=' + col;
        var sortDirection = sortType ? '&sort-direction=' + sortType : '';
      axios
         .get(baseURL + `/admin/orders?`+ sortProperty + sortDirection  +`&page=${page}&size=10`)
         .then((response) => {
            setOrderList(response.data.data)
            setTotalCount(response.data.metadata.total)
            setTotalPage(Math.ceil(response.data.metadata.total/10))
         })
         .catch((err) => {
            console.log(err);
         })
   }

   const onClickPage = (e, page) => {
      setPage(page);
      getData(sortProperty,page);
   }

   useEffect(() => {

      axios(getAllOrder)
         .then(function (response) {
            setOrderList(response.data.data)
            setTotalCount(response.data.metadata.total)
            setTotalPage(Math.ceil(response.data.metadata.total / 10))
         }).catch(function (error) {
            console.log(error);
         })

   }, []);
    return (
        <>
            <div className="form-head d-flex mb-2 mb-sm-3 mb-lg-5 align-items-center">
                <div className="mr-auto d-none d-lg-block">
                    <h2 className="text-black font-w600">Thông tin chi tiết của khách hàng</h2>
                    <div>
                        <Link
                            to="/new-compaign"
                            className="fs-18 text-primary font-w600"
                        >
                            Danh sách khách hàng /
                        </Link>
                        <Link to="/new-compaign" className="fs-18">
                        Thông tin chi tiết của khách hàng
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-3 col-xxl-4 col-lg-4">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card overflow-hidden">
                                <div
                                    className="text-center p-3 overlay-box "
                                    style={{ backgroundImage: `url(${bg5})` }}
                                >
                                    <div className="profile-photo">
                                        <img
                                            src={profile}
                                            width={100}
                                            className="img-fluid rounded-circle"
                                            alt="profile"
                                        />
                                    </div>
                                    <h3 className="mt-3 mb-1 text-white">Hồng Anh Customer</h3>
                                    <p className="text-white mb-0">Khách hàng</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span className="mb-0">Giới tính </span>{" "}
                                        <strong className="text-muted">Female </strong>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span className="mb-0">Tuổi</span>{" "}
                                        <strong className="text-muted">24 </strong>
                                    </li>

                                    <li className="list-group-item d-flex justify-content-between">
                                        <span className="mb-0">Ví</span>{" "}
                                        <strong className="text-muted">200.000 VND </strong>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-xl-9 col-xxl-8 col-lg-8">

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card mt-3">
                                <div className="card-header">

                                        <strong>Danh sách phản hồi của Hồng Anh Customer</strong> 

                                </div>
                                <div className='card-body'>
                                        <Table responsive striped>
                                            <thead>
                                                <tr>
                                                    <th onClick={() => setSorting("orderCode")}>Mã đơn</th>
                                                    <th onClick={() => setSorting("repairmanName")}>Doanh mục</th>
                                                    <th onClick={() => setSorting("createdTime")}>
                                                        Lí do
                                                    </th>
                                                    <th >Thời gian tạo</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orderList.map((order, index) =>
                                                (
                                                    <tr>
                                                        <td>{order.orderCode}</td>
                                                        <td>Phản hồi về thợ</td>
                                                        <td>Thái độ không tốt</td>
                                                        <td>{order.createdTime}</td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <Link
                                                                    to="/order-detail"
                                                                    className="btn btn-primary shadow btn-xs sharp mr-1"
                                                                >
                                                                    <i className="fa fa-eye"></i>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                                )}
                                            </tbody>
                                        </Table>
                                        <Row>
                     <Col xs={12} md={4} size="sm">
                     </Col>
                     <Col xs={12} md={5} size="sm">
                        <Pagination
                           count={totalPage}
                           page={page}
                           onChange={onClickPage}
                           variant="outlined" color="primary" />
                     </Col>
                     <Col xs={12} md={3} size="sm">
                     </Col>
                  </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default CustomerDetail;
