const DEFAULT_CONFIGURATION_ID = "9e96dcb3-c7ae-4ba2-9f8d-b41000e7d897";

export type MewsDistributorApi = {
  open: () => void;
  close: () => void;
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date) => void;
  setAdultCount: (adultCount: number) => void;
  setChildCount: (childCount: number) => void;
};

type MewsDistributorOptions = {
  configurationIds: string[];
  openElements?: string;
};

declare global {
  interface Window {
    Mews?: {
      Distributor: (
        options: MewsDistributorOptions,
        callback?: (api: MewsDistributorApi) => void,
      ) => void;
    };
  }
}

let started = false;
let api: MewsDistributorApi | null = null;
const MAX_INIT_ATTEMPTS = 40;

function configurationId() {
  return process.env.NEXT_PUBLIC_MEWS_CONFIGURATION_ID ?? DEFAULT_CONFIGURATION_ID;
}

function toLocalDate(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function initMewsDistributor(attempt = 0) {
  if (started || typeof window === "undefined") {
    return;
  }

  const Distributor = window.Mews?.Distributor;
  if (!Distributor) {
    if (attempt >= MAX_INIT_ATTEMPTS) {
      return;
    }
    window.setTimeout(() => initMewsDistributor(attempt + 1), 50);
    return;
  }

  started = true;
  Distributor({configurationIds: [configurationId()]}, (instance) => {
    api = instance;
  });
}

export function openDistributorBooking({
  start,
  end,
  adults,
  children,
}: {
  start: Date;
  end: Date;
  adults: number;
  children: number;
}) {
  if (!api) {
    return false;
  }

  api.setStartDate(toLocalDate(start));
  api.setEndDate(toLocalDate(end));
  api.setAdultCount(adults);
  api.setChildCount(children);
  api.open();
  return true;
}
