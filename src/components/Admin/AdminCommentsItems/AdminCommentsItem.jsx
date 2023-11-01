'use client';
import Image from 'next/image';
import styles from './adminCommentItem.module.css';
import { RiFileEditFill } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai';
import { useState } from 'react';
import { updateComment, deleteComment } from '@/src/actions/commentActions';
import { fredericka } from '@/src/app/fonts';

const AdminCommentsItem = ({ comments }) => {
  const [isPendings, setIsPendings] = useState({});
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedCommentText, setEditedCommentText] = useState('');
  const [isLoadingEdit, setIsLoadingEdit] = useState(false);

  // Функция для начала редактирования комментария
  const startEditComment = (commentId, commentText) => {
    setEditingCommentId(commentId);
    setEditedCommentText(commentText);
  };

  // Функция для сохранения отредактированного комментария
  const saveEditedComment = async () => {
    try {
      setIsLoadingEdit(true);
      if (!editingCommentId) {
        // Если нет активного комментария для редактирования, не выполнять обновление
        return;
      }

      const updatedComment = await updateComment(editingCommentId, {
        text: editedCommentText,
      });

      if (updatedComment.error) {
        // Обработка ошибки при обновлении комментария, если это необходимо
        console.error(updatedComment.error);
      } else {
        setEditingCommentId(null);
      }
    } catch (error) {
      console.lof(error);
    } finally {
      setIsLoadingEdit(false);
    }
  };

  const handleDeleteComments = async (commentId) => {
    try {
      setIsPendings((prevState) => ({
        ...prevState,
        [commentId]: true,
      }));
      await deleteComment(commentId);
    } catch (error) {
      console.log(error);
    } finally {
      setIsPendings((prevState) => ({
        ...prevState,
        [commentId]: false,
      }));
    }
  };

  return (
    <div className={fredericka.className}>
      <h1 className={styles.adminCommentTitle}>Edit and delete comments</h1>
      <ul className={styles.adminCommentList}>
        {comments?.map((item) => (
          <li key={item._id} className={styles.adminCommentItem}>
            <div className={styles.adminCommentImgWrapper}>
              <Image
                src={item.userAvatar}
                alt="user avatar"
                width={60}
                height={60}
                className={styles.adminCommentImg}
              />
            </div>
            <div className={styles.adminCommentName}>{item.userName}</div>
            {editingCommentId === item._id ? (
              <div className={styles.adminCommentEditPanel}>
                <textarea
                  value={editedCommentText}
                  onChange={(e) => setEditedCommentText(e.target.value)}
                  className={styles.adminCommentTextarea}
                />
                <button
                  onClick={saveEditedComment}
                  className={styles.adminCommentBtnSave}
                >
                  {isLoadingEdit ? 'Loading...' : 'Save'}
                </button>
              </div>
            ) : (
              <p className={styles.adminCommentText}>{item.text}</p>
            )}
            <div className={styles.adminChangePanel}>
              <div
                className={styles.adminChangePanelItem}
                onClick={() => startEditComment(item._id, item.text)} // Начать редактирование комментария
              >
                <RiFileEditFill size={20} color="green" />
              </div>
              <div
                className={styles.adminChangePanelItem}
                onClick={() => handleDeleteComments(item._id)}
              >
                {isPendings[item._id] ? (
                  'Loading...'
                ) : (
                  <AiFillDelete size={20} color="red" />
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminCommentsItem;
