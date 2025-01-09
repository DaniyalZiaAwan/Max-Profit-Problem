function maxProfit(time, targetProfit) {
    // Calculate the maximum number of each property that can be built within the time limit
    const maxTheatres = Math.floor(time / 5);
    const maxPubs = Math.floor(time / 4);
    const maxParks = Math.floor(time / 10);

    // Calculate the profit of each possible combination
    let maxProfitCombination = { profit: 0, properties: "" };
    for (let t = 0; t <= maxTheatres; t++) {
        for (let p = 0; p <= maxPubs; p++) {
            for (let c = 0; c <= maxParks; c++) {
                const totalTime = t * 5 + p * 4 + c * 10;
                if (totalTime <= time) {
                    const profit = t * 1500 + p * 1000 + c * 3000;
                    if (profit >= targetProfit && profit > maxProfitCombination.profit) {
                        maxProfitCombination = {
                            profit,
                            properties: `T: ${t} P: ${p} C: ${c}`,
                        };
                    }
                }
            }
        }
    }

    // Return the properties string if a combination that meets the target profit is found
    return maxProfitCombination.properties || "No combination found";
}

// Example usage
console.log(maxProfit(5, 1000));
console.log(maxProfit(75, 20000));
console.log(maxProfit(10, 10000));