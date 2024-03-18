import { useState } from 'react'

import './App.css'
import image from './assets/react.svg'

const books = [
  {
      id:1,
      author: "Jordan Moore",
      title: "Best JavaScript Book",
      img: image
    },
  {
      id: 2,
      author: "Hasibul Islam",
      title: "Life is a game",
      img: "https://m.media-amazon.com/images/I/71FsIkGF3pL._SL1500_.jpg"
    } 
]

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <section>
        {
          books.map((book) => {
            return (
              <Book book={book} key={book.id} ></Book>
            );
          })
        }
      </section>
    </>
  )
}

const Book = ({book}) => {
  console.log(book);
  const { author, img, title } = book;
  return (
    <article className='flex flex-col justify-center items-center'>
      <h2>Welcome to My book selection</h2>
      <img className=' w-28 ' src={img} alt="" />
      <h2>{title}</h2>
      <h3 className='pb-12'>{author}</h3>
      {/* <p>{props.job}</p> */}
    </article>
  )
}












// simple list 1

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


// simple list 2
// const names = ['hasib', 'heinz', 'chris'];

// function App() {
//   return (
//     <>
//       <h1>Vite + React</h1>
//       <section>
//         {
//           names.map((nameOrAnyThing) => {
//             return <h1>{nameOrAnyThing}</h1>;
//           })
//         }
//       </section>
//     </>
//   )
// }





// simple list 3
// list with 'props' object 
// function App() {
//   return (
//     <>
//       <h1>Vite + React</h1>
//       <section>
//         {
//           books.map((book) => {
//             // console.log(book);
//             const {author, img, title } = book;
//             return (
//               <Book img={img} title={title} author={author} ></Book>
//               //  <div>
//               // {/* //   <h2>{book.author}</h2> */}
//               //   {/* <h2>Item</h2>
//               //   <h2>Item</h2> */}
//               // </div>
//             );
//           })
//         }
//       </section >
//     </>
//   )
// }

// const Book = (props) => {
//   console.log(props);
//   return (
//     <article className='flex flex-col justify-center items-center'>
//       <h2>Welcome to My book selection</h2>
//       <img className=' w-28 ' src={props.img} alt="" />
//       <h2>{props.title}</h2>
//       <h3 className='pb-12'>{props.author}</h3>
//       {/* <p>{props.job}</p> */}
//     </article>
//   )
// }


export default App
