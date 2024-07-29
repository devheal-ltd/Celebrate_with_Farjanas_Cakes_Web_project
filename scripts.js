// WhatsApp যোগাযোগ ফাংশন
function contactWhatsApp(product) {
    const phoneNumber = '880123456789'; // আপনার ফোন নম্বর
    const message = `Hi, I'm interested in ${product}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Messenger যোগাযোগ ফাংশন
function contactMessenger(product) {
    const pageLink = 'https://m.me/আপনারপেজনাম'; // পেজ নাম এখানে লিখুন
    const message = `Hi, I'm interested in ${product}.`;
    const url = `${pageLink}?message=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Call যোগাযোগ ফাংশন
function contactCall() {
    const phoneNumber = 'tel:+880123456789'; // আপনার ফোন নম্বর
    window.open(phoneNumber, '_self');
}
