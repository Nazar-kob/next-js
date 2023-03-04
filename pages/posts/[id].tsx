import { withLayout } from "@/layout/Layout";
import { IPost } from "@/types/posts.type";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";

interface IPostProps extends Record<string, unknown> {
  post: IPost;
}

function Post({ post }: IPostProps) {
  return (
    <div>
      {post.id}
      <div>{post.title}</div>
      <Link href={"/posts"}>Back</Link>
    </div>
  );
}

export default withLayout(Post);

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: posts } = await axios.get<IPost[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const paths = posts.map((post) => `/posts/${post.id}`);

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  try {
    const { data: post } = await axios.get<IPost[]>(
      "https://jsonplaceholder.typicode.com/posts/" + params.id
    );
    return {
      props: {
        post,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
