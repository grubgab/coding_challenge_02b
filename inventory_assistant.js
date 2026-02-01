let itemName = "Tongs";

let unitCost = 5.00;
let currentStock = 100;
let reorderLevel = 50;
let targetStock = 150;
let weeklyDemand = 20;
let supplierLeadTimeWeeks = 2;

let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;
let stockDeficit = Math.max(0, targetStock - currentStock);
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0;
let estimatedReorderCost = reorderQuantity * unitCost;
let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;

console.log(`Item: ${itemName}`);
console.log(`Weeks of Cover: ${weeksOfCover.toFixed(2)}`);
console.log(`Reorder Now: ${reorderNow}`);
console.log(`Reccomended Reorder Quantity: ${reorderQuantity}`);
console.log(`Estimated Reorder Cost: $${estimatedReorderCost.toFixed(2)}`);
