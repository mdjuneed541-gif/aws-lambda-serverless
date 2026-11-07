async function callAPI() {
    const name = document.getElementById("name").value.trim();
    const result = document.getElementById("result");

    if (!name) {
        result.innerHTML = "Please enter your name.";
        return;
    }

    result.innerHTML = "Connecting to AWS Lambda...";

    const apiURL =
        "https://p7mqk8pxx0.execute-api.ap-southeast-2.amazonaws.com/hello?name="
        + encodeURIComponent(name);

    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        result.innerHTML = `
            <h3>API Response</h3>
            <p><strong>Message:</strong> ${data.message}</p>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Service:</strong> ${data.service}</p>
            <p><strong>Status:</strong> ${data.status}</p>
        `;
    } catch (error) {
        result.innerHTML = "Unable to connect. Please try again.";
        console.error(error);
    }
}
