// import MainNavigation from './MainNavigation';

// function RootLayout({ children }) {
//   return (
//     <>
//       <MainNavigation />
//       <main>{children}</main>
//     </>
//   );
// }

// export default RootLayout;

//VERSION 6.4---------

import { Outlet } from 'react-router-dom';

import MainNavigation from './MainNavigation';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main><Outlet /></main>
    </>
  );
}

export default RootLayout;