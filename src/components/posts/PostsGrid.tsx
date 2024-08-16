import { Grid } from "@chakra-ui/react";
import PostCard from "./PostCard";

//
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import LoadingSpinner from "../ui/LoadingSpinner";
import ErrorComp from "../ui/ErrorComp";
//

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsTableProps {
  posts: Post[];
}

const PostsGrid = ({ posts }: PostsTableProps) => {
  const { status } = useSelector((state: RootState) => state.posts);

  if (status === "loading") {
    return <LoadingSpinner />;
  }

  if (status === "failed") {
    return <ErrorComp msg="Post" />;
  }

  return (
    <>
      <Grid
        margin={30}
        templateColumns={"repeat(auto-fill, minmax(300px, 1fr))"}
        gap={6}
      >
        {posts.map((post) => (
          <PostCard key={post.id} title={post.title} body={post.body} />
        ))}
      </Grid>
    </>
  );
};

export default PostsGrid;
