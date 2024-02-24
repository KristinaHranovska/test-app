// import LoginForm from "./Product";

// const App = () => {
//   const handleLogin = (userDate) => console.log(userDate);
//   return <LoginForm onSubmit={handleLogin} />;
// };

// export default App;

// import SearchBar from "./Product";

// const App = () => {
//   return <SearchBar />;
// };

// export default App;

// import LangSwitcher from "./Product";
// import { useState } from "react";

// const App = () => {
//   const [lang, setLang] = useState("uk");
//   return (
//     <>
//       <p>Selected language: {lang}</p>
//       <LangSwitcher value={lang} onSelect={setLang} />
//     </>
//   );
// };

// export default App;

// import { useState } from "react";
// const App = () => {
//   const [coffeeSize, setCoffeeSize] = useState("sm");
//   const handleSizeChange = (evt) => {
//     setCoffeeSize(evt.target.value);
//   };
//   return (
//     <>
//       <h1>Select coffee size</h1>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="sm"
//           checked={coffeeSize === "sm"}
//           onChange={handleSizeChange}
//         />
//         Small
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="md"
//           checked={coffeeSize === "md"}
//           onChange={handleSizeChange}
//         />
//         Meduim
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="lg"
//           checked={coffeeSize === "lg"}
//           onChange={handleSizeChange}
//         />
//         Large
//       </label>
//       <p>What size coffee do you need? {coffeeSize}</p>
//     </>
//   );
// };

// export default App;

// const App = () => {
//   const [hasAccepted, setHasAccepted] = useState(false);

//   const handleChange = (evt) => {
//     setHasAccepted(evt.target.checked);
//   };

//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           name="terms"
//           checked={hasAccepted}
//           onChange={handleChange}
//         />
//         I accept terms and conditions
//       </label>
//       <button type="button" disabled={!hasAccepted}>
//         Proceed
//       </button>
//     </div>
//   );
// };

// export default App;

import FeedbackForm from "./Product";
const App = () => {
  return <FeedbackForm />;
};

export default App;
