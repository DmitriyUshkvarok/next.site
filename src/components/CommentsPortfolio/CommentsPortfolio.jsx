import { getAllComments } from '@/src/actions/commentActions';
import PortfolioCommentContent from './PortfolioCommentContent/PortfolioCommentContent';
import styles from './portfolioComments.module.css';
const CommentsPortfolio = async ({ postId }) => {
  const { comments } = await getAllComments(postId);

  return (
    <>
      <h3 className={styles.commentsTitle}>Leave a comment</h3>
      <PortfolioCommentContent comments={comments} postId={postId} />
    </>
  );
};

export default CommentsPortfolio;
