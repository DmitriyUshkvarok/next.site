'use client';
import { useState } from 'react';
import {
  createComment,
  updateComment,
  deleteComment,
} from '@/src/actions/commentActions';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import styles from './portfolioCommentContent.module.css';

const PortfolioCommentContent = ({ comments, postId }) => {
  const [newCommentText, setNewCommentText] = useState('');
  const { data: session } = useSession();
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedCommentText, setEditedCommentText] = useState('');
  const [isLoadingCreate, setIsLoadingCreate] = useState(false);
  const [isLoadingEdit, setIsLoadingEdit] = useState(false);
  const [isLoadingDeleted, setIsLoadingDEleted] = useState(false);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (editingCommentId) {
      try {
        setIsLoadingEdit(true);
        const res = await updateComment(editingCommentId, {
          text: editedCommentText,
        });
        if (res.msg) alert(res.msg);
        setEditingCommentId(null);
        setEditedCommentText('');
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoadingEdit(false);
      }
    } else {
      try {
        setIsLoadingCreate(true);
        const res = await createComment({
          postId: postId,
          text: newCommentText,
          userId: session?.user?._id,
          userName: session?.user?.name,
          userAvatar:
            session?.user?.image ||
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODDX326p2qgkC1VI2N1jm1u_Ihb2PAM8MecsWOJfIBSESk_GmadQUf4INIVkBpzvut48&usqp=CAU',
        });
        if (res.msg) alert(res.msg);
        setNewCommentText('');
      } catch (error) {
        setIsLoadingCreate(false);
      } finally {
        setIsLoadingCreate(false);
      }
    }
  };

  const startEditComment = (commentId, commentText) => {
    setEditingCommentId(commentId);
    setEditedCommentText(commentText);
  };

  const cancelEditComment = () => {
    setEditingCommentId(null);
    setEditedCommentText('');
  };

  const handleDeleteComment = async (commentId) => {
    try {
      setIsLoadingDEleted((prevState) => ({
        ...prevState,
        [commentId]: true,
      }));
      const res = await deleteComment(commentId);
      if (res.msg) alert(res.msg);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingDEleted((prevState) => ({
        ...prevState,
        [commentId]: false,
      }));
    }
  };

  return (
    <div>
      <form onSubmit={handleCommentSubmit} className={styles.formCommetForm}>
        <h5 className={styles.formCommetTitle}>
          {editingCommentId ? 'Edit Your Comment' : 'Add a Comment'}
        </h5>
        <textarea
          value={editingCommentId ? editedCommentText : newCommentText}
          onChange={(e) =>
            editingCommentId
              ? setEditedCommentText(e.target.value)
              : setNewCommentText(e.target.value)
          }
          placeholder="Write your comment here"
          className={styles.formCommetTextarea}
        />
        {isLoadingCreate ? (
          <p className={styles.loaderPortfolioComment}>Loading...</p>
        ) : (
          <button
            type="submit"
            disabled={!session?.user?._id}
            className={styles.formCommetbtn}
          >
            {editingCommentId ? 'Save Comment' : 'Post a comment'}
          </button>
        )}
        {editingCommentId && (
          <button onClick={cancelEditComment} className={styles.formCommetbtn}>
            Cancel
          </button>
        )}
        {!session?.user?._id && (
          <p style={{ color: 'lightgreen' }}>
            You need to be logged in to leave a comment.
          </p>
        )}
      </form>
      <ul className={styles.commentList}>
        {comments?.map((comment) => (
          <li key={comment._id} className={styles.commentListItem}>
            <div className={styles.commentListImgWrapper}>
              <Image
                src={comment.userAvatar}
                alt="avatar"
                width={50}
                height={50}
                className={styles.commentListImg}
              />
            </div>
            <div className={styles.commentListUserName}>{comment.userName}</div>
            {editingCommentId === comment._id ? (
              <textarea
                value={editedCommentText}
                onChange={(e) => setEditedCommentText(e.target.value)}
                className={styles.commentListUserTextarea}
              />
            ) : (
              <p className={styles.commentListUserText}>{comment.text}</p>
            )}
            {session?.user?._id === comment.userId && (
              <div>
                {editingCommentId === comment._id ? (
                  <button
                    onClick={handleCommentSubmit}
                    className={styles.formCommetbtn}
                  >
                    {isLoadingEdit ? 'Loading...' : 'Save'}
                  </button>
                ) : (
                  <div className={styles.formCommetbtnWrapper}>
                    <button
                      onClick={() =>
                        startEditComment(comment._id, comment.text)
                      }
                      className={styles.formCommetbtn}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteComment(comment._id)}
                      className={styles.formCommetbtn}
                    >
                      {isLoadingDeleted[comment._id] ? 'Deleted...' : ' Delete'}
                    </button>
                  </div>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioCommentContent;
