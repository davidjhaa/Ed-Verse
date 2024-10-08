import { useState } from "react";
import { loginUser } from "../../api/api";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const loginwithgoogle = ()=>{
    window.open("http://localhost:8000/auth/google/callback","_self")
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Please Enter your Email")
      .email("Invalid Email"),
    password: Yup.string()
      .required("Please Enter your Password")
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleLogin = async () => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });

      await loginUser(formData)
      
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } 
    catch (error) {
      if (error.inner && error.inner.length > 0) {
        toast.error(error.inner[0].message);
      } 
      else {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.parent}>
        <div className={styles.form}>
          <div className={styles.content}>
            <h2 className={styles.title}>Log In</h2>
            <div className={styles.form__icons}>
              <FcGoogle onClick={()=> loginwithgoogle()} className={styles.formIcon} alt="icon1" />
              <FaFacebook className={styles.formIcon2} alt="icon2" />
              <IoLogoTwitter className={styles.formIcon3} alt="icon3" />
            </div>
            <span className={styles.formSpan}>
              or use email for login
            </span>
            {/* <div className={styles.email}>
              <div className={styles.inputbox}>
                <MdOutlineMailOutline className={styles.icon} />
                <input
                  className={styles.input}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div> */}
            <input
              className={styles.formInput}
              type="text"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />            
            <input
              className={styles.formInput}
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <a href="#" className={styles.forgetPassword}>
              Forget password ?
            </a>
            <div className={styles.loginSignupbtn}>
              <button className={styles.button} onClick={()=>handleLogin()}>
                Log In
              </button>
              <button
                className={`${styles.button} ${styles.mobileOnlyButton}`}
                onClick={() => navigate('/signUp')}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
        <div className={styles.switchContainer2}>
          <div className={styles.bottomCircle}></div>
          <div className={styles.upperCircle}></div>
          <div className={styles.welcomeNote}>
            <h2 className={styles.title}>Welcome Back!</h2>
            <p className={styles.description}>
            Great to see you again! <br/>Let's pick up where you left off.
            </p>
            <button
              className={styles.signInbutton}
              onClick={() => navigate("/signUp")}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={1500} />
    </div>
  );
};

export default Login;
