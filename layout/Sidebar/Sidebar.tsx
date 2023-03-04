import { IHTMLDivProps } from "@/types/main.type";
import Link from "next/link";

interface ISidebarProps extends IHTMLDivProps {}

const Sidebar = ({ ...props }: ISidebarProps) => {
  return (
    <div {...props}>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/posts"}>Posts</Link>
        </li>
      </ul>
    </div>
  );
};

export { Sidebar };
