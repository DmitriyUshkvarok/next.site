'use client';
import { useState } from 'react';
import { createComment } from '@/src/actions/commentActions';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

const PortfolioCommentContent = ({ comments, postId }) => {
  const [newCommentText, setNewCommentText] = useState('');
  const { data: session } = useSession();

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
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
  };

  return (
    <div>
      <h5>Add a Comment</h5>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          placeholder="Write your comment here"
        />
        <button type="submit" disabled={!session?.user?._id}>
          Submit
        </button>
        {!session?.user?._id && (
          <p style={{ color: 'red' }}>
            You need to be logged in to leave a comment.
          </p>
        )}
      </form>
      <ul>
        {comments?.map((comment) => (
          <li key={comment._id} style={{ color: 'red' }}>
            <div>
              <div>
                <Image
                  src={comment.userAvatar}
                  alt="avatar"
                  width={30}
                  height={30}
                />
              </div>
              <div>{comment.userName}</div>
            </div>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioCommentContent;
