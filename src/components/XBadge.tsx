import React from 'react';

export default function XBadge({
  count,
  active,
}: {
  count: string;
  active?: boolean;
}) {
  return (
    <div
      className={`p-2 hover:opacity-80 cursor-pointer rounded-xl text-white ${
        active ? 'badge-purple' : ''
      }`}
    >
      {count}
    </div>
  );
}
