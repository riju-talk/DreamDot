// app/dreamdot/posts/[postId]/page.js
"use client";
import { Comment, List, Avatar, Button, Input } from 'antd';
import { LikeOutlined, MessageOutlined } from '@ant-design/icons';
import Navbar from '../../../(components)/Navbar';

const { TextArea } = Input;

export default function PostPage() {
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [newComment, setNewComment] = useState('');

  const handleComment = () => {
    setComments([...comments, {
      author: 'Current User',
      content: newComment,
      datetime: new Date().toLocaleString(),
    }]);
    setNewComment('');
  };

  return (
    <Layout>
      <Navbar />
      <div className="max-w-2xl mx-auto p-4">
        <Card>
          <div className="post-content">
            {/* Post content here */}
            <Image src="/post-image.jpg" />
            <Paragraph>Post caption text...</Paragraph>
          </div>

          <div className="flex gap-4 items-center mb-4">
            <Button 
              icon={<LikeOutlined />} 
              onClick={() => setLikes(l => l + 1)}
            >
              {likes}
            </Button>
            <Button icon={<MessageOutlined />}>{comments.length}</Button>
          </div>

          <List
            className="comment-list"
            header={`${comments.length} comments`}
            itemLayout="horizontal"
            dataSource={comments}
            renderItem={comment => (
              <Comment
                author={comment.author}
                content={comment.content}
                datetime={comment.datetime}
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              />
            )}
          />

          <div className="mt-4">
            <TextArea
              rows={4}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
            />
            <Button 
              type="primary" 
              className="mt-2"
              onClick={handleComment}
            >
              Add Comment
            </Button>
          </div>
        </Card>
      </div>
    </Layout>
  );
}