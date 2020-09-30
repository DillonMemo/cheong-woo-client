// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';
import { NextRouter } from "next/router";

/** apollo test interface */
export interface SayHelloData {
  sayHello: { text: string; error: string };
}

export interface SayHelloVars {
  name: string;
}

/** Icon component interfaces */
export interface IconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}

/** header components */
export interface HeaderProps {
  router: NextRouter;
}

/** loader spinner component */
export interface LoaderSpinnerProps {
  color?: string;
  subColor?: string;
}

/** styled components interfaces */
export interface HeaderWrapperProps {
  router: NextRouter;
}

export interface SpinnerProps {
  color: string;
  subColor: string;
}
