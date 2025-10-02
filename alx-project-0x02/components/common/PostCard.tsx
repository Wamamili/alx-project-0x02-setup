"use client";
import React from "react";
import { PostProps } from "../../interfaces";

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{body}</p>
      <span className="text-sm text-gray-500">User ID: {userId}</span>
    </div>
  );
};

export default PostCard;
