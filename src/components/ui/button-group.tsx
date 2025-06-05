'use client';

import { useState } from 'react';

interface ButtonGroupProps {
  className?: string;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  className,
}: ButtonGroupProps) => {
  const [activeTab, setActiveTab] = useState('Photography');

  const tabs = ['Project share', 'Drawing Tools', 'FST Tool'];

  return (
    <div
      className={`inline-flex bg-white rounded-xl p-1 gap-5 shadow-lg ${className}`}
    >
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`
            px-4 py-2 rounded-xl text-sm transition-all duration-200 font-bold
            ${
              activeTab === tab
                ? 'bg-blue-500 text-white shadow-md'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
