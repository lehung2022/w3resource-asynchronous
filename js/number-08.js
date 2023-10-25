function repeat_Function(fn, interval) {
    // Execute the function immediately
    fn();
    // Set up the interval to execute the function repeatedly
    const intervalId = setInterval(fn, interval);
    // Return a function to stop the execution
    return function stopExecution() {
        clearInterval(intervalId);
        console.log('Execution stopped.');
    };
}
// Usage example:
const intervalMs = 1000; // 1 second
// Define the function to be repeated
function printMessage() {
    console.log('Executing the function...');
}
// Start the repeated execution
const stopExecution = repeat_Function(printMessage, intervalMs);
// Stop the execution after 4 seconds
setTimeout(() => {
    stopExecution();
}, 4000);
