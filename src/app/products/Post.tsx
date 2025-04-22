import React, { use } from "react";

interface PostProps {
  posts: Promise<{ id: string; title: string }[]>;
}

const Post = ({ posts }: PostProps) => {
  const allPosts = use(posts);

  return <div>{allPosts.map((a) => a.title)}</div>;
};

export default Post;
