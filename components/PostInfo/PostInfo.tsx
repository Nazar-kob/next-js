import { IPost } from "@/types/posts.type";
import { useRouter } from "next/router";
import React from "react";
import classes from "./PostInfo.module.scss";

const PostInfo = ({ id, title, body }: IPost) => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push(`/posts/${id}`);
  };

  return (
    <div className={classes.postInfoContent} onClick={handleOnClick}>
      <div>Id: {id}</div>
      <div>Title: {title}</div>
      <div>Text: {body}</div>
    </div>
  );
};

export { PostInfo };
