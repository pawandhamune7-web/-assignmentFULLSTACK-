// Paste actual IITK QR string here after testing.
// Example:
// NAME: ABC XYZ
// ROLL: 240123

function isRegistered(rollNumber) {
  const num = Number(rollNumber);
  return num >= 240001 && num <= 240400;
}

function extractRollNumber(qrString) {
  const matches = qrString.match(/\b\d{6}\b/g);

  if (!matches) return null;

  return matches.find(isRegistered) || null;
}

module.exports = {
  extractRollNumber,
  isRegistered,
};