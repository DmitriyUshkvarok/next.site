'use client';
import Link from 'next/link';
import Image from 'next/image';
import { items } from '../DynamicPagePortfolioContent/data';
import { RiFileEditFill } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai';
import styles from '../AdminPortfolioList/adminPortfolioList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setEditingPortfolio,
  toggleCardSelection,
} from '@/src/redux/portfolioSlice/portfolioSlice';
import { animateScroll as scroll } from 'react-scroll';
import { useTransition } from 'react';
import { deletedPortfolio } from '@/src/actions/portfolioActions';

const AdminPortfolioItem = ({ portfolios }) => {
  let [isPending, startTransition] = useTransition();
  const dispatch = useDispatch();
  const selectedCardIds = useSelector(
    (state) => state.portfolio.selectedCardIds
  );

  async function handleDelete(porfolioId) {
    console.log(porfolioId);
    await deletedPortfolio(porfolioId);
  }

  const handleEditClick = (portfolio) => {
    // Сначала снимаем выделение с предыдущей карточки
    const previouslySelectedCardId = selectedCardIds[0];
    if (previouslySelectedCardId) {
      dispatch(toggleCardSelection(previouslySelectedCardId));
    }

    if (portfolio === null) {
      dispatch(setEditingPortfolio(null));
    } else {
      dispatch(setEditingPortfolio(portfolio));
      dispatch(toggleCardSelection(portfolio));
    }
    scroll.scrollToTop({
      duration: 1000,
      smooth: 'easeInOutQuad',
    });
  };
  return (
    <>
      {portfolios?.map((item) => (
        <li
          key={item._id}
          className={`${styles.adminPortfolioListItem} ${
            selectedCardIds.includes(item._id) ? styles.selectedCard : ''
          }`}
        >
          <Link
            href={`/portfolio/${item._id}`}
            className={styles.adminPortfolioListLink}
          >
            <Image
              src={
                items.find((localItem) => localItem.id === item._id)?.image ||
                item.image
              }
              alt={item.title}
              width={100}
              height={100}
              className={styles.adminPortfolioImg}
            />
          </Link>
          <div className={styles.adminChangePanel}>
            <div
              className={styles.adminChangePanelItem}
              onClick={() => handleEditClick(item._id)}
            >
              <RiFileEditFill size={20} color="green" />
            </div>
            <div
              className={styles.adminChangePanelItem}
              onClick={() => startTransition(() => handleDelete(item._id))}
            >
              {isPending ? (
                'Loading...'
              ) : (
                <AiFillDelete size={20} color="red" />
              )}
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default AdminPortfolioItem;
