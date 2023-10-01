import { getAllComments } from '@/src/actions/commentActions';
import PortfolioCommentContent from './PortfolioCommentContent/PortfolioCommentContent';

const CommentsPortfolio = async ({ postId }) => {
  const { comments } = await getAllComments(postId);
  console.log(comments);
  return (
    <>
      <h3>comments</h3>
      <PortfolioCommentContent comments={comments} postId={postId} />
    </>
  );
};

export default CommentsPortfolio;
