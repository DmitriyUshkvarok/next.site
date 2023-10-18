'use client';
import { useRouter } from 'next/navigation';
const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const newArray = [...Array(totalPages)].map((_, i) => i + 1);

  const router = useRouter();

  const handlePageClick = (page) => {
    setCurrentPage(page);
    // router.push(`/admin/edit-portfolio/?currentPage=${page}`, undefined, {
    //   shallow: true,
    // });
  };

  return (
    <div>
      {newArray.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)} // Используйте функцию handlePageClick
          style={{ fontWeight: currentPage === page ? 'bold' : 'normal' }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
