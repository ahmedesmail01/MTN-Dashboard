import { Container } from "@chakra-ui/react";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

const PaginationPosts = ({
  currentPage,
  setCurrentPage,
  totalPages,
}: PaginationProps) => {
  return (
    <Container
      py={3}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={3}
    >
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        {currentPage === 1 ? "" : "Previous"}
      </button>
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        {currentPage === totalPages ? "" : "Next"}
      </button>
    </Container>
  );
};
export default PaginationPosts;
