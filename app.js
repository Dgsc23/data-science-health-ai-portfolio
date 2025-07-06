// Application State
let currentProject = null;
let timers = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeProjectDemos();
    
    // Handle initial hash on page load
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
});

// Handle URL hash changes
function handleHashChange() {
    const hash = window.location.hash.slice(1); // Remove the #
    
    if (hash && hash.startsWith('project-')) {
        // Extract project number from hash
        const projectNumber = hash.replace('project-', '');
        showProject(projectNumber);
    } else if (hash === '' || hash === 'home') {
        showLandingPage();
    }
}

// Navigation System
function initializeNavigation() {
    // Project card navigation
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.dataset.project;
            // Update URL hash when clicking a project
            window.location.hash = `project-${projectId}`;
        });
    });

    // Back button navigation
    const backButtons = document.querySelectorAll('.back-btn');
    backButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Go back to home
            window.location.hash = '';
        });
    });
}

function showProject(projectId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected project
    const projectPage = document.getElementById(`project-${projectId}`);
    if (projectPage) {
        projectPage.classList.add('active');
        currentProject = projectId;
        
        // Add fade-in animation
        projectPage.style.opacity = '0';
        setTimeout(() => {
            projectPage.style.transition = 'opacity 0.3s ease';
            projectPage.style.opacity = '1';
        }, 50);
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
}

function showLandingPage() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const landingPage = document.getElementById('landing-page');
    landingPage.classList.add('active');
    currentProject = null;
    
    // Clear any running timers
    Object.values(timers).forEach(timer => clearInterval(timer));
    timers = {};
}

// Project Demo Initializations
function initializeProjectDemos() {
    initProject1Demo(); // Content Generator
    initProject2Demo(); // Review System
    initProject3Demo(); // Massage Protocol
    initProject4Demo(); // Stress Analysis
    initProject5Demo(); // Calorie Calculator
    initProject6Demo(); // Hypertrophy Model
    initProject7Demo(); // Buffer Tracker
    initProject8Demo(); // Data Visuals
    initProject9Demo(); // SQL Migration
    initProject10Demo(); // URL Automation
}

// Project 1: Content Generator Demo
function initProject1Demo() {
    const generateBtn = document.getElementById('generate-content');
    const topicInput = document.getElementById('yoga-topic');
    const outputDiv = document.getElementById('generated-text');
    
    if (!generateBtn) return;
    
    generateBtn.addEventListener('click', function() {
        const topic = topicInput.value.trim() || 'morning flow';
        generateBtn.textContent = 'Generating...';
        generateBtn.disabled = true;
        
        setTimeout(() => {
            const content = generateYogaContent(topic);
            outputDiv.innerHTML = content;
            outputDiv.parentElement.classList.add('fade-in');
            
            generateBtn.textContent = 'Generate Content';
            generateBtn.disabled = false;
        }, 2000);
    });
}

function generateYogaContent(topic) {
    const templates = {
        'morning flow': {
            title: 'Energizing Morning Flow: Start Your Day with Intention',
            content: 'Begin your day with this revitalizing 20-minute morning flow sequence. This practice combines gentle stretches with energizing poses to awaken your body and mind. Start in child\'s pose, move through cat-cow stretches, and flow into sun salutations...'
        },
        'evening relaxation': {
            title: 'Evening Wind-Down: Restorative Yoga for Better Sleep',
            content: 'This calming evening sequence helps release tension from the day and prepares your body for restful sleep. Focus on gentle twists, hip openers, and forward folds to activate your parasympathetic nervous system...'
        },
        'stress relief': {
            title: 'Stress Relief Sequence: Find Your Center in Chaos',
            content: 'When life feels overwhelming, this stress-relief practice offers a sanctuary of calm. Combining breath work with gentle movement, this sequence helps regulate your nervous system and restore inner balance...'
        }
    };
    
    const template = templates[topic.toLowerCase()] || {
        title: `${topic.charAt(0).toUpperCase() + topic.slice(1)} Yoga Practice Guide`,
        content: `Discover the transformative power of ${topic} yoga. This practice focuses on alignment, breath awareness, and mindful movement to help you connect with your inner wisdom and strength...`
    };
    
    return `
        <h4>${template.title}</h4>
        <p><strong>Introduction:</strong> ${template.content}</p>
        <p><strong>Duration:</strong> 20-30 minutes</p>
        <p><strong>Level:</strong> All levels welcome</p>
        <p><strong>Props needed:</strong> Yoga mat, blocks (optional)</p>
        <p><strong>SEO Keywords:</strong> ${topic}, yoga practice, mindfulness, wellness</p>
        <div class="success-message">✓ Content generated successfully! Ready for WordPress publishing.</div>
    `;
}

// Project 2: Review System Demo
function initProject2Demo() {
    const updateBtns = document.querySelectorAll('.update-status');
    
    updateBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.review-card');
            const statusElement = card.querySelector('.status');
            
            // Cycle through statuses
            if (statusElement.classList.contains('status--info')) {
                statusElement.classList.remove('status--info');
                statusElement.classList.add('status--warning');
                statusElement.textContent = 'Under Review';
            } else if (statusElement.classList.contains('status--warning')) {
                statusElement.classList.remove('status--warning');
                statusElement.classList.add('status--success');
                statusElement.textContent = 'Completed';
                this.textContent = 'View Report';
                this.classList.remove('btn--secondary');
                this.classList.add('btn--primary');
            } else {
                statusElement.classList.remove('status--success');
                statusElement.classList.add('status--info');
                statusElement.textContent = 'In Review';
                this.textContent = 'Update Status';
                this.classList.remove('btn--primary');
                this.classList.add('btn--secondary');
            }
        });
    });
}

// Project 3: Massage Protocol Demo
function initProject3Demo() {
    const startBtn = document.getElementById('start-protocol');
    
    if (!startBtn) return;
    
    startBtn.addEventListener('click', function() {
        startMassageProtocol();
    });
}

function startMassageProtocol() {
    const steps = document.querySelectorAll('.protocol-step');
    const timers = [
        { element: 'biomat-timer', duration: 900 }, // 15 minutes
        { element: 'pemf-timer', duration: 600 },   // 10 minutes
        { element: 'oil-timer', duration: 300 },    // 5 minutes
        { element: 'massage-timer', duration: 2700 } // 45 minutes
    ];
    
    let currentStep = 0;
    
    function runStep(stepIndex) {
        if (stepIndex >= steps.length) {
            showCompletionMessage();
            return;
        }
        
        // Activate current step
        steps.forEach(step => step.classList.remove('active'));
        steps[stepIndex].classList.add('active');
        
        // Start timer for current step
        const timer = timers[stepIndex];
        let timeLeft = timer.duration;
        
        const timerInterval = setInterval(() => {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            document.getElementById(timer.element).textContent = 
                `${minutes}:${seconds.toString().padStart(2, '0')}`;
            
            timeLeft--;
            
            if (timeLeft < 0) {
                clearInterval(timerInterval);
                setTimeout(() => runStep(stepIndex + 1), 1000);
            }
        }, 1000);
    }
    
    runStep(0);
}

function showCompletionMessage() {
    const demoContainer = document.querySelector('#project-3 .demo-container');
    demoContainer.innerHTML += '<div class="success-message">✓ Protocol completed successfully! Session data logged.</div>';
}

// Project 4: Stress Analysis Demo
function initProject4Demo() {
    const stressSlider = document.getElementById('stress-level');
    const stressValue = document.getElementById('stress-value');
    const calculateBtn = document.getElementById('calculate-stress');
    
    if (!stressSlider) return;
    
    stressSlider.addEventListener('input', function() {
        stressValue.textContent = this.value;
    });
    
    calculateBtn.addEventListener('click', function() {
        calculateStressProfile();
    });
}

function calculateStressProfile() {
    const stressLevel = document.getElementById('stress-level').value;
    const mindfulness = document.getElementById('mindfulness-frequency').value;
    const resultsDiv = document.getElementById('stress-results');
    
    let recommendation = '';
    const stress = parseInt(stressLevel);
    
    if (stress <= 3) {
        recommendation = 'Low stress detected. Your current stress management appears effective. Consider maintaining your current practices.';
    } else if (stress <= 6) {
        recommendation = 'Moderate stress levels. Regular yoga practice and mindfulness could be beneficial for maintaining balance.';
    } else {
        recommendation = 'High stress detected. Consider implementing daily yoga practice, meditation, and seeking additional support if needed.';
    }
    
    resultsDiv.innerHTML = `
        <h4>Your Stress Profile</h4>
        <div class="result-chart">
            <div class="stress-metrics">
                <div class="metric-display">
                    <span class="metric-label">Stress Level:</span>
                    <span class="metric-score">${stress}/10</span>
                </div>
                <div class="metric-display">
                    <span class="metric-label">Mindfulness Practice:</span>
                    <span class="metric-score">${mindfulness}</span>
                </div>
            </div>
            <div class="recommendation">
                <h5>Recommendation:</h5>
                <p>${recommendation}</p>
            </div>
        </div>
    `;
    resultsDiv.classList.add('fade-in');
}

// Project 5: Calorie Calculator Demo
function initProject5Demo() {
    const calculateBtn = document.getElementById('calculate-calories');
    
    if (!calculateBtn) return;
    
    calculateBtn.addEventListener('click', function() {
        calculateCalories();
    });
}

function calculateCalories() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseFloat(document.getElementById('age').value);
    const activity = parseFloat(document.getElementById('activity-level').value);
    const goal = document.getElementById('goal').value;
    
    // Calculate BMR using Mifflin-St Jeor Equation (assuming female)
    const bmr = (10 * (weight * 0.453592)) + (6.25 * (height * 2.54)) - (5 * age) - 161;
    const tdee = bmr * activity;
    
    let target;
    switch(goal) {
        case 'deficit':
            target = tdee - 500; // 1 lb/week loss
            break;
        case 'surplus':
            target = tdee + 300; // Lean gaining
            break;
        default:
            target = tdee;
    }
    
    document.getElementById('bmr-value').textContent = Math.round(bmr) + ' cal';
    document.getElementById('tdee-value').textContent = Math.round(tdee) + ' cal';
    document.getElementById('target-value').textContent = Math.round(target) + ' cal';
    
    document.getElementById('calorie-results').classList.add('fade-in');
}

// Project 6: Hypertrophy Model Demo
function initProject6Demo() {
    const bodyTypeBtns = document.querySelectorAll('.body-type-btn');
    
    bodyTypeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            bodyTypeBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const bodyType = this.dataset.type;
            updateHypertrophySimulation(bodyType);
        });
    });
}

function updateHypertrophySimulation(bodyType) {
    const gainBar = document.getElementById('muscle-gain-bar');
    const gainAmount = document.getElementById('gain-amount');
    const simulationText = document.getElementById('simulation-text');
    
    const simulations = {
        ectomorph: {
            width: '40%',
            amount: '8-12 lbs',
            text: 'Ectomorphs typically gain 8-12 lbs of muscle in 6 months with consistent training and proper nutrition. Higher metabolism requires increased caloric intake.'
        },
        endomorph: {
            width: '60%',
            amount: '12-18 lbs',
            text: 'Endomorphs can gain 12-18 lbs of muscle in 6 months but may also gain fat. Focus on strength training with moderate cardio for optimal body composition.'
        },
        mesomorph: {
            width: '80%',
            amount: '15-20 lbs',
            text: 'Mesomorphs have optimal muscle-building genetics and can gain 15-20 lbs of lean mass in 6 months with proper programming and nutrition.'
        }
    };
    
    const simulation = simulations[bodyType];
    gainBar.style.width = simulation.width;
    gainAmount.textContent = simulation.amount;
    simulationText.textContent = simulation.text;
}

// Project 7: Buffer Tracker Demo
function initProject7Demo() {
    const sliders = document.querySelectorAll('#project-7 input[type="range"]');
    const calculateBtn = document.getElementById('calculate-buffer');
    
    sliders.forEach(slider => {
        slider.addEventListener('input', function() {
            const valueSpan = document.getElementById(this.id.replace('-level', '-value'));
            if (valueSpan) {
                valueSpan.textContent = this.value;
            }
        });
    });
    
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function() {
            calculateBufferScore();
        });
    }
}

function calculateBufferScore() {
    const sleep = parseInt(document.getElementById('sleep-quality').value);
    const energy = parseInt(document.getElementById('energy-level').value);
    const mood = parseInt(document.getElementById('mood-level').value);
    const stress = parseInt(document.getElementById('stress-level-7').value);
    
    // Calculate buffer score (higher is better)
    const bufferScore = Math.round(((sleep + energy + mood + (11 - stress)) / 4) * 10);
    
    document.getElementById('buffer-score').textContent = bufferScore;
    
    let interpretation = '';
    if (bufferScore >= 80) {
        interpretation = 'Excellent! Your recovery buffer is high. You\'re ready for intense training.';
    } else if (bufferScore >= 60) {
        interpretation = 'Good buffer score. Moderate training intensity recommended.';
    } else if (bufferScore >= 40) {
        interpretation = 'Low buffer detected. Focus on recovery and lighter training.';
    } else {
        interpretation = 'Very low buffer. Prioritize rest and recovery before intense training.';
    }
    
    document.getElementById('score-interpretation').innerHTML = `<p>${interpretation}</p>`;
    document.getElementById('buffer-results').classList.add('fade-in');
}

// Project 8: Data Visuals Demo
function initProject8Demo() {
    const chartType = document.getElementById('chart-type');
    const dataMetric = document.getElementById('data-metric');
    
    if (!chartType) return;
    
    [chartType, dataMetric].forEach(select => {
        select.addEventListener('change', function() {
            updateChart();
        });
    });
    
    // Initialize with default chart
    setTimeout(() => updateChart(), 500);
}

function updateChart() {
    const canvas = document.getElementById('medical-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const chartType = document.getElementById('chart-type').value;
    const metric = document.getElementById('data-metric').value;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Generate sample data
    const data = generateSampleData(metric);
    
    // Draw chart based on type
    switch(chartType) {
        case 'line':
            drawLineChart(ctx, data, canvas);
            break;
        case 'bar':
            drawBarChart(ctx, data, canvas);
            break;
        case 'scatter':
            drawScatterPlot(ctx, data, canvas);
            break;
    }
    
    updateChartInsights(metric, chartType);
}

function generateSampleData(metric) {
    const datasets = {
        'blood-pressure': [120, 118, 125, 122, 119, 121, 123, 120, 117, 124],
        'heart-rate': [72, 68, 75, 70, 73, 69, 71, 74, 67, 76],
        'weight': [150, 149, 151, 150, 148, 149, 150, 152, 149, 150],
        'sleep': [7.5, 8.0, 6.5, 7.0, 8.5, 7.2, 6.8, 7.8, 8.2, 7.1]
    };
    
    return datasets[metric] || datasets['blood-pressure'];
}

function drawLineChart(ctx, data, canvas) {
    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;
    
    // Set up drawing
    ctx.strokeStyle = '#21808d';
    ctx.lineWidth = 2;
    ctx.fillStyle = '#21808d';
    
    // Draw axes
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();
    
    // Draw data line
    const stepX = (width - 2 * padding) / (data.length - 1);
    const maxVal = Math.max(...data);
    const minVal = Math.min(...data);
    const range = maxVal - minVal || 1;
    
    ctx.beginPath();
    data.forEach((value, index) => {
        const x = padding + index * stepX;
        const y = height - padding - ((value - minVal) / range) * (height - 2 * padding);
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
        
        // Draw data points
        ctx.fillRect(x - 2, y - 2, 4, 4);
    });
    ctx.stroke();
}

function drawBarChart(ctx, data, canvas) {
    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;
    
    ctx.fillStyle = '#21808d';
    
    const barWidth = (width - 2 * padding) / data.length * 0.8;
    const maxVal = Math.max(...data);
    
    data.forEach((value, index) => {
        const x = padding + index * (width - 2 * padding) / data.length + barWidth * 0.1;
        const barHeight = (value / maxVal) * (height - 2 * padding);
        const y = height - padding - barHeight;
        
        ctx.fillRect(x, y, barWidth, barHeight);
    });
}

function drawScatterPlot(ctx, data, canvas) {
    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;
    
    ctx.fillStyle = '#21808d';
    
    data.forEach((value, index) => {
        const x = padding + (index / (data.length - 1)) * (width - 2 * padding);
        const y = height - padding - (value / Math.max(...data)) * (height - 2 * padding);
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
    });
}

function updateChartInsights(metric, chartType) {
    const insights = {
        'blood-pressure': 'Blood pressure readings show normal variation within healthy ranges. Average: 121 mmHg.',
        'heart-rate': 'Resting heart rate data indicates good cardiovascular fitness. Average: 71 bpm.',
        'weight': 'Weight remains stable with minimal fluctuation. Healthy maintenance pattern observed.',
        'sleep': 'Sleep duration varies but averages 7.4 hours. Consider maintaining consistent sleep schedule.'
    };
    
    document.getElementById('chart-insights-text').textContent = insights[metric];
}

// Project 9: SQL Migration Demo
function initProject9Demo() {
    const simulateBtn = document.getElementById('simulate-migration');
    
    if (!simulateBtn) return;
    
    simulateBtn.addEventListener('click', function() {
        simulateMigration();
    });
}

function simulateMigration() {
    const progressBar = document.getElementById('migration-progress');
    const steps = document.querySelectorAll('#project-9 .step');
    let progress = 67;
    
    const interval = setInterval(() => {
        progress += Math.random() * 5;
        if (progress > 100) progress = 100;
        
        progressBar.style.width = progress + '%';
        progressBar.parentElement.nextElementSibling.textContent = Math.round(progress) + '% Complete';
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                // Mark current step as completed
                const inProgressStep = document.querySelector('#project-9 .step.in-progress');
                if (inProgressStep) {
                    inProgressStep.classList.remove('in-progress');
                    inProgressStep.classList.add('completed');
                    inProgressStep.querySelector('.step-icon').textContent = '✓';
                }
                
                // Activate next step
                const pendingStep = document.querySelector('#project-9 .step.pending');
                if (pendingStep) {
                    pendingStep.classList.remove('pending');
                    pendingStep.classList.add('completed');
                    pendingStep.querySelector('.step-icon').textContent = '✓';
                }
                
                // Show completion message
                const demoContainer = document.querySelector('#project-9 .demo-container');
                demoContainer.innerHTML += '<div class="success-message">✓ Migration completed successfully! Database is now HIPAA-compliant and secure.</div>';
            }, 1000);
        }
    }, 200);
}

// Project 10: URL Automation Demo
function initProject10Demo() {
    const generateBtn = document.getElementById('generate-url');
    const copyBtn = document.getElementById('copy-url');
    const testBtn = document.getElementById('test-url');
    
    if (!generateBtn) return;
    
    generateBtn.addEventListener('click', function() {
        generatePrefilledURL();
    });
    
    copyBtn.addEventListener('click', function() {
        copyURLToClipboard();
    });
    
    testBtn.addEventListener('click', function() {
        testGeneratedURL();
    });
}

function generatePrefilledURL() {
    const calories = document.getElementById('calories-input').value;
    const sleep = document.getElementById('sleep-input').value;
    const water = document.getElementById('water-input').value;
    const exercise = document.getElementById('exercise-input').value;
    const protein = document.getElementById('protein-input').value;
    const steps = document.getElementById('steps-input').value;
    
    // Simulate URL generation
    const baseURL = 'https://docs.google.com/forms/d/e/1FAIpQLSc...';
    const params = [
        `entry.calories=${encodeURIComponent(calories)}`,
        `entry.sleep=${encodeURIComponent(sleep)}`,
        `entry.water=${encodeURIComponent(water)}`,
        `entry.exercise=${encodeURIComponent(exercise)}`,
        `entry.protein=${encodeURIComponent(protein)}`,
        `entry.steps=${encodeURIComponent(steps)}`
    ];
    
    const fullURL = `${baseURL}?${params.join('&')}`;
    
    document.getElementById('generated-url').textContent = fullURL;
    document.getElementById('url-output').classList.add('fade-in');
}

function copyURLToClipboard() {
    const urlText = document.getElementById('generated-url').textContent;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(urlText).then(() => {
            showCopySuccess();
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = urlText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showCopySuccess();
    }
}

function showCopySuccess() {
    const copyBtn = document.getElementById('copy-url');
    const originalText = copyBtn.textContent;
    copyBtn.textContent = '✓ Copied!';
    copyBtn.classList.add('btn--success');
    
    setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.classList.remove('btn--success');
    }, 2000);
}

function testGeneratedURL() {
    const demoContainer = document.querySelector('#project-10 .demo-container');
    demoContainer.innerHTML += '<div class="success-message">✓ URL tested successfully! Form pre-fills with specified values.</div>';
}

// Utility Functions
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

function addLoadingState(element) {
    element.classList.add('loading');
}

function removeLoadingState(element) {
    element.classList.remove('loading');
}

// Add some global styling for dynamic elements
const style = document.createElement('style');
style.textContent = `
    .metric-display {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--space-8);
        background: var(--color-background);
        border-radius: var(--radius-sm);
        margin-bottom: var(--space-8);
    }
    
    .metric-label {
        font-weight: var(--font-weight-medium);
        color: var(--color-text);
    }
    
    .metric-score {
        font-weight: var(--font-weight-bold);
        color: var(--color-primary);
        font-family: var(--font-family-mono);
    }
    
    .recommendation {
        margin-top: var(--space-16);
        padding: var(--space-16);
        background: var(--color-secondary);
        border-radius: var(--radius-base);
    }
    
    .recommendation h5 {
        margin-bottom: var(--space-8);
        color: var(--color-text);
    }
    
    .btn--success {
        background: var(--color-success) !important;
        color: white !important;
    }
    
    .stress-metrics {
        margin-bottom: var(--space-16);
    }
`;
document.head.appendChild(style);
