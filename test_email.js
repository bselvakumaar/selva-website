
const data = {
    service_id: 'service_n3l6bm8',
    template_id: 'template_fpgvy76',
    user_id: 'Tb71WF8hKW-_-wAXA',
    template_params: {
        'from_name': 'Antigravity Test',
        'from_email': 'antigravity@test.ai',
        'organization': 'Deepmind Advanced Agentic Coding',
        'engagement_type': 'Sample Inquiry / Sanity Check',
        'message': 'Hello Selva! This is your AI assistant checking the full engagement pipeline through the REST API. Ready to push!'
    }
};

fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
}).then(async (response) => {
    if (response.ok) {
        console.log('✓ SUCCESS: Email sent successfully via REST API.');
    } else {
        const text = await response.text();
        console.error('✗ ERROR: EmailJS returned ' + response.status + ' - ' + text);
    }
}).catch((error) => {
    console.error('✗ ERROR: Failed to reach EmailJS API: ' + error.message);
});
