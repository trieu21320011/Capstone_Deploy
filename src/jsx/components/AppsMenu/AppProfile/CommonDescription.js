import React from "react";
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
import * as XLSX from 'xlsx';



const CommonDescription = () => {
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
               <h2 className="text-black font-w600">Tình trạng thường gặp</h2>
               <p className="mb-0">Danh sách tình trạng thường gặp</p>
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
         <div className="order-audio col-md-12">
            <Col lg={12}>
               <Card>
                  <Card.Header>
                     <Card.Title>Danh sách</Card.Title>
                     <CSVLink className="btn btn-primary " filename={"category-export.csv"} data={categories} headers={headers}>
               Export CVS
            </CSVLink>
                  </Card.Header>
                  <Card.Body>
                     <Table responsive striped>
                        <thead>
                           <tr>
                              <th >ID</th>
                              <th >Dịch vụ</th>
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
                                 <td></td>
                                 <td>{cate.name}</td>
                                 <td>10 $</td>
                                 <td>2h</td>
                                 <td>
                                 <div className="d-flex">
                                       <Link
                                          to="/sub-category-detail"
                                          className="btn btn-primary shadow btn-xs sharp mr-1"
                                       >
                                          <i className="fa fa-eye"></i>
                                       </Link>
                                       <Link
                                          to="/table-bootstrap-basic"
                                          className="btn btn-danger shadow btn-xs sharp"
                                       >
                                          <i className="fa fa-trash"></i>
                                       </Link>
                                    </div>

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
                           onChange={e => (onChangePageSize(e))}
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
      </>
   );

};


export default CommonDescription;
