import APP_CONFIG from "@config/appConfig";
import { useLocalObservable } from "mobx-react-lite";
import React, { createContext } from "react";

interface GlobalStoreContextProps {
  isUpdateModalOpen: boolean;
  setIsUpdateModalOpen: (value: boolean) => void;

  serverDisplayCount: number;
  setServerDisplayCount: (value: number) => void;

  displayVersions: string[];
  setDisplayVersions: (value: string[]) => void;

  showMoreInfo: boolean;
  setShowMoreInfo: (value: boolean) => void;

  rememberSettings: boolean;
  setRememberSettings: (value: boolean) => void;

  orderBy: string;
  setOrderBy: (value: string) => void;

  keyLocation: string;
  setKeyLocation: (value: string, checkForTrailingSlash?: boolean) => void;
}

export const globalStoreContext = createContext({} as GlobalStoreContextProps);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const urlParams = new URLSearchParams(window.location.search);
  // const getUrlParams = () => {
  //   if (urlParams.has(`env`)) {
  //     setUrlEnvParams(urlParams.get(`env`).split(`,`));
  //   }
  //   if (urlParams.has(`version`)) {
  //     setUrlVersionParams(urlParams.get(`version`).split(`,`));
  //   }
  //   if (urlParams.has(`sortBy`)) {
  //     setUrlSortBy(urlParams.get(`sortBy`));
  //   }
  // };

  const updateUrlParams = (params: {
    key: string;
    value: string | string[] | boolean | number;
  }) => {
    urlParams.set(params.key, params.value.toString());
    history.pushState({}, ``, `?${decodeURIComponent(urlParams.toString())}`);
  };

  const store = useLocalObservable(() => ({
    // Update Modal
    isUpdateModalOpen: false,
    setIsUpdateModalOpen(value: boolean) {
      store.isUpdateModalOpen = value;
    },

    // Display count
    serverDisplayCount: 2,
    setServerDisplayCount(value: number) {
      store.serverDisplayCount = value;
      updateUrlParams({ key: `serverDisplayCount`, value });
    },

    // Display versions
    displayVersions: [] as string[],
    setDisplayVersions(value: string[]) {
      store.displayVersions = value;
      updateUrlParams({ key: `displayVersions`, value });
    },

    // Display versions
    showMoreInfo: false,
    setShowMoreInfo(value: boolean) {
      store.showMoreInfo = value;
      updateUrlParams({ key: `showMoreInfo`, value });
    },

    // Display versions
    rememberSettings: false,
    setRememberSettings(value: boolean) {
      store.rememberSettings = value;
    },

    // Display versions
    orderBy: `stack_id`,
    setOrderBy(value: string) {
      store.orderBy = value;
      updateUrlParams({ key: `orderBy`, value });
    },

    // Display versions
    keyLocation: APP_CONFIG.DEFAULT_KEY_LOCATION || `~/.ssh/`,
    setKeyLocation(value: string, checkForTrailingSlash = false) {
      if (checkForTrailingSlash && !value.endsWith(`/`)) value += `/`;
      store.keyLocation = value;
      updateUrlParams({ key: `keyLocation`, value });
    },
  }));

  return (
    <globalStoreContext.Provider value={store}>
      {children}
    </globalStoreContext.Provider>
  );
};
