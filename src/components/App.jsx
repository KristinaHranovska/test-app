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

// LESSON 4

// import { useState } from "react";
// import ArticleList from "./ArticleList";
// import { fetchArticlesWithTopic } from "../articles-api";
// import SearchForm from "./SearchForm";

// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const handleSearch = async (topic) => {
//     try {
//       setArticles([]); // для очищення попереднього стану articles, перед новим запитом
//       setLoading(true);
//       setError(false); // щоб скинути попередню помилку перед наступним запитом (якщо вона була)
//       const data = await fetchArticlesWithTopic(topic);
//       setArticles(data);
//     } catch (error) {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <SearchForm onSearch={handleSearch} />
//       {loading && <p>Loading data, please wait...</p>}
//       {error && (
//         <p>Whoops, something went wrong! Please try reloading this page!</p>
//       )}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };

// export default App;
// import { useMemo, useState } from "react";
// const App = () => {
//   const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
//   const [query, setQuery] = useState("");
//   const [clicks, setClicks] = useState(0);

//   const filteredPlanets = useMemo(
//     () => planets.filter((planet) => planet.includes(query)),
//     [planets, query]
//   );
//   return (
//     <>
//       <button onClick={() => setClicks(clicks + 1)}>
//         Number of clicks: {clicks}
//       </button>
//       <ul>
//         {filteredPlanets.map((planet) => (
//           <li key={planet}>{planet}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default App;

// import { useEffect, useRef, useState } from "react";

// const App = () => {
//   const [value, setValue] = useState(0);
//   const btnRef = useRef();

//   console.log("App: ", btnRef.current);

//   useEffect(() => {
//     console.log("useEffect: ", btnRef.current);
//   });

//   const handleClick = () => {
//     console.log("handleClick: ", btnRef.current);
//   };

//   return (
//     <>
//       <button onClick={() => setValue(value + 1)}>
//         Update value to trigger re-render
//       </button>
//       <button ref={btnRef} onClick={handleClick}>
//         Button with ref
//       </button>
//     </>
//   );
// };
// export default App;

// import Player from "./ArticleList";
// const App = () => {
//   return <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />;
// };

// export default App;

// import CustomButton from "./ArticleList";
// import { useEffect, useRef, useState } from "react";
// const App = () => {
//   const btnRef = useRef();

//   useEffect(() => btnRef.current.focus(), []);

//   return <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton>;
// };

// export default App;
