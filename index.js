function maxProfit(time) {
    // Calculate the maximum number of each property that can be built within the time limit
    const maxTheatres = Math.floor(time / 5);
    const maxPubs = Math.floor(time / 4);
    const maxParks = Math.floor(time / 10);

    // Calculate the profit of each possible combination
    let maxProfitCombination = { earnings: 0, properties: "" };
    for (let t = 0; t <= maxTheatres; t++) {
        for (let p = 0; p <= maxPubs; p++) {
            for (let c = 0; c <= maxParks; c++) {
                const totalTime = t * 5 + p * 4 + c * 10;
                if (totalTime <= time) {
                    const earnings = t * 1500 + p * 1000 + c * 3000;
                    if (earnings > maxProfitCombination.earnings) {
                        maxProfitCombination = {
                            earnings,
                            properties: `T: ${t} P: ${p} C: ${c}`,
                        };
                    }
                }
            }
        }
    }

    // Return total earnings
    return maxProfitCombination.earnings
}

// Example usage
console.log(maxProfit(2));
console.log(maxProfit(5));
console.log(maxProfit(9));
console.log(maxProfit(15));
console.log(maxProfit(30));
console.log(maxProfit(68));