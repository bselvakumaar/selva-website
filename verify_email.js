
const data = {
    service_id: 'service_n3l6bm8',
    template_id: 'template_fpgvy76',
    user_id: 'Tb71WF8hKW-_-wAXA',
    template_params: {
        'from_name': 'Antigravity Verification',
        'from_email': 'b.selvakumar@gmail.com',
        'organization': 'Deepmind Verification System',
        'engagement_type': 'Consulting Sanity Check',
        'message': 'Hello Selva! This is the Antigravity agent. I have successfully verified that your credentials are correct and the EmailJS API is responding perfectly. Your system is now 100% operational.'
    }
};

fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
}).then(async (response) => {
    if (response.ok) {
        console.log('✓ SUCCESS: Email sent successfully through the EmailJS Gateway.');
    } else {
        const text = await response.text();
        console.error('✗ ERROR: EmailJS Gateway refused the request: ' + text);
    }
}).catch((error) => {
    console.error('✗ ERROR: Network failure reaching EmailJS: ' + error.message);
});
