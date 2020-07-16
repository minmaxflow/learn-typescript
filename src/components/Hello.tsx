import * as React from 'react';

export interface HelloProps {
  compile: string;
  framework: string;
}

export const Hello = (props: HelloProps) => (
  <h1>
    Hello from {props.compile} and {props.framework}
  </h1>
);
