import { useEffect, useState } from 'react';

const useDashboardEdit = (dataList, totalItems, ITEMS_PER_PAGE, data = '') => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState(null);
  const [totalPages, setTotalPages] = useState(Math.ceil(totalItems / ITEMS_PER_PAGE));

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const renderData = () => {
    const START_INDEX = (currentPage - 1) * ITEMS_PER_PAGE;
    const END_INDEX = START_INDEX + ITEMS_PER_PAGE;
    let currentPageData;
    if (!data) {
      currentPageData = dataList.slice(START_INDEX, END_INDEX);
    } else {
      currentPageData = data.slice(START_INDEX, END_INDEX);
    }
    setCurrentPageData(currentPageData);
  };

  useEffect(() => {
    if (totalPages >= 1) {
      setTotalPages(Math.ceil(totalItems / ITEMS_PER_PAGE));
    } else if (!totalPages) {
      setTotalPages(1);
    }
  }, [totalItems, ITEMS_PER_PAGE]);

  useEffect(() => {
    if (dataList) {
      renderData();
    }
  }, [currentPage, dataList]);

  return { currentPageData, currentPage, totalPages, goToPrevPage, goToNextPage };
};

export default useDashboardEdit;
