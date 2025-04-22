import Post from "@/app/products/Post";
import { notFound } from "next/navigation";
import React from "react";

interface ProductPageProps {
  params: Promise<{
    slug: string[];
  }>;
  searchParams: Promise<{
    sortOrder: string;
  }>;
}

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const post = await res.json();
  return post;
};

const ProductPage = async ({ params, searchParams }: ProductPageProps) => {
  const { slug } = await params;
  const { sortOrder } = await searchParams;

  const posts = getPosts();

  if (slug.includes("unreal")) {
    return notFound();
  }

  return (
    <div>
      ProductPage: {slug.join(" => ")} {sortOrder}
      <Post posts={posts} />
    </div>
  );
};

export default ProductPage;
