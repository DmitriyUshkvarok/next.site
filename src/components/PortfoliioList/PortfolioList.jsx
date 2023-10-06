'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../app/portfolio/portfolio.module.css';
import { items } from '../DynamicPagePortfolioContent/data';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useState } from 'react';
import { updatePortfoliosOrder } from '@/src/actions/portfolioActions';
import { useSession } from 'next-auth/react';

const PortfolioList = ({ portfolios }) => {
  const [dragData, setDragData] = useState(portfolios);
  const { data: session } = useSession();

  const isUserAdmin = session?.user?.role === 'admin';

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
                          items.find((localItem) => localItem.id === item._id)
                            ?.image || item.image
                        }
                        alt={item.title}
                        width={300}
                        height={200}
                        className={styles.portfolioImg}
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
  );
};

export default PortfolioList;
