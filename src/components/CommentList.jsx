import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function CommentList({ postId, currentUserId, parentId = null, depth = 0 }) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [replyTo, setReplyTo] = useState(null);
  const [replyText, setReplyText] = useState('');

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from('comments')
      .select('*, profiles: user_id (email), likes (id, user_id)')
      .eq('post_id', postId)
      .eq('parent_id', parentId)
      .order('created_at');
    if (!error) setComments(data);
  };

  const submitComment = async (e, parent = parentId, text = commentText, reset = () => setCommentText('')) => {
    e.preventDefault();
    const { data: { session } } = await supabase.auth.getSession();
    const user = session?.user;
    if (!user) return alert('You must be logged in to comment.');
    if (!text.trim()) return;

    const { error } = await supabase.from('comments').insert([
      { post_id: postId, content: text, user_id: user.id, parent_id: parent }
    ]);
    if (!error) {
      reset();
      setReplyTo(null);
      fetchComments();
    }
  };

  const toggleLike = async (commentId, likedByUser) => {
    const { data: { session } } = await supabase.auth.getSession();
    const user = session?.user;
    if (!user) return;

    if (likedByUser) {
      await supabase.from('likes').delete()
        .eq('comment_id', commentId)
        .eq('user_id', user.id);
    } else {
      await supabase.from('likes').insert({ comment_id: commentId, user_id: user.id });
    }
    fetchComments();
  };

  useEffect(() => {
    fetchComments();
  }, [postId, parentId]);

  return (
    <div className={`mt-2 space-y-2 ${depth > 0 ? 'ml-4 border-l pl-2' : ''}`}>
      {currentUserId && depth === 0 && (
        <form onSubmit={(e) => submitComment(e)} className="flex gap-2">
          <input
            className="flex-grow p-2 border rounded"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a comment..."
          />
          <button className="bg-secondary text-white px-3 py-1 rounded" type="submit">
            Post
          </button>
        </form>
      )}

      {comments.map((comment) => {
        const likedByUser = comment.likes?.some(like => like.user_id === currentUserId);
        const likeCount = comment.likes?.length || 0;

        return (
          <div key={comment.id} className="text-sm bg-white p-2 border rounded">
            <div className="flex justify-between">
              <div>
                <p>{comment.content}</p>
                {comment.profiles?.email && (
                  <p className="text-xs text-gray-500">by {comment.profiles.email}</p>
                )}
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                  <button
                    onClick={() => toggleLike(comment.id, likedByUser)}
                    className={`px-2 py-1 rounded ${likedByUser ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
                  >
                    {likedByUser ? '♥' : '♡'} {likeCount}
                  </button>
                  <button
                    onClick={() => setReplyTo(comment.id)}
                    className="text-blue-500 hover:underline"
                  >
                    Reply
                  </button>
                </div>
              </div>
            </div>

            {replyTo === comment.id && (
              <form
                onSubmit={(e) => submitComment(e, comment.id, replyText, () => setReplyText(''))}
                className="mt-2 ml-2 flex gap-2"
              >
                <input
                  className="flex-grow p-2 border rounded"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Write a reply..."
                />
                <button className="bg-blue-500 text-white px-3 py-1 rounded" type="submit">
                  Reply
                </button>
              </form>
            )}

            {depth < 3 && (
              <CommentList postId={postId} currentUserId={currentUserId} parentId={comment.id} depth={depth + 1} />
            )}
          </div>
        );
      })}
    </div>
  );
}
