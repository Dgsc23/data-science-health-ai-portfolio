/**
 * Interactive map for visualizing massage session data and BioMat usage.
 */
const sessions = [
  { date: "2025-06-21", type: "Deep Tissue", duration: 90, location: "Clinic" },
  { date: "2025-06-23", type: "Swedish", duration: 60, location: "Home" },
];
function renderSessions(data) {
  data.forEach(session => {
    console.log(`${session.date}: ${session.type} (${session.duration} min) at ${session.location}`);
  });
}
renderSessions(sessions);
// Visualization can use D3 or Chart.js for interactive timelines.
