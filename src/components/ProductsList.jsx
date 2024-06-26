// const LoginForm = ({ onSubmit }) => {
//   const handleSubmit = (evt) => {
//     evt.preventDefault();

//     const form = evt.target;
//     const { login, password } = form.elements;

//     // // посилання на dom елементи
//     // console.log(login, password);
//     // // значення полів
//     // console.log(login.value, password.value);

//     onSubmit({
//       login: login.value,
//       password: password.value,
//     });

//     form.reset();
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="login" />
//       <br />
//       <input type="password" name="password" />
//       <br />
//       <button type="submit">Log in</button>
//     </form>
//   );
// };

// export default LoginForm;

// import { useId } from "react";

// const LoginForm = () => {
//   const loginId = useId();
//   const passwordId = useId();

//   return (
//     <form>
//       <label htmlFor={loginId}>login</label>
//       <input type="text" name="login" id={loginId} />

//       <label htmlFor={passwordId}>Password</label>
//       <input type="text" name="password" id={passwordId} />

//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;

// import { useState } from "react";

// const SearchBar = () => {
//   const [inputValue, setInputValue] = useState("");
//   const handelChage = (evt) => setInputValue(evt.target.value);

//   return (
//     <div>
//       <input type="text" value={inputValue} onChange={handelChage} />
//       <p>{inputValue}</p>
//     </div>
//   );
// };

// export default SearchBar;

// import { useId } from "react";

// const LangSwitcher = ({ value, onSelect }) => {
//   const selectId = useId();
//   // const [lang, setLang] = useState("uk");

//   return (
//     <div>
//       <label htmlFor={selectId}>Choose language</label>
//       <select
//         id={selectId}
//         value={value}
//         onChange={(evt) => onSelect(evt.target.value)}
//       >
//         <option value="en">English</option>
//         <option value="uk">Ukrainian</option>
//         <option value="pl">Polish</option>
//       </select>
//     </div>
//   );
// };

// export default LangSwitcher;

// const LoginForm = () => {
//   const [values, setValues] = useState({
//     login: "",
//     password: "",
//   });

// const handleLoginChange = (evt) => {
//   setValues({
//     ...values,
//     login: evt.target.value,
//   });
// };

// const handlePwdChange = (evt) => {
//   setValues({
//     ...values,
//     password: evt.target.value,
//   });
// };

//   const handleChange = (evt) => {
//     setValues({
//       ...values,
//       [evt.target.name]: evt.target.value,
//     });
//   };

//   const handleSumit = (evt) => {
//     evt.preventDefault();
//     console.log(values);

//     // Очищаємо форму
//     setValues({
//       login: "",
//       password: "",
//     });
//   };

//   return (
//     <form onSubmit={handleSumit}>
//       <input
//         type="text"
//         name="login"
//         value={values.login}
//         onChange={handleChange}
//       />
//       <br />
//       <input
//         type="password"
//         name="password"
//         value={values.password}
//         onChange={handleChange}
//       />
//       <br />
//       <button type="submit">Login</button>
//     </form>
//   );
// };
// export default LoginForm;

// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { useId } from "react";
// import * as Yup from "yup";

// const FeedbackSchema = Yup.object().shape({
//   username: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   email: Yup.string().email("Must be a valid email!").required("Required"),
//   message: Yup.string()
//     .min(3, "Too short")
//     .max(256, "Too long")
//     .required("Required"),
//   level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required"),
// });

// const initialValues = {
//   username: "",
//   email: "",
//   message: "",
//   level: "good",
// };

// const FeedbackForm = () => {
//   const nameFieldId = useId();
//   const emailFieldId = useId();
//   const msgFieldId = useId();
//   const levelFieldId = useId();

//   const handleSubmit = (values, actions) => {
//     console.log(values);
//     actions.resetForm();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       validationSchema={FeedbackSchema}
//     >
//       <Form>
//         <div>
//           <label htmlFor={nameFieldId}>Username</label>
//           <Field type="text" name="username" id={nameFieldId} />
//           <ErrorMessage name="username" as="span" />
//         </div>

//         <div>
//           <label htmlFor={emailFieldId}>Email</label>
//           <Field type="email" name="email" id={emailFieldId} />
//           <ErrorMessage name="email" as="span" />
//         </div>

//         <div>
//           <label htmlFor={msgFieldId}>Message</label>
//           <Field as="textarea" name="message" id={msgFieldId} rows="5" />
//           <ErrorMessage name="message" as="span" />
//         </div>

//         <div>
//           <label htmlFor={levelFieldId}>Service satisfaction level</label>
//           <Field as="select" name="level" id={levelFieldId}>
//             <option value="good">Good</option>
//             <option value="neutral">Neutral</option>
//             <option value="bad">Bad</option>
//           </Field>
//           <ErrorMessage name="level" as="span" />
//         </div>

//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// };

// export default FeedbackForm;
// const ArticleList = ({ items }) => {
//   return (
//     <ul>
//       {items.map(({ objectID, url, title }) => (
//         <li key={objectID}>
//           <a href={url} target="_blank" rel="noreferrer noopener">
//             {title}
//           </a>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ArticleList;

// import { useRef } from "react";

// const Player = ({ source }) => {
//   const playerRef = useRef();

//   const play = () => playerRef.current.play();

//   const pause = () => playerRef.current.pause();

//   return (
//     <div>
//       <video ref={playerRef} src={source}>
//         Sorry, your browser does not support embedded videos.
//       </video>
//       <div>
//         <button onClick={play}>Play</button>
//         <button onClick={pause}>Pause</button>
//       </div>
//     </div>
//   );
// };

// export default Player;
// import { forwardRef } from "react";

// const CustomButton = forwardRef((props, ref) => (
//   <button ref={ref}>{props.children}</button>
// ));

// export default CustomButton;

// LESSOM 5

// import { Link, Outlet } from "react-router-dom";

// export const About = () => {
//   return (
//     <div>
//       <h1>About page</h1>
//       <ul>
//         <li>
//           <Link to="mission">Read about our mission</Link>
//         </li>
//         <li>
//           <Link to="team">Get to know the team</Link>
//         </li>
//         <li>
//           <Link to="reviews">Go through the reviews</Link>
//         </li>
//       </ul>
//       <Outlet />
//     </div>
//   );
// };

// export default About;

import style from "./styleFile.module";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProductsList = ({ productsList }) => {
  return (
    <div className={style.thumbList}>
      {productsList.length > 0 && (
        <Swiper className={style.swiperWrapper}>
          {productsList.map((product) => (
            <SwiperSlide key={product.id} className={style.productItem}>
              <div className={style.productInfoBlock}>
                <img
                  className={style.imgProduct}
                  src={product.img}
                  alt={product.name}
                />
                <div className={style.productInfo}>
                  <h3 className={style.nameTitle}>{product.name}</h3>
                  <div className={style.infoThumb}>
                    <h4 className={style.titleInfo}>Вага:</h4>{" "}
                    <p className={style.weight}>{product.weight}</p>
                  </div>
                  <div className={style.infoThumb}>
                    <h4 className={style.titleInfo}>Ціна:</h4>{" "}
                    <p className={style.price}>{product.price}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ProductsList;
