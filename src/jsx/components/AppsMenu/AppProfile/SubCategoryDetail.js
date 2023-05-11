import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
    Row,
    Col,
    Card,
    Table,
    Badge,
    Dropdown,
} from "react-bootstrap";
import { baseURL } from "../../../api/axios";
import axios from "axios";
import { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { Pagination } from "@mui/material";
import PerfectScrollbar from "perfect-scrollbar";
import * as XLSX from 'xlsx';
import DropFile from "../Email/Compose/DropFile";
const SubCategoryDetail = () => {
    const [totalPage, setTotalPage] = useState(1);
    const [page, setPage] = useState(1);
    const [excelData, setExcelData] = useState([]);
    const [totalSize, setTotalSize] = useState(10);
    const [categories, setCategories] = useState([])
    const onClickPage = (e, page) => {
        setPage(page);
        getData(page, totalSize);
    }
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        readExcel(file);
    };
    const readExcel = (file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const binaryStr = event.target.result;
            const workbook = XLSX.read(binaryStr, { type: 'binary' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const data = XLSX.utils.sheet_to_json(sheet);
            setExcelData(data);
            console.log(data);
        };
        reader.readAsBinaryString(file);
    };
    const headers = [
        { label: "ID", key: "id" },
        { label: "Image URL", key: "image" },
        { label: "Category Name", key: "name" }
    ];
    const getData = (page, size) => {
        axios
            .get(baseURL + `/admin/categories?page=${page}&size=${size}`)
            .then((response) => {
                setCategories(response.data.data)
                setTotalPage(Math.ceil(response.data.metadata.total / response.data.metadata.size))
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const onChangePageSize = (e) => {
        setTotalSize(e.target.value)
        setPage(1);
        getData(1, e.target.value)
    }

    useEffect(() => {
        axios
            .get(baseURL + `/admin/categories?page=${page}&size=${totalSize}`)
            .then((response) => {
                setCategories(response.data.data)
                setTotalPage(Math.ceil(response.data.metadata.total / response.data.metadata.size))
            })
            .catch((err) => {
                console.log(err);
            })

    }, []);
    return (
        <>
            <div className="form-head d-flex mb-0 mb-lg-4 align-items-start">
                <div className="mr-auto d-none d-lg-block">
                    <h2 className="text-black font-w600">Chi tiết doanh mục phụ</h2>
                </div>
                <div className="d-none d-lg-flex align-items-center">
                    <div className="text-right">
                        <h3 className="fs-20 text-black mb-0">09:62 AM</h3>
                        <span className="fs-14">Thứ 3, ngày 3 Tháng 8 2023</span>
                    </div>
                    <Link
                        className="ml-4 text-black p-3 rounded border text-center width60"
                        to="/order"
                    >
                        <i className="las la-cog scale5" />
                    </Link>
                </div>
            </div>
            <div className="form-head d-flex mb-0 mb-lg-4 align-items-start">
                {" "}
                <span className="float-right">
                    <strong>Import excel: </strong>{" "}
                    <div>
                        <input type="file" onChange={handleFileUpload} />
                        {/* <ul>
                                       {excelData.map((row, index) => (
                                          <li key={index}>{JSON.stringify(row)}</li>
                                          ))}
                                    </ul> */}
                    </div>
                </span>{" "}
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="row">
                        <div className="col-lg-4 order-lg-2 mb-5">

                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-header border-0 pb-0">
                                            <h3 className="text-black fs-20">Thông tin doanh mục phụ </h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-11 mb-3">
                                                    <label htmlFor="firstName">
                                                        Tên doanh mục phụ
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="firstName"
                                                        placeholder=""
                                                        required
                                                    />
                                                    <div className="invalid-feedback">
                                                        Valid first name is required.
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-md-11 mb-3">
                                                    <label htmlFor="firstName">
                                                        Thời gian dự tính
                                                    </label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="firstName"
                                                        placeholder=""
                                                        required
                                                    />
                                                    <div className="invalid-feedback">
                                                        Valid first name is required.
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-md-11 mb-3">
                                                    <label htmlFor="firstName">
                                                        Số tiền dự tính
                                                    </label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="firstName"
                                                        placeholder=""
                                                        required
                                                    />
                                                    <div className="invalid-feedback">
                                                        Valid first name is required.
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-md-11 mb-3">
                                                    <label htmlFor="firstName">
                                                        Ảnh
                                                    </label>
                                                    <DropFile />
                                                </div>

                                            </div>
                                            <div className="input-group-append">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary"
                                                >
                                                    Cập nhật
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-8 order-lg-1">

                            <div className="order-audio col-md-12">

                                <Col lg={12}>
                                    <Card>
                                    <Card.Header>
                                            <Card.Title>Danh Sách Hiện Trạng Thường Gặp Của Máy Lạnh</Card.Title>
                                            <CSVLink className="btn btn-primary " filename={"category-export.csv"} data={categories} headers={headers}>
                                                Export CVS
                                            </CSVLink>
                                        </Card.Header>
                                        <Card.Body>
                                            <Table responsive striped>
                                                <thead>
                                                    <tr>
                                                        <th >#</th>
                                                        <th >Doanh mục phụ</th>
                                                        <th >Tình trạng thường gặp</th>
                                                        <th >Giá dự tính</th>
                                                        <th >Thời gian làm dự tính</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {categories.map((cate, index) =>
                                                    (
                                                        <tr>
                                                            <td>{cate.id}</td>
                                                            <td></td>
                                                            <td>{cate.name}</td>
                                                            <td>10 $</td>
                                                            <td>2h</td>
                                                            <td>

                                                                <Dropdown className="dropdown ml-auto">
                                                                    <Dropdown.Toggle
                                                                        variant=""
                                                                        className="icon-false p-0 btn-link"
                                                                        data-toggle="dropdown"
                                                                    >
                                                                        <svg
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M11.0005 12C11.0005 12.5523 11.4482 13 12.0005 13C12.5528 13 13.0005 12.5523 13.0005 12C13.0005 11.4477 12.5528 11 12.0005 11C11.4482 11 11.0005 11.4477 11.0005 12Z"
                                                                                stroke="#3E4954"
                                                                                strokeWidth={2}
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M18.0005 12C18.0005 12.5523 18.4482 13 19.0005 13C19.5528 13 20.0005 12.5523 20.0005 12C20.0005 11.4477 19.5528 11 19.0005 11C18.4482 11 18.0005 11.4477 18.0005 12Z"
                                                                                stroke="#3E4954"
                                                                                strokeWidth={2}
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                            <path
                                                                                d="M4.00049 12C4.00049 12.5523 4.4482 13 5.00049 13C5.55277 13 6.00049 12.5523 6.00049 12C6.00049 11.4477 5.55277 11 5.00049 11C4.4482 11 4.00049 11.4477 4.00049 12Z"
                                                                                stroke="#3E4954"
                                                                                strokeWidth={2}
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                            />
                                                                        </svg>
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                                                        <Dropdown.Item className="dropdown-item text-black">
                                                                            <svg
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
                                                                            </svg>
                                                                            Cập nhật
                                                                        </Dropdown.Item>
                                                                        <Dropdown.Item className="dropdown-item text-black">
                                                                            <svg
                                                                                className="mr-3"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                                                    stroke="#F24242"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M15 9L9 15"
                                                                                    stroke="#F24242"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M9 9L15 15"
                                                                                    stroke="#F24242"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </svg>
                                                                            Xóa
                                                                        </Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>

                                                            </td>
                                                        </tr>
                                                    )
                                                    )}
                                                </tbody>
                                            </Table>
                                        </Card.Body>

                                    </Card>
                                    <Row>
                                        <Col xs={12} md={9} size="sm">
                                        </Col>
                                        <Col xs={12} md={5} size="sm">
                                            <Pagination
                                                count={totalPage}
                                                page={page}
                                                onChange={onClickPage}
                                                variant="outlined" color="primary" />
                                        </Col>
                                        <Col xs={12} md={5} size="sm">

                                        </Col>
                                        <div className="col-xl-2 col-lg-1">
                                            <div className="form-group " >

                                                <select
                                                    defaultValue={10}
                                                    className="form-control"
                                                    id="sel1"
                                                >
                                                    <option>1</option>
                                                    <option>5</option>
                                                    <option>10</option>
                                                </select>
                                            </div>
                                        </div>
                                    </Row>
                                </Col>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default SubCategoryDetail;