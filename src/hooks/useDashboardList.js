import { useEffect, useState } from 'react';
import useDashBoardStore from '@/stores/useDashboardStore';

const useDashboardList = () => {
  const { dashboardList } = useDashBoardStore();
  const dashboards = dashboardList;
  const totalCount = dashboards?.length;
  const ITEMS_PER_PAGE = 16;

  const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [currentSortedData, setCurrentSortedData] = useState(null);
  const [currentFilter, setCurrentFilter] = useState('All');
  const [totalItems, setTotalItems] = useState(dashboards?.length);
  const [totalPages, setTotalPages] = useState(Math.ceil(totalItems / ITEMS_PER_PAGE));

  const sortByLatest = () => {
    if (currentSortedData) {
      currentSortedData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      renderData(currentSortedData, itemsPerPage);
      return;
    } else {
      dashboards.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      renderData(dashboards, itemsPerPage);
    }
  };

  const sortByEarliest = () => {
    if (currentSortedData) {
      currentSortedData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      renderData(currentSortedData, itemsPerPage);
      return;
    } else {
      dashboards.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      renderData(dashboards, itemsPerPage);
    }
  };

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

  const renderData = (filteredData, itemsPerPage) => {
    const START_INDEX = (currentPage - 1) * itemsPerPage;
    const END_INDEX = START_INDEX + itemsPerPage;
    const currentPageData = filteredData?.slice(START_INDEX, END_INDEX);
    setCurrentPageData(currentPageData);
  };

  const handleFilterClick = (filter) => {
    setCurrentPage(1);
    setCurrentFilter(filter);
    let filteredData;

    switch (filter) {
      case 'All':
        filteredData = dashboards;
        break;
      case 'My Dashboard':
        filteredData = dashboards.filter((dashboard) => dashboard.createdByMe);
        break;
      case 'Invited Dashboard':
        filteredData = dashboards.filter((dashboard) => !dashboard.createdByMe);
        break;
      default:
        break;
    }
    setCurrentSortedData(filteredData);
    setTotalItems(filteredData.length);
    setCurrentPageData(filteredData);
  };

  const handleDropdownClick = (value) => {
    setCurrentPage(1);
    if (value === 'Latest') {
      sortByLatest();
    } else if (value === 'Earliest') {
      sortByEarliest();
    }
  };

  useEffect(() => {
    if (totalItems) {
      setTotalPages(Math.ceil(totalItems / ITEMS_PER_PAGE));
    } else {
      setTotalPages(Math.ceil(totalCount / ITEMS_PER_PAGE));
    }
  }, [totalItems, ITEMS_PER_PAGE, totalCount]);

  useEffect(() => {
    if (currentSortedData) {
      renderData(currentSortedData, itemsPerPage);
    } else {
      renderData(dashboards, itemsPerPage);
    }
  }, [currentPage, dashboards, currentSortedData]);

  useEffect(() => {
    const renderDataBasedOnWindowSize = () => {
      const currentWindowSize = window.innerWidth;

      let newItemsPerPage;

      if (currentWindowSize <= 767) {
        newItemsPerPage = 1000;
      } else if (currentWindowSize <= 1199) {
        newItemsPerPage = 10;
      } else if (currentWindowSize <= 1399) {
        newItemsPerPage = 12;
      } else {
        newItemsPerPage = ITEMS_PER_PAGE;
      }

      if (itemsPerPage !== newItemsPerPage) {
        setItemsPerPage(newItemsPerPage);
        renderData(currentSortedData || dashboards, newItemsPerPage);
      }
    };

    const handleResize = () => {
      renderDataBasedOnWindowSize();
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [itemsPerPage, currentSortedData, dashboards]);

  return {
    itemsPerPage,
    currentPageData,
    currentFilter,
    handleFilterClick,
    handleDropdownClick,
    currentPage,
    totalPages,
    goToPrevPage,
    goToNextPage,
    totalItems,
  };
};

export default useDashboardList;
