import React from "react";

function withLogger<T extends object>(Component: React.ComponentType<T>) {
  return (props: T) => {
    console.log("Props:", props);
    return <Component {...props} />;
  };
}

function Hello({ name }: { name: string }) {
  return <h1>Hello, {name}</h1>;
}

const HelloWithLogger = withLogger(Hello);

export default function HOCs() {
  return <HelloWithLogger name="Ram" />;
}
