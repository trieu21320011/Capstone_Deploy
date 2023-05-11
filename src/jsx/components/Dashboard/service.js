import { baseURL } from "../../api/axios";

export const getAllBooking =  {
       method: 'get',
       maxBodyLength: Infinity,
       url: baseURL + '/admin/bookings?sort-direction=desc&sort-property=bookedTime&page=1&size=10',
       headers: {},
       data: ''
}

export const getAllOrder =  {
       method: 'get',
       maxBodyLength: Infinity,
       url: baseURL + '/admin/orders?sort-direction=desc&sort-property=createdTime&page=1&size=10',
       headers: {},
       data: ''
}

