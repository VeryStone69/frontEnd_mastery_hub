// import './App.css';
// // import { HW1 } from './HW/1/HW1';
// import { HW2 } from './HW/2/HW2';
// import { HW3 } from './HW/3/HW3';
// import { HW4 } from './HW/4/HW4';
//
// function App() {
//   return (
//     <div className="App">
//       {/*<HW1 />*/}
//       {/*<HW2 />*/}
//       {/*<HW3 />*/}
//       {/*<HW4 />*/}
//     </div>
//   );
// }
//
// export default App;
import React from 'react'
import s from './s1-main/App.module.css'
import HW5 from "./s2-homeworks/hw05/HW5";

//!!!!!!!!!!It this APP is main!!!!!!!!!!!!
function App() {
  return (

      <div className={s.App}>
        {/*<HW1/>*/}
        {/*<HW2/>*/}
        {/*<HW3/>*/}
        {/*<HW4/>*/}

        {/*при выполнении дз 5 и более - закомментировать здесь дз 1-4, так как они есть внутри дз 5*/}
        <HW5/>
      </div>
  )
}

export default App
