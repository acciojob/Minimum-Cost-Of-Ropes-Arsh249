function calculateMinCost() {
  //your code here
   let input = document.getElementById("rope-lengths").value;
            if (!input) {
                document.getElementById("result").innerText = "Please enter valid input.";
                return;
            }

            // Convert input to array of integers
            let arr = input.split(',').map(Number);

            // Function to calculate the minimum cost
            function minCost(ropes) {
                // Edge case: If there is only one rope or no ropes
                if (ropes.length === 0) return 0;
                if (ropes.length === 1) return ropes[0];

                // Min-heap approach using a priority queue (JavaScript doesn't have a built-in heap, so we use sort)
                let totalCost = 0;

                // Sort the ropes array to simulate a priority queue (heap)
                ropes.sort((a, b) => a - b);

                while (ropes.length > 1) {
                    // Extract the two smallest ropes
                    let first = ropes.shift();
                    let second = ropes.shift();

                    // Cost of connecting the two ropes
                    let currentCost = first + second;
                    totalCost += currentCost;

                    // Insert the combined rope back into the list and sort
                    ropes.push(currentCost);
                    ropes.sort((a, b) => a - b);
                }

                return totalCost;
            }

            // Calculate the minimum cost
            let result = minCost(arr);

            // Display the result in the result div
            document.getElementById("result").innerText = "The minimum cost to connect ropes is: " + result;
        }
  
  

