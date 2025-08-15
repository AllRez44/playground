window.onload = function () {
    console.log('Page loaded');
    
    console.log('Connecting to EventSource...');
    const eventSource = new EventSource('http://localhost:3010/api/stream');
    console.log('EventSource connected');
    eventSource.onopen = () => {
        console.log('EventSource open');
    };
    eventSource.onmessage = (event) => {
        console.log('Message received');
        console.log(event.data);
        const parsedData = JSON.parse(event.data);
        document.getElementById('events').innerHTML += `<p>${parsedData.message}</p>`;
    };
    eventSource.onerror = (error) => {
        console.error('EventSource failed:');
        console.error(error);
        eventSource.close();
    }
}