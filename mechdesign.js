const services = [
    { 
        id: "research", 
        title: "Research & Ideation", 
        details: ["Literature Review and Patent Search", "Market Analysis"],
        hourlyRate: 15,
    },
    {
        id: "cad",
        title: "CAD Modeling",
        details: ["SolidWorks CAD Model"],
        hourlyRate: 15,
    },
    {
        id: "simulation",
        title: "Simulation",
        details: ["ANSYS FEA", "Simulation Documentation"],
        hourlyRate: 20,
    },
    {
        id: "review",
        title: "Client Review",
        details: ["System Overview Documentation", "Training"],
        hourlyRate: 10,
    },
];

// Step Navigation Logic
function goToStep(step) {
    document.querySelectorAll('.step-content').forEach(el => el.classList.add('hidden'));
    document.getElementById(`step-${step}-content`).classList.remove('hidden');

    // Update progress bar
    document.getElementById('progress-bar').style.width = `${(step - 1) * 50}%`;
}

// Populate Checklist
const serviceList = document.getElementById('service-list');
services.forEach(service => {
    const li = document.createElement('li');
    li.innerHTML = `
        <label>
            <input type="checkbox" data-hourly="${service.hourlyRate}" onclick="toggleDetails(this)">
            ${service.title} - $${service.hourlyRate}/hr
        </label>
        <ul class="details hidden">
            ${service.details.map(detail => `<li>${detail}</li>`).join("")}
        </ul>
    `;
    serviceList.appendChild(li);
});

// Toggle Dropdown Details
function toggleDetails(checkbox) {
    const details = checkbox.parentElement.nextElementSibling;
    const totalCostEl = document.getElementById('total-cost');
    let totalCost = parseFloat(totalCostEl.textContent);

    if (checkbox.checked) {
        details.classList.remove('hidden');
        totalCost += parseFloat(checkbox.dataset.hourly);
    } else {
        details.classList.add('hidden');
        totalCost -= parseFloat(checkbox.dataset.hourly);
    }

    totalCostEl.textContent = totalCost.toFixed(2);
}





