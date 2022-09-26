import {
  flightPaths,
  products,
  activities,
  news,
  quickLinks,
} from "../data/data";

export const fetchFlightPaths = () => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(flightPaths);
    }, 1000);
  });
};

export const fetchProducts = () => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const fetchActivities = () => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(activities);
    }, 1000);
  });
};

export const fetchNews = () => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(news);
    }, 1000);
  });
};

export const fetchQuickLinks = () => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(quickLinks);
    }, 1000);
  });
};
