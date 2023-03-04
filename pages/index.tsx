import { withLayout } from "@/layout/Layout";
import { IPost } from "@/types/posts.type";

interface IHomeProps extends Record<string, unknown> {
  posts: IPost[];
}

function Home() {
  return <div>Welcome</div>;
}

export default withLayout(Home);
