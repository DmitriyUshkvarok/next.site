'use client';
import Image from 'next/image';
import { useState } from 'react';
import { RiFileEditFill } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai';
import styles from './AdminWorkItem.module.css';
import { deletedWorks, updateWork } from '@/src/actions/worksAction';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWorkFormActive } from '@/src/redux/workSlice/workSlice';

const AdminAboutWorkItem = ({ works }) => {
  const [isPendings, setIsPendings] = useState({});
  const workId = useSelector((state) => state.work.work._id);
  const dispatch = useDispatch();
  const handleDelete = async (workId) => {
    try {
      setIsPendings((prevState) => ({
        ...prevState,
        [workId]: true,
      }));

      await deletedWorks(workId);
    } catch (error) {
      setIsPendings((prevState) => ({
        ...prevState,
        [workId]: false,
      }));
    } finally {
      setIsPendings((prevState) => ({
        ...prevState,
        [workId]: false,
      }));
    }
  };

  const handleEditClick = async (work) => {
    const data = await updateWork(work);
    dispatch(toggleWorkFormActive(data));
  };

  return (
    <>
      {works?.map((work) => (
        <li
          key={work._id}
          className={`${styles.workListItem} ${
            workId.includes(work._id) ? `${styles.work_active}` : ''
          }`}
        >
          <Image
            src={`${work?.image}`}
            alt="work photo"
            sizes="100vw"
            width={100}
            height={100}
            blurDataURL={`${work?.image}`}
            className="styles.workListImage"
          />
          <div className={styles.workListInfoWrapper}>
            <h3 className={styles.workListInfoWrapperTitle}>
              {work.enterprise}
            </h3>
            <p className={styles.workListInfoWrapperData}>{work.data}</p>
            <h3 className={styles.workListInfoWrapperRegion}>{work.region}</h3>
            <ul className="styles.workListInfoWrapperList">
              {work.position.map((pos, index) => (
                <li key={index} className={styles.workListSubItem}>
                  {pos}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.adminChangePanel}>
            <div
              className={styles.adminChangePanelItem}
              onClick={() => handleEditClick(work._id)}
            >
              <RiFileEditFill size={20} color="green" />
            </div>
            <div
              className={styles.adminChangePanelItem}
              onClick={() => handleDelete(work)}
            >
              {isPendings[work._id] ? (
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

export default AdminAboutWorkItem;
