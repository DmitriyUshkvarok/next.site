'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../app/portfolio/portfolio.module.css';
import { items } from '../DynamicPagePortfolioContent/data';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useState, useEffect } from 'react';
import { updatePortfoliosOrder } from '@/src/actions/portfolioActions';
import { useSession } from 'next-auth/react';
import Pagination from '../Pagination/Pagination';
import { getAllPortfolio } from '@/src/actions/portfolioActions';

const PortfolioList = ({ portfolios, totalPages }) => {
  const [dragData, setDragData] = useState(portfolios);
  const { data: session } = useSession();
  const [currentPage, setCurrentPage] = useState(1);

  const isUserAdmin = session?.user?.role === 'admin';

  useEffect(() => {
    const fetchData = async () => {
      const searchParams = {
        limit: 12,
        page: currentPage, // Используем currentPage для запроса страницы
        skip: (currentPage - 1) * 12, // Вычисляем количество записей для пропуска
      };
      const { portfolios: newPortfolios } = await getAllPortfolio(searchParams);
      setDragData(newPortfolios);
    };

    fetchData();
  }, [currentPage]);

  const getFilteredPortfolioImage = (itemId) => {
    const localImage = items.find((localItem) => localItem.id === itemId);
    return localImage?.image;
  };

  const handleDragEnd = async (result) => {
    if (!result.destination) return;

    // Если пользователь не администратор, не выполняем перетаскивание
    if (!isUserAdmin) {
      return;
    }

    const reorderedItems = Array.from(dragData);
    const [reorderedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, reorderedItem);

    setDragData(reorderedItems);

    // Отправить запрос на сервер для обновления порядка элементов
    const updatedOrder = reorderedItems.map((item, index) => ({
      _id: item._id,
      order: index,
    }));

    await updatePortfoliosOrder(updatedOrder);
  };

  return (
    <div className={styles.portfolioListWrapp}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="portfolio-list" direction="vertical">
          {(provided = {}) => (
            <ul
              className={styles.portfolioList}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {dragData.map((item, index) => (
                <Draggable
                  key={item._id}
                  draggableId={item._id}
                  index={index}
                  isDragDisabled={!isUserAdmin}
                >
                  {(provided, snapshot) => (
                    <li
                      className={`${styles.portfolioListItem} ${
                        snapshot.isDragging
                          ? styles.dragging
                          : styles.portfolioListItem
                      }`}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <h2 className={styles.portfolioListItemTitle}>
                        {item.title}
                      </h2>
                      <Link
                        href={`/portfolio/${item._id}`}
                        className={styles.portfolioListLink}
                      >
                        <Image
                          src={
                            getFilteredPortfolioImage(item._id) || item.image
                          }
                          alt={item.title}
                          width={300}
                          height={200}
                          sizes="100vw"
                          className={styles.portfolioImg}
                          blurDataURL={
                            getFilteredPortfolioImage(item._id) || item.image
                          }
                        />
                      </Link>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <div className={styles.paginationPortfolioWrapper}>
        {totalPages && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default PortfolioList;
