import React from 'react'

const Contact = () => {
    return (
        <>
            <section class="bg-gray-100">
                <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                    <div class="max-w-2xl lg:max-w-4xl mx-auto text-center">
                        <div class="heading ">
                            Contact Us
                        </div>
                        <p class="mt-4 text-lg text-gray-500">For more details connect with us.</p>
                    </div>
                    <div class="mt-16 lg:mt-20">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div class="rounded-lg overflow-hidden">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d450.8853549055839!2d78.86647239999999!3d20.6501813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd3637d2b59d03d%3A0x379d12d604ed6963!2sKasturba%20nursing%20school%2C%20Mandgaon!5e1!3m2!1sen!2sin!4v1735621964249!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div>
                                <div class="max-w-full mx-auto rounded-lg overflow-hidden">
                                    <div class="px-6 py-4">
                                        <h3 class="text-lg font-medium text-gray-900">Our Address</h3>
                                        <p class="mt-1 text-gray-600">Sant Barhanpure Nagar, Sewagram Road,<br />
                                            Mandgaon Tah. Samudrapur Dist.Wardha - 442102</p>
                                    </div>
                                    <div class="border-t border-gray-200 px-6 py-4">
                                        <h3 class="text-lg font-medium text-gray-900">Hours</h3>
                                        <p class="mt-1 text-gray-600">Monday - Friday: 11am - 5pm</p>
                                        <p class="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                                        <p class="mt-1 text-gray-600">Sunday: Closed</p>
                                    </div>
                                    <div class="border-t border-gray-200 px-6 py-4">
                                        <h3 class="text-lg font-medium text-gray-900">Contact</h3>
                                        <p class="mt-1 text-gray-600">Email:rsshinde25@gmail.com</p>
                                        <p class="mt-1 text-gray-600">Phone: +91 7387758523</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
