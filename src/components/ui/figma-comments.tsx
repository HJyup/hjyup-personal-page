'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { MessageCircle, X } from 'lucide-react';
import Image from 'next/image';

import { Comment } from '@/const/comments';
import COMMENTS from '@/const/comments';
import { cn } from '@/lib/utils';

interface FigmaCommentsProps {
  className?: string;
  comments?: Comment[];
  variant?: 'projects';
}

const FigmaComments = ({
  className,
  comments = COMMENTS,
  variant = 'projects',
}: FigmaCommentsProps & { variant?: 'projects' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newComment, setNewComment] = useState('');
  const commentsRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const selectedComments = variant === 'projects' ? COMMENTS : comments;

  const handleOpen = () => {
    setIsOpen(true);
    gsap.fromTo(
      commentsRef.current,
      {
        opacity: 0,
        y: -10,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      },
    );
    gsap.fromTo(
      overlayRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.2,
      },
    );
  };

  const handleClose = () => {
    gsap.to(commentsRef.current, {
      opacity: 0,
      y: -10,
      scale: 0.95,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => setIsOpen(false),
    });
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.2,
    });
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={cn('relative', className)}>
      <button
        onClick={handleOpen}
        className="w-10 h-10 bg-zinc-700 hover:bg-zinc-800 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md"
      >
        <MessageCircle className="w-5 h-5 text-zinc-200" />
      </button>

      {isOpen && (
        <>
          <div
            ref={overlayRef}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
            onClick={handleClose}
          />

          <div
            ref={commentsRef}
            className="absolute top-10 right-0 w-80 bg-zinc-800 border border-zinc-700 rounded-lg shadow-xl z-50 p-4"
          >
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-zinc-700">
              <h3 className="text-sm font-semibold text-zinc-200">Comments</h3>
              <button
                onClick={handleClose}
                className="w-6 h-6 flex items-center justify-center rounded hover:bg-zinc-700 transition-colors"
              >
                <X className="w-4 h-4 text-zinc-400" />
              </button>
            </div>

            <div className="space-y-3 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-transparent">
              {selectedComments.map(comment => (
                <div key={comment.id} className="flex gap-3">
                  <div className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 overflow-hidden">
                    {comment.avatar ? (
                      <Image
                        src={comment.avatar}
                        alt={comment.author}
                        width={24}
                        height={24}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-xs font-medium text-zinc-300">
                        {comment.author.charAt(0)}
                      </span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <a
                        href={comment.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-zinc-200 hover:text-blue-400 underline underline-offset-2"
                      >
                        {comment.author}
                      </a>
                      <span className="text-xs text-zinc-400">
                        {comment.timestamp}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {comment.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <form
              onSubmit={handleAddComment}
              className="mt-4 pt-3 border-t border-zinc-700"
            >
              <div className="flex gap-2 justify-center items-center">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-medium text-white">D</span>
                </div>
                <input
                  type="text"
                  value={newComment}
                  onChange={e => setNewComment(e.target.value)}
                  placeholder="Add a comment..."
                  className="flex-1 text-sm bg-zinc-700 border border-zinc-600 rounded px-2 py-1 text-zinc-200 placeholder-zinc-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                />
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default FigmaComments;
