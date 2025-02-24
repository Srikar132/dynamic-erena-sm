"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LeaderBoardRanks } from '@/types/type';

const TableComponent = ({ items , className }: { items: LeaderBoardRanks[] , className? : string }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="space-y-4">
      <div className="rounded-xl font-teko-font">
        <table className="w-full text-xl">
          <thead className="bg-black-100 shadow-lg">
            <tr className="text-white">
              <th className="w-[100px] px-6 py-4 text-left rounded-tl-lg font-gaming">RANKING</th>
              <th className="px-6 py-4 text-left font-gaming">TEAM</th>
              <th className="px-6 py-4 text-left font-gaming">POINTS</th>
              <th className="px-6 py-4 text-right rounded-tr-lg font-gaming">WINS</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => {
              const globalIndex = startIndex + index;
              return (
                <tr 
                  key={globalIndex}
                  className={`
                    transition-all duration-200 
                  `}
                >
                  <td className="px-6 py-4 font-bold">
                    <div className="flex justify-center items-center gap-2">
                      {globalIndex === 0 && <span className="text-yellow-500">👑</span>}
                      #{globalIndex + 1}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-black">{item.teamName}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-black font-bold">{item.points}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="inline-block px-4 py-1 bg-green-500/20 text-green-700 rounded-full">
                      {item.wins}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-end gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === page
                  ? 'bg-black text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TableComponent;