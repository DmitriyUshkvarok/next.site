'use client';
import styles from './Paginatiom.module.css';
import { useRouter, usePathname } from 'next/navigation';

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const newArray = [...Array(totalPages)].map((_, i) => i + 1);

  const router = useRouter();
  const pathName = usePathname();

  const basePath =
    pathName === '/admin/edit-portfolio'
      ? '/admin/edit-portfolio'
      : '/portfolio';

  const handlePageClick = (page) => {
    setCurrentPage(page);
    router.push(`${basePath}/?currentPage=${page}`, undefined, {
      shallow: true,
    });
  };

  return (
    <ul className={styles.paginationList}>
      {newArray.map((page) => (
        <li
          key={page}
          onClick={() => handlePageClick(page)}
          className={styles.paginationListItem}
        >
          <button
            style={{ fontWeight: currentPage === page ? 'bold' : 'normal' }}
            className={styles.paginationListItemBtn}
          >
            {page}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
