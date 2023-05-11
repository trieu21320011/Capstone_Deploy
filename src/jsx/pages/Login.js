import { CgSpinner } from "react-icons/cg";
import axios from 'axios';
import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../Firebase";
import { baseURL } from "../api/axios";
import useAuth from "../hooks/useAuth";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import swal from "sweetalert";
import { useHistory, Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";




const Login = ({ }) => {
   const { setAuth } = useAuth();
   let history = useHistory();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";
   const [otp, setOtp] = useState("");
   const [ph, setPh] = useState("");
   const [accessToken, setAccessToken] = useState("")
   const [fullName, setFullName] = useState("");
   const [profilePic, setProfilePic] = useState("")
   const [accountId, setAccountId] = useState("")
   const [email, setEmail] = useState("")
   const [loading, setLoading] = useState(false);
   const [showOTP, setShowOTP] = useState(false);
   const [user, setUser] = useState(null);
   const [password, setPassword] = useState("")

   const onChangePassword = (e) => {
      setPassword(e.target.value)
      console.log(password);
   }

   function onCaptchVerify() {
      if (!window.recaptchaVerifier) {
         window.recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            {
               size: "invisible",
               callback: (response) => {
                  onSignup();
               },
               "expired-callback": () => { },
            },
            auth
         );
      }
   }

   const onSignup = () => {
      Swal.fire({
         title: 'Xác nhận thông tin',
         html: 'This will close in a minutes',

         timerProgressBar: true,
         didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
         },
      })
      console.log(password);
      console.log(ph);
      var data = JSON.stringify({
         "phoneNumber": "+" + ph,
         "password": password,
         "fcmToken": ""
      });

      var config = {
         method: 'post',
         maxBodyLength: Infinity,
         url: baseURL + '/authentication/password',
         headers: {
            'Content-Type': 'application/json'
         },
         data: data
      };

      axios(config)
         .then(function (response) {
            console.log(JSON.stringify(response.data));
            setAccessToken(response.data.accessToken)
            console.log(JSON.stringify(response.data.accountInfo.image));
            setProfilePic(response.data.accountInfo.image)
            setFullName(response.data.accountInfo.fullName)
            setAccountId(response.data.accountInfo.accountId)
            setEmail(response.data.accountInfo.email)
            setLoading(true);
            onCaptchVerify();
            const appVerifier = window.recaptchaVerifier;
            const formatPh = "+" + ph;
            signInWithPhoneNumber(auth, formatPh, appVerifier)
               .then((confirmationResult) => {
                  window.confirmationResult = confirmationResult;
                  console.log(confirmationResult);
                  setLoading(false);
                  setShowOTP(true);
                  Swal.close()
               })
               .catch((error) => {
                  console.log(error);
                  setLoading(false);
                  Swal.close()
               });
         })
         .catch(function (error) {
            console.log();
            Swal.close()
            swal("Oops", "Wrong id or password!", "error");
         });


   }


   function onOTPVerify() {
      Swal.fire({
         title: 'Xác nhận OTP',
         html: 'This will close in a minutes',

         timerProgressBar: true,
         didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
         },
      })
      setLoading(true);
      window.confirmationResult
         .confirm(otp)
         .then(async (res) => {
            console.log(res);
            setUser(res.user);
            setLoading(false);
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("profilePic", profilePic);
            localStorage.setItem("fullName", fullName);
            localStorage.setItem("accountIdn", accountId);
            localStorage.setItem("email", email);
            sessionStorage.setItem('reloadCount', String(1));
            // setAuth({accessToken})
            history.push("/")
            Swal.close()
            swal(
               "Good job!",
               "You login susccess!",
               "success"
            );
         })
         .catch((err) => {
            console.log(err);
            setLoading(false);
            swal("Oops", "Wrong OTP!", "error");
         });
   }

   return (
      <div className="authincation h-100 p-meddle">
         <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
               <div className="col-md-6">
                  <div className="authincation-content">
                     <div className="row no-gutters">
                        <div className="col-xl-12">
                           <section className="bg-emerald-500 flex items-center justify-center h-screen">
                              <div>
                                 <Toaster toastOptions={{ duration: 4000 }} />
                                 <div id="recaptcha-container"></div>
                                 {user ? (
                                    <h2 className="text-center text-white font-medium text-2xl">
                                       👍Login Success
                                    </h2>
                                 ) : (
                                    <div className="w-80 flex flex-col gap-4 rounded-lg p-4">

                                       {showOTP ? (
                                          <>
                                             <h4 className="text-center mb-4">
                                                Enter your OTP
                                             </h4>
                                             <OtpInput
                                                value={otp}
                                                onChange={setOtp}
                                                OTPLength={6}
                                                otpType="number"
                                                disabled={false}
                                                autoFocus
                                                className="opt-container "
                                             ></OtpInput>
                                             <div className="text-center">
                                                <input
                                                   type="submit"
                                                   value="Verify OTP"
                                                   onClick={onOTPVerify}
                                                   className="btn btn-primary btn-block"
                                                ></input>
                                             </div>
                                          </>
                                       ) : (
                                          <>
                                             <h4 className="text-center mb-4">
                                                Sign in your account
                                             </h4>

                                             <div className="form-group">
                                                <label className="mb-1">
                                                   <strong>Phone number</strong>
                                                </label>
                                                <PhoneInput country={"vn"} value={ph} onChange={setPh} />
                                             </div>

                                             <div className="form-group">
                                                <label className="mb-1">
                                                   <strong>Password</strong>
                                                </label>
                                                <input
                                                   type="password"
                                                   className="form-control"
                                                   defaultValue="Password"
                                                   name="password"
                                                   onChange={onChangePassword}
                                                />
                                             </div>
                                             <div className="text-center">
                                                <input
                                                   type="submit"
                                                   value="Sign Me In"
                                                   onClick={onSignup}
                                                   className="btn btn-primary btn-block"
                                                ></input>
                                             </div>
                                          </>
                                       )}
                                    </div>
                                 )}
                              </div>
                           </section>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
