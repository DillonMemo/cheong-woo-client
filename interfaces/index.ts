// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';
import { NextRouter } from "next/router";

/** header components */
export interface HeaderProps {
  router: NextRouter;
}

/** styled components interfaces */
export interface HeaderWrapperProps {
  router: NextRouter;
}
