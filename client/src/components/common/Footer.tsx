import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <div className="navbar-brand" style={{ marginBottom: 8 }}>
                            <span aria-hidden="true">⚡</span>
                            <span>Apex Commerce</span>
                        </div>
                        <p className="footer-small" style={{ margin: 0 }}>
                            Premium marketplace UI built with a minimal, corporate-modern design system.
                        </p>
                    </div>
                    <div>
                        <p className="footer-small" style={{ fontWeight: 600, margin: '0 0 10px' }}>
                            Company
                        </p>
                        <div className="footer-small" style={{ display: 'grid', gap: 8 }}>
                            <a href="/about">About</a>
                            <a href="/careers">Careers</a>
                            <a href="/contact">Contact</a>
                        </div>
                    </div>
                    <div>
                        <p className="footer-small" style={{ fontWeight: 600, margin: '0 0 10px' }}>
                            Support
                        </p>
                        <div className="footer-small" style={{ display: 'grid', gap: 8 }}>
                            <a href="/help">Help Center</a>
                            <a href="/returns">Returns</a>
                            <a href="/privacy">Privacy</a>
                        </div>
                    </div>
                </div>

                <div className="footer-small" style={{ marginTop: 18 }}>
                    © {new Date().getFullYear()} Apex Commerce. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

