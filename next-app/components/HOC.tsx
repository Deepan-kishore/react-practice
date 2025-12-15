"use client";
import { useEffect, useState } from "react";

// HOC: Higher Order Component
// Takes a component and returns a new component with loading functionality
const withLoading = <A extends object>(Component: React.ComponentType<A>) => {
  return function LoaderAttached({
    isLoading,
    ...props
  }: A & { isLoading: boolean }) {
    if (isLoading) {
      return <>Loading, please wait...</>;
    }

    return <Component {...(props as A)} />;
  };
};

//usage

const Profile = ({ name, age }: { name: string; age: number }) => {
  return (
    <>
      name:{name}
      age:{age}
    </>
  );
};

const ProfileWrappedWithLoader = withLoading(Profile);

const FinalView = () => {
  const [l, sl] = useState(false);

  useEffect(() => {
    setTimeout(() => sl(true), 1000);
  }, []);
  return <ProfileWrappedWithLoader isLoading={l} name={"Kishore"} age={27} />;
};

export default FinalView;
