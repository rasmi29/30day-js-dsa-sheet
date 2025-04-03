// you just need to implement the countNotifications function only
function countNotifications(notifications) {
  let result = [
    {
      category: "Event",
      count: 0,
    },
    {
      category: "Offer",
      count: 0,
    },
    {
      category: "Update",
      count: 0,
    },
  ];
  for (let i = 0; i < notifications.length; i++) {
    if (notifications[i] == "Event") {
      result[0].count++;
    } else if (notifications[i] == "Offer") {
      result[1].count++;
    } else if (notifications[i] == "Update") {
      result[2].count++;
    }
  }

  const updatedResult = result.filter((a) => a.count !== 0);
  return updatedResult;
}
