import React from "react";
import { useMediaQuery } from "react-responsive";

const Mobile = ({ children }) => {
  //여기서 children은 하위 컴포넌트이다.
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return <>{isMobile && children}</>;
};

const PC = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width:768px) ",
  });

  return <>{isPc && children}</>;
};

export { Mobile, PC };
