const dayjs = require('dayjs');
const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

const formatDate = (createdAtVal) => {
  return dayjs(createdAtVal).format('lll');
};

module.exports = formatDate;