import { IHTMLDivProps } from "@/types/main.type";

interface IFooterProps extends IHTMLDivProps {}

const Footer = ({ ...props }: IFooterProps) => {
  return <div {...props}>Footer</div>;
};

export { Footer };
