import { FC } from "react";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    handlePageChange: (nextPage: number) => void;
}

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, handlePageChange }) => {
    return (
        <div className="flex">
            {currentPage > 2 && (
                <>
                    <button
                        className={`mx-2 p-2 w-8 h-8 rounded-full text-xs ${
                            1 === currentPage ? "bg-[#10AC98] text-white" : "bg-gray-200"
                        }`}
                        onClick={() => handlePageChange(1)}
                    >
                        {1}
                    </button>
                    <div className="flex items-end mx-2">
                        <div className="h-1 w-1 bg-[#10AC98] rounded-full"></div>
                        <div className="h-1 w-1 bg-[#10AC98] rounded-full mx-1"></div>
                        <div className="h-1 w-1 bg-[#10AC98] rounded-full"></div>
                    </div>
                </>
            )}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => {
                if (page >= currentPage - 1 && page <= currentPage + 1) {
                    return (
                        <button
                            key={page}
                            className={`mx-2 p-2 w-8 h-8 rounded-full text-xs ${
                                page === currentPage ? "bg-[#10AC98] text-white" : "bg-gray-200"
                            }`}
                            onClick={() => handlePageChange(page)}
                        >
                            {page}
                        </button>
                    )
                }
            })}
            {currentPage < totalPages - 1 && (
                <>
                    <div className="flex items-end mx-2">
                        <div className="h-1 w-1 bg-[#10AC98] rounded-full"></div>
                        <div className="h-1 w-1 bg-[#10AC98] rounded-full mx-1"></div>
                        <div className="h-1 w-1 bg-[#10AC98] rounded-full"></div>
                    </div>
                    <button
                        className={`mx-2 p-2 w-8 h-8 rounded-full text-xs ${
                            totalPages === currentPage ? "bg-[#10AC98] text-white" : "bg-gray-200"
                        }`}
                        onClick={() => handlePageChange(totalPages)}
                    >
                        {totalPages}
                    </button>
                </>
            )}
        </div>
    )
}

export default Pagination;
