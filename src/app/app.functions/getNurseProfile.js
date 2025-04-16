// src/app/app.functions/getNurseProfile.js

exports.main = async (context, sendResponse) => {
  // You can grab parameters from context.params in future
  // const { nurseId } = context.params;

  // For now, mock the response with static data
  const nurseProfile = {
    id: "nurse_001",
    name: "Jane Doe",
    clinic: "Sunshine Aesthetics",
    riskRating: "Medium",
    email: "jane.doe@example.com",
    phone: "+1 (555) 123-4567",
    startDate: "2023-01-15",
    certExpiry: "2024-12-31",
    documents: [
      {
        name: "CPR Certificate.pdf",
        url: "https://example.com/docs/cpr-certificate.pdf"
      },
      {
        name: "Background Check.pdf",
        url: "https://example.com/docs/background-check.pdf"
      },
      {
        name: "Immunization Records.pdf",
        url: "https://example.com/docs/immunization-records.pdf"
      }
    ],
    lastAccessed: new Date().toISOString()
  };

  sendResponse({
    statusCode: 200,
    body: nurseProfile
  });
};
