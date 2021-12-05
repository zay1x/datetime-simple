const day = {
  0: { vi: "Chủ nhật", en: "Sunday" },
  1: { vi: "Thứ 2", en: "Monday" },
  2: { vi: "Thứ 3", en: "Tuesday" },
  3: { vi: "Thứ 4", en: "Wednesday" },
  4: { vi: "Thứ 5", en: "Thursday" },
  5: { vi: "Thứ 6", en: "Friday" },
  6: { vi: "Thứ 7", en: "Saturday" },
};

const dayConfig = {
  language: "en",
};

const dateConfig = {
  dateString: "DD/MM/YYYY",
};

const timeConfig = {
  timezone: "Asia/Ho_Chi_Minh",
  timeString: "hh:mm:ss A",
};

module.exports = { day, dayConfig, dateConfig, timeConfig };
