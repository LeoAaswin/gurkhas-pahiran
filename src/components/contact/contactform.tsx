'use client'
import React, { useState } from 'react'

interface ContactFormProps {
    title: string;
}

export default function ContactForm({ title }: ContactFormProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<{
        name?: string;
        email?: string;
        subject?: string;
        message?: string;
    }>({});

    const validateForm = () => {
        const newErrors: {
            name?: string;
            email?: string;
            subject?: string;
            message?: string;
        } = {};

        // Name validation
        if (!name.trim()) {
            newErrors.name = 'Name is required';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(email)) {
            newErrors.email = 'Invalid email format';
        }

        // Subject validation
        if (!subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        // Message validation
        if (!message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, subject, message }),
            });

            if (response.ok) {
                setSubmitStatus('success');
                // Reset form
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
                setErrors({});
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                            <h2 className='text-center'>{title}</h2>
                            <p className='text-center text-black'>Please fill out the form below. We will get back to you as soon as possible.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="contact-content-part wow fadeInUp delay-0-2s">
                            <div className="single-contact wow fadeInUp" data-wow-delay=".2s">
                                <span className="circle-btn">
                                    <i className="ri-map-pin-line"></i>
                                </span>
                                <h2>our office:</h2>
                                <p>Putalisadak, Kathmandu</p>
                            </div>

                            <div className="single-contact wow fadeInUp" data-wow-delay=".4s">
                                <span className="circle-btn">
                                    <i className="ri-headphone-line"></i>
                                </span>
                                <h2>contact number:</h2>
                                <p>9861762166</p>
                            </div>

                            <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                                <span className="circle-btn">
                                    <i className="ri-mail-line"></i>
                                </span>
                                <h2>Email us:</h2>
                                <p>info@gurkhaspahiran.com</p>
                            </div>

                            <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                                <h2>Socials</h2>
                                <div className="about-social">
                                    <ul>
                                        <li><a target='_blank' href="https://facebook.com"><i className="ri-facebook-circle-fill"></i></a></li>
                                        <li><a target='_blank' href="https://twitter.com"><i className="ri-twitter-x-line"></i></a></li>
                                        <li><a target='_blank' href="https://linkedin.com"><i className="ri-linkedin-fill"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div className="col-lg-8">
                        <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
                            <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="name">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Steve Milner"
                                                required
                                            />
                                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="hello@websitename.com"
                                                required
                                            />
                                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="subject">Subject</label>
                                            <input
                                                type="text"
                                                id="subject"
                                                className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                                                value={subject}
                                                onChange={(e) => setSubject(e.target.value)}
                                                placeholder="Your Subject"
                                                required
                                            />
                                            {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="message">Your Message</label>
                                            <textarea
                                                name="message"
                                                id="message"
                                                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                                rows={4}
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                placeholder="Write Your message"
                                                required
                                            ></textarea>
                                            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                                        </div>
                                    </div>
                                    
                                    {submitStatus === 'success' && (
                                        <div className="col-md-12">
                                            <div className="alert alert-success" role="alert">
                                                Your message has been sent successfully!
                                            </div>
                                        </div>
                                    )}
                                    
                                    {submitStatus === 'error' && (
                                        <div className="col-md-12">
                                            <div className="alert alert-danger" role="alert">
                                                Failed to send message. Please try again later.
                                            </div>
                                        </div>
                                    )}

                                    <div className="col-md-12">
                                        <div className="form-group mb-0">
                                            <button 
                                                type="submit" 
                                                className="theme-btn" 
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}