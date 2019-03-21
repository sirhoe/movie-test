exports.sendResponse = (res, data) => {
  return res.status(200).json({ response: data || [] });
};

exports.sendError = (res, data) => {
  return res.status(400).json({ error: data });
}
