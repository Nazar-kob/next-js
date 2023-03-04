import { useRouter } from "next/router";

import { PostInfo } from "@/components";
import { withLayout } from "@/layout/Layout";
import { IPost } from "@/types/posts.type";
import axios from "axios";
import { GetStaticProps } from "next";

import classes from "./Post.module.scss";
interface IPostsProps extends Record<string, unknown> {
  posts: IPost[];
}

function Posts({ posts }: IPostsProps) {
  return (
    <div className={classes.homeContent}>
      {posts && posts.map((post) => <PostInfo key={post.id} {...post} />)}
    </div>
  );
}

export default withLayout(Posts);

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: posts } = await axios.get<IPost[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
