function sendOtp() {
        const email = document.getElementById('email').value;

        if (email) {
            fetch('https://example.com/api/send-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('OTP has been sent to your email.');
                } else {
                    alert('Failed to send OTP. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
        } else {
            alert('Please enter a valid email address.');
        }
    }

    function calculatePrice() {
        const college = document.getElementById('college').value;
        const course = document.getElementById('course').value;
        let price = 0;

        switch (college) {
            case 'LND':
                price += 1000;
                break;
            case 'MS':
                price += 400;
                break;
            case 'SNS':
                price += 1500;
                break;
        }

        switch (course) {
            case 'UG':
                price += 200;
                break;
            case 'PG':
                price += 300;
                break;
        }

        document.getElementById('priceButton').innerText = 'Price: INR ' + price;
    }