import { IHTMLDivProps } from "@/types/main.type";
import Head from "next/head";

interface IHeaderProps extends IHTMLDivProps {}

const Header = ({ ...props }: IHeaderProps) => {
  return (
    <>
      <div {...props}>Header</div>;
    </>
  );
};

export { Header };
