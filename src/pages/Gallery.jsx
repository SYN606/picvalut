import React, { useState } from "react";
import { MasonryLayout } from "../components";
import data from "./assets/data.json";
import ReactPaginate from "react-paginate";

const itemsPerPage = 30;

const Gallery = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = ({ selected }) => setCurrentPage(selected);

    const currentData = data.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-center text-4xl font-bold mb-8 text-primary">Gallery</h1>

            <MasonryLayout images={currentData} />

            <Pagination
                pageCount={Math.ceil(data.length / itemsPerPage)}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

const Pagination = ({ pageCount, onPageChange }) => (
    <div className="flex justify-center mt-8">
        <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={onPageChange}
            containerClassName="flex items-center space-x-4"
            pageClassName="px-4 py-2 cursor-pointer rounded-lg transition duration-200"
            pageLinkClassName="text-gray-700 font-semibold"
            previousClassName="px-4 py-2 cursor-pointer rounded-lg transition duration-200"
            nextClassName="px-4 py-2 cursor-pointer rounded-lg transition duration-200"
            disabledClassName="opacity-50 cursor-not-allowed"
            activeClassName="bg-primary text-text font-semibold"
        />
    </div>
);

export default Gallery;
