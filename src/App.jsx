import { useState } from 'react'

import './App.css'

const books = [
    {
      author: "Jordan Moore",
      title: "Best JavaScript Book",
      img: "image"
    },
    {
      author: "Hasibul Islam",
      title: "Life is a game",
      img: "https://m.media-amazon.com/images/I/71FsIkGF3pL._SL1500_.jpg"
    } 
]

const names = ['hasib', 'heinz', 'chris'];

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <section>
        {
          names.map((nameOrAnyThing) => {
            return <h1>{nameOrAnyThing}</h1>;
          })
        }
      </section>
    </>
  )
}




// const names = ['hasib', 'heinz', 'chris'];

// const newNames = names.map((nameOrAnyThing) => {
//   return nameOrAnyThing;
// });

// ref:1 
// const newNames = names.map((nameOrAnyThing) => {
//   return <h1>{nameOrAnyThing}</h1>;
// });
// console.log(newNames); // will show react element in the console
 
// ref: 1
// function App() {
//   return (
//     <>
//       <h1>Vite + React</h1>
//       <section>
//         {newNames}
//       </section>
//     </>
//   )
// }

const Books = (props) => {
  console.log(props);
  return (
    <article>
      <h2>Welcome to My book selection</h2>
      <img src={props.image} alt="" />
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <p>{props.job}</p>
    </article>
  )
}

export default App
