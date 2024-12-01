import React from 'react';

const UserProfileCard: React.FC = () => {
  
  return (
    <div
      className="relative h-fit w-full rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 p-6"
      style={{ padding: '20px', filter: 'blur(0px)' }}
    >
      <div className="mb-1.5 flex items-center justify-between">
        <div className="relative flex items-center gap-2 py-2 text-xs">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
            alt="Placeholder image for faux user John Johnson"
            className="size-8 rounded-full"
          />
          <div>
            <span className="block font-medium text-zinc-300">John Johnson</span>
            <span className="block text-zinc-500">@johns6</span>
          </div>
        </div>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          role="img"
          viewBox="0 0 24 24"
          className="text-sky-300"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"></path>
        </svg>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum labore
        incidunt temporibus sunt? Excepturi nulla atque odio dolore, velit
        harum.
      </p>
    </div>
  );
};

export default UserProfileCard;