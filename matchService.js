const natural = require('natural');

exports.calculateMatch = (cvText, jobDescription) => {
  const tfidf = new natural.TfIdf();
  tfidf.addDocument(cvText);
  tfidf.addDocument(jobDescription);
  const score = tfidf.tfidf(jobDescription, 0);
  return score;
};
